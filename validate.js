// Load and validate data.js
const fs = require('fs');
const content = fs.readFileSync('js/data.js', 'utf8');

// Try to evaluate it
try {
    eval(content);
    console.log('✓ data.js syntax is valid');
    console.log('✓ gameData is defined:', typeof gameData !== 'undefined');
    if (typeof gameData !== 'undefined') {
        console.log('✓ Decision points:', gameData.decisionPoints.length);
    }
} catch (error) {
    console.error('✗ Syntax error in data.js:');
    console.error(error.message);
    console.error('Line:', error.lineNumber || 'unknown');
}
