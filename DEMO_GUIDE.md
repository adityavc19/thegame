# Aurora Labs Prototype - Demo Guide

## 🎬 Quick Start Demo Script

This guide will walk you through demonstrating all the key features of the Aurora Labs prototype in 5-10 minutes.

---

## Demo Flow

### 1️⃣ Opening (30 seconds)

**Say:** "This is Aurora Labs - an interactive business intelligence platform that puts you in the CEO's chair during critical strategic moments. Unlike case studies, you make decisions prospectively with the same incomplete information executives faced."

**Show:**
- Open `index.html` in browser
- Point out the dark, professional aesthetic
- Highlight the metrics bar at top (Date, CEO, Cash, Stock, Market Share, Morale)

---

### 2️⃣ Story Point (1 minute)

**Say:** "The scenario starts with narrative context. This is January 2007 - Steve Jobs just announced the iPhone at Macworld."

**Show:**
- Scroll through the story text
- Point out the serif typography for narrative (literary quality)
- Note the 📱 emoji placeholder for what would be actual images
- Highlight embedded context about Windows Mobile's 42% market share

**Action:** Click "View Decision Point →"

---

### 3️⃣ Information Sources (2 minutes)

**Say:** "Before you decide, you have access to briefing materials - the same conflicting information real executives had."

**Show:**
- Horizontal scroll through info cards carousel
- Point out different card types (Market Report, Internal Memo, Press Coverage)
- Note quality indicators (HIGH, MEDIUM, LOW)

**Action:** Click the "Gartner Market Report" card

**Show:**
- Modal opens with full document
- Point out the detailed content (Executive Summary, Key Findings, etc.)
- Highlight the metadata at bottom (Source, Date, Reliability)
- Note conflicts with other sources listed

**Action:** Close modal (X button or ESC key)

**Say:** "Users can explore as many sources as they want before deciding. There's no time pressure, but information may be contradictory."

---

### 4️⃣ Decision Options (2 minutes)

**Say:** "Now you face the strategic choice. There's no 'correct' answer - each option has genuine trade-offs."

**Show:**
- Scroll through the four decision options:
  1. **Stay the Course** - Focus on enterprise
  2. **Build Consumer Platform** ($500M investment)
  3. **Acquire Capabilities** ($2B acquisition)
  4. **Partner with Nokia** (strategic alliance)

**Point out:**
- Each option clearly states RISK and UPSIDE
- Some have costs prominently displayed
- Options are neutrally presented (no bias)
- Cards have hover effect (demo on desktop)

**Action:** Click "Build Consumer Platform" option

**Show:**
- Option highlights with selection state
- "Confirm Decision" button becomes enabled
- Card has visual feedback (border changes to accent color)

**Say:** "Notice you have to confirm - there's no undo. This creates real stakes and forces genuine consideration."

**Action:** Click "Confirm Decision"

---

### 5️⃣ Consequences (2 minutes)

**Say:** "The system reveals the immediate consequences of your decision, then shows cascading secondary effects."

**Show:**
- Decision recap at top ("You chose: Build Consumer Platform")
- Narrative consequences section
  - Engineering teams energized
  - Sales teams worried
  - Press coverage mixed
  - 18-month timeline begins

**Highlight:**
- Impact section showing metric changes:
  - Cash: -$0.5B
  - Stock: -$0.8
  - Morale: Optimistic

**Point out:** Metrics bar at top animating to new values

**Show:**
- Scroll to delayed consequences
  - Project Photon behind schedule
  - iPhone grows market share
  - Google announces Android

**Say:** "Your decision has both immediate effects and longer-term consequences that compound over time."

**Action:** Click "Continue to Next Decision →"

---

### 6️⃣ Metrics Tracking (1 minute)

**Say:** "The metrics bar stays persistent, tracking your company's performance throughout."

**Show:**
- Point to updated metrics bar
  - Date advanced to Q4 2007
  - Cash decreased
  - Stock decreased
  - Market share slightly down

**Action:** (On mobile) Click "Details ↓" to expand metrics

**Show:**
- Expanded panel with full metric details
- Each metric labeled clearly
- Current values displayed

**Say:** "On mobile, metrics are collapsible to save screen space. On desktop, they're always visible."

---

### 7️⃣ Second Decision Point (1 minute)

**Say:** "Now we face the Android threat. Google just unveiled a free, open-source mobile OS."

**Show:**
- New story point for November 2007
- Different strategic context (responding to Google/Android)
- New set of information sources in carousel
- Different decision options:
  1. Slash licensing fees
  2. Accelerate platform rebuild
  3. Make Windows Mobile open source
  4. Ignore Android

**Say:** "Each decision point builds on previous choices. Your earlier decision to invest in Project Photon affects your options here."

---

### 8️⃣ State Persistence (30 seconds)

**Say:** "The prototype auto-saves your progress."

**Action:**
- Make a decision if you haven't
- Refresh the page (⌘+R or F5)

**Show:**
- Page loads exactly where you left off
- Decisions remembered
- Metrics preserved
- Can continue from same point

**Say:** "This uses browser localStorage - no server needed for the prototype."

---

### 9️⃣ Developer Console (1 minute - Optional)

**Say:** "For developers, there's full console access."

**Action:** Open browser console (F12 or ⌘+Option+I)

