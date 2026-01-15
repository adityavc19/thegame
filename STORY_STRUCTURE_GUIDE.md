# Story Structure Guide
## How to Add Your Detailed Game Story to Aurora Labs

---

## 📁 Where Story Data Lives

All story content is stored in a **single JavaScript file**:
```
/js/data.js
```

This file contains the entire `scenarioData` object with all story elements.

---

## 🏗️ Data Structure Overview

```javascript
const scenarioData = {
    // 1. SCENARIO METADATA
    id: "your-scenario-id",
    title: "Your Scenario Title",
    period: "Time Period",

    // 2. STARTING CONDITIONS
    initialMetrics: {
        date: "JAN 2007",
        ceo: "CEO Name",
        cash: 32.0,           // Billions
        stock: 29.80,         // Dollars
        marketShare: 42,      // Percentage
        morale: "neutral"     // neutral/optimistic/concerned/frustrated
    },

    // 3. ARTIFACTS (Unlockable collectibles)
    artifacts: { ... },

    // 4. INFORMATION CARDS (Research materials)
    infoCards: { ... },

    // 5. DECISION POINTS (The core story branches)
    decisionPoints: [ ... ]
};
```

---

## 📊 1. ARTIFACTS
**Unlockable collectibles that players discover through their decisions**

### Structure:
```javascript
artifacts: {
    "artifact-id": {
        id: "artifact-id",
        name: "Display Name",
        category: "Device|Platform|Document|Event",
        rarity: "Common|Rare|Epic|Legendary",
        unlockedBy: "How player unlocks this (description)",

        // FORENSIC MUSEUM DISPLAY
        caseNumber: "001",
        forensicTitle: "The Artifact's Story Title",
        status: "MARKET DISRUPTOR|DISCONTINUED|SUCCESS",
        casualties: "Impact metrics (e.g., '42% → 3% Market Share')",

        description: "Brief description shown in collection",
        model3D: "📱", // Emoji or '<img src="path" />'

        // TIMELINE
        timelineProgress: 95, // 0-100 percentage
        timelineMarkers: [
            { label: "Event", value: "Details" },
            { label: "Milestone", value: "Data" }
        ],

        // INTERACTIVE HOTSPOTS (3D model annotations)
        hotspots: [
            {
                x: 45,  // X position percentage
                y: 30,  // Y position percentage
                title: "Feature Name",
                description: "Why this matters in the story"
            }
        ],

        // FAILURE ANALYSIS (if applicable)
        failureTags: ["Tag1", "Tag2", "Tag3"], // or null for success

        // STATS TABLE
        stats: {
            "Stat Label": "Value",
            "Another Stat": "Another Value"
        },

        // NARRATIVE TEXT
        story: "The full story of this artifact. Why it succeeded or failed. What lessons it teaches."
    }
}
```

### Example:
```javascript
"iphone-2g": {
    id: "iphone-2g",
    name: "Apple iPhone (2007)",
    category: "Device",
    rarity: "Legendary",
    unlockedBy: "Viewing market analysis during first decision",

    caseNumber: "001",
    forensicTitle: "Project Purple - The Catalyst of Mobile Revolution",
    status: "MARKET DISRUPTOR",
    casualties: "Industry Reset",

    description: "The device that changed everything.",
    model3D: '<img src="assets/images/iphone-2007.jpg" />',

    timelineProgress: 95,
    timelineMarkers: [
        { label: "Launch", value: "Jun 2007" },
        { label: "First Year", value: "6.1M units" }
    ],

    hotspots: [
        {
            x: 45, y: 30,
            title: "Capacitive Touchscreen",
            description: "Revolutionary multi-touch interface eliminated stylus."
        }
    ],

    failureTags: null,

    stats: {
        "Launch Date": "June 29, 2007",
        "Units Sold": "6.1 million (first year)"
    },

    story: "Steve Jobs called it 'revolutionary.' He wasn't exaggerating..."
}
```

---

## 📋 2. INFORMATION CARDS
**Research materials players read before making decisions**

### Structure:
```javascript
infoCards: {
    "card-id": {
        id: "card-id",
        type: "Market Report|Board Memo|Press Coverage|Technical Spec|Financial Data|Competitor Intel",
        title: "Card Title",
        date: "When this info is from",
        source: "Who created it",
        quality: "high|medium|low", // Affects credibility indicator
        visual: "📊", // Emoji representation
        summary: "One-line summary shown in card preview",
        content: `
            <h3>Full Content Here</h3>
            <p>Use HTML for formatting.</p>
            <ul>
                <li>Lists work great</li>
                <li>Keep it readable</li>
            </ul>
        `,
        conflicts: ["other-card-id"] // IDs of cards with conflicting info
    }
}
```

