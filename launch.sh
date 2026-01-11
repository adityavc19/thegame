#!/bin/bash
# Aurora Labs Prototype - Launch Script

echo "🚀 Aurora Labs - Interactive Business Intelligence Platform"
echo "================================================"
echo ""
echo "Starting local server on http://localhost:8000"
echo "Press Ctrl+C to stop the server"
echo ""

# Check if Python 3 is available
if command -v python3 &> /dev/null; then
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    python -m http.server 8000
else
    echo "❌ Error: Python is not installed."
    echo "Please install Python or open index.html directly in your browser."
    exit 1
fi
