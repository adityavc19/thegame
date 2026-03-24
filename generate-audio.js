#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────────────────────
// Pre-generate TTS audio for all story texts (all variants + framingByPath)
// Splits long texts into chunks to avoid API truncation
// Run: node generate-audio.js
// ─────────────────────────────────────────────────────────────────────────────

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const API_URL = 'https://api.smallest.ai/waves/v1/lightning-v3.1/get_speech';
const API_KEY = 'sk_486f2da0c9313d2edc7c840db3228dac';
const VOICE_ID = 'daniel';
const OUTPUT_DIR = path.join(__dirname, 'assets', 'audio');
const MAX_CHUNK_CHARS = 250; // lightning model recommended limit

// Extract story texts from data.js
const dataFile = fs.readFileSync(path.join(__dirname, 'js', 'data.js'), 'utf8');
const fn = new Function(dataFile + '\nreturn scenarioData;');
const scenarioData = fn();

// Hash text to create a short deterministic filename key
function textHash(text) {
    const clean = text.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
    return crypto.createHash('md5').update(clean).digest('hex').substring(0, 10);
}

// Collect ALL story texts: top-level, variants, and framingByPath
const storyTexts = [];
const seen = new Set(); // deduplicate identical texts
const decisions = scenarioData.decisions || {};

function addStoryText(id, text) {
    const clean = text.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
    // Safety: skip texts containing template tokens (these are resolved at runtime, not narrated)
    if (clean.includes('{{')) {
        console.warn(`  ⚠ Template token in audio text: ${id} — skipping`);
        return;
    }
    const hash = textHash(text);
    if (seen.has(hash)) return; // skip duplicate text
    seen.add(hash);
    storyTexts.push({
        id,
        filename: `story-${hash}.mp3`,
        text: clean
    });
}

// Helper: collect objective + consequence texts from a decision point's options
function addDecisionPointTexts(id, dp) {
    // Objective text (the question on the action screen)
    if (dp.objective) {
        addStoryText(`objective/${id}`, dp.objective);
    }

    // Consequence moment texts from each option
    if (dp.options) {
        for (const opt of dp.options) {
            if (!opt.consequences || !opt.consequences.moments) continue;
            for (const m of opt.consequences.moments) {
                if (m.type === 'verdict') {
                    // Combine headline + subline with pause
                    const parts = [m.headline, m.subline].filter(Boolean);
                    if (parts.length > 0) {
                        addStoryText(`verdict/${id}/${opt.id}`, parts.join('. '));
                    }
                }
                if (m.type === 'emerging') {
                    // Combine headline + body + closing with pauses
                    const parts = [m.headline, m.body, m.closing].filter(Boolean);
                    if (parts.length > 0) {
                        addStoryText(`emerging/${id}/${opt.id}`, parts.join('. '));
                    }
                }
            }
        }
    }
}

for (const [stage, stageData] of Object.entries(decisions)) {
    // Top-level storyText (e.g., d1)
    if (stageData.storyText) {
        addStoryText(stage, stageData.storyText);
    }

    // Top-level decision point texts (objective + consequences)
    addDecisionPointTexts(stage, stageData);

    // Variants (d2-d5)
    if (stageData.variants) {
        for (const [varKey, variant] of Object.entries(stageData.variants)) {
            // Variant-level storyText
            if (variant.storyText) {
                addStoryText(`${stage}/${varKey}`, variant.storyText);
            }

            // Variant-level decision point texts
            addDecisionPointTexts(`${stage}/${varKey}`, variant);

            // framingByPath entries
            if (variant.framingByPath) {
                for (const [pathKey, framing] of Object.entries(variant.framingByPath)) {
                    if (framing.storyText) {
                        addStoryText(`${stage}/${varKey}/${pathKey}`, framing.storyText);
                    }
                    // framingByPath can also have options with consequences
                    addDecisionPointTexts(`${stage}/${varKey}/${pathKey}`, framing);
                }
            }
        }
    }
}

console.log(`Found ${storyTexts.length} unique story texts to generate audio for:\n`);
storyTexts.forEach(s => console.log(`  - ${s.id}: ${s.text.length} chars — ${s.text.substring(0, 50)}...`));
console.log('');