### Content Tips:
- Use **HTML formatting** for rich text
- Keep paragraphs short (2-3 sentences)
- Use `<strong>` for emphasis
- Tables work well for financial data
- Mark conflicting information with `conflicts` array

---

## 🎯 3. DECISION POINTS
**The core story structure - where players make choices**

### Structure:
```javascript
decisionPoints: [
    {
        id: "decision-id",
        type: "decision",
        date: "JAN 2007",
        timeMarker: "JAN 2007",
        title: "Decision Title",
        storyImage: "📱", // or '<img src="path" />'
        storyText: `The narrative text that sets up the decision.

        Break into paragraphs for readability.

        Explain the situation, the stakes, and what the player must decide.`,

        objective: "Short objective statement",

        availableInfo: [
            "card-id-1",
            "card-id-2",
            "card-id-3"
        ],

        options: [
            {
                id: "option-id",
                title: "Option Title",
                description: "What this option does",
                risk: "What could go wrong",
                upside: "What could go right",
                cost: "$500M", // or null if no cost

                consequences: {
                    immediate: {
                        cash: -0.5,      // Billions (can be negative)
                        stock: -0.8,     // Dollars (can be negative)
                        marketShare: 0,  // Percentage points
                        morale: "optimistic", // neutral/optimistic/concerned/frustrated
                        unlockedArtifacts: ["artifact-id-1", "artifact-id-2"],
                        narrative: `What happens immediately after this choice.

                        Break into multiple paragraphs to show different perspectives:
                        - How the market reacts
                        - How employees feel
                        - What competitors do
                        - What the press says`
                    },

                    delayed: {
                        date: "Q4 2007",
                        cash: -0.8,
                        stock: -1.5,
                        marketShare: -3,
                        morale: "mixed",
                        narrative: "What happens months later as consequences unfold."
                    }
                }
            }
        ]
    }
]
```

---

## 🌳 Creating Story Branches

### Decision Tree Structure:
```
Decision 1 (iPhone Launch)
├── Option A: Stay Course
│   ├── Immediate: No major changes
│   └── Delayed: Market share drops → Decision 2A
├── Option B: Build Consumer
│   ├── Immediate: Big investment
│   └── Delayed: Development delays → Decision 2B
└── Option C: Partnership
    ├── Immediate: Alliance formed
    └── Delayed: Partnership struggles → Decision 2C

Decision 2A (Android Threat - after staying course)
├── Option A: Price war
├── Option B: Accelerate development
└── Option C: Pivot to services

Decision 2B (Android Threat - after building consumer)
├── Different options based on previous path
└── ...
```

### Branching Tips:
1. **Each decision should reference previous choices** in the storyText
2. **Metrics carry forward** - if marketShare drops to 37%, next decision starts there
3. **Morale affects options** - frustrated teams may resist risky moves
4. **Artifacts unlock based on player path** - different choices reveal different items

---

## 📝 Writing Guidelines

### Story Text:
- **First paragraph**: Set the scene
- **Second paragraph**: Explain the stakes
- **Third paragraph**: Present the dilemma
- Keep total under 200 words

### Option Descriptions:
- **Title**: 2-4 words, action-oriented ("Build Consumer Platform")
- **Description**: One sentence, what you're doing
- **Risk**: One sentence, worst case
- **Upside**: One sentence, best case

### Narrative Consequences:
- **Paragraph 1**: Immediate reaction
- **Paragraph 2**: Secondary effects
- **Paragraph 3**: External perspectives (market, press, competitors)
- Keep each paragraph 2-3 sentences

---

## 💡 Best Practices for Long Stories

### 1. **Break Content into Phases**
```javascript
// Phase 1: Early Crisis (2007)
decisionPoints: [
    { id: "d1-initial-threat", ... },
    { id: "d2-response-strategy", ... },
    { id: "d3-execution-challenges", ... }
],

// Phase 2: Market Evolution (2008-2010)
// Phase 3: Strategic Pivot (2011-2013)
// Phase 4: Endgame (2014-2015)
```

### 2. **Group Related Artifacts**
```javascript
artifacts: {
    // ===== DEVICES =====
    "iphone-2g": { ... },
    "iphone-3g": { ... },

    // ===== PLATFORMS =====
    "windows-mobile-6": { ... },
    "android": { ... },

    // ===== DOCUMENTS =====
    "ballmer-memo": { ... }
}
```

### 3. **Reuse Information Cards**
Same card can appear in multiple decisions:
```javascript
// Decision 1
availableInfo: ["market-report-1", "board-memo-1"],

// Decision 3
availableInfo: ["market-report-1", "new-data-3"] // Reuse market-report-1
```

