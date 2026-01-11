# Aurora Labs - Interactive Business Intelligence Platform

**Interactive Prototype v1.0**

## Overview

This is a fully functional interactive prototype of the Aurora Labs platform, based on the design specification in `aurora_labs_design_spec_1.md`. The prototype implements the core game mechanics, UI design system, and sample scenario featuring Microsoft's mobile strategy decisions from 2007-2015.

## Features Implemented

### ✅ Core Mechanics
- **Decision Points**: Strategic choices with risk/upside analysis
- **Information Sources**: Card-based briefing documents with quality indicators
- **Consequence System**: Immediate and delayed effects with cascading impacts
- **Metrics Tracking**: Stock price, cash, market share, morale, date, CEO
- **State Management**: Auto-save/load with localStorage persistence

### ✅ Design System
- **Dark Theme**: Professional aesthetic with warm accents (#E8B4A0)
- **Typography**: Serif for narrative, sans-serif for UI elements
- **Responsive Layout**: Mobile-first design (375px - 2560px)
- **Card System**: Elevated cards with hover states and shadows
- **Animations**: Smooth transitions, metric changes, fade-ins

### ✅ Screens
1. **Story Point**: Narrative context with atmospheric imagery
2. **Decision Point**: Strategic options with information sources
3. **Information Modal**: Full document view with metadata
4. **Consequence Reveal**: Outcome narrative with impact breakdown
5. **Completion**: Final results and replay option

### ✅ Sample Scenario
- **Microsoft-Nokia Mobile Strategy (2007-2015)**
- 2 complete decision points with 4 options each
- 6 information source cards with rich content
- Consequence branching with metric impacts

## How to Run

### Option 1: Direct File Access
1. Navigate to the `aurora-labs-prototype` folder
2. Open `index.html` in a modern web browser
3. The prototype will load automatically

### Option 2: Local Server (Recommended)
```bash
cd aurora-labs-prototype
python3 -m http.server 8000
# Then open http://localhost:8000 in your browser
```

## File Structure

```
aurora-labs-prototype/
├── index.html              # Main HTML structure
├── css/
│   └── styles.css         # Complete design system and component styles
├── js/
│   ├── data.js            # Scenario data (Microsoft-Nokia)
│   ├── state.js           # Game state management
│   ├── ui.js              # UI rendering functions
│   └── app.js             # App initialization
├── data/                  # (Future: JSON scenario files)
├── assets/                # (Future: Images, icons)
└── README.md             # This file
```

## Using the Prototype

### Navigation
1. **Start**: Read the story point and click "View Decision Point"
2. **Explore Information**: Click any information card to read full briefing
3. **Make Decision**: Click a decision option to select it
4. **Confirm**: Click "Confirm Decision" to lock your choice
5. **View Consequences**: Read the outcome and impact on metrics
6. **Continue**: Proceed to the next decision point

### Metrics Bar
- **Desktop**: All metrics visible in top bar
- **Mobile**: Compact view with "Details ↓" button to expand
- **Updates**: Metrics animate when they change

### Keyboard Shortcuts
- **ESC**: Close information card modal

### Developer Console
Access these in the browser console (F12):
- `gameState`: View current game state
- `gameState.reset()`: Restart scenario
- `UI`: Access UI rendering functions
- `Share.shareDecisionPath()`: Generate shareable URL

## Design Principles Implemented

### ✅ Professional Aesthetic
- No "gamey" elements (no XP, levels, health bars)
- Dark theme with warm peachy-coral accents
- Sophisticated typography hierarchy
- Minimal but meaningful interactions

### ✅ Information Architecture
- Clear content hierarchy
- One primary action per screen
- Progressive disclosure of information
- Respect for user intelligence

### ✅ Mobile-First
- Touch-optimized interactions
- Thumb-friendly tap targets (min 44px)
- Horizontal scroll for card carousels
- Responsive breakpoints (768px, 1200px)

### ✅ Strategic Decision Framework
- No "correct" answers
- Genuine trade-offs between options
- Structural tensions (not optimization puzzles)
- Realistic consequence modeling

## Browser Compatibility

**Tested On:**
- Chrome 90+ ✅
- Safari 14+ ✅
- Firefox 88+ ✅
- Edge 90+ ✅

**Minimum Requirements:**
- Modern browser with ES6 support
- localStorage enabled
- Screen width: 375px minimum

## Known Limitations (MVP)

This prototype focuses on core mechanics. The following features from the spec are not yet implemented:

### Not Implemented (Future Enhancements)
- ❌ Challenge text input screens (email/memo composition)
- ❌ Decision tree visualization
- ❌ Social sharing with actual backend
- ❌ Outcome comparison with other users
- ❌ Full 6-decision scenario (only 2 decisions implemented)
- ❌ Secondary/tertiary consequence delays
- ❌ Alternative path exploration
- ❌ Insights collection system
- ❌ Scenario library/selection

### Planned Improvements
- Add remaining 4 decision points for Microsoft-Nokia
- Implement challenge text input mechanics
- Build decision tree visualization
- Add actual historical outcome comparison
- Create second scenario (different domain)
- Implement backend for save/share/analytics

## Customization

### Adding New Scenarios
Edit `js/data.js` to add new scenarios. Follow this structure:

```javascript
const scenarioData = {
    id: "your-scenario-id",
    title: "Scenario Title",
    period: "2020-2025",
    initialMetrics: { /* starting values */ },
    informationSources: { /* briefing cards */ },
    decisionPoints: [ /* decision array */ ]
};
```

### Styling Changes
All design system variables are in `css/styles.css`:
- Colors: `:root` CSS variables
- Typography: `--font-heading`, `--font-body`, `--font-ui`
- Spacing: `--spacing-xs` through `--spacing-xl`
- Transitions: `--transition-fast`, `--transition-medium`, `--transition-slow`

### Breakpoints
```css
Mobile:  < 768px
Tablet:  768-1199px
Desktop: 1200px+
```

## Analytics Events (Placeholder)

The prototype includes placeholder analytics tracking:
- Decision selections
- Information card views
- Scenario completions
- Time spent per decision

To implement actual tracking, edit `Analytics` object in `js/app.js`.

## Performance Optimization

Current optimizations:
- CSS animations use `transform` and `opacity` (GPU accelerated)
- LocalStorage for instant save/load
- No external dependencies (vanilla JS)
- Minimal bundle size (~50KB total)

Future optimizations:
- Image lazy loading
- Service worker for offline support
- Code splitting for larger scenarios
- CDN for assets

## Credits

**Design Specification:** Aurora Labs Design & Mechanics Specification v1.0
**Implementation:** Interactive prototype based on spec requirements
**Sample Scenario:** Microsoft-Nokia Mobile Strategy (2007-2015)
**Inspiration:** Hidden Door, Reigns, 80 Days, NYT Interactives

## License

This prototype is for demonstration purposes.

---

**Version:** 1.0
**Last Updated:** January 2026
**Status:** Interactive Prototype
