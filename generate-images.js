#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────────────────────
// Generate cinematic chapter background images using Gemini Imagen API
// Run: node generate-images.js
// ─────────────────────────────────────────────────────────────────────────────

const fs = require('fs');
const path = require('path');

const API_KEY = 'AIzaSyAw3cGkc_NEMzQFQnPkKfcCNiKB56Zj0Sc';
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-generate-001:predict?key=${API_KEY}`;
const OUTPUT_DIR = path.join(__dirname, 'assets', 'images', 'chapters');

// Extract chapter data from data.js
const dataFile = fs.readFileSync(path.join(__dirname, 'js', 'data.js'), 'utf8');
const fn = new Function(dataFile + '\nreturn scenarioData;');
const scenarioData = fn();

// Collect all unique chapters
const chapters = [];
const seenTitles = new Set();
const decisions = scenarioData.decisions || {};

function slugify(text) {
    return text.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')
        .substring(0, 50);
}

function addChapter(stage, variantKey, chapter) {
    if (!chapter || !chapter.title) return;
    if (seenTitles.has(chapter.title)) return;
    seenTitles.add(chapter.title);
    chapters.push({
        stage,
        variantKey,
        number: chapter.number,
        title: chapter.title,
        teaser: chapter.teaser,
        slug: slugify(chapter.title),
        filename: `chapter-${slugify(chapter.title)}.png`
    });
}

for (const [stage, stageData] of Object.entries(decisions)) {
    // Top-level chapter (d1)
    if (stageData.chapter) {
        addChapter(stage, null, stageData.chapter);
    }
    // Variant chapters (d2-d5)
    if (stageData.variants) {
        for (const [varKey, variant] of Object.entries(stageData.variants)) {
            if (variant.chapter) {
                addChapter(stage, varKey, variant.chapter);
            }
        }
    }
}

console.log(`Found ${chapters.length} unique chapter images to generate:\n`);
chapters.forEach(c => console.log(`  - Ch${c.number}: "${c.title}" → ${c.filename}`));
console.log('');

// ── Cinematic prompt crafting ──────────────────────────────────────────────
// Each chapter gets a bespoke visual concept that captures its emotional essence

const VISUAL_CONCEPTS = {
    'The iPhone Moment': 'A single glowing smartphone held aloft in a darkened auditorium, casting blue-white light across hundreds of silhouetted faces staring upward in awe. The light from the screen cuts through haze like a spotlight. Shot from behind the crowd, shallow depth of field, the phone sharp against blurred faces. Cinematic, Fincher-esque cold blue palette.',

    'The BYOD Breach': 'A corporate glass fortress at dawn, hairline cracks spreading across its facade like a spiderweb. Through the cracks, warm golden light spills from personal devices held by shadowy figures inside. The building reflects a distorted city skyline. Architectural photography style, dramatic contrast between cold steel-blue exterior and warm amber interior light.',

    'The Free Problem': 'An empty executive boardroom, a single presentation screen glowing red with a downward-trending chart. Scattered papers and an overturned coffee cup on the mahogany table. Through floor-to-ceiling windows, a city burns with the warm glow of competing storefronts. Moody, desaturated, the feeling of plans unraveling. Gordon Willis-style low-key lighting.',

    'The Platform War Within': 'Two massive gears grinding against each other, sparks flying at the contact point. One gear is chrome-silver, the other matte black — representing two warring platforms. The gears are inside a glass corporate tower, visible through rain-streaked windows. Industrial, tense, the mechanical violence of organizational friction. Teal and orange color grade.',

    'The Reckoning': 'A lone executive standing at the end of a long boardroom table, back to camera, facing a wall of screens showing competitor market share charts all trending upward while their own flatlines. The room is dark except for the harsh blue glow of the screens. The figure casts a long shadow. Kubrickian symmetry, clinical and unforgiving.',

    'The Platform Crossroads': 'A forked highway at night, one path lit with warm amber streetlights leading to a city skyline, the other dark and uncertain with only distant stars. A single car sits at the fork, headlights illuminating both paths. Aerial drone perspective, the roads cutting through empty landscape. David Lean-scale cinematography.',

    'The Hardware Gambit': 'Hands assembling a phone on a workbench, surrounded by scattered components, blueprints, and tools. The phone is half-built, revealing intricate internals. A single overhead industrial lamp casts harsh directional light, leaving deep shadows. The craftsmanship of a watchmaker applied to technology. Rembrandt lighting, intimate macro perspective.',

    'The Mango Question': 'Two clocks on a wall — one running fast, one frozen. Between them, a phone prototype sits under a glass dome like a museum artifact, glowing with an amber-orange interface. The wall behind is covered in deadline calendars and launch timelines, some crossed out. Time pressure made physical. Warm tungsten vs cool fluorescent split lighting.',

    'The Shrinking Fortress': 'A medieval fortress wall seen from above, its perimeter slowly being reclaimed by encroaching vegetation and modern glass buildings. The fortress center still stands strong but the outer walls are crumbling. Drone-style aerial shot at golden hour, the ancient stone warm against cold modern steel. Metaphor made literal.',

    'The Waterloo Problem': 'Two armies of chess pieces facing each other on a board, but they are the same color — fighting themselves. The board is cracked down the middle. Pieces have fallen into the crack. Shot at table level with extreme shallow depth of field, the nearest pieces sharp, the far side dreamlike. Cool desaturated palette, fog rolling across the board.',

    'The Osborne Effect': 'A phone store shelf being emptied — a worker pulling phones off display, leaving dark rectangular shadows where they stood. Through the store window, a line of customers is visibly walking away. The neon "OPEN" sign flickers. Night scene, the cold blue of dying fluorescent lights. Walker Evans documentary style, unflinching.',

    'The Decision That Never Came': 'A dusty hourglass sitting on a desk, all the sand pooled at the bottom. Around it, four years of accumulated documents, sticky notes, and unread reports. Cobwebs connect the hourglass to the desk lamp. Late afternoon light cuts through venetian blinds, illuminating dust particles. The weight of procrastination made visible.',

    'The MeeGo Moment': 'A beautifully crafted phone sitting on a pedestal in a beam of light, surrounded by darkness. It is pristine, elegant, clearly ahead of its time. But around the pedestal, the floor is littered with app icons that never got built — empty shelves in a beautiful store. The tragedy of technical excellence without ecosystem. Single-source dramatic lighting.',

    'The Bargain Price': 'A "SOLD" sign on a grand but weathered Nordic building, shot through rain. The building is beautiful but you can see the scaffolding, the peeling paint, the departing employees carrying boxes through the front door. The buyer stands outside under a black umbrella, looking up. Melancholy, autumnal, Scandinavian noir palette.',

    'The Android Paradox': 'Two phones on a scale — one rising, one falling. The rising phone displays a green robot logo, the falling one a colorful tile interface. The scale sits on an executive desk covered in contradictory reports. The irony is visual: success on one side causing failure on the other. Split-complementary color scheme, editorial still life.',

    'The Amazon Problem': 'A locked gate with a "Google Play" padlock, behind which shelves of apps glow invitingly. On the outside, a phone presses against the gate, its screen showing a forked path. Other phones crowd behind it, unable to enter. The gate is ornate but impenetrable. Night scene, the apps casting warm light through the bars onto cold concrete.',

    'The Acquisition Question': 'A chess board mid-game. One player reaches for a piece (a knight shaped like a phone company logo) while their advisor grabs their wrist. The moment of decision frozen. Candlelight illuminates just the hands and the board, everything else in shadow. Caravaggio-style chiaroscuro, the drama of a single consequential move.',

    'The Burning Platform': 'An oil rig platform at sea, flames visible on one side, dark water on all others. A single figure stands at the edge, looking down at the water. In the distance, ships sail away. The sky is choked with smoke but dawn breaks on the horizon. Epic scale, the existential choice between burning and leaping. Turner-esque maritime drama.',

    'The Integration That Wasn\'t': 'Two puzzle pieces that almost fit together but don\'t quite connect, magnified to enormous scale in a corporate atrium. Employees walk beneath them, tiny by comparison, carrying separate colored folders. Six years of effort visible in the wear marks on the puzzle edges. Architectural interior, Gursky-style scale and alienation.',

    'The Road Not Taken': 'A fork in a mountain road, one path climbing into sunlit peaks, the other descending into a profitable but enclosed valley. The car has stopped. Footprints in the dust show the driver got out to look both ways. Late golden hour, the kind of light that makes everything feel consequential. Terrence Malick landscape cinematography.',

    'The $7.6 Billion Question': 'A boardroom table with a single document in the center, a pen beside it, and a glass of water. The document has a massive number visible. Floor-to-ceiling windows show a stormy sky. Every chair is empty except one, where a shadow sits. The weight of a $7.6 billion mistake about to be acknowledged. Minimal, stark, Antonioni-style negative space.',

    'The Profitable Third': 'A small but vibrant garden growing in the crack of a massive concrete plaza. The garden is modest but alive — green, flowering, well-tended. Around it, the concrete of failed grand plans stretches in every direction. But this small patch thrives. Overhead sunlight, the hope of something small and real. Wes Anderson symmetry, unexpected optimism.',

    'The Third Ecosystem': 'Three towering monoliths in a vast digital landscape — two enormous, one smaller but growing, radiating light. The smallest monolith stands apart, its own gravity pulling streams of light toward it. The ground between them is scattered with the ruins of fallen competitors. Epic sci-fi scale, 2001-inspired, the sublime geometry of market forces.',
};

function buildPrompt(chapter) {
    const concept = VISUAL_CONCEPTS[chapter.title];

    const base = concept
        ? concept
        : `Cinematic portrait scene evoking "${chapter.title}" — ${chapter.teaser}. Dark moody lighting, shallow depth of field, dramatic editorial photography. Corporate tech thriller atmosphere, 2007-2013 era. No text, no logos, no UI elements.`;

    return `${base}\n\nStyle: Cinematic still frame, portrait orientation (9:16), photorealistic, high production value. Dark atmospheric mood. No text overlays, no words, no logos, no watermarks. Suitable as a background image with text overlay.`;
}

async function generateImage(chapter) {
    const outPath = path.join(OUTPUT_DIR, chapter.filename);

    if (fs.existsSync(outPath)) {
        console.log(`  ✓ ${chapter.filename} (cached, skipping)`);
        return;
    }

    const prompt = buildPrompt(chapter);
    console.log(`  ⏳ Generating "${chapter.title}"...`);

    try {
        const res = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                instances: [{ prompt }],
                parameters: {
                    sampleCount: 1,
                    aspectRatio: '9:16',
                    personGeneration: 'allow_adult'
                }
            })
        });

        if (!res.ok) {
            const err = await res.text();
            console.error(`  ✗ "${chapter.title}" failed: ${res.status} ${err.substring(0, 200)}`);
            return;
        }

        const data = await res.json();
        const imageData = data.predictions?.[0]?.bytesBase64Encoded;

        if (!imageData) {
            console.error(`  ✗ "${chapter.title}" — no image data in response`);
            console.error('    Response keys:', JSON.stringify(Object.keys(data)));
            return;
        }

        const buffer = Buffer.from(imageData, 'base64');
        fs.writeFileSync(outPath, buffer);
        console.log(`  ✓ ${chapter.filename} (${(buffer.length / 1024).toFixed(0)}KB)`);
    } catch (err) {
        console.error(`  ✗ "${chapter.title}" error:`, err.message);
    }
}

async function main() {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log('Generating chapter images...\n');

    for (const chapter of chapters) {
        await generateImage(chapter);
        // Rate limit: pause between requests
        await new Promise(r => setTimeout(r, 2000));
    }

    console.log('\nDone! Images saved to assets/images/chapters/');
}

main().catch(err => {
    console.error('Fatal error:', err);
    process.exit(1);
});