### 4. **Track Metric Changes**
Use a spreadsheet to plan:
```
Decision | Option | Cash | Stock | Share | Morale
D1       | A      | -0.5 | -0.8  | -2    | optimistic
D1       | B      | -2.0 | -3.5  | 0     | uncertain
D2       | A      | -0.3 | -2.0  | -2    | concerned
```

---

## 🎨 Assets and Images

### Where to Store:
```
/assets/images/
    ├── iphone-2007.jpg
    ├── nokia-n95.png
    └── windows-phone.jpg
```

### How to Reference:
```javascript
// In artifacts
model3D: '<img src="assets/images/iphone-2007.jpg" alt="iPhone" />'

// In decision points
storyImage: '<img src="assets/images/nokia-deal.jpg" />'

// Or use emojis
model3D: "📱"
storyImage: "🤖"
```

---

## 🔄 Adding Your Story - Step by Step

### 1. **Plan Your Story Arc**
- List all major decisions (10-15 recommended)
- Map how choices branch
- Identify key artifacts (20-30 total)
- Plan information cards (30-50 cards)

### 2. **Start with Initial Metrics**
```javascript
initialMetrics: {
    date: "Your Starting Date",
    ceo: "CEO Name",
    cash: 50.0,
    stock: 100.00,
    marketShare: 30,
    morale: "neutral"
}
```

### 3. **Create Decision 1**
- Write storyText
- Define 3-4 options
- Set immediate consequences
- Add delayed consequences

### 4. **Add Supporting Content**
- Create information cards for Decision 1
- Add artifacts that unlock
- Reference cards in availableInfo array

### 5. **Build Decision 2**
- Reference what happened in Decision 1
- Adjust storyText based on previous choice
- Continue metric changes

### 6. **Repeat for All Decisions**

### 7. **Test the Experience**
- Play through each path
- Check metric math
- Verify artifacts unlock correctly
- Read all narratives for flow

---

## 📊 Recommended Story Scale

For a **complete experience**:
- **10-15 decision points** (main path)
- **20-30 artifacts** (collectibles)
- **30-50 information cards** (research)
- **3-5 options per decision**
- **Total playtime**: 30-45 minutes

For your **lengthy story**, consider:
- **Breaking into chapters** (5 decisions per chapter)
- **Multiple endpoints** (different endings based on paths)
- **Checkpoint system** (save progress between chapters)

---

## 🚀 Example: Adding a New Decision

```javascript
{
    id: "d3-nokia-acquisition",
    type: "decision",
    date: "FEB 2011",
    timeMarker: "FEB 2011",
    title: "The Nokia Gambit",
    storyImage: "🤝",
    storyText: `Nokia's board has agreed to acquisition talks. Their Symbian platform is failing, stock down 60%, and new CEO Stephen Elop (former Microsoft executive) is pushing for the deal.

    For $7.2 billion, you could acquire:
    - Nokia's hardware expertise and patents
    - 350 million existing users
    - Global carrier relationships

    But Nokia's culture clash with Microsoft is legendary. And Windows Phone is still 18 months from launch.`,

    objective: "Decide on Nokia Acquisition",

    availableInfo: [
        "nokia-financials-2011",
        "integration-risks",
        "elop-memo"
    ],

    options: [
        {
            id: "acquire-nokia",
            title: "Acquire Nokia",
            cost: "$7.2B",
            description: "Buy Nokia's device business and integrate with Windows Phone strategy",
            risk: "Massive integration challenges, culture clash, value destruction",
            upside: "Instant hardware capabilities, patent portfolio, global scale",
            consequences: {
                immediate: {
                    cash: -7.2,
                    stock: -5.5,
                    marketShare: +8,
                    morale: "uncertain",
                    unlockedArtifacts: ["nokia-lumia-920", "elop-memo"],
                    narrative: `Microsoft announces $7.2B acquisition of Nokia. Market reacts poorly—MSFT stock drops 5.5%. Analysts question "buying yesterday's technology."

                    Nokia employees fearful of layoffs. Microsoft employees resistant to hardware culture. Elop becomes head of devices division amid controversy over conflict of interest.

                    However, Microsoft now controls end-to-end Windows Phone experience—hardware, software, and services integrated like Apple.`
                },
                delayed: {
                    date: "Q4 2011",
                    cash: -2.0,
                    stock: -3.0,
                    marketShare: -2,
                    morale: "frustrated",
                    narrative: "Integration nightmares. Finnish culture clashes with Redmond. Windows Phone delayed 6 months. Android now 52% market share. The $7.2B bet looks increasingly risky."
                }
            }
        },
        // ... more options
    ]
}
```

---

## 🎯 Next Steps

1. **Plan your full story arc** (spreadsheet recommended)
2. **Write decision by decision** (don't try to write everything at once)
3. **Test frequently** (refresh browser, play through)
4. **Iterate on narrative** (player feedback shapes the experience)

**Questions or need help with structure? Let me know!**
