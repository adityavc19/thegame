const fs = require('fs');
const content = fs.readFileSync('js/data.js', 'utf8');

// Extract all artifact IDs from unlockedArtifacts arrays
const unlockMatches = content.match(/unlockedArtifacts:\s*\[([^\]]+)\]/g) || [];
const referencedArtifacts = new Set();
unlockMatches.forEach(match => {
  const ids = match.match(/"artifact-[^"]+"/g) || [];
  ids.forEach(id => referencedArtifacts.add(id.replace(/"/g, '')));
});

// Extract all artifact IDs from artifact-link elements
const linkRegex = /data-artifact-id="(artifact-[^"]+)"/g;
let linkMatch;
while ((linkMatch = linkRegex.exec(content)) !== null) {
  referencedArtifacts.add(linkMatch[1]);
}

// Extract all defined artifact IDs
const definedMatches = content.match(/"(artifact-[^"]+)":\s*\{/g) || [];
const definedArtifacts = new Set();
definedMatches.forEach(match => {
  const id = match.match(/artifact-[^"]+/)[0];
  definedArtifacts.add(id);
});

console.log('=== ARTIFACT VALIDATION ===');
console.log('');
console.log('Defined artifacts:', definedArtifacts.size);
console.log('Referenced artifacts:', referencedArtifacts.size);
console.log('');

// Check for missing artifacts
const missing = [...referencedArtifacts].filter(id => !definedArtifacts.has(id));
if (missing.length > 0) {
  console.log('MISSING ARTIFACTS (referenced but not defined):');
  missing.forEach(id => console.log('  -', id));
} else {
  console.log('All referenced artifacts are defined');
}
console.log('');

// Check for unused defined artifacts
const unused = [...definedArtifacts].filter(id => !referencedArtifacts.has(id));
if (unused.length > 0) {
  console.log('UNUSED ARTIFACTS (defined but never referenced):');
  unused.forEach(id => console.log('  -', id));
}
console.log('');

// List referenced artifacts
console.log('Referenced artifacts (via decision unlocks or info card links):');
[...referencedArtifacts].sort().forEach(id => console.log('  -', id));
