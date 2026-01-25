// ========================================
// AURORA LABS - UI RENDERING
// ========================================

const UI = {
    // Update metrics bar
    updateMetricsBar(showArrows = false) {
        const metrics = gameState.getFormattedMetrics();

        // Update P&L metric (replaced marketCap)
        this.updatePLMetric(metrics, showArrows);
        this.updateMetricWithArrow('share-metric', metrics.marketShare, 'marketShare', showArrows);

        // Update date metric (no arrow)
        document.getElementById('date-metric').textContent = metrics.date;

        // Add animation class for changes
        if (showArrows) {
            this.animateMetricChange('pl-metric');
            this.animateMetricChange('share-metric');
        }
    },

    // Update P&L metric and breakdown popup
    updatePLMetric(metrics, showArrow) {
        const plElement = document.getElementById('pl-metric');
        const revenueElement = document.getElementById('pl-revenue');
        const costsElement = document.getElementById('pl-costs');

        if (plElement) {
            // Update main P&L value
            plElement.textContent = metrics.mobilePL;

            // Add color class based on P&L
            plElement.classList.remove('positive', 'negative');
            if (metrics.mobilePLRaw > 0) {
                plElement.classList.add('positive');
            } else if (metrics.mobilePLRaw < 0) {
                plElement.classList.add('negative');
            }
        }

        // Update breakdown popup values
        if (revenueElement) {
            revenueElement.textContent = metrics.mobileRevenue;
        }
        if (costsElement) {
            costsElement.textContent = metrics.mobileCosts;
        }
    },

    // Update metric with arrow indicator
    updateMetricWithArrow(elementId, value, metricName, showArrow) {
        const element = document.getElementById(elementId);
        const change = gameState.getMetricChange(metricName);

        // Remove existing arrow
        const existingArrow = element.querySelector('.metric-arrow');
        if (existingArrow) {
            existingArrow.remove();
        }

        // Update text
        const textNode = element.childNodes[0];
        if (textNode) {
            textNode.textContent = value;
        } else {
            element.textContent = value;
        }

        // Add arrow if there's a change and we should show it
        if (showArrow && change !== 'neutral') {
            const arrow = document.createElement('span');
            arrow.className = `metric-arrow ${change} show`;
            arrow.textContent = change === 'up' ? '▲' : '▼';
            element.appendChild(arrow);
        }
    },

    // Animate metric change
    animateMetricChange(elementId) {
        const element = document.getElementById(elementId);
        element.classList.add('metric-change');
        setTimeout(() => {
            element.classList.remove('metric-change');
        }, 1000);
    },

    // Update progress indicator (both badge and bar)
    updateProgressIndicator() {
        const progress = gameState.getProgress();

        // Update progress badge (Option 3: integrated with DATE)
        const progressBadge = document.getElementById('progress-badge');
        if (progressBadge) {
            progressBadge.textContent = `${progress.completed}/${progress.total}`;
        }

        // Update progress bar (Option 1: thin bar below metrics)
        const progressBarFill = document.getElementById('progress-bar-fill');
        if (progressBarFill) {
            progressBarFill.style.width = `${progress.percentage}%`;
        }
    },

    // Render journey modal content
    renderJourneyModal() {
        const progress = gameState.getProgress();
        const journey = gameState.getJourneyData();
        const modalBody = document.getElementById('journey-modal-body');

        let html = `
            <div class="journey-progress-header">
                <div class="journey-percentage">${progress.percentage}%</div>
                <div class="journey-subtitle">${progress.completed} of ${progress.total} decisions made</div>
            </div>
        `;

        if (journey.length === 0) {
            html += `<div class="journey-empty">Your journey has just begun. Make decisions to see your path unfold.</div>`;
        } else {
            html += `<div class="journey-timeline">`;

            // Show completed decisions
            journey.forEach((step) => {
                html += `
                    <div class="journey-step completed">
                        <div class="journey-step-dot"></div>
                        <div class="journey-step-time">${step.timeMarker}</div>
                        <div class="journey-step-title">${step.title}</div>
                        <div class="journey-step-choice">→ ${step.chosenOption}</div>
                    </div>
                `;
            });

            // Show current decision if not complete
            if (!progress.isComplete) {
                const currentDecision = gameState.getCurrentDecisionPoint();
                if (currentDecision) {
                    html += `
                        <div class="journey-step current">
                            <div class="journey-step-dot"></div>
                            <div class="journey-step-time">${currentDecision.timeMarker}</div>
                            <div class="journey-step-title">${currentDecision.title}</div>
                        </div>
                    `;
                }
            }

            html += `</div>`;
        }

        modalBody.innerHTML = html;
    },

    // Show journey modal
    showJourneyModal() {
        // Track journey view
        if (window.Analytics) Analytics.trackJourneyView();

        this.renderJourneyModal();
        document.getElementById('journey-modal').classList.remove('hidden');
    },

    // Hide journey modal
    hideJourneyModal() {
        document.getElementById('journey-modal').classList.add('hidden');
    },

    // Backstory chapters data
    backstoryChapters: [
        {
            number: 1,
            title: "The Gates of Mobile",
            period: "1996-1998",
            content: `
                <div class="backstory-image">
                    <img src="assets/images/Windows_CE.avif" alt="Windows CE">
                </div>

                <p><strong>November 1996, Las Vegas - COMDEX Trade Show</strong></p>
                <p>Bill Gates stands backstage, adjusting his glasses, preparing to make an announcement that would set Microsoft on a collision course with destiny. Outside, 200,000 technology professionals fill the convention center, unaware they're about to witness the birth of Windows CE - Microsoft's first serious attempt at mobile computing.</p>
                <p>"We believe the future of computing is not just on desks, but in pockets," Gates tells the crowd, holding up a prototype "Handheld PC" the size of a small paperback. The device runs a stripped-down version of Windows, complete with a tiny Start button. The audience applauds politely.</p>

                <div class="backstory-inset">
                    <p><strong>Key Moment:</strong> Palm Pilot Dominance</p>
                    <p>By 1998, Palm owns 70% of the handheld market. Their philosophy? "Simple is better." Microsoft's response? "We need more Windows features."</p>
                </div>
            `
        },
        {
            number: 2,
            title: "The Pocket PC Strategy",
            period: "1999-2000",
            content: `
                <div class="backstory-image">
                    <img src="assets/images/Windows_CE_1999.jpg" alt="Bill Gates presenting Windows CE">
                </div>

                <p><strong>The Pocket PC Strategy (1999-2000)</strong></p>
                <p>Microsoft rebrands, pivots, and pushes harder. Windows CE becomes "Pocket PC." The strategy is pure Microsoft: use the Windows ecosystem as leverage. Office compatibility. Outlook synchronization. ActiveSync for desktop connectivity. The pitch is compelling for enterprise IT departments who already live in the Windows world.</p>
                <p>By 2000, Microsoft has captured 30% of the PDA market. Palm is still dominant, but nervous executives in San Jose start watching Redmond more closely.</p>
            `
        },
        {
            number: 3,
            title: "The Phone Wars Begin",
            period: "2001-2003",
            content: `
                <div class="backstory-image">
                    <img src="assets/images/Pocket_PC.jpg" alt="Steve Ballmer presenting Pocket PC">
                </div>

                <p><strong>January 2001, Microsoft Campus - Building 17</strong></p>
                <p>Steve Ballmer, now CEO for less than a year, reviews a prototype that will change the company's trajectory. It's a phone. A Windows phone. Microsoft is no longer just competing with Palm and Handspring - they're going after Nokia and Motorola.</p>
                <p>"The convergence of PDA and phone is inevitable," reads the internal strategy memo. "We must own both sides of this equation."</p>

                <p><strong>Windows Mobile is Born</strong></p>
                <p>The "Smartphone" edition launches in 2002, followed by a unified "Windows Mobile" platform in 2003. The pitch to manufacturers is aggressive: license Windows Mobile, get the Microsoft ecosystem, compete with Symbian and Palm.</p>

                <p>By 2003, Windows Mobile has attracted major hardware partners: HTC, HP, Samsung, Dell. The enterprise market is locked up tight. IT departments love the Active Directory integration and Exchange synchronization. Fortune 500 executives carry Windows Mobile phones as status symbols.</p>
            `
        },
        {
            number: 4,
            title: "The Empire's Peak",
            period: "2004-2006",
            content: `
                <p><strong>July 2004, Redmond - Windows Mobile Team Celebration</strong></p>
                <p>The numbers are intoxicating. Windows Mobile has captured 23% of the smartphone market. Only Nokia's Symbian stands larger. Blackberry is growing but considered a "email-only" niche player. Palm is in disarray, losing engineers and market share monthly.</p>
                <p>"We've won the enterprise," Ballmer declares at an internal meeting. "Now we go after consumers."</p>

                <div class="backstory-inset">
                    <p><strong>The HTC Alliance</strong></p>
                    <p>Taiwan's HTC becomes Microsoft's secret weapon. They produce sleek, capable devices that blur the line between business tool and lifestyle gadget. The HTC Universal, HTC Wizard, and HTC TyTN series become the devices that define early smartphone aspiration.</p>
                </div>

                <p><strong>The Motorola Q and the Blackberry Killer Strategy (2006)</strong></p>
                <p>Microsoft partners with Motorola to launch the "Q" - explicitly designed to destroy Blackberry. Thin, elegant, with a full keyboard, it's Microsoft's most consumer-friendly phone yet. Sales are strong. Blackberry market share dips for the first time.</p>
                <p>In Redmond, champagne corks pop. Windows Mobile 5.0 is stable and feature-rich. Market share holds steady at 42%. Palm is effectively dead. Symbian is fracturing into incompatible versions. Blackberry is wounded.</p>
                <p>"We're two years away from total market dominance," predicts an internal strategy document dated November 2006.</p>

            
            `
        },
        {
            number: 5,
            title: "Final Days of the Old World",
            period: "December 2006",
            content: `
                <div class="backstory-image">
                    <img src="assets/images/windows_6.0" alt="Windows Mobile 6.0">
                </div>

                <p><strong>December 2006 - Final Days of the Old World</strong></p>
                <p>Windows Mobile 6.0 is feature-complete and ready for February launch. The team is confident. They've addressed touch screen issues, improved the browser, and added better multimedia support.</p>
                <p>In an internal presentation, the Windows Mobile team projects 50% market share by 2009. Their biggest worry? "Battery life and enterprise integration." Consumer experience is mentioned once, on slide 47 of 52.</p>
                <p>On December 27, 2006, a tech blog posts a blurry photo of Steve Jobs entering a building near Apple's campus. He's carrying something rectangular, about the size of a paperback book. The post title: "What is Apple hiding?"</p>
            `
        },
        {
            number: 6,
            title: "The World Before January 9th",
            period: "January 1, 2007",
            content: `
                <p><strong>The State of Play - January 8, 2007</strong></p>
                <div class="backstory-stats">
                    <div class="stat-row">
                        <span class="stat-label">Microsoft's Position:</span>
                        <span class="stat-value">42% smartphone market share (US)</span>
                    </div>
                    <div class="stat-row">
                        <span class="stat-label">Key Partners:</span>
                        <span class="stat-value">HTC, Motorola, Samsung, HP, Dell</span>
                    </div>
                    <div class="stat-row">
                        <span class="stat-label">Enterprise Dominance:</span>
                        <span class="stat-value">80% of Fortune 500 companies use Windows Mobile</span>
                    </div>
                    <div class="stat-row">
                        <span class="stat-label">Cash Position:</span>
                        <span class="stat-value">$34 billion in reserves</span>
                    </div>
                    <div class="stat-row">
                        <span class="stat-label">Market Cap:</span>
                        <span class="stat-value">$292 billion (2nd largest in the world)</span>
                    </div>
                </div>

                <p><strong>The Competitive Landscape:</strong></p>
                <ul>
                    <li><strong>Nokia (Symbian):</strong> 48% global share, but fragmenting and slow to innovate</li>
                    <li><strong>Blackberry:</strong> 11% share, dominant in email but limited in features</li>
                    <li><strong>Palm:</strong> 5% share, dying slowly from strategic confusion</li>
                    <li><strong>Apple:</strong> 0% share, no phone product announced</li>
                    <li><strong>Google:</strong> 0% share, Android rumors unconfirmed</li>
                </ul>
            `,
            isFinal: true
        }
    ],

    // Current backstory chapter index
    currentBackstoryChapter: 0,

    // Render backstory chapter
    renderBackstoryChapter(chapterIndex = 0) {
        this.currentBackstoryChapter = chapterIndex;
        const chapter = this.backstoryChapters[chapterIndex];
        const totalChapters = this.backstoryChapters.length;
        const mainContent = document.getElementById('main-content');

        // Hide metrics bar during backstory
        document.getElementById('metrics-bar').style.display = 'none';
        document.getElementById('artifact-toggle-btn').style.display = 'none';

        mainContent.innerHTML = `
            <div class="backstory-page">
                <div class="backstory-progress">
                    <span class="backstory-progress-text">Chapter ${chapter.number} of ${totalChapters}</span>
                    <div class="backstory-progress-bar">
                        <div class="backstory-progress-fill" style="width: ${(chapter.number / totalChapters) * 100}%"></div>
                    </div>
                </div>

                <div class="backstory-header">
                    <span class="backstory-period">${chapter.period}</span>
                    <h1 class="backstory-title">${chapter.title}</h1>
                </div>

                <div class="backstory-content">
                    ${chapter.content}
                </div>

                <div class="backstory-actions">
                    ${chapterIndex > 0 ? `
                        <button class="backstory-back-btn" id="backstory-back-btn">
                            ← Previous
                        </button>
                    ` : `
                        <button class="backstory-back-btn" id="backstory-exit-btn">
                            ← Back
                        </button>
                    `}
                    <button class="backstory-continue-btn" id="backstory-continue-btn">
                        ${chapter.isFinal ? 'Begin →' : 'Continue →'}
                    </button>
                </div>
            </div>
        `;

        // Track backstory progress
        if (window.Analytics) Analytics.trackBackstoryProgress(chapter.number, totalChapters);

        // Add event listeners
        const continueBtn = document.getElementById('backstory-continue-btn');
        continueBtn.addEventListener('click', () => {
            if (chapter.isFinal) {
                // Track backstory completion and game start
                if (window.Analytics) {
                    Analytics.trackBackstoryComplete();
                    Analytics.trackGameStart();
                }
                // Start the game
                document.getElementById('metrics-bar').style.display = 'flex';
                document.getElementById('artifact-toggle-btn').style.display = 'flex';
                gameState.currentScreen = "story";
                this.renderStoryPoint();
            } else {
                // Go to next chapter
                this.renderBackstoryChapter(chapterIndex + 1);
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        const backBtn = document.getElementById('backstory-back-btn');
        if (backBtn) {
            backBtn.addEventListener('click', () => {
                this.renderBackstoryChapter(chapterIndex - 1);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        const exitBtn = document.getElementById('backstory-exit-btn');
        if (exitBtn) {
            exitBtn.addEventListener('click', () => {
                this.renderLandingScreen();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    },

    // Render landing screen
    renderLandingScreen() {
        const mainContent = document.getElementById('main-content');

        // Hide metrics bar on landing screen
        document.getElementById('metrics-bar').style.display = 'none';
        document.getElementById('artifact-toggle-btn').style.display = 'none';

        mainContent.innerHTML = `
            <div class="landing-screen">
                <div class="landing-layout">
                    <div class="landing-content">
                        <h1 class="landing-title">the mobile<br>wars.</h1>

                        <div class="landing-info">
                            <p class="landing-subtitle">redmond, 2007</p>
                            <p class="landing-description">you are the ceo of the world's largest software company.</p>
                            <p class="landing-description">the iphone has just launched. the board is skeptical.</p>
                        </div>

                        <div class="landing-mission">
                            <p>Lead Microsoft's mobile strategy from 2007-2017.</p>
                            <p>Can you do better than history?</p>
                        </div>

                        <div class="landing-actions">
                            <button class="landing-begin-btn" id="begin-btn">
                                begin →
                            </button>
                            <button class="landing-manifesto-btn" id="manifesto-btn">
                                the backstory
                            </button>
                        </div>
                    </div>

                    <div class="landing-video">
                        <video autoplay loop muted playsinline>
                            <source src="assets/images/Phone.mp4" type="video/mp4">
                        </video>
                    </div>
                </div>
            </div>
        `;

        // Add event listeners
        document.getElementById('begin-btn').addEventListener('click', () => {
            // Track game start
            if (window.Analytics) Analytics.trackGameStart();

            // Show metrics bar when game starts
            document.getElementById('metrics-bar').style.display = 'flex';
            document.getElementById('artifact-toggle-btn').style.display = 'flex';

            gameState.currentScreen = "story";
            this.renderStoryPoint();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        document.getElementById('manifesto-btn').addEventListener('click', () => {
            // Track backstory started
            if (window.Analytics) Analytics.trackEvent('backstory_started', {});

            this.currentBackstoryChapter = 0;
            this.renderBackstoryChapter(0);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    },

    // Interpolate dynamic metrics into text
    interpolateMetrics(text) {
        const marketShare = gameState.metrics.marketShare;

        // Replace hardcoded percentages with actual market share
        // Pattern: "X% market share" or "X% share" where X is a number
        return text
            .replace(/\b\d{1,2}% market share\b/gi, `${marketShare}% market share`)
            .replace(/\b\d{1,2}% share\b/gi, `${marketShare}% share`)
            .replace(/at \d{1,2}%\./gi, `at ${marketShare}%.`);
    },

    // Render story point screen
    renderStoryPoint() {
        const decisionPoint = gameState.getCurrentDecisionPoint();
        const mainContent = document.getElementById('main-content');

        // Interpolate actual metrics into story text
        const storyText = this.interpolateMetrics(decisionPoint.storyText);

        mainContent.innerHTML = `
            <div class="story-point">
                <div class="time-marker">${decisionPoint.timeMarker}</div>
                <h1 class="story-title">${decisionPoint.title}</h1>

                <div class="story-image">
                    ${decisionPoint.storyImage.startsWith('<img') || decisionPoint.storyImage.startsWith('<i')
                        ? decisionPoint.storyImage
                        : `<span style="font-size: 4rem;">${decisionPoint.storyImage}</span>`}
                </div>

                <div class="story-text">
                    ${storyText.split('\n\n').map(para =>
                        `<p>${para.trim()}</p>`
                    ).join('')}
                </div>

                <button class="continue-btn" id="start-decision-btn">
                    View Decision Point →
                </button>
            </div>
        `;

        // Add event listener to continue button
        document.getElementById('start-decision-btn').addEventListener('click', () => {
            console.log('Button clicked! Starting transition...');
            // Show pre-decision transition before rendering decision
            Transitions.showPreDecisionTransition(() => {
                console.log('Transition callback fired! Rendering decision point...');
                gameState.currentScreen = "decision";
                this.renderDecisionPoint();
                console.log('Decision point rendered successfully');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });
    },

    // Render decision point screen
    renderDecisionPoint() {
        console.log('renderDecisionPoint called');
        const decisionPoint = gameState.getCurrentDecisionPoint();
        console.log('Decision point:', decisionPoint);

        if (!decisionPoint) {
            console.error('No decision point found!');
            return;
        }

        const mainContent = document.getElementById('main-content');
        console.log('Main content element:', mainContent);

        // Interpolate actual metrics into objective
        const objective = this.interpolateMetrics(decisionPoint.objective);

        mainContent.innerHTML = `
            <div class="decision-point">
                <h2 class="section-header">OBJECTIVE</h2>
                <div class="objective">${objective}</div>

                <h2 class="section-header">INFORMATION SOURCES</h2>
                <div class="info-carousel" id="info-carousel">
                    ${decisionPoint.availableInfo.map(cardId => {
                        const card = gameState.getInfoCard(cardId);
                        return this.renderInfoCard(card);
                    }).join('')}
                </div>

                <div class="take-action-container">
                    <button class="take-action-btn" id="take-action-btn">
                        TAKE ACTION
                    </button>
                </div>
            </div>
        `;

        // Add event listeners to info cards
        document.querySelectorAll('.info-card').forEach(card => {
            card.addEventListener('click', () => {
                const cardId = card.dataset.cardId;
                this.openInfoModal(cardId);
            });
        });

        // Add event listener to "Take Action" button
        document.getElementById('take-action-btn').addEventListener('click', () => {
            this.openActionModal();
        });
    },

    // Open action modal with decision options
    openActionModal() {
        const decisionPoint = gameState.getCurrentDecisionPoint();
        const modal = document.getElementById('action-modal');
        const modalContent = document.getElementById('action-modal-content');

        modalContent.innerHTML = `
            <div class="action-modal-header">
                <h2>YOUR CALL</h2>
                <button class="modal-close-btn" id="action-modal-close">✕</button>
            </div>
            <div class="action-modal-body">
                <div class="decision-options" id="decision-options">
                    ${decisionPoint.options.map(option =>
                        this.renderDecisionOption(option)
                    ).join('')}
                </div>

                <div class="custom-action-container">
                    <div class="custom-action-label">
                        <span>Custom Action</span>
                        <span class="coming-soon-badge">Coming Soon</span>
                    </div>
                    <input type="text" class="action-input" placeholder="Type your own action..." id="custom-action-input" disabled>
                </div>

                <div class="action-modal-footer">
                    <button class="action-modal-btn primary" id="confirm-action-btn" disabled>CONFIRM ACTION</button>
                </div>
            </div>
        `;

        modal.classList.remove('hidden');

        // Add event listeners to decision options
        document.querySelectorAll('.decision-option').forEach(option => {
            option.addEventListener('click', () => {
                // Don't allow selecting disabled options
                if (option.dataset.disabled === 'true') {
                    return;
                }
                const optionId = option.dataset.optionId;
                this.selectDecisionOption(optionId);
            });
        });

        // Add event listener to close button
        document.getElementById('action-modal-close').addEventListener('click', () => {
            modal.classList.add('hidden');
        });

        // Close modal on outside click
        modal.addEventListener('click', (e) => {
            if (e.target.id === 'action-modal') {
                modal.classList.add('hidden');
            }
        });

        // Add event listener to confirm action button
        document.getElementById('confirm-action-btn').addEventListener('click', () => {
            modal.classList.add('hidden');
            this.confirmDecision();
        });
    },

    // Render info card
    renderInfoCard(card) {
        return `
            <div class="info-card" data-card-id="${card.id}">
                <div class="info-card-type">${card.type}</div>
                <div class="info-card-title">${card.title}</div>
                <div class="info-card-visual">${card.visual}</div>
                <div class="info-card-summary">${card.summary}</div>
                <div class="info-card-meta">
                    <span>${card.source}</span>
                    <span class="info-card-quality ${card.quality}">${card.quality.toUpperCase()}</span>
                </div>
            </div>
        `;
    },

    // Render decision option
    renderDecisionOption(option) {
        const isSelected = gameState.selectedOption === option.id;
        const isDisabled = option.disabled === true;
        // Interpolate actual metrics into option text
        const description = this.interpolateMetrics(option.description);
        return `
            <div class="decision-option ${isSelected ? 'selected' : ''} ${isDisabled ? 'disabled' : ''}" data-option-id="${option.id}" ${isDisabled ? 'data-disabled="true"' : ''}>
                <div class="decision-option-title">${option.title}</div>
                ${option.cost ? `<div class="decision-option-cost">${option.cost}</div>` : ''}
                ${isDisabled ? `<div class="decision-option-disabled-reason">${option.disabledReason || 'Not available'}</div>` : ''}
                <div class="decision-option-description">${description}</div>
                <div class="decision-option-details">
                    <div class="decision-detail">
                        <div class="decision-detail-label">RISK</div>
                        <div class="decision-detail-value risk">${option.risk}</div>
                    </div>
                    <div class="decision-detail">
                        <div class="decision-detail-label">UPSIDE</div>
                        <div class="decision-detail-value upside">${option.upside}</div>
                    </div>
                </div>
            </div>
        `;
    },

    // Select decision option
    selectDecisionOption(optionId) {
        gameState.selectOption(optionId);

        // Update UI
        document.querySelectorAll('.decision-option').forEach(opt => {
            opt.classList.remove('selected');
        });
        document.querySelector(`[data-option-id="${optionId}"]`).classList.add('selected');

        // Enable confirm action button
        const confirmBtn = document.getElementById('confirm-action-btn');
        if (confirmBtn) {
            confirmBtn.disabled = false;
        }
    },

    // Confirm decision
    confirmDecision() {
        const option = gameState.confirmDecision();
        if (option) {
            // Track decision made
            const decisionPoint = gameState.getCurrentDecisionPoint();
            if (window.Analytics && decisionPoint) {
                Analytics.trackDecision(
                    gameState.currentDecisionStage,
                    decisionPoint.title,
                    option.id,
                    option.title
                );
            }

            // Update metrics bar immediately after decision consequences are applied
            this.updateMetricsBar(true);

            // Update progress indicator immediately after decision is confirmed
            this.updateProgressIndicator();

            // Show artifacts if any were unlocked (during consequence reveal)
            const consequences = option.consequences.immediate;
            if (consequences.unlockedArtifacts && consequences.unlockedArtifacts.length > 0) {
                // Show notification for each artifact (delayed to match consequence reveal)
                setTimeout(() => {
                    consequences.unlockedArtifacts.forEach((artifactId, index) => {
                        setTimeout(() => {
                            ArtifactUI.showNewArtifact(artifactId);
                        }, index * 500);
                    });
                }, 3000); // Show after first few consequence stages
            }

            // Use staggered consequence reveal system
            Transitions.showStaggeredConsequences(option, () => {
                // continueToNext() now handles applying delayed consequences
                gameState.continueToNext();

                // Update metrics bar after delayed consequences are applied
                this.updateMetricsBar(true);

                // Update progress indicator again after completion check
                this.updateProgressIndicator();

                if (gameState.currentScreen === "complete") {
                    this.renderComplete();
                } else {
                    this.renderStoryPoint();
                }
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });

            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    },

    // Render consequence screen
    renderConsequence(option) {
        // Safety check: ensure option has consequences
        if (!option || !option.consequences || !option.consequences.immediate) {
            console.error('Cannot render consequence: option missing consequences', option);
            gameState.reset();
            this.renderStoryPoint();
            return;
        }

        const consequences = option.consequences.immediate;
        const mainContent = document.getElementById('main-content');

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

        mainContent.innerHTML = `
            <div class="consequence-reveal">
                <div class="decision-recap">
                    You chose: <strong>${option.title}</strong>
                </div>

                <h2 class="section-header">IMMEDIATE CONSEQUENCES</h2>

                <div class="consequence-narrative">
                    ${consequences.narrative.split('\n\n').map(para =>
                        `<p>${para.trim()}</p>`
                    ).join('')}
                </div>

                <h2 class="section-header">IMPACT</h2>

                <div class="impact-section">
                    <h3>Key Changes</h3>
                    ${changes.map(change => `
                        <div class="impact-item">
                            <span>${change.label}:</span>
                            <span class="impact-change ${change.positive ? 'positive' : 'negative'}">
                                ${change.value}
                            </span>
                        </div>
                    `).join('')}
                </div>

                ${option.consequences.delayed ? `
                    <div class="impact-section">
                        <h3>Emerging Challenges</h3>
                        <p style="font-size: 1rem; line-height: 1.7; margin: 0;">
                            ${option.consequences.delayed.narrative}
                        </p>
                    </div>
                ` : ''}

                <button class="continue-btn" id="continue-btn">
                    Continue to Next Decision →
                </button>
            </div>
        `;

        // Add event listener to continue button
        document.getElementById('continue-btn').addEventListener('click', () => {
            // continueToNext() now handles applying delayed consequences
            gameState.continueToNext();

            // Update metrics bar after delayed consequences are applied
            this.updateMetricsBar(true);

            if (gameState.currentScreen === "complete") {
                this.renderComplete();
            } else {
                this.renderStoryPoint();
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    },

    // Render completion screen
    renderComplete() {
        // Update metrics bar to show final state
        this.updateMetricsBar();

        const mainContent = document.getElementById('main-content');
        const metrics = gameState.getFormattedMetrics();
        const ending = gameState.getCurrentEnding();

        // Track game completion
        if (window.Analytics && ending) {
            Analytics.trackGameComplete(
                gameState.pathState.endingType || 'unknown',
                ending.title,
                gameState.metrics
            );
        }

        // Build decision history for display
        let decisionHistoryHTML = '';
        gameState.decisions.forEach((decision) => {
            const decisionPoint = gameState.getDecisionPointById(decision.decisionId);
            if (decisionPoint) {
                const option = decisionPoint.options.find(opt => opt.id === decision.optionId);
                if (option) {
                    decisionHistoryHTML += `<li>✓ <strong>${decisionPoint.title}:</strong> ${option.title}</li>`;
                }
            }
        });

        // Real Microsoft 2017 metrics for comparison
        const actualMetrics = {
            date: "JUL 2017",
            cash: -7.6,  // Write-off amount in billions (negative)
            marketCap: 540,  // July 2017 market cap in billions (~$72.50 × 7.5B shares)
            marketShare: 0  // Windows Phone discontinued
        };

        // Calculate deltas (positive = better than reality)
        const marketShareDelta = gameState.metrics.marketShare - actualMetrics.marketShare;

        const formatMarketShareDelta = (delta) => {
            if (delta > 0) {
                return `<span style="color: #22c55e; font-size: 0.7rem; margin-left: 6px;">▲ +${delta}%</span>`;
            } else if (delta < 0) {
                return `<span style="color: #ef4444; font-size: 0.7rem; margin-left: 6px;">▼ ${delta}%</span>`;
            }
            return `<span style="color: var(--text-tertiary); font-size: 0.7rem; margin-left: 6px;">= same</span>`;
        };

        mainContent.innerHTML = `
            <div class="consequence-reveal ending-screen">
                <p style="font-size: 0.75rem; color: var(--text-tertiary); text-align: center; margin-top: 30px; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px;">
                    Ending Unlocked
                </p>
                <h1 class="section-header" style="font-size: 1.8rem; margin: 0 0 15px 0; color: var(--accent-primary);">
                    ${ending.title.toUpperCase()}
                </h1>

                <div class="ending-unlocked" style="margin-bottom: 30px; text-align: center;">
                    <p style="font-size: 1rem; color: var(--text-secondary);">
                        ${ending.summary}
                    </p>
                </div>

                <div class="ending-comparison">
                    <div class="comparison-section your-path">
                        <h3>YOUR FINAL STATE (2007-2017)</h3>
                        <div class="comparison-stats">
                            <div class="stat-item">
                                <span class="stat-label">Final Status:</span>
                                <span class="stat-value" style="color: ${metrics.mobilePLRaw >= 0 ? 'var(--metric-positive)' : 'var(--metric-negative)'};">${metrics.mobilePLRaw >= 0 ? 'Profitable' : 'Unprofitable'}</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Total Revenue:</span>
                                <span class="stat-value" style="color: var(--metric-positive);">${metrics.mobileRevenue}</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Total Costs:</span>
                                <span class="stat-value" style="color: var(--metric-negative);">${metrics.mobileCosts}</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Net P&L:</span>
                                <span class="stat-value" style="color: ${metrics.mobilePLRaw >= 0 ? 'var(--metric-positive)' : 'var(--metric-negative)'};">${metrics.mobilePL}</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Final Market Share:</span>
                                <span class="stat-value">${metrics.marketShare}%${formatMarketShareDelta(marketShareDelta)}</span>
                            </div>
                        </div>
                    </div>
                    <div class="comparison-section actual-path">
                        <h3>ACTUAL HISTORY (2007-2017)</h3>
                        <div class="comparison-stats">
                            <div class="stat-item">
                                <span class="stat-label">Final Status:</span>
                                <span class="stat-value" style="color: var(--metric-negative);">Discontinued</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Total Revenue:</span>
                                <span class="stat-value" style="color: var(--metric-positive);">~$8B</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Total Costs:</span>
                                <span class="stat-value" style="color: var(--metric-negative);">~$15.6B</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Net P&L:</span>
                                <span class="stat-value" style="color: var(--metric-negative);">-$7.6B</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Final Market Share:</span>
                                <span class="stat-value">${actualMetrics.marketShare}%</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="key-decisions-section" style="margin-bottom: 20px;">
                    <h3 style="margin-bottom: 15px; font-size: 0.9rem;">YOUR DECISIONS</h3>
                    <ul class="decision-list" style="font-size: 0.85rem;">
                        ${decisionHistoryHTML || '<li>No decisions recorded</li>'}
                    </ul>
                </div>

                <div class="path-info" style="margin: 20px 0; padding: 15px; background: rgba(255,255,255,0.03); border-radius: 8px;">
                    <h3 style="margin-bottom: 10px; font-size: 0.85rem;">PATH TAKEN</h3>
                    <p style="font-size: 0.8rem; color: var(--text-secondary);">
                        D1: ${gameState.pathState.d1Choice || 'N/A'} →
                        D2: ${gameState.pathState.d2Branch || 'N/A'} →
                        D3: ${gameState.pathState.d3Variant || 'N/A'} →
                        D4: ${gameState.pathState.d4State || 'N/A'} →
                        D5: ${gameState.pathState.d5State || 'N/A'}
                    </p>
                </div>

                ${typeof FeedbackSystem !== 'undefined' ? FeedbackSystem.renderFeedbackForm() : ''}

                <button class="continue-btn" id="restart-btn" style="margin-top: 30px;">
                    Try Different Path →
                </button>
            </div>
        `;

        // Add restart button
        document.getElementById('restart-btn').addEventListener('click', () => {
            if (confirm('Start a new scenario? Your current progress will be lost.')) {
                gameState.reset();
                this.updateMetricsBar();
                this.renderLandingScreen();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });

        // Attach feedback form event listeners
        if (typeof FeedbackSystem !== 'undefined') {
            FeedbackSystem.attachEventListeners();
        }
    },

    // Open info card modal
    openInfoModal(cardId) {
        const card = gameState.getInfoCard(cardId);
        const modal = document.getElementById('card-modal');
        const modalBody = document.getElementById('modal-body');

        // Track info card view
        if (window.Analytics && card) {
            Analytics.trackInfoCardView(cardId, card.title);
        }

        modalBody.innerHTML = `
            <h2 class="modal-title">${card.title}</h2>

            <div class="modal-visual">${card.visual}</div>

            <div class="modal-content-text">
                ${card.content}
            </div>

            <div class="modal-metadata">
                <div class="metric-detail">
                    <span class="metric-label">SOURCE</span>
                    <span class="metric-value">${card.source}</span>
                </div>
                <div class="metric-detail">
                    <span class="metric-label">DATE</span>
                    <span class="metric-value">${card.date}</span>
                </div>
                <div class="metric-detail">
                    <span class="metric-label">RELIABILITY</span>
                    <span class="metric-value">${card.quality.toUpperCase()}</span>
                </div>
                <div class="metric-detail">
                    <span class="metric-label">TYPE</span>
                    <span class="metric-value">${card.type}</span>
                </div>
            </div>
        `;

        // Set up artifact link handlers
        const artifactLinks = modalBody.querySelectorAll('.artifact-link');
        artifactLinks.forEach(link => {
            const artifactId = link.getAttribute('data-artifact-id');

            link.addEventListener('click', (e) => {
                e.preventDefault();

                // Unlock the artifact if not already unlocked
                if (!gameState.unlockedArtifacts.includes(artifactId)) {
                    gameState.unlockArtifact(artifactId);

                    // Show notification
                    this.showArtifactUnlockNotification(artifactId);
                }

                // Close the info modal
                this.closeModal();

                // Open artifact viewer after a brief delay
                setTimeout(() => {
                    ArtifactUI.openArtifactViewer(artifactId);
                }, 300);
            });
        });

        // Reset scroll position before showing modal
        modalBody.scrollTop = 0;
        modal.querySelector('.modal-content').scrollTop = 0;

        modal.classList.remove('hidden');
    },

    // Show artifact unlock notification (uses same minimal style as ArtifactSystem)
    showArtifactUnlockNotification(artifactId) {
        const artifact = gameState.getArtifact(artifactId);
        if (!artifact) return;

        // Use the same minimal notification style as ArtifactSystem.showNewArtifact()
        const notification = document.createElement('div');
        notification.className = 'artifact-notification';
        notification.innerHTML = `
            <div class="artifact-notification-content">
                <div class="artifact-notification-icon">${artifact.model3D || '<i class="ph ph-device-mobile"></i>'}</div>
                <div class="artifact-notification-text">
                    <span class="artifact-notification-title">Unlocked:</span>
                    <span class="artifact-notification-name">${artifact.name}</span>
                </div>
            </div>
        `;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => notification.classList.add('show'), 100);

        // Remove after 4 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 4000);

        // Update artifact counter and collection
        ArtifactUI.updateArtifactBar();

        // Animate the artifact button
        const button = document.getElementById('artifact-toggle-btn');
        if (button) {
            button.style.animation = 'artifactUnlock 0.8s ease-out';
            setTimeout(() => {
                button.style.animation = '';
            }, 800);
        }
    },

    // Close modal
    closeModal() {
        document.getElementById('card-modal').classList.add('hidden');
        this.hideJourneyModal();
    },

    // Open profile modal
    openProfileModal() {
        // Track profile view
        if (window.Analytics) Analytics.trackProfileView();

        const modal = document.getElementById('profile-modal');
        const modalBody = document.getElementById('profile-modal-body');
        const metrics = gameState.getFormattedMetrics();

        // Build past decisions list
        let pastDecisionsHTML = '';
        if (gameState.decisions.length === 0) {
            pastDecisionsHTML = '<div class="empty-state">No decisions made yet</div>';
        } else {
            pastDecisionsHTML = '<ul class="past-decisions-list">';
            gameState.decisions.forEach(decision => {
                const decisionPoint = gameState.getDecisionPointById(decision.decisionId);
                if (decisionPoint) {
                    const option = decisionPoint.options.find(opt => opt.id === decision.optionId);
                    if (option) {
                        pastDecisionsHTML += `
                            <li class="past-decision-item">
                                <div class="past-decision-title">${decisionPoint.title}</div>
                                <div class="past-decision-choice">
                                    <strong>${option.title}</strong>
                                </div>
                            </li>
                        `;
                    }
                }
            });
            pastDecisionsHTML += '</ul>';
        }

        // Get board sentiment based on metrics
        let boardSentiment = 'Neutral';
        const marketCap = gameState.metrics.marketCap;
        const marketShare = gameState.metrics.marketShare;

        // Market cap thresholds: Starting ~$250B, good if above ~$260B, concerning below ~$200B
        if (marketCap > 260 && marketShare > 35) {
            boardSentiment = '<i class="ph-fill ph-circle" style="color: #22c55e;"></i> Confident';
        } else if (marketCap > 230 && marketShare > 25) {
            boardSentiment = '<i class="ph-fill ph-circle" style="color: #eab308;"></i> Cautious';
        } else if (marketCap < 200 || marketShare < 20) {
            boardSentiment = '<i class="ph-fill ph-circle" style="color: #ef4444;"></i> Concerned';
        } else {
            boardSentiment = '<i class="ph-fill ph-circle" style="color: #eab308;"></i> Monitoring';
        }

        modalBody.innerHTML = `
            <div class="profile-section">
                <h3>Leadership</h3>
                <div class="profile-info-grid">
                    <span class="profile-label">CEO</span>
                    <span class="profile-value">${metrics.ceo === "S. Ballmer" ? "Steve Ballmer" : metrics.ceo}</span>

                    <span class="profile-label">Board Sentiment</span>
                    <span class="profile-value">${boardSentiment}</span>

                    <span class="profile-label">Team Morale</span>
                    <span class="profile-value morale">${metrics.morale} ${metrics.moraleText}</span>
                </div>
            </div>

            <div class="profile-section">
                <h3>Past Decisions</h3>
                ${pastDecisionsHTML}
            </div>
        `;

        modal.classList.remove('hidden');
    },

    // Close profile modal
    closeProfileModal() {
        document.getElementById('profile-modal').classList.add('hidden');
    },

    // Initialize UI
    init() {
        // Set up modal close handlers
        document.getElementById('modal-close').addEventListener('click', () => {
            this.closeModal();
        });

        // Close modal on outside click
        document.getElementById('card-modal').addEventListener('click', (e) => {
            if (e.target.id === 'card-modal') {
                this.closeModal();
            }
        });

        // Profile icon button handler
        document.getElementById('profile-icon-btn').addEventListener('click', () => {
            this.openProfileModal();
        });

        // Profile modal close handlers
        document.getElementById('profile-modal-close').addEventListener('click', () => {
            this.closeProfileModal();
        });

        // Close profile modal on outside click
        document.getElementById('profile-modal').addEventListener('click', (e) => {
            if (e.target.id === 'profile-modal') {
                this.closeProfileModal();
            }
        });

        // Initialize artifact system
        ArtifactUI.init();

        // Progress trigger click handler (DATE metric with badge)
        const progressTrigger = document.getElementById('progress-trigger');
        if (progressTrigger) {
            progressTrigger.addEventListener('click', () => {
                this.showJourneyModal();
            });
            // Also handle keyboard accessibility
            progressTrigger.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.showJourneyModal();
                }
            });
        }

        // P&L breakdown popup click handler (works for mobile tap and desktop click)
        const plTrigger = document.getElementById('pl-trigger');
        const plPopup = document.getElementById('pl-breakdown-popup');
        if (plTrigger && plPopup) {
            plTrigger.addEventListener('click', (e) => {
                e.stopPropagation();
                // Toggle open state - keeps popup visible after click/tap
                plPopup.classList.toggle('open');
            });
            // Keyboard accessibility
            plTrigger.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    plPopup.classList.toggle('open');
                }
            });
            // Close popup when clicking outside
            document.addEventListener('click', (e) => {
                if (!plTrigger.contains(e.target)) {
                    plPopup.classList.remove('open');
                }
            });
        }

        // Journey modal close handlers
        document.getElementById('journey-modal-close').addEventListener('click', () => {
            this.hideJourneyModal();
        });

        // Close journey modal on outside click
        document.getElementById('journey-modal').addEventListener('click', (e) => {
            if (e.target.id === 'journey-modal') {
                this.hideJourneyModal();
            }
        });

        // Update metrics bar
        this.updateMetricsBar();

        // Update progress indicator
        this.updateProgressIndicator();

        // Render initial screen
        if (gameState.currentScreen === "landing") {
            this.renderLandingScreen();
        } else if (gameState.currentScreen === "story") {
            this.renderStoryPoint();
        } else if (gameState.currentScreen === "decision") {
            this.renderDecisionPoint();
        } else if (gameState.currentScreen === "consequence") {
            const decisionPoint = gameState.getCurrentDecisionPoint();
            const lastDecision = gameState.decisions[gameState.decisions.length - 1];
            const option = decisionPoint.options.find(opt => opt.id === lastDecision.optionId);
            // If option doesn't have consequences (e.g., disabled option), reset to story
            if (!option || !option.consequences) {
                gameState.reset();
                this.renderStoryPoint();
                return;
            }
            this.renderConsequence(option);
        } else if (gameState.currentScreen === "complete") {
            this.renderComplete();
        }
    }
};
