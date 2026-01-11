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

        // Trigger callback after 5 seconds
        setTimeout(() => {
            callback();
        }, 5000);
    },

    // Get context-aware transition messages based on decision point
    getTransitionMessages(decisionPoint) {
        // Default messages
        const messages = {
            mainLabel: "Analyzing market data...",
            indicators: [
                { label: "iPhone Market Share", oldValue: "0%", newValue: "2%" },
                { label: "Developer Sentiment", oldValue: "Skeptical", newValue: "Curious" },
                { label: "Enterprise Demand", oldValue: "Stable", newValue: "Shifting" }
            ]
        };

        // Customize based on decision point ID
        switch(decisionPoint.id) {
            case "d1-iphone-response":
                messages.mainLabel = "Q1 2007 concluding...";
                messages.indicators = [
                    { label: "iPhone Pre-orders", oldValue: "—", newValue: "270K" },
                    { label: "Media Coverage", oldValue: "Neutral", newValue: "Enthusiastic" },
                    { label: "Carrier Interest", oldValue: "AT&T Exclusive", newValue: "Others Watching" }
                ];
                break;

            case "d2-android-response":
                messages.mainLabel = "Q4 2007 ending...";
                messages.indicators = [
                    { label: "iPhone Market Share", oldValue: "2%", newValue: "8%" },
                    { label: "Android Announcements", oldValue: "SDK Beta", newValue: "30+ OEMs Interested" },
                    { label: "WinMobile Developer Activity", oldValue: "Declining", newValue: "Accelerating Decline" }
                ];
                break;

            default:
                messages.mainLabel = "Quarter concluding...";
        }

        return messages;
    },

    // Show staggered consequence reveals
    showStaggeredConsequences(option, onComplete) {
        const consequences = option.consequences.immediate;
        const mainContent = document.getElementById('main-content');

        // Initial screen with decision recap
        mainContent.innerHTML = `
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
        if (consequences.delayed) {
            revealSequence.push({
                delay: 2000,
                type: 'delayed',
                title: 'EMERGING CONCERNS',
                content: `<div class="delayed-warning">${consequences.delayed.narrative}</div>`
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
                label: 'Cash Position',
                value: `${consequences.cash > 0 ? '+' : ''}$${Math.abs(consequences.cash).toFixed(1)}B`,
                positive: consequences.cash > 0
            });
        }
        if (consequences.stock !== 0) {
            changes.push({
                label: 'Stock Price',
                value: `${consequences.stock > 0 ? '+' : ''}$${Math.abs(consequences.stock).toFixed(2)}`,
                positive: consequences.stock > 0
            });
        }
        if (consequences.marketShare !== 0) {
            changes.push({
                label: 'Market Share',
                value: `${consequences.marketShare > 0 ? '+' : ''}${consequences.marketShare}%`,
                positive: consequences.marketShare > 0
            });
        }
        if (consequences.morale) {
            const moraleLabel = consequences.morale.charAt(0).toUpperCase() + consequences.morale.slice(1);
            changes.push({
                label: 'Team Morale',
                value: moraleLabel,
                positive: ['optimistic', 'hopeful', 'neutral'].includes(consequences.morale)
            });
        }

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
    }
};
