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
                    { label: "iPhone Pre-orders", oldValue: "—", newValue: "270K" },
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
                        Continue →
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
                delay: 2000,
                type: 'ripple-1',
                title: 'FIRST RIPPLE EFFECTS',
                content: narrativeParagraphs[1] || 'Market responds to the announcement.'
            },
            {
                delay: 2000,
                type: 'ripple-2',
                title: 'MARKET RESPONSE',
                content: narrativeParagraphs[2] || 'Analysts weigh in on the decision.'
            },
            {
                delay: 2000,
                type: 'impact',
                title: 'KEY METRICS IMPACT',
                content: this.generateImpactHTML(consequences)
            }
        ];

        // If there are delayed consequences, add them
        if (option.consequences.delayed) {
            revealSequence.push({
                delay: 2000,
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
        const mainContent = document.getElementById('main-content');
        const decisionPoint = gameState.getCurrentDecisionPoint();
        const chapter = decisionPoint?.chapter;

        if (!chapter) {
            // No chapter data — fall back to legacy transition
            this.showPreDecisionTransition(callback);
            return;
        }

        const imageSlug = this._slugify(chapter.title);
        const imagePath = `assets/images/chapters/chapter-${imageSlug}.png`;

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
                        <i class="ph ph-arrow-right"></i>
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

        mainContent.innerHTML = `
            <div class="metrics-loader">
                <div class="metrics-loader-inner">
                    <div class="metrics-loader-header">
                        <div class="metrics-loader-spinner"></div>
                        <span class="metrics-loader-label">Updating situation...</span>
                    </div>
                    <div class="metrics-loader-indicators">
                        ${transitionMessages.indicators.map((ind, i) => `
                            <div class="metrics-loader-ind" style="animation-delay: ${0.3 + i * 0.35}s">
                                <span class="ml-ind-label">${ind.label}</span>
                                <span class="ml-ind-values">
                                    <span class="ml-ind-old">${ind.oldValue}</span>
                                    <span class="ml-ind-arrow"><i class="ph ph-arrow-right"></i></span>
                                    <span class="ml-ind-new">${ind.newValue}</span>
                                </span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;

        // Auto-advance after indicators animate in
        const totalDelay = 0.3 + transitionMessages.indicators.length * 0.35 + 1.2;
        setTimeout(() => {
            // Fade out
            const loader = mainContent.querySelector('.metrics-loader');
            if (loader) loader.style.opacity = '0';
            setTimeout(() => callback(), 400);
        }, totalDelay * 1000);
    },

    // ========================================
    // PHASE 3 — CONSEQUENCE STEPPER
    // User-paced moment-by-moment consequence reveal
    // ========================================

    showConsequenceStepper(option, onComplete) {
        const rawMoments = option.consequences.moments;
        if (!rawMoments || rawMoments.length === 0) {
            // Fallback to legacy if no moments data
            this.showStaggeredConsequences(option, onComplete);
            return;
        }

        // Auto-inject market share chart after metrics moment (or after verdict)
        const moments = [];
        let chartInserted = false;
        for (const m of rawMoments) {
            moments.push(m);
            if (!chartInserted && (m.type === 'metrics' || m.type === 'verdict')) {
                moments.push({ type: 'marketChart' });
                chartInserted = true;
            }
        }
        // If no metrics/verdict, add chart at the end
        if (!chartInserted) {
            moments.push({ type: 'marketChart' });
        }

        const mainContent = document.getElementById('main-content');
        let currentStep = 0;

        // Render shell
        mainContent.innerHTML = `
            <div class="csq-stepper-bg" id="csq-stepper-bg"></div>
            <div class="csq-stepper">
                <div class="csq-recap">
                    <span class="csq-recap-label">YOUR CALL</span>
                    <span class="csq-recap-title">${option.title}</span>
                </div>
                <div class="csq-stage" id="csq-stage">
                    <!-- Current moment rendered here -->
                </div>
                <button class="csq-next-btn" id="csq-next-btn">
                    <span id="csq-next-label">SEE WHAT HAPPENS</span>
                    <i class="ph ph-arrow-right"></i>
                </button>
                <div class="csq-pips" id="csq-pips">
                    ${moments.map((_, i) => `<div class="csq-pip ${i === 0 ? 'csq-pip--active' : ''}" data-step="${i}"></div>`).join('')}
                </div>
            </div>
        `;

        const stageEl = document.getElementById('csq-stage');
        const nextBtn = document.getElementById('csq-next-btn');
        const nextLabel = document.getElementById('csq-next-label');
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

            // Swap background
            bgEl.className = 'csq-stepper-bg ' + getBgClass(moment);

            setTimeout(() => {
                stageEl.innerHTML = this._renderMoment(moment);
                // Force reflow then animate in
                void stageEl.offsetHeight;
                stageEl.classList.add('csq-stage--visible');

                // Update pips
                pipsEl.querySelectorAll('.csq-pip').forEach((pip, i) => {
                    pip.classList.toggle('csq-pip--done', i < index);
                    pip.classList.toggle('csq-pip--active', i === index);
                });

                // Update button label
                if (index === moments.length - 1) {
                    nextLabel.textContent = 'CONTINUE';
                    nextBtn.querySelector('i').className = 'ph ph-arrow-right';
                } else {
                    const nextMoment = moments[index + 1];
                    const labels = {
                        verdict: 'THE VERDICT',
                        metrics: 'IMPACT',
                        marketChart: 'MARKET LANDSCAPE',
                        timeline: 'WHAT HAPPENS NEXT',
                        emerging: 'BUT THEN...'
                    };
                    nextLabel.textContent = labels[nextMoment.type] || 'NEXT';
                }

                // Update metrics bar on metrics moment
                if (moment.type === 'metrics') {
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
                // Clean up background, then fire completion
                bgEl.remove();
                onComplete();
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
                    ${m.sentiment === 'positive' ? '<i class="ph ph-check-circle"></i>' :
                      m.sentiment === 'negative' ? '<i class="ph ph-warning-circle"></i>' :
                      '<i class="ph ph-minus-circle"></i>'}
                </div>
                <h2 class="csq-verdict-headline">${m.headline}</h2>
                ${m.subline ? `<p class="csq-verdict-subline">${m.subline}</p>` : ''}
            </div>
        `;
    },

    _renderMetrics(m) {
        return `
            <div class="csq-metrics">
                <div class="csq-metrics-label"><i class="ph ph-chart-line-up"></i> KEY IMPACTS</div>
                <div class="csq-metrics-grid">
                    ${m.changes.map(c => `
                        <div class="csq-metric-item csq-metric--${c.direction}">
                            <span class="csq-metric-name">${c.metric}</span>
                            <span class="csq-metric-change">
                                ${c.direction === 'up' ? '<i class="ph ph-arrow-up"></i>' :
                                  c.direction === 'down' ? '<i class="ph ph-arrow-down"></i>' :
                                  '<i class="ph ph-arrows-horizontal"></i>'}
                                ${c.change}
                            </span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    },

    _renderTimeline(m) {
        return `
            <div class="csq-timeline">
                <div class="csq-timeline-label"><i class="ph ph-clock-countdown"></i> TIMELINE</div>
                <div class="csq-timeline-events">
                    ${m.events.map((ev, i) => `
                        <div class="csq-timeline-event csq-event--${ev.mood}" style="animation-delay: ${i * 0.15}s">
                            <span class="csq-event-date">${ev.date}</span>
                            <span class="csq-event-text">${ev.text}</span>
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
            </div>
        `;
    },

    // ── Market Share Chart (animated horizontal bars) ──────────────────────
    _renderMarketChart(m) {
        // Pull live metrics from gameState + previous snapshot
        const metrics = typeof gameState !== 'undefined' ? gameState.metrics : {};
        const prev = typeof gameState !== 'undefined' ? gameState.previousMetrics : {};

        const players = [
            { label: 'Windows Mobile', share: metrics.marketShare || 0, prev: prev.marketShare || 0, color: '#D4A08C', you: true },
            { label: 'Nokia / Symbian', share: metrics.nokiaShare || 0, prev: prev.nokiaShare || 0, color: '#5B8DEF' },
            { label: 'Apple iOS', share: metrics.appleShare || 0, prev: prev.appleShare || 0, color: '#A0A0A0' },
            { label: 'Android', share: metrics.googleShare || 0, prev: prev.googleShare || 0, color: '#7BC67E' },
            { label: 'BlackBerry', share: metrics.bbShare || 0, prev: prev.bbShare || 0, color: '#888' },
        ].filter(p => p.share > 0 || p.you);

        // Sort by share descending, but keep "you" visually prominent
        players.sort((a, b) => b.share - a.share);

        const maxShare = Math.max(...players.map(p => Math.max(p.share, p.prev)), 1);

        return `
            <div class="csq-market-chart">
                <div class="csq-chart-label"><i class="ph ph-chart-bar-horizontal"></i> MARKET SHARE</div>
                <div class="csq-chart-date">${metrics.date || ''}</div>
                <div class="csq-chart-bars">
                    ${players.map((p, i) => {
                        const delta = p.share - p.prev;
                        const deltaStr = delta > 0 ? `+${delta}%` : delta < 0 ? `${delta}%` : '—';
                        const deltaClass = delta > 0 ? 'up' : delta < 0 ? 'down' : 'flat';
                        const barWidth = Math.max((p.share / maxShare) * 100, 2);
                        const prevWidth = Math.max((p.prev / maxShare) * 100, 2);
                        return `
                            <div class="csq-chart-row ${p.you ? 'csq-chart-row--you' : ''}" style="animation-delay: ${i * 0.12}s">
                                <div class="csq-chart-row-header">
                                    <span class="csq-chart-player">${p.label}${p.you ? ' <span class="csq-you-tag">YOU</span>' : ''}</span>
                                    <span class="csq-chart-share">${p.share}%</span>
                                </div>
                                <div class="csq-chart-track">
                                    <div class="csq-chart-bar-ghost" style="width: ${prevWidth}%"></div>
                                    <div class="csq-chart-bar" style="--bar-target: ${barWidth}%; --bar-color: ${p.color}; animation-delay: ${0.3 + i * 0.12}s"></div>
                                </div>
                                <div class="csq-chart-delta csq-delta--${deltaClass}">${deltaStr}</div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }
};
