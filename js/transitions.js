// ========================================
// AURORA LABS - TRANSITION & PACING SYSTEM
// ========================================

const Transitions = {
    // Show pre-decision transition screen
    showPreDecisionTransition(callback) {
        const mainContent = document.getElementById('main-content');
        const decisionPoint = gameState.getCurrentDecisionPoint();

        // Get current metrics for display
        const metrics = gameState.metrics;

        // Generate context-aware transition messages
        const transitionMessages = this.getTransitionMessages(decisionPoint);

        mainContent.innerHTML = `
            <div class="transition-screen">
                <div class="transition-container">
                    <div class="transition-header">
                        <div class="transition-date">${metrics.date}</div>
                        <div class="transition-status">
                            <div class="transition-spinner"></div>
                            <div class="transition-label">${transitionMessages.mainLabel}</div>
                        </div>
                    </div>

                    <div class="transition-indicators">
                        <div class="transition-indicator" style="animation-delay: 0.5s">
                            <div class="indicator-label">${transitionMessages.indicators[0].label}</div>
                            <div class="indicator-change">
                                <span class="indicator-old">${transitionMessages.indicators[0].oldValue}</span>
                                <span class="indicator-arrow">→</span>
                                <span class="indicator-new">${transitionMessages.indicators[0].newValue}</span>
                            </div>
                        </div>

                        <div class="transition-indicator" style="animation-delay: 1s">
                            <div class="indicator-label">${transitionMessages.indicators[1].label}</div>
                            <div class="indicator-change">
                                <span class="indicator-old">${transitionMessages.indicators[1].oldValue}</span>
                                <span class="indicator-arrow">→</span>
                                <span class="indicator-new">${transitionMessages.indicators[1].newValue}</span>
                            </div>
                        </div>

                        <div class="transition-indicator" style="animation-delay: 1.5s">
                            <div class="indicator-label">${transitionMessages.indicators[2].label}</div>
                            <div class="indicator-change">
                                <span class="indicator-old">${transitionMessages.indicators[2].oldValue}</span>
                                <span class="indicator-arrow">→</span>
                                <span class="indicator-new">${transitionMessages.indicators[2].newValue}</span>
                            </div>
                        </div>
                    </div>

                    <div class="transition-progress">
                        <div class="transition-progress-bar"></div>
                    </div>
                </div>
            </div>
        `;

        // Trigger callback after 3 seconds (reduced for better UX)
        setTimeout(() => {
            try {
                callback();
            } catch (error) {
                console.error('Transition callback error:', error);
                // Fallback: try to proceed anyway
                if (typeof callback === 'function') {
                    callback();
                }
            }
        }, 3000);
    },

    // ========================================
    // TRANSITION MESSAGE DATA
    // ========================================
    //
    // To add/edit transition messages for a specific decision point:
    // 1. Find the decision ID from data.js (e.g., 'd2-a-enterprise-path')
    // 2. Add an entry to TRANSITION_MESSAGES with that exact ID
    // 3. If no exact match exists, the system falls back to prefix matching
    //
    // Format:
    // 'decision-id': {
    //     mainLabel: "Status text shown at top",
    //     indicators: [
    //         { label: "Metric Name", oldValue: "Before", newValue: "After" },
    //         { label: "Metric Name", oldValue: "Before", newValue: "After" },
    //         { label: "Metric Name", oldValue: "Before", newValue: "After" }
    //     ]
    // }

    TRANSITION_MESSAGES: {
    // ========================================
    // D1 - THE iPHONE MOMENT (JAN 2007 → SEP 2009)
    // ========================================
    'd1-iphone-moment': {
    mainLabel: "Market Status",
    indicators: [
        { label: "Global Smartphone Users", oldValue: "122M", newValue: "?" },
        { label: "Your Share", oldValue: "42%", newValue: "?" },
        { label: "Apple Share", oldValue: "0%", newValue: "?" }
    ]
},

    // ========================================
    // D2 - STRATEGIC PATH (JAN 2007 → SEP 2009)
    // 32 months from iPhone announcement to Android's rise
    // ========================================
    'd2-a-enterprise-path': {
        mainLabel: "32 months pass...",
        indicators: [
            { label: "Windows Mobile Share", oldValue: "42%", newValue: "25%" },
            { label: "Android Market Share", oldValue: "0%", newValue: "25%" },
            { label: "BYOD Requests", oldValue: "Rare", newValue: "+400%" }
        ]
    },
    'd2-b-consumer-path': {
        mainLabel: "32 months pass...",
        indicators: [
            { label: "Windows Mobile Share", oldValue: "42%", newValue: "22%" },
            { label: "Project Pink Status", oldValue: "Approved", newValue: "$200M over budget" },
            { label: "OEM Loyalty", oldValue: "Strong", newValue: "Wavering" }
        ]
    },
    'd2-c-acquisition-path': {
        mainLabel: "32 months pass...",
        indicators: [
            { label: "Combined Share", oldValue: "82%", newValue: "65%" },
            { label: "Integration Status", oldValue: "Planned", newValue: "18 months delayed" },
            { label: "Platform Strategy", oldValue: "TBD", newValue: "Still debating" }
        ]
    },
    'd2-d-wait-path': {
        mainLabel: "32 months pass...",
        indicators: [
            { label: "Windows Mobile Share", oldValue: "42%", newValue: "20%" },
            { label: "Market Clarity", oldValue: "Uncertain", newValue: "iPhone + Android win" },
            { label: "Strategic Options", oldValue: "Many", newValue: "Fewer" }
        ]
    },

    // ========================================
    // D3 - PLATFORM & PARTNERSHIP (Q4 2009 → Q4 2010)
    // ========================================
    
    // Platform rebuild variants
    'd3-p-standard': {
        mainLabel: "12 months pass...",
        indicators: [
            { label: "iOS + Android Combined", oldValue: "34%", newValue: "62%" },
            { label: "Carrier Subsidy Demands", oldValue: "$0", newValue: "$150/device" },
            { label: "Platform R&D Burn", oldValue: "$0", newValue: "$890M" }
        ]
    },
    'd3-p-vertical': {
        mainLabel: "12 months pass...",
        indicators: [
            { label: "iOS + Android Combined", oldValue: "34%", newValue: "62%" },
            { label: "Hardware Prototypes Built", oldValue: "0", newValue: "4" },
            { label: "Vertical Integration Spend", oldValue: "$0", newValue: "$1.4B" }
        ]
    },
    'd3-p-already-building': {
        mainLabel: "12 months pass...",
        indicators: [
            { label: "iOS + Android Combined", oldValue: "34%", newValue: "62%" },
            { label: "WinMo 7 Development", oldValue: "Alpha", newValue: "Beta" },
            { label: "Total Platform Investment", oldValue: "$340M", newValue: "$920M" }
        ]
    },

    // Enterprise pivot
    'd3-e': {
        mainLabel: "12 months pass...",
        indicators: [
            { label: "iOS + Android Combined", oldValue: "34%", newValue: "62%" },
            { label: "BYOD Adoption Rate", oldValue: "12%", newValue: "38%" },
            { label: "Enterprise Contracts Renewed", oldValue: "94%", newValue: "71%" }
        ]
    },

    // Partnership/Integration variants
    'd3-i-bb': {
        mainLabel: "12 months pass...",
        indicators: [
            { label: "iOS + Android Combined", oldValue: "34%", newValue: "62%" },
            { label: "BlackBerry Market Share", oldValue: "20%", newValue: "16%" },
            { label: "Partnership Investment", oldValue: "$0", newValue: "$450M" }
        ]
    },
    'd3-i-force-windows': {
        mainLabel: "12 months pass...",
        indicators: [
            { label: "iOS + Android Combined", oldValue: "34%", newValue: "62%" },
            { label: "OEM Partners Remaining", oldValue: "8", newValue: "3" },
            { label: "Licensing Revenue Lost", oldValue: "$0", newValue: "$280M" }
        ]
    },
    'd3-i-dual': {
        mainLabel: "12 months pass...",
        indicators: [
            { label: "iOS + Android Combined", oldValue: "34%", newValue: "62%" },
            { label: "Platforms Under Development", oldValue: "1", newValue: "2" },
            { label: "Dual Strategy Burn Rate", oldValue: "$0", newValue: "$1.6B/yr" }
        ]
    },
    'd3-i-nokia-leads': {
        mainLabel: "12 months pass...",
        indicators: [
            { label: "iOS + Android Combined", oldValue: "34%", newValue: "62%" },
            { label: "Nokia Stock Price", oldValue: "$12.40", newValue: "$8.12" },
            { label: "Partnership Investment", oldValue: "$0", newValue: "$1.8B" }
        ]
    },
    'd3-i-nokia': {
        mainLabel: "12 months pass...",
        indicators: [
            { label: "iOS + Android Combined", oldValue: "34%", newValue: "62%" },
            { label: "Nokia Stock Price", oldValue: "$12.40", newValue: "$8.12" },
            { label: "Partnership Investment", oldValue: "$0", newValue: "$1.2B" }
        ]
    },

    // Android variants
    'd3-a-nokia-android': {
        mainLabel: "12 months pass...",
        indicators: [
            { label: "iOS + Android Combined", oldValue: "34%", newValue: "62%" },
            { label: "Google Services Dependency", oldValue: "None", newValue: "Critical" },
            { label: "Internal Opposition", oldValue: "Strong", newValue: "Ongoing" }
        ]
    },
    'd3-a-fork-no-hardware': {
        mainLabel: "12 months pass...",
        indicators: [
            { label: "iOS + Android Combined", oldValue: "34%", newValue: "62%" },
            { label: "Android Forks Attempted", oldValue: "0", newValue: "3" },
            { label: "Fork Development Cost", oldValue: "$0", newValue: "$680M" }
        ]
    },

    // ========================================
    // D4 - APP ECOSYSTEM (Q4 2010 → Q4 2012)
    // ========================================
    'd4-still-fighting': {
        mainLabel: "24 months pass...",
        indicators: [
            { label: "iOS + Android Combined", oldValue: "72%", newValue: "91%" },
            { label: "Nokia Stock Price", oldValue: "$8.12", newValue: "$2.78" },
            { label: "Total Mobile Investment", oldValue: "$3.2B", newValue: "$8.1B" }
        ]
    },
    'd4-crisis-mode': {
        mainLabel: "24 months pass...",
        indicators: [
            { label: "iOS + Android Combined", oldValue: "72%", newValue: "91%" },
            { label: "Nokia Stock Price", oldValue: "$8.12", newValue: "$2.78" },
            { label: "Monthly Cash Burn", oldValue: "$180M", newValue: "$95M" }
        ]
    },
    'd4-crisis-mode-nokia-owned': {
        mainLabel: "24 months pass...",
        indicators: [
            { label: "iOS + Android Combined", oldValue: "72%", newValue: "91%" },
            { label: "Nokia Integration Status", oldValue: "Struggling", newValue: "Failing" },
            { label: "Total Acquisition Cost", oldValue: "$45B", newValue: "$57B" }
        ]
    },
    'd4-differentiated': {
        mainLabel: "24 months pass...",
        indicators: [
            { label: "iOS + Android Combined", oldValue: "72%", newValue: "91%" },
            { label: "Nokia Stock Price", oldValue: "$8.12", newValue: "$2.78" },
            { label: "Enterprise Mobile Revenue", oldValue: "$890M", newValue: "$1.4B" }
        ]
    },

    // ========================================
    // D5 - FINAL DECISION (Q4 2012 → Q1 2017)
    // ========================================
    'd5-last-stand': {
        mainLabel: "24 months pass...",
        indicators: [
            { label: "CEO", oldValue: "Ballmer", newValue: "Nadella" },
            { label: "Nokia Write-down", oldValue: "Pending", newValue: "$7.6B" },
            { label: "Windows Phone Share", oldValue: "2.5%", newValue: "1.8%" }
        ]
    },
    'd5-niche-survivor': {
        mainLabel: "24 months pass...",
        indicators: [
            { label: "CEO", oldValue: "Ballmer", newValue: "Nadella" },
            { label: "Mobile Division", oldValue: "Subsidy", newValue: "Profitable" },
            { label: "Active Users", oldValue: "40M", newValue: "35M" }
        ]
    },
    'd5-platform-contender': {
        mainLabel: "24 months pass...",
        indicators: [
            { label: "CEO", oldValue: "Ballmer", newValue: "Nadella" },
            { label: "Windows Phone Share", oldValue: "8%", newValue: "12%" },
            { label: "Active Users", oldValue: "100M", newValue: "150M" }
        ]
    }
},

    // Prefix-based fallback messages (used when no exact match found)
    TRANSITION_PREFIXES: [
        {
            prefixes: ['d1-'],
            messages: {
                mainLabel: "Q1 2007 concluding...",
                indicators: [
                    { label: "iPhone Pre-orders", oldValue: "--", newValue: "270K" },
                    { label: "Media Coverage", oldValue: "Neutral", newValue: "Enthusiastic" },
                    { label: "Carrier Interest", oldValue: "AT&T Exclusive", newValue: "Others Watching" }
                ]
            }
        },
        {
            prefixes: ['d2-a', 'd2a'],
            messages: {
                mainLabel: "Q3 2008 concluding...",
                indicators: [
                    { label: "Enterprise Contracts", oldValue: "Stable", newValue: "Under Review" },
                    { label: "iPhone Enterprise", oldValue: "0%", newValue: "Growing" },
                    { label: "IT Department Pressure", oldValue: "Low", newValue: "Increasing" }
                ]
            }
        },
        {
            prefixes: ['d2-b', 'd2b'],
            messages: {
                mainLabel: "Q3 2008 concluding...",
                indicators: [
                    { label: "Consumer Mindshare", oldValue: "Declining", newValue: "Critical" },
                    { label: "App Store Apps", oldValue: "500", newValue: "10,000+" },
                    { label: "Touch Interface Gap", oldValue: "Noticeable", newValue: "Widening" }
                ]
            }
        },
        {
            prefixes: ['d2-c', 'd2c'],
            messages: {
                mainLabel: "Q3 2008 concluding...",
                indicators: [
                    { label: "Acquisition Targets", oldValue: "Scanning", newValue: "Evaluating" },
                    { label: "Board Sentiment", oldValue: "Open", newValue: "Cautious" },
                    { label: "Available Capital", oldValue: "$21B", newValue: "Ready to Deploy" }
                ]
            }
        },
        {
            prefixes: ['d2-d', 'd2d'],
            messages: {
                mainLabel: "Q3 2008 concluding...",
                indicators: [
                    { label: "Market Position", oldValue: "42%", newValue: "38%" },
                    { label: "Competitive Intel", oldValue: "Gathering", newValue: "Analyzing" },
                    { label: "Android Threat", oldValue: "Emerging", newValue: "Accelerating" }
                ]
            }
        },
        {
            prefixes: ['d3-p', 'd3p'],
            messages: {
                mainLabel: "Q4 2009 concluding...",
                indicators: [
                    { label: "Platform Strategy", oldValue: "WinMobile 6.5", newValue: "Evaluating Options" },
                    { label: "Developer Interest", oldValue: "Declining", newValue: "Waiting" },
                    { label: "Android Market Share", oldValue: "4%", newValue: "9%" }
                ]
            }
        },
        {
            prefixes: ['d3-e', 'd3e'],
            messages: {
                mainLabel: "Q4 2009 concluding...",
                indicators: [
                    { label: "Enterprise Strategy", oldValue: "Reviewing", newValue: "Pivoting" },
                    { label: "CIO Sentiment", oldValue: "Loyal", newValue: "Questioning" },
                    { label: "BYOD Trend", oldValue: "Emerging", newValue: "Accelerating" }
                ]
            }
        },
        {
            prefixes: ['d3-i', 'd3i'],
            messages: {
                mainLabel: "Q4 2009 concluding...",
                indicators: [
                    { label: "Partnership Talks", oldValue: "Ongoing", newValue: "Critical Phase" },
                    { label: "Nokia Market Share", oldValue: "38%", newValue: "35%" },
                    { label: "Strategic Options", oldValue: "Multiple", newValue: "Narrowing" }
                ]
            }
        },
        {
            prefixes: ['d3-a', 'd3a'],
            messages: {
                mainLabel: "Q4 2009 concluding...",
                indicators: [
                    { label: "Android Ecosystem", oldValue: "Growing", newValue: "Exploding" },
                    { label: "OEM Defections", oldValue: "2 major", newValue: "4 major" },
                    { label: "Fork Viability", oldValue: "Theoretical", newValue: "Possible" }
                ]
            }
        },
        {
            prefixes: ['d4-'],
            messages: {
                mainLabel: "Q4 2010 concluding...",
                indicators: [
                    { label: "Your App Count", oldValue: "1,000", newValue: "18,000" },
                    { label: "iOS App Count", oldValue: "225K", newValue: "425K" },
                    { label: "Developer Momentum", oldValue: "Low", newValue: "Building" }
                ]
            }
        },
        {
            prefixes: ['d5-'],
            messages: {
                mainLabel: "Q4 2012 concluding...",
                indicators: [
                    { label: "Market Position", oldValue: "Declining", newValue: "Stabilizing?" },
                    { label: "Financial Burn", oldValue: "-$2.1B", newValue: "Continuing" },
                    { label: "Board Patience", oldValue: "Thin", newValue: "Final Review" }
                ]
            }
        }
    ],

    // Get context-aware transition messages based on decision point
    getTransitionMessages(decisionPoint) {
        const id = decisionPoint.id;

        // 1. Check for exact match in TRANSITION_MESSAGES
        if (this.TRANSITION_MESSAGES[id]) {
            return this.TRANSITION_MESSAGES[id];
        }

        // 2. Check for prefix match in TRANSITION_PREFIXES
        for (const entry of this.TRANSITION_PREFIXES) {
            for (const prefix of entry.prefixes) {
                if (id.startsWith(prefix)) {
                    return entry.messages;
                }
            }
        }

        // 3. Return default fallback
        return {
            mainLabel: "Quarter concluding...",
            indicators: [
                { label: "iPhone Market Share", oldValue: "0%", newValue: "2%" },
                { label: "Developer Sentiment", oldValue: "Skeptical", newValue: "Curious" },
                { label: "Enterprise Demand", oldValue: "Stable", newValue: "Shifting" }
            ]
        };
    },

    // Show staggered consequence reveals
    showStaggeredConsequences(option, onComplete) {
        const consequences = option.consequences.immediate;
        const mainContent = document.getElementById('main-content');

        // Initial screen with decision recap
        mainContent.innerHTML = `
            <div class="csq-stepper-bg csq-stepper-bg--verdict-neutral" id="csq-legacy-bg"></div>
            <div class="consequence-reveal">
                <div class="decision-recap">
                    You chose: <strong>${option.title}</strong>
                </div>

                <div class="consequence-stages">
                    <!-- Consequences will be revealed here sequentially -->
                </div>

                <div class="consequence-continue hidden">
                    <button class="continue-btn" id="continue-after-consequence">
                        Continue
                    </button>
                </div>
            </div>
        `;

        const stagesContainer = document.querySelector('.consequence-stages');

        // Parse narrative into stages
        const narrativeParagraphs = consequences.narrative.split('\n\n').map(p => p.trim());

        // Define reveal sequence
        const revealSequence = [
            {
                delay: 1000,
                type: 'immediate',
                title: 'IMMEDIATE REACTION',
                content: narrativeParagraphs[0] || consequences.narrative
            },
            {
                delay: 1500,
                type: 'ripple-1',
                title: 'FIRST RIPPLE EFFECTS',
                content: narrativeParagraphs[1] || 'Market responds to the announcement.'
            },
            {
                delay: 1500,
                type: 'ripple-2',
                title: 'MARKET RESPONSE',
                content: narrativeParagraphs[2] || 'Analysts weigh in on the decision.'
            },
            {
                delay: 1500,
                type: 'impact',
                title: 'KEY METRICS IMPACT',
                content: this.generateImpactHTML(consequences)
            }
        ];

        // If there are delayed consequences, add them
        if (option.consequences.delayed) {
            revealSequence.push({
                delay: 1500,
                type: 'delayed',
                title: 'EMERGING CONCERNS',
                content: `<div class="delayed-warning">${option.consequences.delayed.narrative}</div>`
            });
        }

        // Reveal each stage sequentially
        let cumulativeDelay = 0;
        revealSequence.forEach((stage, index) => {
            cumulativeDelay += stage.delay;

            setTimeout(() => {
                const stageElement = document.createElement('div');
                stageElement.className = `consequence-stage consequence-stage-${stage.type}`;
                stageElement.innerHTML = `
                    <h2 class="stage-title">${stage.title}</h2>
                    <div class="stage-content">${stage.content}</div>
                `;

                stagesContainer.appendChild(stageElement);

                // Animate in
                setTimeout(() => {
                    stageElement.classList.add('revealed');
                }, 50);

                // Update metrics bar with arrows when showing impact
                if (stage.type === 'impact') {
                    UI.updateMetricsBar(true);
                }

                // Show continue button after last stage
                if (index === revealSequence.length - 1) {
                    setTimeout(() => {
                        document.querySelector('.consequence-continue').classList.remove('hidden');

                        // Add event listener
                        document.getElementById('continue-after-consequence').addEventListener('click', () => {
                            const legacyBg = document.getElementById('csq-legacy-bg');
                            if (legacyBg) legacyBg.remove();
                            onComplete();
                        });
                    }, 1000);
                }
            }, cumulativeDelay);
        });
    },

    // Generate impact metrics HTML
    generateImpactHTML(consequences) {
        const changes = [];

        if (consequences.cash !== 0) {
            changes.push({
                label: 'Investment',
                value: `${consequences.cash > 0 ? '+' : ''}$${Math.abs(consequences.cash).toFixed(1)}B`,
                positive: consequences.cash > 0
            });
        }
        if (consequences.marketCap !== 0) {
            changes.push({
                label: 'Market Cap',
                value: `${consequences.marketCap > 0 ? '+' : ''}$${Math.abs(consequences.marketCap).toFixed(0)}B`,
                positive: consequences.marketCap > 0
            });
        }
        if (consequences.marketShare !== 0) {
            changes.push({
                label: 'Market Share',
                value: `${consequences.marketShare > 0 ? '+' : ''}${consequences.marketShare}%`,
                positive: consequences.marketShare > 0
            });
        }
        // Morale is shown only in profile section, not in key metrics

        return `
            <div class="impact-grid">
                ${changes.map(change => `
                    <div class="impact-item">
                        <div class="impact-label">${change.label}</div>
                        <div class="impact-value ${change.positive ? 'positive' : 'negative'}">
                            ${change.value}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    },

    // ========================================
    // PHASE 4 — CHAPTER INTRO + TIME PASSAGE
    // ========================================

    // Slugify title to match generated image filenames
    _slugify(text) {
        return text.toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, '')
            .substring(0, 50);
    },

    showChapterIntro(callback) {
        // Stop any lingering consequence audio
        this._csqActive = false;
        this._stopCsqAudio();

        const mainContent = document.getElementById('main-content');
        const decisionPoint = gameState.getCurrentDecisionPoint();
        const chapter = decisionPoint?.chapter;

        if (!chapter) {
            // No chapter data — fall back to legacy transition
            this.showPreDecisionTransition(callback);
            return;
        }

        const imageSlug = this._slugify(chapter.title);
        // Prefer .jpg when available (higher quality photos), fall back to .png
        const jpgChapters = ['the-burning-platform'];
        const ext = jpgChapters.includes(imageSlug) ? 'jpg' : 'png';
        const imagePath = `assets/images/chapters/chapter-${imageSlug}.${ext}`;

        mainContent.innerHTML = `
            <div class="ch-intro">
                <div class="ch-intro-bg" style="background-image: url('${imagePath}')"></div>
                <div class="ch-intro-overlay"></div>
                <div class="ch-intro-inner">
                    <div class="ch-chapter-block">
                        <div class="ch-number">Chapter ${chapter.number}</div>
                        <h1 class="ch-title">${chapter.title}</h1>
                        <p class="ch-teaser">${chapter.teaser}</p>
                    </div>

                    <button class="ch-enter-btn" id="ch-enter-btn">
                        <span>ENTER BRIEFING</span>
                    </button>
                </div>
            </div>
        `;

        // User-driven: click to proceed
        document.getElementById('ch-enter-btn').addEventListener('click', () => {
            callback();
        });
    },

    // Show metrics delta loader between story brief and decision screen
    showMetricsLoader(callback) {
        const mainContent = document.getElementById('main-content');
        const decisionPoint = gameState.getCurrentDecisionPoint();
        const transitionMessages = this.getTransitionMessages(decisionPoint);
        const indicators = transitionMessages.indicators;

        // Determine if value is numeric-like (for scramble effect)
        const isNumeric = (v) => /^[\d$%.+\-,BMKmk\s]+$/.test(v);
        const scrambleChars = '0123456789%$BM.+-';

        // Build metric cards HTML
        const cardsHTML = indicators.map((ind, i) => {
            const isNum = isNumeric(ind.newValue);
            return `
                <div class="mu-card mu-mc-${i + 1}">
                    <div class="mu-card-label">${ind.label}</div>
                    <div class="mu-value-row">
                        <span class="mu-val-current">${ind.oldValue}</span>
                        <span class="mu-val-arrow">→</span>
                        <div class="mu-val-next-wrap">
                            <span class="mu-val-scramble" data-final="${ind.newValue}" data-numeric="${isNum}">?</span>
                            <span class="mu-val-resolved">${ind.newValue}</span>
                        </div>
                    </div>
                </div>`;
        }).join('');

        mainContent.innerHTML = `
            <div class="mu-screen" id="mu-screen">
                <svg class="mu-network" id="mu-network" viewBox="0 0 390 700" preserveAspectRatio="xMidYMid meet">
                    <!-- TOP-LEFT -->
                    <line class="mu-nl mu-nl-1" x1="70" y1="130" x2="15" y2="35"/>
                    <line class="mu-nl mu-nl-2" x1="70" y1="130" x2="140" y2="55"/>
                    <line class="mu-nl mu-nl-3" x1="70" y1="130" x2="25" y2="195"/>
                    <line class="mu-nb mu-nb-1" x1="15" y1="35" x2="55" y2="8"/>
                    <line class="mu-nb mu-nb-2" x1="15" y1="35" x2="0" y2="70"/>
                    <line class="mu-nb mu-nb-3" x1="140" y1="55" x2="165" y2="12"/>
                    <line class="mu-nb mu-nb-4" x1="25" y1="195" x2="5" y2="240"/>
                    <circle class="mu-nn mu-nn-1" cx="70" cy="130" r="3.5"/>
                    <circle class="mu-nn mu-nn-2" cx="15" cy="35" r="2.5"/>
                    <circle class="mu-nn mu-nn-3" cx="140" cy="55" r="2.5"/>
                    <circle class="mu-nnt mu-nnt-1" cx="55" cy="8" r="1.5"/>
                    <circle class="mu-nnt mu-nnt-2" cx="165" cy="12" r="1.5"/>
                    <circle class="mu-nnt mu-nnt-3" cx="0" cy="70" r="1.5"/>
                    <polygon class="mu-ns mu-ns-1" points="42,82 45,77 48,82 45,87"/>
                    <text class="mu-glyph mu-glyph-c mu-ns-9" x="85" y="100">$7.2B</text>

                    <!-- TOP-RIGHT -->
                    <line class="mu-nl mu-nl-4" x1="345" y1="95" x2="380" y2="20"/>
                    <line class="mu-nl mu-nl-5" x1="345" y1="95" x2="290" y2="30"/>
                    <line class="mu-nl mu-nl-6" x1="345" y1="95" x2="375" y2="175"/>
                    <line class="mu-nb mu-nb-5" x1="380" y1="20" x2="355" y2="0"/>
                    <line class="mu-nb mu-nb-6" x1="290" y1="30" x2="240" y2="10"/>
                    <line class="mu-nb mu-nb-7" x1="375" y1="175" x2="388" y2="220"/>
                    <circle class="mu-nn mu-nn-4" cx="345" cy="95" r="3.5"/>
                    <circle class="mu-nn mu-nn-5" cx="380" cy="20" r="2.5"/>
                    <circle class="mu-nnt mu-nnt-4" cx="355" cy="0" r="1.5"/>
                    <circle class="mu-nnt mu-nnt-5" cx="240" cy="10" r="1.5"/>
                    <polygon class="mu-ns mu-ns-2" points="362,58 365,53 368,58 365,63"/>
                    <text class="mu-glyph mu-glyph-i mu-ns-10" x="300" y="55">MKT</text>

                    <!-- LEFT EDGE -->
                    <line class="mu-nl mu-nl-1" x1="18" y1="320" x2="8" y2="260"/>
                    <line class="mu-nl mu-nl-3" x1="18" y1="320" x2="5" y2="400"/>
                    <line class="mu-nb mu-nb-9" x1="8" y1="260" x2="30" y2="230"/>
                    <circle class="mu-nn mu-nn-6" cx="18" cy="320" r="3"/>
                    <circle class="mu-nn mu-nn-2" cx="8" cy="260" r="2"/>

                    <!-- RIGHT EDGE -->
                    <line class="mu-nl mu-nl-2" x1="378" y1="365" x2="385" y2="295"/>
                    <line class="mu-nl mu-nl-4" x1="378" y1="365" x2="390" y2="440"/>
                    <line class="mu-nb mu-nb-10" x1="385" y1="295" x2="370" y2="255"/>
                    <circle class="mu-nn mu-nn-1" cx="378" cy="365" r="3"/>
                    <polygon class="mu-ns mu-ns-6" points="381,328 384,323 387,328 384,333"/>

                    <!-- BOTTOM-LEFT -->
                    <line class="mu-nl mu-nl-5" x1="55" y1="590" x2="15" y2="650"/>
                    <line class="mu-nl mu-nl-6" x1="55" y1="590" x2="110" y2="665"/>
                    <line class="mu-nb mu-nb-1" x1="15" y1="650" x2="0" y2="690"/>
                    <line class="mu-nb mu-nb-2" x1="110" y1="665" x2="140" y2="700"/>
                    <circle class="mu-nn mu-nn-3" cx="55" cy="590" r="3.5"/>
                    <circle class="mu-nn mu-nn-4" cx="15" cy="650" r="2.5"/>
                    <circle class="mu-nnt mu-nnt-6" cx="0" cy="690" r="1.5"/>
                    <text class="mu-glyph mu-glyph-c mu-ns-3" x="30" y="575">REF</text>

                    <!-- BOTTOM-RIGHT -->
                    <line class="mu-nl mu-nl-4" x1="340" y1="610" x2="380" y2="670"/>
                    <line class="mu-nl mu-nl-1" x1="340" y1="610" x2="290" y2="680"/>
                    <line class="mu-nb mu-nb-5" x1="380" y1="670" x2="390" y2="700"/>
                    <line class="mu-nb mu-nb-6" x1="290" y1="680" x2="260" y2="700"/>
                    <circle class="mu-nn mu-nn-5" cx="340" cy="610" r="3.5"/>
                    <circle class="mu-nn mu-nn-6" cx="380" cy="670" r="2.5"/>
                    <text class="mu-glyph mu-glyph-i mu-ns-6" x="350" y="580">0xA3</text>
                </svg>

                <div class="mu-scan-line"></div>

                <div class="mu-content">
                    <div class="mu-status-label">
                        <div class="mu-pulse-dot"></div>
                        Updating situation
                    </div>
                    ${cardsHTML}
                </div>
            </div>
        `;

        // Run animation phases
        const screen = document.getElementById('mu-screen');
        const network = document.getElementById('mu-network');
        const cards = screen.querySelectorAll('.mu-card');
        const scrambles = screen.querySelectorAll('.mu-val-scramble');
        let scrambleIntervals = [];

        const startScramble = () => {
            scrambles.forEach(el => {
                const final = el.dataset.final;
                const isNum = el.dataset.numeric === 'true';
                const interval = setInterval(() => {
                    if (isNum) {
                        let s = '';
                        for (let j = 0; j < final.length; j++) s += scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
                        el.textContent = s;
                    } else {
                        // For text values, scramble with dots/dashes
                        let s = '';
                        for (let j = 0; j < Math.min(final.length, 12); j++) s += '·—·—'[Math.floor(Math.random() * 4)];
                        el.textContent = s;
                    }
                }, 55);
                scrambleIntervals.push(interval);
            });
        };
        const stopScramble = () => {
            scrambleIntervals.forEach(i => clearInterval(i));
            scrambleIntervals = [];
            scrambles.forEach(el => el.textContent = el.dataset.final);
        };

        // Phase 1 (0ms): Metrics + status label appear
        requestAnimationFrame(() => {
            screen.querySelectorAll('.mu-status-label, .mu-card').forEach(el => el.classList.add('mu-active'));
        });

        // Phase 2 (400ms): Network draws in + scan line
        setTimeout(() => {
            screen.querySelectorAll('.mu-nl, .mu-nb, .mu-nn, .mu-nnt, .mu-ns, .mu-glyph').forEach(el => el.classList.add('mu-active'));
            const scanLine = screen.querySelector('.mu-scan-line');
            if (scanLine) scanLine.classList.add('mu-active');
        }, 400);

        // Phase 3 (650ms): Arrow + scramble appear
        setTimeout(() => {
            cards.forEach(c => c.classList.add('mu-show-after'));
        }, 650);

        // Phase 4 (800ms): Network breathes, scramble starts
        setTimeout(() => {
            network.classList.add('mu-breathing');
            startScramble();
        }, 800);

        // Phase 5 (1100ms): Network fades
        setTimeout(() => {
            network.classList.remove('mu-breathing');
            network.classList.add('mu-fading');
        }, 1100);

        // Phase 6 (1300ms): Values resolve
        setTimeout(() => {
            stopScramble();
            cards.forEach(c => c.classList.add('mu-revealing'));
        }, 1300);

        // Phase 7 (2000ms): Exit + callback
        setTimeout(() => {
            screen.classList.add('mu-exiting');
            setTimeout(() => callback(), 350);
        }, 2000);
    },

    // ========================================
    // PHASE 3 — CONSEQUENCE STEPPER
    // User-paced moment-by-moment consequence reveal
    // ========================================

    showConsequenceStepper(option, onComplete) {
        this._csqActive = true;

        const rawMoments = option.consequences.moments;
        if (!rawMoments || rawMoments.length === 0) {
            // Fallback to legacy if no moments data
            this.showStaggeredConsequences(option, onComplete);
            return;
        }

        // Build moments in fixed order: verdict → timeline → marketChart → emerging
        // Extract each type, merge metrics data into chart card
        let metricsData = null;
        let verdictMoment = null;
        let timelineMoment = null;
        let emergingMoment = null;
        for (const m of rawMoments) {
            if (m.type === 'metrics') { metricsData = m; continue; }
            if (m.type === 'verdict') { verdictMoment = m; continue; }
            if (m.type === 'timeline') { timelineMoment = m; continue; }
            if (m.type === 'emerging') { emergingMoment = m; continue; }
        }
        const moments = [];
        if (verdictMoment) moments.push(verdictMoment);
        if (timelineMoment) moments.push(timelineMoment);
        moments.push({ type: 'marketChart', metricsChanges: metricsData ? metricsData.changes : null });
        if (emergingMoment) moments.push(emergingMoment);

        const mainContent = document.getElementById('main-content');
        let currentStep = 0;

        // Render shell
        mainContent.innerHTML = `
            <div class="csq-stepper-bg" id="csq-stepper-bg"></div>
            <div class="csq-stepper" id="csq-stepper-wrap">
                <div class="csq-recap">
                    <span class="csq-recap-label">YOUR STRATEGY</span>
                    <span class="csq-recap-title">${option.title}</span>
                </div>
                <div class="csq-stage" id="csq-stage">
                    <!-- Current moment rendered here -->
                </div>
                <div class="csq-nav-row">
                    <button class="csq-back-btn hidden" id="csq-back-btn">
                        <i class="ph ph-arrow-left"></i>
                    </button>
                    <button class="csq-next-btn" id="csq-next-btn">
                        <span id="csq-next-label">CONTINUE</span>
                        <i class="ph ph-arrow-right"></i>
                    </button>
                </div>
                <div class="csq-pips" id="csq-pips">
                    ${moments.map((_, i) => `<div class="csq-pip ${i === 0 ? 'csq-pip--active' : ''}" data-step="${i}"></div>`).join('')}
                </div>
            </div>
        `;

        const stageEl = document.getElementById('csq-stage');
        const nextBtn = document.getElementById('csq-next-btn');
        const nextLabel = document.getElementById('csq-next-label');
        const backBtn = document.getElementById('csq-back-btn');
        const pipsEl = document.getElementById('csq-pips');
        const bgEl = document.getElementById('csq-stepper-bg');

        // Map moment to background class
        const getBgClass = (moment) => {
            if (moment.type === 'verdict') return `csq-stepper-bg--verdict-${moment.sentiment || 'neutral'}`;
            return `csq-stepper-bg--${moment.type}`;
        };

        // Render a moment into the stage
        const renderMoment = (index) => {
            const moment = moments[index];
            stageEl.classList.remove('csq-stage--visible');

            // Track audio skip if TTS was playing when user navigated away
            if (this._csqSpeaking && window.Analytics) {
                Analytics.trackAudioSkip(moments[currentStep > 0 ? currentStep - 1 : 0]?.type || 'unknown');
            }

            // Stop any active audio
            this._stopCsqAudio();

            // Track consequence step viewed
            if (window.Analytics) Analytics.trackConsequenceStep(index, moment.type, moments.length);

            // Swap background
            bgEl.className = 'csq-stepper-bg ' + getBgClass(moment);

            // Update recap bar text for emerging card
            const recapLabel = document.querySelector('.csq-recap-label');
            const recapTitle = document.querySelector('.csq-recap-title');
            if (recapLabel && recapTitle) {
                if (moment.type === 'emerging') {
                    recapLabel.textContent = 'EMERGING THREAT';
                    recapTitle.textContent = '';
                    recapLabel.style.width = '100%';
                    recapLabel.style.textAlign = 'center';
                } else {
                    recapLabel.textContent = 'YOUR STRATEGY';
                    recapTitle.textContent = option.title;
                    recapLabel.style.width = '';
                    recapLabel.style.textAlign = '';
                }
            }

            // Toggle light mode for light-bg moments (timeline, marketChart, verdict, emerging)
            const stepperWrap = document.getElementById('csq-stepper-wrap');
            const isLightBg = moment.type === 'timeline' || moment.type === 'marketChart' || moment.type === 'emerging' || (moment.type === 'verdict' && moment.sentiment !== 'neutral');
            if (stepperWrap) stepperWrap.classList.toggle('csq-stepper--light', isLightBg);

            // Store timer so _stopCsqAudio() can cancel stale renders
            if (this._csqRenderTimer) clearTimeout(this._csqRenderTimer);
            this._csqRenderTimer = setTimeout(() => {
                this._csqRenderTimer = null;
                if (!this._csqActive) return; // stepper was exited while timer pending

                stageEl.innerHTML = this._renderMoment(moment);
                // Force reflow then animate in
                void stageEl.offsetHeight;
                stageEl.classList.add('csq-stage--visible');

                // Trigger chart animation for combined card
                if (moment.type === 'marketChart') {
                    this._animateChart();
                }

                // Timeline SFX — tick for each event appearing
                if (moment.type === 'timeline' && typeof AudioEngine !== 'undefined') {
                    AudioEngine.playSfx('timelineStart');
                    const evCount = moment.events ? moment.events.length : 0;
                    for (let ei = 0; ei < evCount; ei++) {
                        setTimeout(() => AudioEngine.playSfx('timelineTick'), ei * 375 + 400);
                    }
                }

                // Auto-play TTS for verdict and emerging cards
                if (moment.type === 'verdict' || moment.type === 'emerging') {
                    this._speakMoment(moment);
                }

                // Update pips
                pipsEl.querySelectorAll('.csq-pip').forEach((pip, i) => {
                    pip.classList.toggle('csq-pip--done', i < index);
                    pip.classList.toggle('csq-pip--active', i === index);
                });

                // Show/hide back button
                backBtn.classList.toggle('hidden', index === 0);

                // Update button label — always "CONTINUE"
                nextLabel.textContent = 'CONTINUE';
                nextBtn.querySelector('i').className = 'ph ph-arrow-right';

                // Update metrics bar on chart+metrics moment
                if (moment.type === 'marketChart') {
                    UI.updateMetricsBar(true);
                }

                // Scroll to top so content is visible from the start
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 250);
        };

        // Show first moment immediately
        renderMoment(0);

        // Next button handler
        nextBtn.addEventListener('click', () => {
            currentStep++;
            if (currentStep < moments.length) {
                renderMoment(currentStep);
            } else {
                // Track audio skip if playing when sequence completed
                if (this._csqSpeaking && window.Analytics) {
                    Analytics.trackAudioSkip(moments[currentStep - 1]?.type || 'unknown');
                }
                this._csqActive = false;
                this._stopCsqAudio();
                // Clean up background, then fire completion
                bgEl.remove();
                onComplete();
            }
        });

        // Back button handler
        backBtn.addEventListener('click', () => {
            if (currentStep > 0) {
                currentStep--;
                renderMoment(currentStep);
            }
        });

        // Pip click navigation — allow jumping to any visited (done) or current step
        pipsEl.addEventListener('click', (e) => {
            const pip = e.target.closest('.csq-pip');
            if (!pip) return;
            const targetStep = parseInt(pip.dataset.step, 10);
            if (isNaN(targetStep) || targetStep === currentStep) return;
            // Allow navigating to any step up to the furthest visited
            if (targetStep <= currentStep) {
                currentStep = targetStep;
                renderMoment(currentStep);
            }
        });
    },

    // Render a single moment by type
    _renderMoment(moment) {
        switch (moment.type) {
            case 'verdict':   return this._renderVerdict(moment);
            case 'metrics':   return this._renderMetrics(moment);
            case 'timeline':  return this._renderTimeline(moment);
            case 'emerging':  return this._renderEmerging(moment);
            case 'marketChart': return this._renderMarketChart(moment);
            default:          return `<p>${JSON.stringify(moment)}</p>`;
        }
    },

    _renderVerdict(m) {
        const sentimentClass = {
            positive: 'csq-verdict--positive',
            negative: 'csq-verdict--negative',
            neutral:  'csq-verdict--neutral',
            mixed:    'csq-verdict--mixed'
        }[m.sentiment] || 'csq-verdict--neutral';

        return `
            <div class="csq-verdict ${sentimentClass}">
                <div class="csq-verdict-icon">
                    <i class="ph ph-pulse"></i>
                </div>
                <h2 class="csq-verdict-headline">${m.headline}</h2>
                ${m.subline ? `<p class="csq-verdict-subline">${m.subline}</p>` : ''}
                <button class="csq-voice-btn" id="csq-voice-btn"><i class="ph ph-speaker-high" id="csq-voice-icon"></i></button>
            </div>
        `;
    },

    _renderMetrics(m) {
        const T = (text) => typeof gameState !== 'undefined' ? gameState.resolveTemplate(text) : text;
        return `
            <div class="csq-metrics">
                <div class="csq-metrics-label"><i class="ph ph-chart-line-up"></i> KEY IMPACTS</div>
                <div class="csq-metrics-grid">
                    ${m.changes.map(c => `
                        <div class="csq-metric-item csq-metric--${c.direction}">
                            <span class="csq-metric-name">${T(c.metric)}</span>
                            <span class="csq-metric-change">
                                ${c.direction === 'up' ? '<i class="ph ph-arrow-up"></i>' :
                                  c.direction === 'down' ? '<i class="ph ph-arrow-down"></i>' :
                                  '<i class="ph ph-arrows-horizontal"></i>'}
                                ${T(c.change)}
                            </span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    },

    _renderTimeline(m) {
        const T = (text) => typeof gameState !== 'undefined' ? gameState.resolveTemplate(text) : text;
        return `
            <div class="csq-timeline">
                <div class="csq-timeline-label"><i class="ph ph-clock-countdown"></i> TIMELINE</div>
                <div class="csq-timeline-events">
                    ${m.events.map((ev, i) => `
                        <div class="csq-timeline-event csq-event--${ev.mood}" style="animation-delay: ${i * 0.375}s">
                            <span class="csq-event-date">${ev.date}</span>
                            <span class="csq-event-text">${T(ev.text)}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    },

    _renderEmerging(m) {
        return `
            <div class="csq-emerging">
                <div class="csq-emerging-icon"><i class="ph ph-${m.icon || 'lightning'}"></i></div>
                <h2 class="csq-emerging-headline">${m.headline}</h2>
                <p class="csq-emerging-body">${m.body}</p>
                ${m.closing ? `<p class="csq-emerging-closing">${m.closing}</p>` : ''}
                <button class="csq-voice-btn" id="csq-voice-btn"><i class="ph ph-speaker-high" id="csq-voice-icon"></i></button>
            </div>
        `;
    },

    // ── Market Share Chart + Metrics (animated from prev → current) ──────
    _renderMarketChart(m) {
        const metrics = typeof gameState !== 'undefined' ? gameState.metrics : {};
        const prev = typeof gameState !== 'undefined' ? gameState.previousMetrics : {};
        const initial = typeof scenarioData !== 'undefined' ? scenarioData.initialMetrics : {};

        // Helper: get share value safely (0 is valid, only use fallback for undefined)
        const v = (obj, key, fallback) => obj[key] !== undefined ? obj[key] : fallback;

        // Metric key mapping
        const metricKey = { nokia: 'nokiaShare', msft: 'marketShare', bb: 'bbShare', apple: 'appleShare', android: 'googleShare' };

        // Detect absorbed entities: both prev AND current share are 0
        // (e.g., Nokia after acquisition — share folded into MSFT)
        const isAbsorbed = (key) => {
            const mk = metricKey[key];
            return v(prev, mk, -1) === 0 && v(metrics, mk, -1) === 0;
        };

        // Build a 3-point time series: initial → previous → current
        // Absorbed entities get [0,0,0] so no line draws
        const series = {
            nokia:   isAbsorbed('nokia')   ? [0,0,0] : [v(initial,'nokiaShare',49),   v(prev,'nokiaShare',49),   v(metrics,'nokiaShare',49)],
            msft:    [v(initial,'marketShare',42), v(prev,'marketShare',42), v(metrics,'marketShare',42)],
            bb:      isAbsorbed('bb')      ? [0,0,0] : [v(initial,'bbShare',9),        v(prev,'bbShare',9),       v(metrics,'bbShare',9)],
            apple:   [v(initial,'appleShare',0),   v(prev,'appleShare',0),   v(metrics,'appleShare',0)],
            android: [v(initial,'googleShare',0),  v(prev,'googleShare',0),  v(metrics,'googleShare',0)]
        };

        // All possible entities with display metadata
        const allOrder = [
            { key: 'nokia', label: 'Nokia', color: '#3A6B8C', bg: 'rgba(58,107,140,0.12)' },
            { key: 'msft', label: 'MSFT', color: '#E8856C', bg: 'rgba(232,133,108,0.15)', you: true },
            { key: 'bb', label: 'BlackBerry', color: '#5A5856', bg: 'rgba(90,88,86,0.08)' },
            { key: 'apple', label: 'Apple', color: '#4A8C6F', bg: 'rgba(74,140,111,0.10)' },
            { key: 'android', label: 'Android', color: '#8B9A3A', bg: 'rgba(139,154,58,0.10)' }
        ];

        // Filter out absorbed entities — they don't show on chart, legend, or delta cards
        const order = allOrder.filter(p => p.key === 'msft' || !isAbsorbed(p.key));

        // Delta cards (only active entities)
        const deltasHTML = order.map(p => {
            const mk = metricKey[p.key];
            const val = v(metrics, mk, 0);
            const prevVal = v(prev, mk, 0);
            const delta = Math.round(val - prevVal);
            const deltaStr = delta > 0 ? `+${delta}` : delta < 0 ? `${delta}` : '--';
            const deltaClass = delta > 0 ? 'csq-lc-delta-up' : delta < 0 ? 'csq-lc-delta-down' : 'csq-lc-delta-flat';
            return `<div class="csq-lc-delta-card${p.you ? ' csq-lc-delta-card--you' : ''}" style="background:${p.bg}">
                <div class="csq-lc-delta-val" style="color:${p.color}">${Math.round(val)}%</div>
                <div class="csq-lc-delta-name">${p.label}</div>
                <div class="csq-lc-delta-badge ${deltaClass}">${deltaStr}</div>
            </div>`;
        }).join('');

        // Dynamic legend (only active entities)
        const legendHTML = order.map(p =>
            `<span class="csq-lc-leg${p.you ? ' csq-lc-leg--you' : ''}"><span class="csq-lc-dot" style="background:${p.color}"></span>${p.key === 'msft' ? 'Microsoft' : p.label}</span>`
        ).join('');

        // SVG endpoint labels (only active entities)
        const endpointSVG = order.map(p =>
            `<text class="csq-lc-endpoint" id="lc-lbl-${p.key}" fill="${p.color}"></text>`
        ).join('\n                        ');

        // Embed series data + active keys as JSON for the animation script
        const chartData = { series, activeKeys: order.map(p => p.key) };

        return `
            <div class="csq-line-chart" id="csq-line-chart">
                <script type="application/json" id="csq-chart-data">${JSON.stringify(chartData)}</script>
                <div class="csq-lc-header">
                    <span class="csq-lc-header-label">MARKET SHARE</span>
                    <span class="csq-lc-header-date" id="csq-lc-date">${prev.date || ''}</span>
                </div>
                <div class="csq-lc-legend" id="csq-lc-legend">${legendHTML}</div>
                <div class="csq-lc-chart-wrap">
                    <canvas id="csq-lc-canvas" class="csq-lc-canvas"></canvas>
                    <svg id="csq-lc-svg" class="csq-lc-svg" viewBox="0 0 380 260" preserveAspectRatio="xMidYMid meet">
                        <line class="csq-lc-decision-line" id="csq-lc-dline" x1="0" y1="16" x2="0" y2="240"/>
                        <text class="csq-lc-decision-tag" id="csq-lc-dtag" x="0" y="10" text-anchor="middle">Your call</text>
                        ${endpointSVG}
                    </svg>
                </div>
                <div class="csq-lc-deltas" id="csq-lc-deltas">${deltasHTML}</div>
            </div>
        `;
    },

    // Trigger line chart animation after moment is rendered
    _animateChart() {
        const dataEl = document.getElementById('csq-chart-data');
        if (!dataEl) return;
        const chartData = JSON.parse(dataEl.textContent);
        const series = chartData.series || chartData; // support new {series, activeKeys} format
        const activeKeys = chartData.activeKeys || ['nokia', 'msft', 'bb', 'apple', 'android'];
        const canvas = document.getElementById('csq-lc-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const dpr = window.devicePixelRatio || 2;

        const rect = canvas.parentElement.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        canvas.style.width = rect.width + 'px';
        canvas.style.height = rect.height + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        const pad = { top: 24, right: 44, bottom: 24, left: 32 };
        const cW = rect.width - pad.left - pad.right;
        const cH = rect.height - pad.top - pad.bottom;
        const labels = ['Before', 'Decision', 'After'];
        const decisionIdx = 1;
        const maxVal = 60;

        const xPos = (i) => pad.left + (i / (labels.length - 1)) * cW;
        const yPos = (v) => pad.top + (1 - v / maxVal) * cH;

        const colors = {
            nokia:   { line: '#3A6B8C', fill: 'rgba(58,107,140,0.08)' },
            msft:    { line: '#E8856C', fill: 'rgba(232,133,108,0.12)' },
            bb:      { line: '#5A5856', fill: 'rgba(90,88,86,0.06)' },
            apple:   { line: '#4A8C6F', fill: 'rgba(74,140,111,0.08)' },
            android: { line: '#8B9A3A', fill: 'rgba(139,154,58,0.08)' }
        };
        const order = activeKeys;

        function drawGrid(alpha) {
            ctx.save();
            ctx.globalAlpha = alpha;
            ctx.strokeStyle = 'rgba(26,23,24,0.06)';
            ctx.lineWidth = 0.5;
            for (let v = 0; v <= maxVal; v += 15) {
                const y = yPos(v);
                ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(pad.left + cW, y); ctx.stroke();
                ctx.fillStyle = 'rgba(26,23,24,0.25)';
                ctx.font = '9px "SF Mono", monospace';
                ctx.textAlign = 'right';
                ctx.fillText(v + '%', pad.left - 6, y + 3);
            }
            ctx.restore();
        }

        function drawArea(key, upToFloat) {
            const d = series[key];
            const c = colors[key];
            const maxI = Math.min(Math.floor(upToFloat), d.length - 1);
            const frac = upToFloat - Math.floor(upToFloat);
            if (maxI < 0) return;

            let allZero = true;
            for (let i = 0; i <= maxI; i++) { if (d[i] > 0) { allZero = false; break; } }
            if (allZero && (maxI >= d.length - 1 || frac === 0 || d[maxI + 1] === 0)) return;

            const interpVal = maxI < d.length - 1 && frac > 0 ? d[maxI] + (d[maxI + 1] - d[maxI]) * frac : d[maxI];
            const lastX = maxI < d.length - 1 && frac > 0 ? xPos(maxI + frac) : xPos(maxI);
            const lastY = yPos(interpVal);

            ctx.save();
            const aP = new Path2D();
            aP.moveTo(xPos(0), yPos(d[0]));
            for (let i = 1; i <= maxI; i++) aP.lineTo(xPos(i), yPos(d[i]));
            if (maxI < d.length - 1 && frac > 0) aP.lineTo(lastX, lastY);
            aP.lineTo(lastX, yPos(0)); aP.lineTo(xPos(0), yPos(0)); aP.closePath();
            ctx.fillStyle = c.fill; ctx.fill(aP);
            ctx.restore();

            ctx.beginPath();
            ctx.moveTo(xPos(0), yPos(d[0]));
            for (let i = 1; i <= maxI; i++) ctx.lineTo(xPos(i), yPos(d[i]));
            if (maxI < d.length - 1 && frac > 0) ctx.lineTo(lastX, lastY);
            ctx.strokeStyle = c.line;
            ctx.lineWidth = key === 'msft' ? 2.5 : 1.5;
            ctx.lineJoin = 'round'; ctx.stroke();

            if (interpVal > 0) {
                ctx.beginPath();
                ctx.arc(lastX, lastY, key === 'msft' ? 4 : 3, 0, Math.PI * 2);
                ctx.fillStyle = c.line; ctx.fill();
            }
        }

        const svgVB = { w: 380, h: 260 };
        const toSvgX = (cx) => (cx / rect.width) * svgVB.w;
        const toSvgY = (cy) => (cy / rect.height) * svgVB.h;

        function updateEndpointLabels(progress) {
            const allLbls = [
                { key: 'nokia', id: 'lc-lbl-nokia', off: -4 },
                { key: 'msft', id: 'lc-lbl-msft', off: 0 },
                { key: 'bb', id: 'lc-lbl-bb', off: 2 },
                { key: 'apple', id: 'lc-lbl-apple', off: 4 },
                { key: 'android', id: 'lc-lbl-android', off: 6 }
            ];
            const lbls = allLbls.filter(l => activeKeys.includes(l.key));
            const maxI = Math.min(Math.floor(progress), labels.length - 1);
            const frac = progress - Math.floor(progress);
            lbls.forEach(s => {
                const d = series[s.key];
                let val, cx, cy;
                if (maxI < d.length - 1 && frac > 0) {
                    val = d[maxI] + (d[maxI + 1] - d[maxI]) * frac;
                    cx = xPos(maxI + frac); cy = yPos(val);
                } else {
                    val = d[Math.min(maxI, d.length - 1)];
                    cx = xPos(Math.min(maxI, d.length - 1)); cy = yPos(val);
                }
                const el = document.getElementById(s.id);
                if (!el) return;
                if (Math.round(val) === 0) { el.setAttribute('opacity', '0'); }
                else {
                    el.removeAttribute('opacity');
                    el.setAttribute('x', toSvgX(cx) + 12);
                    el.setAttribute('y', toSvgY(cy) + 3 + s.off);
                    el.textContent = Math.round(val) + '%';
                }
            });
        }

        // Set decision line
        const dlX = toSvgX(xPos(decisionIdx));
        const dline = document.getElementById('csq-lc-dline');
        const dtag = document.getElementById('csq-lc-dtag');
        if (dline) { dline.setAttribute('x1', dlX); dline.setAttribute('x2', dlX); }
        if (dtag) dtag.setAttribute('x', dlX);

        // Animation phases
        const ease = (t) => t < 0.5 ? 2*t*t : -1+(4-2*t)*t;
        const phases = {
            gridFade:    { start: 0, end: 300 },
            drawHist:    { start: 200, end: 1000 },
            decisionIn:  { start: 800, end: 1100 },
            drawNew:     { start: 1400, end: 2200 },
            labelsIn:    { start: 2000, end: 2400 },
            deltasIn:    { start: 2400, end: 2800 }
        };
        let startTime = 0;
        let decisionShown = false;
        let labelsShown = false;
        let deltasShown = false;
        let legendShown = false;

        function animate(ts) {
            if (!startTime) startTime = ts;
            const elapsed = ts - startTime;
            ctx.clearRect(0, 0, rect.width, rect.height);

            if (!legendShown && elapsed > 100) {
                legendShown = true;
                const leg = document.getElementById('csq-lc-legend');
                if (leg) leg.style.opacity = '1';
            }

            const gridT = ease(Math.max(0, Math.min(1, (elapsed - phases.gridFade.start) / (phases.gridFade.end - phases.gridFade.start))));
            drawGrid(gridT);

            const histT = ease(Math.max(0, Math.min(1, (elapsed - phases.drawHist.start) / (phases.drawHist.end - phases.drawHist.start))));
            const histProgress = histT * decisionIdx;
            order.forEach(key => drawArea(key, histProgress));

            if (!decisionShown && elapsed > phases.decisionIn.start) {
                decisionShown = true;
                if (dline) { dline.style.opacity = '0.5'; dline.style.strokeDasharray = '3,3'; dline.style.stroke = '#E8856C'; }
                if (dtag) dtag.style.opacity = '0.65';
            }

            if (elapsed > phases.drawNew.start) {
                const newT = ease(Math.max(0, Math.min(1, (elapsed - phases.drawNew.start) / (phases.drawNew.end - phases.drawNew.start))));
                const totalProgress = decisionIdx + newT * (labels.length - 1 - decisionIdx);
                ctx.clearRect(0, 0, rect.width, rect.height);
                drawGrid(1);
                order.forEach(key => drawArea(key, totalProgress));
                updateEndpointLabels(totalProgress);
            } else {
                updateEndpointLabels(histProgress);
            }

            if (!labelsShown && elapsed > phases.labelsIn.start) {
                labelsShown = true;
                document.querySelectorAll('.csq-lc-endpoint').forEach(el => el.style.opacity = '1');
            }

            if (!deltasShown && elapsed > phases.deltasIn.start) {
                deltasShown = true;
                document.querySelectorAll('.csq-lc-delta-card').forEach((el, i) => {
                    el.style.transition = `opacity 0.4s ease ${i * 0.08}s, transform 0.4s ease ${i * 0.08}s`;
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                });
            }

            if (elapsed < phases.deltasIn.end + 500) {
                requestAnimationFrame(animate);
            }
        }
        requestAnimationFrame(animate);
    },

    // ── Pre-generated MP3 narration for consequence moments ──
    _csqSpeaking: false,
    _csqAudio: null,
    _csqSpeechTimer: null,
    _csqRenderTimer: null,
    _csqActive: false,

    // Build the narration text for a moment (same logic as generate-audio.js)
    _getMomentNarrationText(moment) {
        if (moment.type === 'verdict') {
            return [moment.headline, moment.subline].filter(Boolean)
                .map(t => t.replace(/<[^>]+>/g, '')).join('. ');
        }
        if (moment.type === 'emerging') {
            return [moment.headline, moment.body, moment.closing].filter(Boolean)
                .map(t => t.replace(/<[^>]+>/g, '')).join('. ');
        }
        return '';
    },

    // Compute MD5 hash matching Narration.textHash (same algorithm)
    _csqTextHash(rawText) {
        if (typeof Narration !== 'undefined' && Narration.textHash) {
            return Narration.textHash(rawText);
        }
        // Fallback: clean then hash — but Narration should always be available
        return '';
    },

    _speakMoment(moment) {
        if (!this._csqActive) return; // stepper already exited
        this._stopCsqAudio();

        const fullText = this._getMomentNarrationText(moment);
        if (!fullText) return;

        const audioHash = this._csqTextHash(fullText);
        if (!audioHash) return;
        const audioSrc = `assets/audio/story-${audioHash}.mp3`;

        const btn = document.getElementById('csq-voice-btn');
        const icon = document.getElementById('csq-voice-icon');

        const markSpeaking = () => {
            this._csqSpeaking = true;
            if (icon) icon.className = 'ph ph-speaker-x';
            if (btn) btn.classList.add('speaking');
            if (typeof AudioEngine !== 'undefined' && AudioEngine.isStarted()) AudioEngine.duckVolume(true);
        };

        const markDone = () => {
            this._csqSpeaking = false;
            if (icon) icon.className = 'ph ph-speaker-high';
            if (btn) btn.classList.remove('speaking');
            if (typeof AudioEngine !== 'undefined' && AudioEngine.isStarted()) AudioEngine.duckVolume(false);
        };

        // Delay audio creation to avoid premature loading — create and play after 1.5s
        this._csqSpeechTimer = setTimeout(() => {
            if (!this._csqActive) return; // stepper exited while timer pending

            const audio = new Audio();
            this._csqAudio = audio;

            // Respect global mute
            if (typeof AudioEngine !== 'undefined' && AudioEngine.isMuted()) {
                audio.muted = true;
            }

            audio.addEventListener('canplaythrough', () => {
                const playPromise = audio.play();
                if (playPromise !== undefined) {
                    playPromise.then(markSpeaking).catch(markDone);
                } else {
                    markSpeaking();
                }
            }, { once: true });

            audio.addEventListener('ended', markDone);
            audio.addEventListener('error', () => {
                console.warn('Consequence audio not found:', audioSrc, '— falling back to silent');
                markDone();
            });

            // Wire toggle button
            if (btn) {
                btn.onclick = () => {
                    if (this._csqSpeaking) {
                        this._stopCsqAudio();
                    } else {
                        audio.currentTime = 0;
                        const p = audio.play();
                        if (p !== undefined) p.then(markSpeaking).catch(markDone);
                        else markSpeaking();
                    }
                };
            }

            // Set src and load — triggers canplaythrough → play
            audio.src = audioSrc;
            audio.load();
        }, 1500);
    },

    _stopCsqAudio() {
        // Clear the 250ms render timer (prevents stale _speakMoment calls)
        if (this._csqRenderTimer) { clearTimeout(this._csqRenderTimer); this._csqRenderTimer = null; }
        if (this._csqSpeechTimer) { clearTimeout(this._csqSpeechTimer); this._csqSpeechTimer = null; }
        if (this._csqAudio) {
            this._csqAudio.pause();
            this._csqAudio.removeAttribute('src');
            this._csqAudio = null;
        }
        this._csqSpeaking = false;
        if (typeof AudioEngine !== 'undefined' && AudioEngine.isStarted()) AudioEngine.duckVolume(false);
    }
};