// Split text into chunks ≤ MAX_CHUNK_CHARS
// Strategy: split on sentence boundaries OUTSIDE of quotes, never break mid-dialogue.
// Priority: 1) paragraph breaks 2) sentence-ending punctuation after closing quote or outside quotes
// 3) sentence-ending punctuation inside quotes (last resort) 4) semicolons/commas 5) word boundaries
function splitIntoChunks(text) {
    // Step 1: Split into natural segments — paragraphs first (if original had \n\n they become ". " after cleaning)
    // Use a smarter sentence splitter that respects quotes
    const segments = [];
    let remaining = text;

    // Regex: match a sentence that may include quoted dialogue
    // A sentence ends with .!? followed by optional closing quote, then whitespace + uppercase or end
    const sentenceRe = /[^.!?]*(?:"[^"]*"[^.!?]*)*[.!?][""\u201D\u2019']?\s*/g;
    let match;
    while ((match = sentenceRe.exec(remaining)) !== null) {
        const s = match[0].trim();
        if (s.length > 0) segments.push(s);
    }

    // Fallback: if regex didn't capture everything, use simple split
    if (segments.length === 0) {
        // Simple fallback: split on ". " but not inside quotes
        segments.push(...text.split(/(?<=[.!?])\s+(?=[A-Z])/).filter(s => s.trim()));
    }

    // Step 2: Merge segments into chunks ≤ MAX_CHUNK_CHARS
    const chunks = [];
    let current = '';

    for (const segment of segments) {
        if (segment.length > MAX_CHUNK_CHARS) {
            // Flush current buffer
            if (current.trim()) { chunks.push(current.trim()); current = ''; }

            // Try splitting oversized segment on semicolons/colons first
            const parts = segment.split(/(?<=[;:,])\s+/);
            for (const part of parts) {
                if (part.length > MAX_CHUNK_CHARS) {
                    // Last resort: split on word boundaries
                    let rem = part;
                    while (rem.length > MAX_CHUNK_CHARS) {
                        let cut = rem.lastIndexOf(' ', MAX_CHUNK_CHARS);
                        if (cut <= 0) cut = MAX_CHUNK_CHARS;
                        chunks.push(rem.substring(0, cut).trim());
                        rem = rem.substring(cut).trim();
                    }
                    if (rem) current = rem;
                } else if (current.length + part.length + 1 > MAX_CHUNK_CHARS) {
                    if (current.trim()) chunks.push(current.trim());
                    current = part;
                } else {
                    current += (current ? ' ' : '') + part;
                }
            }
            continue;
        }

        if (current.length + segment.length + 1 > MAX_CHUNK_CHARS && current.length > 0) {
            chunks.push(current.trim());
            current = '';
        }
        current += (current ? ' ' : '') + segment;
    }
    if (current.trim()) chunks.push(current.trim());

    return chunks;
}

async function generateChunk(text, label) {
    const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: text,
            voice_id: VOICE_ID,
            sample_rate: 24000,
            speed: 1.0,
            language: 'en',
            output_format: 'mp3'
        })
    });

    if (!res.ok) {
        const err = await res.text();
        throw new Error(`${label} failed: ${res.status} ${err}`);
    }

    return Buffer.from(await res.arrayBuffer());
}

async function generateAudio(item) {
    const outPath = path.join(OUTPUT_DIR, item.filename);

    if (fs.existsSync(outPath)) {
        console.log(`  ✓ ${item.filename} (cached, skipping)`);
        return;
    }

    const chunks = splitIntoChunks(item.text);
    console.log(`  ⏳ Generating ${item.filename} [${item.id}] (${item.text.length} chars, ${chunks.length} chunks)...`);

    const buffers = [];
    for (let i = 0; i < chunks.length; i++) {
        const label = `${item.filename} chunk ${i + 1}/${chunks.length}`;
        console.log(`     chunk ${i + 1}: ${chunks[i].length} chars`);
        const buf = await generateChunk(chunks[i], label);
        buffers.push(buf);
        if (i < chunks.length - 1) await new Promise(r => setTimeout(r, 300));
    }

    const combined = Buffer.concat(buffers);
    fs.writeFileSync(outPath, combined);
    console.log(`  ✓ ${item.filename} (${(combined.length / 1024).toFixed(0)}KB, ${chunks.length} chunks merged)`);
}

async function main() {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log('Generating audio files...\n');

    for (const item of storyTexts) {
        await generateAudio(item);
    }

    console.log('\nDone! Audio files saved to assets/audio/');
}

main().catch(err => {
    console.error('Fatal error:', err);
    process.exit(1);
});