**Show:**
```javascript
gameState              // View entire game state
gameState.metrics      // See current metrics
gameState.decisions    // See decision history
gameState.reset()      // Restart scenario
UI.renderStoryPoint()  // Render any screen
```

**Say:** "The code is organized into modules: data, state, UI, and app initialization."

---

### 🔟 Responsive Design (1 minute)

**Say:** "The design is mobile-first and fully responsive."

**Action:**
- Resize browser window to mobile width (~375px)
- Or use DevTools device emulation

**Show:**
- Metrics bar becomes compact
- Info cards carousel swipes naturally
- Decision options stack vertically
- Modal becomes fullscreen
- Touch targets are thumb-friendly

**Action:** Resize to tablet width (768px) then desktop (1200px+)

**Show:**
- Layout adapts smoothly
- More metrics visible on larger screens
- Optional multi-column layout on desktop
- Hover states appear on desktop

---

## 🎯 Key Talking Points

### Design Philosophy
- "Positioned as 'interactive business intelligence' not 'gaming'"
- "Respects user intelligence - no tutorials or hand-holding"
- "Professional aesthetic inspired by Linear, Notion, Bloomberg"
- "Mobile-first for commute-time engagement"

### Strategic Depth
- "No 'correct' answers - genuine structural tensions"
- "Information deliberately conflicting (as in real decisions)"
- "Consequences compound over time"
- "Can't optimize metrics - trade-offs required"

### Technical Quality
- "Zero dependencies - pure vanilla JavaScript"
- "~2,150 lines of production-ready code"
- "Works offline with localStorage"
- "60fps animations, smooth interactions"
- "Accessible, semantic HTML"

### Scenario Content
- "Microsoft-Nokia mobile strategy (2007-2015)"
- "Based on real historical decisions"
- "6 information sources with rich detail"
- "2 decision points implemented (6 planned)"
- "Branches to different outcomes"

---

## 💡 Demo Tips

### Do's
✅ Let people interact - it's most powerful when they make choices
✅ Point out the information card quality indicators
✅ Highlight the "no undo" decision lock
✅ Show the consequence cascade system
✅ Demo on mobile if possible (swipe interactions)
✅ Emphasize zero frameworks/dependencies
✅ Note the professional, non-gaming aesthetic

### Don'ts
❌ Don't call it a "game" - say "interactive experience" or "simulation"
❌ Don't rush through info cards - let people explore
❌ Don't compare to mobile games - reference business tools
❌ Don't apologize for emoji placeholders - they work fine
❌ Don't skip the consequences section - it's core to the experience

---

## 🎪 Advanced Demo Features

### For Technical Audiences
- Show `js/data.js` structure (easy to add scenarios)
- Demonstrate state management with console
- Point out CSS variable system for theming
- Show responsive breakpoint handling
- Explain modular code architecture

### For Design Audiences
- Walk through design system in `css/styles.css`
- Show color palette and typography choices
- Demonstrate animation timing and easing
- Point out accessibility features
- Explain mobile-first approach

### For Business Audiences
- Focus on strategic decision framework
- Highlight information conflict design
- Show consequence realism
- Discuss B2B applications (training, education)
- Present content expansion possibilities

---

## 📊 Demo Scenarios

### Quick Demo (3 minutes)
1. Open → Show story point (30s)
2. Click one info card (30s)
3. Select and confirm decision (1m)
4. Show consequences (1m)

### Standard Demo (5-7 minutes)
1. Opening + story point (1m)
2. Explore 2-3 info cards (2m)
3. Review all decision options (1m)
4. Make decision + see consequences (2m)
5. Show persistence or second decision (1m)

### Full Demo (10-15 minutes)
1. Opening (30s)
2. Complete story point (1m)
3. Explore all info cards (3m)
4. Make first decision (2m)
5. View consequences (2m)
6. Second decision point (2m)
7. Show features (console, mobile, etc.) (2-3m)
8. Q&A

---

## 🐛 Common Questions

**Q: Is this a game?**
A: It's positioned as "interactive business intelligence" - closer to a Harvard Business School case study than a game. No points, levels, or optimization mechanics.

**Q: How long does it take?**
A: Full Microsoft-Nokia scenario (when complete) will be 20-30 minutes. Current prototype has 2 of 6 decision points (~10 minutes).

**Q: Can you add custom scenarios?**
A: Yes! The `data.js` file uses a simple JSON structure. Any historical or hypothetical scenario can be added.

**Q: Does it work offline?**
A: Yes, completely. Uses localStorage for state, no server required.

**Q: What about multiplayer/social features?**
A: Planned for Phase 2. Share functionality and path comparison are placeholders.

**Q: Why no frameworks (React, Vue, etc.)?**
A: Design choice for simplicity and portability. Pure vanilla JS means zero build process and easy customization.

---

## 🎬 Closing

**End with:** "This prototype demonstrates the core mechanics from the 50-page design spec. The full platform would include 6-decision scenarios, challenge text input screens, decision tree visualization, and social comparison features. But this working prototype shows the strategic depth and professional polish of the Aurora Labs vision."

---

**Demo Duration:** 5-10 minutes (customizable)
**Audience:** All levels (technical, design, business)
**Prerequisites:** Modern web browser
**Interaction:** Highly encouraged

Ready to demo! 🚀
