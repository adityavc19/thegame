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

        // Update competitor context
        this.updateCompetitorShares(metrics);

        // Add direction-aware animation for changes
        if (showArrows) {
            const shareDir = gameState.getMetricChange('marketShare');
            this.animateMetricChange('share-metric', shareDir);
            const revDir = gameState.getMetricChange('mobileRevenue');
            this.animateMetricChange('pl-metric', revDir);
            // SFX on metric change
            if (typeof AudioEngine !== 'undefined' && AudioEngine.isStarted()) {
                AudioEngine.playSfx(shareDir === 'down' ? 'metricDown' : shareDir === 'up' ? 'metricUp' : null);
            }
        }
    },

    // Update revenue metric and breakdown popup
    updatePLMetric(metrics, showArrow) {
        const headlineElement = document.getElementById('pl-metric');
        const revenueElement = document.getElementById('pl-revenue');
        const costsElement = document.getElementById('pl-costs');
        const netElement = document.getElementById('pl-net');

        if (headlineElement) {
            // Show revenue as headline
            headlineElement.textContent = metrics.mobileRevenue;
            headlineElement.classList.remove('positive', 'negative');
            headlineElement.classList.add('positive');
        }

        // Update breakdown popup values
        if (revenueElement) {
            revenueElement.textContent = metrics.mobileRevenue;
        }
        if (costsElement) {
            costsElement.textContent = metrics.mobileCosts;
        }
        if (netElement) {
            netElement.textContent = metrics.mobilePL;
            netElement.classList.remove('positive', 'negative');
            if (metrics.mobilePLRaw > 0) {
                netElement.classList.add('positive');
            } else if (metrics.mobilePLRaw < 0) {
                netElement.classList.add('negative');
            }
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

    // Animate metric change with direction
    animateMetricChange(elementId, direction) {
        const element = document.getElementById(elementId);
        // Remove previous
        element.classList.remove('metric-change', 'metric-flash-up', 'metric-flash-down', 'metric-shake');
        void element.offsetWidth; // force reflow
        if (direction === 'down') {
            element.classList.add('metric-flash-down', 'metric-shake');
        } else if (direction === 'up') {
            element.classList.add('metric-flash-up');
        } else {
            element.classList.add('metric-change');
        }
        setTimeout(() => {
            element.classList.remove('metric-change', 'metric-flash-up', 'metric-flash-down', 'metric-shake');
        }, 1200);
    },

    // Update competitor share context line
    updateCompetitorShares(metrics) {
        const el = document.getElementById('competitor-shares');
        if (!el) return;
        const parts = [];
        if (metrics.appleShare > 0) parts.push(`AAPL ${metrics.appleShare}%`);
        if (metrics.googleShare > 0) parts.push(`GOOG ${metrics.googleShare}%`);
        if (metrics.nokiaShare > 0) parts.push(`NOK ${metrics.nokiaShare}%`);
        if (metrics.bbShare > 0) parts.push(`BB ${metrics.bbShare}%`);
        el.textContent = parts.join(' · ');
    },

    // Update progress indicator (both badge and bar)
    updateProgressIndicator() {
        const progress = gameState.getProgress();

        // Update progress badge (Option 3: integrated with DATE)
        const progressBadge = document.getElementById('progress-badge');
        if (progressBadge) {
            progressBadge.textContent = `${progress.completed}/${progress.total}`;
            if (progress.completed > 0) {
                progressBadge.classList.add('visible');
            }
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
        document.getElementById('mute-btn').style.display = 'none';
        document.getElementById('profile-icon-btn').style.display = 'none';

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
                document.getElementById('mute-btn').style.display = 'flex';
                document.getElementById('profile-icon-btn').style.display = 'flex';
                gameState.currentScreen = "story";
                // Show chapter intro first, then story brief
                Transitions.showChapterIntro(() => {
                    this.renderStoryPoint();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
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

        // Hide metrics bar and utility buttons on landing screen
        document.getElementById('metrics-bar').style.display = 'none';
        document.getElementById('artifact-toggle-btn').style.display = 'none';
        document.getElementById('mute-btn').style.display = 'none';
        document.getElementById('profile-icon-btn').style.display = 'none';

        mainContent.innerHTML = `
            <div class="landing-screen">
                <video class="landing-bg-video" autoplay loop muted playsinline>
                    <source src="assets/images/Phone.mp4" type="video/mp4">
                </video>
                <div class="landing-overlay"></div>

                <div class="landing-content">
                    <div class="landing-top">
                        <h1 class="landing-title">the mobile wars.</h1>
                        <div class="landing-info-card">
                            <p class="landing-subtitle">redmond, 2007</p>
                            <p class="landing-description">You're Microsoft's CEO. The iPhone just launched. The board is skeptical.</p>
                            <div class="landing-meta">
                                <span class="landing-meta-item"><i class="ph ph-clock"></i> ~15-20 min</span>
                                <span class="landing-meta-item"><i class="ph ph-path"></i> 5 decisions</span>
                            </div>
                        </div>
                    </div>

                    <div class="landing-bottom">
                        <div class="landing-actions">
                            <button class="landing-begin-btn" id="begin-btn">Begin →</button>
                            <button class="landing-manifesto-btn" id="manifesto-btn">the backstory</button>
                        </div>

                        <a href="how-to-play.html" class="landing-how-to-play" id="how-to-play-link">How to play →</a>
                    </div>
                </div>
            </div>
        `;

        // Add event listeners
        document.getElementById('begin-btn').addEventListener('click', () => {
            // Track game start
            if (window.Analytics) Analytics.trackGameStart();

            // Start audio on first user gesture
            AudioEngine.init().then(() => AudioEngine.setPhase('disruption'));

            // Show metrics bar and utility buttons when game starts
            document.getElementById('metrics-bar').style.display = 'flex';
            document.getElementById('artifact-toggle-btn').style.display = 'flex';
            document.getElementById('mute-btn').style.display = 'flex';
            document.getElementById('profile-icon-btn').style.display = 'flex';

            gameState.currentScreen = "story";
            // Show chapter intro first, then story brief
            Transitions.showChapterIntro(() => {
                this.renderStoryPoint();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });

        document.getElementById('manifesto-btn').addEventListener('click', () => {
            // Track backstory started
            if (window.Analytics) Analytics.trackEvent('backstory_started', {});

            // Start audio in boardroom mode for the backstory
            AudioEngine.init().then(() => AudioEngine.setPhase('boardroom'));

            this.currentBackstoryChapter = 0;
            this.renderBackstoryChapter(0);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Mute button
        document.getElementById('mute-btn').addEventListener('click', () => {
            const nowMuted = AudioEngine.toggleMute();
            const icon = document.getElementById('mute-icon');
            if (icon) {
                icon.className = nowMuted ? 'ph ph-speaker-simple-slash' : 'ph ph-speaker-simple-high';
            }
        });
    },

    // CEO transition interstitial (between D4 and D5)
    renderCeoTransition() {
        const mainContent = document.getElementById('main-content');

        mainContent.innerHTML = `
            <div class="story-point">
                <div class="transition-date">FEBRUARY 2014</div>

                <div class="story-image">
                    <i class="ph ph-swap" style="font-size: 4rem;"></i>
                </div>

                <div class="story-text">
                    <p>The email arrives on a Tuesday morning. Subject line: "Organizational Update."</p>

                    <p>Steve Ballmer is stepping down as CEO. After 14 years, the man who championed your mobile strategy, who greenlit your budgets, who pounded the table in board meetings defending your team — he's done.</p>

                    <p>His replacement: Satya Nadella. Cloud division. Enterprise background. The opposite of a devices guy.</p>

                    <p>The new org chart arrives three weeks later. You're no longer reporting to the CEO. You're no longer in the room where the big calls are made. Your new title: <strong>Corporate Vice President, Mobile Devices Division.</strong></p>

                    <p>It's not a firing. It's worse — it's a demotion wrapped in corporate language. "Streamlining leadership to align with our cloud-first vision." You've gone from shaping Microsoft's mobile strategy at the executive table to running a division that Nadella sees as a legacy problem.</p>

                    <p>He calls you into his office on day one. He's polite. Direct. "I inherited your bet," he says. "I'm not going to kill it — yet. But you have to show me it's worth keeping. Show me the numbers. Show me a path."</p>

                    <p>You have one shot. One final chapter to prove that the years, the billions, the sleepless nights — that they meant something.</p>
                </div>

                <button class="continue-btn" id="transition-continue-btn">
                    Continue →
                </button>
            </div>
        `;

        // Pivot phase: Nadella era begins
        AudioEngine.setPhase('pivot');

        document.getElementById('transition-continue-btn').addEventListener('click', () => {
            // Show chapter intro first, then story brief
            Transitions.showChapterIntro(() => {
                this.renderStoryPoint();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });

        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    // Render story point screen
    renderStoryPoint() {
        const decisionPoint = gameState.getCurrentDecisionPoint();
        const mainContent = document.getElementById('main-content');

        // Safety: ensure body scroll is not locked from a previous modal
        document.body.style.overflow = '';

        // Audio phase: D1 is disruption, everything else boardroom (pivot set by CEO transition)
        const stage = gameState.currentDecisionStage;
        if (stage === 'd1') AudioEngine.setPhase('disruption');
        else if (stage === 'd2' || stage === 'd3' || stage === 'd4') AudioEngine.setPhase('boardroom');

        const rawText = decisionPoint.storyText;
        const audioHash = Narration.textHash(rawText);
        const audioSrc = `assets/audio/story-${audioHash}.mp3`;

        const _proceedToDecision = () => {
            Narration.stop();
            Transitions.showMetricsLoader(() => {
                gameState.currentScreen = "decision";
                this.renderDecisionPoint();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        };

        // Default view: audio narration screen
        mainContent.innerHTML = `
            <div class="story-point">
                <div class="time-marker">${decisionPoint.timeMarker}</div>
                <h1 class="story-title">${decisionPoint.title}</h1>

                ${decisionPoint.storyImage && decisionPoint.storyImage.startsWith('<img')
                    ? `<div class="story-image">${decisionPoint.storyImage}</div>`
                    : ''}

                <div class="story-text" id="story-text-block" style="display:none;">
                    ${rawText.split('\n\n').map(para =>
                        `<p>${para.trim()}</p>`
                    ).join('')}
                </div>

                <div id="narration-anchor"></div>

                <div class="story-actions" id="story-actions">
                    <button class="story-read-btn" id="read-btn">
                        <i class="ph ph-book-open-text"></i> Read instead
                    </button>
                    <button class="continue-btn" id="start-decision-btn">
                        Continue →
                    </button>
                </div>
            </div>
        `;

        // Auto-start narration
        const anchor = document.getElementById('narration-anchor');
        Narration.start(rawText, audioSrc, anchor, () => {
            // Audio finished — auto-proceed
            _proceedToDecision();
        });

        // "Read instead" — stop audio, show text
        document.getElementById('read-btn').addEventListener('click', () => {
            Narration.stop();
            const textBlock = document.getElementById('story-text-block');
            textBlock.style.display = '';
            document.getElementById('read-btn').style.display = 'none';
            // Update continue button text
            document.getElementById('start-decision-btn').textContent = 'View Decision Point →';
        });

        // Manual continue
        document.getElementById('start-decision-btn').addEventListener('click', () => {
            _proceedToDecision();
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

        // ── NEW: Use unified briefing+choice page if intelCards exist ──
        if (decisionPoint.intelCards && decisionPoint.intelCards.length > 0) {
            this._hasOpenedCard = false;
            mainContent.innerHTML = `
                <div class="decision-unified">
                    <div class="decision-objective">${decisionPoint.objective}</div>

                    <div class="intel-section-label">
                        <i class="ph ph-binoculars"></i> INTEL BRIEFING
                    </div>
                    ${this.renderIntelGrid(decisionPoint.intelCards)}
                    <div class="intel-hint">Tap any card for full briefing</div>

                    <div class="decision-divider"></div>

                    <div class="intel-section-label">
                        <i class="ph ph-crosshair"></i> YOUR CALL
                    </div>
                    <div class="accord-options" id="accord-options">
                        ${decisionPoint.options.map((opt, i) =>
                            this.renderAccordionOption(opt, i)
                        ).join('')}
                    </div>

                    <div class="decision-confirm-container hidden" id="decision-confirm-wrap">
                        <button class="decision-confirm-btn" id="confirm-action-btn" disabled>CONFIRM DECISION</button>
                    </div>
                </div>
            `;

            // Wire intel card thumbnails
            mainContent.querySelectorAll('.intel-thumb').forEach(thumb => {
                thumb.addEventListener('click', () => {
                    const cardId = thumb.dataset.intelId;
                    const card = decisionPoint.intelCards.find(c => c.id === cardId);
                    if (card) this.openIntelPopup(card);
                });
            });

            // Hide carousel fade hint when scrolled to end
            const carousel = document.getElementById('intel-carousel');
            const fadeMask = carousel?.nextElementSibling;
            if (carousel && fadeMask) {
                const checkFade = () => {
                    const atEnd = carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 8;
                    fadeMask.style.opacity = atEnd ? '0' : '1';
                };
                carousel.addEventListener('scroll', checkFade, { passive: true });
                checkFade();
            }

            // Show profile notification dot (position data updated)
            this._showProfileNotify();

            // Stagger-animate intel cards
            this.animateIntelCards();

            // Wire accordion options
            this._wireAccordionOptions(decisionPoint);
            return;
        }

        // ── LEGACY: Fallback for decisions without intelCards ──
        mainContent.innerHTML = `
            <div class="decision-point">
                <h2 class="section-header">OBJECTIVE</h2>
                <div class="objective">${decisionPoint.objective}</div>

                <h2 class="section-header">INFORMATION SOURCES</h2>
                <div class="info-carousel" id="info-carousel">
                    ${decisionPoint.availableInfo.map(cardId => {
                        const card = gameState.getInfoCard(cardId);
                        return this.renderInfoCard(card);
                    }).join('')}
                </div>

                <h2 class="section-header" id="your-call-header">YOUR CALL</h2>
                <div class="decision-options" id="decision-options">
                    ${decisionPoint.options.map(option =>
                        this.renderDecisionOption(option)
                    ).join('')}
                </div>

                <div class="inline-confirm-container">
                    <button class="action-modal-btn primary" id="confirm-action-btn" disabled>CONFIRM ACTION</button>
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

        // Add event listeners to decision options
        document.querySelectorAll('.decision-option').forEach(option => {
            option.addEventListener('click', () => {
                if (option.dataset.disabled === 'true') return;
                const optionId = option.dataset.optionId;
                this.selectDecisionOption(optionId);
            });
        });

        // Add event listener to confirm button
        document.getElementById('confirm-action-btn').addEventListener('click', () => {
            this.confirmDecision();
        });
    },

    // Wire accordion option interactions
    _wireAccordionOptions(decisionPoint) {
        const container = document.getElementById('accord-options');
        if (!container) return;

        container.querySelectorAll('.accord-option').forEach(el => {
            // Header click toggles expansion
            const header = el.querySelector('.accord-option-header');
            header.addEventListener('click', () => {
                if (el.dataset.disabled === 'true') return;
                const wasExpanded = el.classList.contains('accord-option--expanded');

                // Collapse all
                container.querySelectorAll('.accord-option').forEach(o => {
                    o.classList.remove('accord-option--expanded');
                });

                // Toggle this one
                if (!wasExpanded) {
                    el.classList.add('accord-option--expanded');
                }
            });

            // "Choose This Path" CTA
            const cta = el.querySelector('.accord-option-cta');
            if (cta) {
                cta.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const optionId = el.dataset.optionId;
                    this._selectAccordionOption(optionId, container);
                });
            }
        });

        // Confirm button
        const confirmBtn = document.getElementById('confirm-action-btn');
        if (confirmBtn) {
            confirmBtn.addEventListener('click', () => {
                this.confirmDecision();
            });
        }
    },

    _selectAccordionOption(optionId, container) {
        gameState.selectOption(optionId);

        // Update visual state
        container.querySelectorAll('.accord-option').forEach(o => {
            if (o.dataset.optionId === optionId) {
                o.classList.add('accord-option--selected');
            } else {
                o.classList.remove('accord-option--selected');
                o.classList.add('accord-option--dimmed');
            }
        });

        // Show and enable confirm button
        const wrap = document.getElementById('decision-confirm-wrap');
        const btn = document.getElementById('confirm-action-btn');
        if (wrap) wrap.classList.remove('hidden');
        if (btn) {
            btn.disabled = false;
            setTimeout(() => {
                btn.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 150);
        }
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

    // Render info card (legacy — kept for backward compatibility)
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

    // ══════════════════════════════════════════════
    // PHASE 1+2: New Card System + Unified Decision Page
    // ══════════════════════════════════════════════

    _hasOpenedCard: false,

    // ── Card Thumbnail Renderer ──
    _intelGradients: {
        'MARKET REPORT':   { from: '#2B6CB0', to: '#1A4971' },
        'INTERNAL MEMO':   { from: '#8B6B4A', to: '#5C4530' },
        'COMPETITOR':      { from: '#C05028', to: '#7A3018' },
        'COMPETITOR INTEL': { from: '#C05028', to: '#7A3018' },
        'INDUSTRY':        { from: '#2D7A4F', to: '#1A4A30' },
        'STRATEGY':        { from: '#7B5EA7', to: '#4A3868' },
        '_default':        { from: '#6B7280', to: '#3D4451' }
    },

    renderCardThumb(card) {
        const t = card.thumb;
        const typeClass = `intel-thumb--${card.type}`;
        const secondaryClass = card.secondary ? 'intel-thumb--secondary' : '';

        // Assign gradient based on label
        const labelKey = (t.label || '').toUpperCase();
        const grad = this._intelGradients[labelKey] || this._intelGradients['_default'];

        // Headline goes in the gradient hero; implication in the compact body
        const displayTitle = t.headline || t.title;
        const bodyHTML = t.implication
            ? `<div class="intel-thumb-implication">${t.implication}</div>`
            : (t.subtitle ? `<div class="intel-thumb-subtitle">${t.subtitle}</div>` : '');

        return `
            <div class="intel-thumb ${typeClass} ${secondaryClass}" data-intel-id="${card.id}" style="--thumb-grad-from:${grad.from};--thumb-grad-to:${grad.to}">
                <div class="intel-thumb-hero">
                    <i class="ph ${t.icon} intel-thumb-icon"></i>
                </div>
                <div class="intel-thumb-body">
                    <span class="intel-thumb-label">${t.label}</span>
                    <div class="intel-thumb-headline">${displayTitle}</div>
                    ${bodyHTML}
                </div>
            </div>
        `;
    },

    // ── Intel Carousel ──
    renderIntelGrid(cards) {
        let html = '<div class="intel-carousel-wrap">';
        html += '<div class="intel-carousel" id="intel-carousel">';
        cards.forEach((card, i) => {
            html += this.renderCardThumb(card).replace(
                'class="intel-thumb',
                `class="intel-thumb intel-thumb--stagger" style="--stagger-i:${i};`
            );
        });
        html += '</div>';
        html += '<div class="intel-carousel-fade"></div>';
        html += '</div>';
        return html;
    },

    // Trigger staggered card arrival animation
    animateIntelCards() {
        const cards = document.querySelectorAll('.intel-thumb--stagger');
        cards.forEach((card, i) => {
            setTimeout(() => {
                card.classList.add('intel-thumb--visible');
                // SFX on card arrival
                if (i === 0 && typeof AudioEngine !== 'undefined' && AudioEngine.isStarted()) {
                    AudioEngine.playSfx('cardArrive');
                }
            }, 200 + i * 150);
        });
    },

    // ── Player Position Card (collapsible) ──
    renderPlayerPosition(pos) {
        if (!pos) return '';
        return `
            <div class="player-position-card" id="player-position-card">
                <button class="player-position-toggle" id="player-position-toggle">
                    <span class="player-position-label">${pos.label}</span>
                    <i class="ph ph-caret-down player-position-chevron"></i>
                </button>
                <div class="player-position-body">
                    <div class="player-position-stats">
                        ${pos.stats.map(s => `
                            <div class="player-stat">
                                <span class="player-stat-label">${s.label}</span>
                                <span class="player-stat-value player-stat--${s.color || 'default'}">${s.value}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    },

    // ── Accordion Option ──
    renderAccordionOption(option, index) {
        const isSelected = gameState.selectedOption === option.id;
        const isDisabled = option.disabled === true;
        return `
            <div class="accord-option ${isSelected ? 'accord-option--selected' : ''} ${isDisabled ? 'accord-option--disabled' : ''}"
                 data-option-id="${option.id}" ${isDisabled ? 'data-disabled="true"' : ''}>
                <div class="accord-option-header">
                    <div class="accord-option-num">${index + 1}</div>
                    <div class="accord-option-title-block">
                        <div class="accord-option-title">${option.title}</div>
                        <div class="accord-option-cost">${option.investment || option.cost || ''}</div>
                    </div>
                    <i class="ph ph-caret-down accord-option-chevron"></i>
                </div>
                <div class="accord-option-body">
                    <p class="accord-option-desc">${option.description}</p>
                    <div class="accord-option-details">
                        <div class="accord-detail accord-detail--risk">
                            <span class="accord-detail-label">RISK</span>
                            <span class="accord-detail-value">${typeof option.risk === 'object' ? option.risk.text : option.risk}</span>
                        </div>
                        <div class="accord-detail accord-detail--upside">
                            <span class="accord-detail-label">UPSIDE</span>
                            <span class="accord-detail-value">${option.upside}</span>
                        </div>
                    </div>
                    <button class="accord-option-cta">Choose This Path</button>
                </div>
            </div>
        `;
    },

    // ── Popup Router ──
    openIntelPopup(cardData) {
        this._hasOpenedCard = true;
        const hint = document.querySelector('.intel-hint');
        if (hint) hint.style.display = 'none';
        // SFX
        if (typeof AudioEngine !== 'undefined' && AudioEngine.isStarted()) {
            AudioEngine.playSfx('cardOpen');
        }

        const overlay = document.getElementById('intel-popup-overlay');
        const container = document.getElementById('intel-popup-container');

        let html = '';
        if (cardData.type === 'entity') {
            html = this._renderEntityPopup(cardData);
        } else if (cardData.type === 'memo') {
            html = this._renderMemoPopup(cardData);
        } else if (cardData.type === 'briefing') {
            html = this._renderBriefingPopup(cardData);
        }

        container.innerHTML = html;
        overlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        AudioEngine.duckVolume(true);

        // Close handlers
        const closeBtn = container.querySelector('.intel-popup-close');
        if (closeBtn) closeBtn.addEventListener('click', () => this.closeIntelPopup());

        overlay.querySelector('.intel-popup-backdrop').onclick = () => this.closeIntelPopup();

        // Entity flip handler
        if (cardData.type === 'entity') {
            const flipBtn = container.querySelector('.entity-flip-btn');
            if (flipBtn) {
                flipBtn.addEventListener('click', () => {
                    const flipper = container.querySelector('.entity-flipper');
                    flipper.classList.toggle('flipped');
                });
            }
        }

        // Detail toggle (Layer 1 → Layer 2)
        const detailToggle = container.querySelector('.intel-detail-toggle');
        if (detailToggle) {
            detailToggle.addEventListener('click', () => {
                const section = container.querySelector('.intel-popup-detail-section');
                section.classList.toggle('collapsed');
                const icon = detailToggle.querySelector('i');
                icon.className = section.classList.contains('collapsed') ? 'ph ph-caret-down' : 'ph ph-caret-up';
                detailToggle.childNodes[1].textContent = section.classList.contains('collapsed')
                    ? ` ${detailToggle.dataset.label || 'Full analysis'}`
                    : ' Hide details';
            });
        }

        // Artifact link handlers
        container.querySelectorAll('.intel-artifact-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const artifactId = link.dataset.artifactId;
                if (!gameState.unlockedArtifacts.includes(artifactId)) {
                    gameState.unlockArtifact(artifactId);
                    this.showArtifactUnlockNotification(artifactId);
                } else {
                    this.closeIntelPopup();
                    ArtifactUI.openArtifactViewer(artifactId);
                }
            });
        });
    },

    closeIntelPopup() {
        const overlay = document.getElementById('intel-popup-overlay');
        overlay.classList.add('hidden');
        document.body.style.overflow = '';
        AudioEngine.duckVolume(false);
    },

    // ── Shared: Render structured sections ──
    _renderSections(sections) {
        return sections.map(s => {
            let content = '';
            if (s.type === 'stats') {
                content = `<div class="intel-stats-grid">${s.items.map(item =>
                    `<div class="intel-stat-item">
                        <span class="intel-stat-label">${item.label}</span>
                        <span class="intel-stat-value ${item.color ? 'intel-stat--' + item.color : ''}">${item.value}</span>
                    </div>`
                ).join('')}</div>`;
            } else if (s.type === 'list') {
                content = `<ul class="intel-list">${s.items.map(item => `<li>${item}</li>`).join('')}</ul>`;
            } else {
                content = `<p class="${s.isHighlighted ? 'intel-highlighted' : ''}">${s.content}</p>`;
            }

            const artifactLink = s.artifactId
                ? ` <a href="#" class="intel-artifact-link" data-artifact-id="${s.artifactId}"><i class="ph ph-cube"></i> View artifact</a>`
                : '';

            return `
                <div class="intel-section">
                    <h4 class="intel-section-heading">${s.heading}</h4>
                    ${content}
                    ${artifactLink}
                </div>
            `;
        }).join('');
    },

    // ── Source/reliability bar ──
    _renderKeyPoints(popup) {
        if (!popup.keyPoints || popup.keyPoints.length === 0) return '';
        return `
            <div class="intel-keypoints">
                <div class="intel-keypoints-label">KEY TAKEAWAYS</div>
                <ul class="intel-keypoints-list">
                    ${popup.keyPoints.map(pt => `<li>${pt}</li>`).join('')}
                </ul>
            </div>
        `;
    },

    _renderSourceBar(source, reliability, date) {
        const relClass = reliability === 'HIGH' ? 'intel-rel--high' : reliability === 'MEDIUM' ? 'intel-rel--medium' : 'intel-rel--low';
        return `
            <div class="intel-source-bar">
                <span class="intel-source">${source || ''}</span>
                <span class="intel-source-sep">·</span>
                <span class="intel-date">${date || ''}</span>
                <span class="intel-source-sep">·</span>
                <span class="intel-reliability ${relClass}">${reliability || ''}</span>
            </div>
        `;
    },

    // ── Entity Popup (with flip) ──
    _renderEntityPopup(card) {
        const p = card.popup;
        const f = p.front;
        const b = p.back;
        return `
            <div class="intel-popup intel-popup--entity">
                <button class="intel-popup-close">✕</button>
                <div class="entity-flip-wrapper" style="perspective:1000px">
                    <div class="entity-flipper">
                        <!-- FRONT -->
                        <div class="entity-face entity-front" style="background:${p.gradient}">
                            <div class="entity-header">
                                <i class="ph ${p.icon} entity-icon"></i>
                                <div class="entity-name">${p.name}</div>
                                <div class="entity-category">${p.category}</div>
                            </div>
                            <div class="entity-short-stat">${f.shortStat}</div>
                            <div class="entity-sentiment entity-sentiment--${f.sentimentKey}">${f.sentiment}</div>
                            <div class="intel-stats-grid">
                                ${f.quickStats.map(s => `
                                    <div class="intel-stat-item">
                                        <span class="intel-stat-label">${s.label}</span>
                                        <span class="intel-stat-value ${s.color ? 'intel-stat--' + s.color : ''}">${s.value}</span>
                                    </div>
                                `).join('')}
                            </div>
                            ${this._renderSourceBar(f.source, f.reliability, '')}
                            <button class="entity-flip-btn"><i class="ph ph-arrow-u-down-left"></i> Flip for intel</button>
                        </div>
                        <!-- BACK -->
                        <div class="entity-face entity-back" style="background:${p.gradient}">
                            <div class="entity-header-sm">
                                <i class="ph ${p.icon}"></i> ${p.name} — INTEL
                            </div>
                            <blockquote class="entity-signal">"${b.keySignal}"</blockquote>
                            <div class="entity-details">
                                ${b.details.map(d => `
                                    <div class="entity-detail-row">
                                        <span class="entity-detail-label">${d.label}</span>
                                        <span class="entity-detail-value ${d.color ? 'intel-stat--' + d.color : ''}">${d.value}</span>
                                    </div>
                                `).join('')}
                            </div>
                            <div class="entity-analysis">${b.analysisNote}</div>
                            ${b.artifactId ? `<a href="#" class="intel-artifact-link" data-artifact-id="${b.artifactId}"><i class="ph ph-cube"></i> View artifact</a>` : ''}
                            <button class="entity-flip-btn"><i class="ph ph-arrow-u-up-left"></i> Flip back</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    // ── Memo Popup ──
    _renderMemoPopup(card) {
        const p = card.popup;
        return `
            <div class="intel-popup intel-popup--memo">
                <button class="intel-popup-close">✕</button>
                <div class="memo-header-block">
                    <div class="memo-classification">${p.classification || 'INTERNAL'}</div>
                    <div class="memo-from"><span class="memo-label">FROM:</span> ${p.from}</div>
                    <div class="memo-re"><span class="memo-label">RE:</span> ${p.re}</div>
                </div>
                ${this._renderKeyPoints(p)}
                <div class="intel-popup-body intel-popup-detail-section${p.keyPoints ? ' collapsed' : ''}">
                    <button class="intel-detail-toggle"${p.keyPoints ? '' : ' style="display:none"'}><i class="ph ph-caret-down"></i> Full memo</button>
                    <div class="intel-detail-content">
                        ${this._renderSections(p.sections)}
                    </div>
                </div>
                ${p.footnote ? `<div class="intel-footnote">${p.footnote}</div>` : ''}
                ${this._renderSourceBar(p.source, p.reliability, p.date)}
            </div>
        `;
    },

    // ── Briefing Popup ──
    _renderBriefingPopup(card) {
        const p = card.popup;
        return `
            <div class="intel-popup intel-popup--briefing">
                <button class="intel-popup-close">✕</button>
                ${p.heroStat ? `
                    <div class="briefing-hero">
                        <div class="briefing-hero-value">${p.heroStat.value}</div>
                        <div class="briefing-hero-label">${p.heroStat.label}</div>
                        ${p.heroStat.attribution ? `<div class="briefing-hero-attr">— ${p.heroStat.attribution}</div>` : ''}
                    </div>
                ` : ''}
                <h3 class="intel-popup-title">${p.title}</h3>
                ${this._renderKeyPoints(p)}
                <div class="intel-popup-body intel-popup-detail-section${p.keyPoints ? ' collapsed' : ''}">
                    <button class="intel-detail-toggle"${p.keyPoints ? '' : ' style="display:none"'}><i class="ph ph-caret-down"></i> Full analysis</button>
                    <div class="intel-detail-content">
                        ${this._renderSections(p.sections)}
                    </div>
                </div>
                ${p.footnote ? `<div class="intel-footnote">${p.footnote}</div>` : ''}
                ${this._renderSourceBar(p.source, p.reliability, p.date)}
            </div>
        `;
    },

    // Render decision option
    renderDecisionOption(option) {
        const isSelected = gameState.selectedOption === option.id;
        const isDisabled = option.disabled === true;
        return `
            <div class="decision-option ${isSelected ? 'selected' : ''} ${isDisabled ? 'disabled' : ''}" data-option-id="${option.id}" ${isDisabled ? 'data-disabled="true"' : ''}>
                <div class="decision-option-title">${option.title}</div>
                ${isDisabled ? `<div class="decision-option-disabled-reason">${option.disabledReason || 'Not available'}</div>` : ''}
                <div class="decision-option-description">${option.description}</div>
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

        // Enable confirm action button and scroll it into view
        const confirmBtn = document.getElementById('confirm-action-btn');
        if (confirmBtn) {
            confirmBtn.disabled = false;
            setTimeout(() => {
                confirmBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 150);
        }
    },

    // Confirm decision
    confirmDecision() {
        // SFX on decision confirm
        if (typeof AudioEngine !== 'undefined' && AudioEngine.isStarted()) {
            AudioEngine.playSfx('decisionConfirm');
        }

        // Show processing overlay
        const overlay = document.createElement('div');
        overlay.className = 'decision-processing-overlay';
        overlay.innerHTML = `
            <div class="decision-processing-card">
                <div class="decision-processing-spinner"></div>
                <div class="decision-processing-text">Processing decision...</div>
                <div class="decision-processing-sub">Calculating consequences</div>
            </div>
        `;
        document.body.appendChild(overlay);
        requestAnimationFrame(() => overlay.classList.add('show'));

        // Disable confirm button to prevent double-click
        const confirmBtn = document.getElementById('confirm-action-btn');
        if (confirmBtn) confirmBtn.disabled = true;

        // Delay the actual processing for the loader experience
        setTimeout(() => {
            overlay.classList.remove('show');
            setTimeout(() => overlay.remove(), 300);
            this._executeConfirmedDecision();
        }, 1200);
    },

    _executeConfirmedDecision() {
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

            // Use moment stepper if moments exist, otherwise legacy staggered reveal
            const consequenceHandler = (option.consequences.moments && option.consequences.moments.length > 0)
                ? Transitions.showConsequenceStepper.bind(Transitions)
                : Transitions.showStaggeredConsequences.bind(Transitions);

            consequenceHandler(option, () => {
                // continueToNext() now handles applying delayed consequences
                gameState.continueToNext();

                // Update metrics bar after delayed consequences are applied
                this.updateMetricsBar(true);

                // Update progress indicator again after completion check
                this.updateProgressIndicator();

                if (gameState.currentScreen === "complete") {
                    this.renderComplete();
                } else {
                    // Show chapter intro first, then story brief
                    Transitions.showChapterIntro(() => {
                        this.renderStoryPoint();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    });
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
                    <div class="impact-section emerging-challenges">
                        <h3>Emerging Challenges</h3>
                        <p>${option.consequences.delayed.narrative}</p>
                    </div>
                ` : ''}

                <button class="continue-btn" id="continue-btn">
                    Continue →
                </button>
            </div>
        `;

        // Add event listener to continue button
        document.getElementById('continue-btn').addEventListener('click', () => {
            const wasD4 = gameState.currentDecisionStage === "d4";

            // continueToNext() now handles applying delayed consequences
            gameState.continueToNext();

            // Update metrics bar after delayed consequences are applied
            this.updateMetricsBar(true);

            if (gameState.currentScreen === "complete") {
                this.renderComplete();
            } else if (wasD4 && gameState.currentDecisionStage === "d5") {
                this.renderCeoTransition();
            } else {
                // Show chapter intro first, then story brief
                Transitions.showChapterIntro(() => {
                    this.renderStoryPoint();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
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
                return `<span style="color: #2D7A4F; font-size: 0.7rem; margin-left: 6px;">▲ +${delta}%</span>`;
            } else if (delta < 0) {
                return `<span style="color: #C43E3E; font-size: 0.7rem; margin-left: 6px;">▼ ${delta}%</span>`;
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
                        <h3>YOUR FINAL STATE</h3>
                        <div class="comparison-hero-stats">
                            <div class="hero-stat">
                                <span class="hero-stat-value" style="color: ${metrics.mobilePLRaw >= 0 ? 'var(--metric-positive)' : 'var(--metric-negative)'};">${metrics.mobilePLRaw >= 0 ? 'Profitable' : 'Unprofitable'}</span>
                                <span class="hero-stat-label">Status</span>
                            </div>
                            <div class="hero-stat">
                                <span class="hero-stat-value">${metrics.marketShare}</span>
                                <span class="hero-stat-label">Market Share</span>
                            </div>
                            <div class="hero-stat">
                                <span class="hero-stat-value" style="color: var(--metric-positive);">${metrics.mobileRevenue}</span>
                                <span class="hero-stat-label">Revenue</span>
                            </div>
                        </div>
                        <div class="comparison-secondary">
                            <span>Costs: ${metrics.mobileCosts}</span>
                            <span>Net P&L: <span style="color: ${metrics.mobilePLRaw >= 0 ? 'var(--metric-positive)' : 'var(--metric-negative)'};">${metrics.mobilePL}</span></span>
                        </div>
                    </div>
                    <div class="comparison-section actual-path">
                        <h3>ACTUAL HISTORY</h3>
                        <div class="comparison-hero-stats">
                            <div class="hero-stat">
                                <span class="hero-stat-value" style="color: var(--metric-negative);">Discontinued</span>
                                <span class="hero-stat-label">Status</span>
                            </div>
                            <div class="hero-stat">
                                <span class="hero-stat-value">${actualMetrics.marketShare}%</span>
                                <span class="hero-stat-label">Market Share</span>
                            </div>
                            <div class="hero-stat">
                                <span class="hero-stat-value" style="color: var(--metric-positive);">~$8B</span>
                                <span class="hero-stat-label">Revenue</span>
                            </div>
                        </div>
                        <div class="comparison-secondary">
                            <span>Costs: ~$15.6B</span>
                            <span>Net P&L: <span style="color: var(--metric-negative);">-$7.6B</span></span>
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
                    // Show unlock notification (toast overlays on top of info card)
                    this.showArtifactUnlockNotification(artifactId);
                } else {
                    // Already unlocked — close info card and open viewer
                    this.closeModal();
                    ArtifactUI.openArtifactViewer(artifactId);
                }
            });
        });

        // Show modal first, then reset scroll (scrollTop doesn't work on display:none elements)
        modal.classList.remove('hidden');
        AudioEngine.duckVolume(true);
        modalBody.scrollTop = 0;
        modal.querySelector('.modal-content').scrollTop = 0;
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
                <div class="artifact-notification-icon"><i class="ph ph-device-mobile"></i></div>
                <div class="artifact-notification-text">
                    <span class="artifact-notification-title">Unlocked:</span>
                    <span class="artifact-notification-name">${artifact.name}</span>
                </div>
                <button class="artifact-notification-view">View</button>
            </div>
        `;

        document.body.appendChild(notification);

        // View button opens artifact viewer
        const viewBtn = notification.querySelector('.artifact-notification-view');
        viewBtn.addEventListener('click', () => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
            ArtifactUI.openArtifactViewer(artifactId);
        });

        // Animate in
        setTimeout(() => notification.classList.add('show'), 100);

        // Remove after 6 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 6000);

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
        AudioEngine.duckVolume(false);
        this.hideJourneyModal();
    },

    // Profile notification dot helpers
    _showProfileNotify() {
        const dot = document.getElementById('profile-notify-dot');
        if (dot) dot.classList.remove('hidden');
    },

    _clearProfileNotify() {
        const dot = document.getElementById('profile-notify-dot');
        if (dot) dot.classList.add('hidden');
    },

    // Open profile modal (Situation Report design)
    openProfileModal() {
        if (window.Analytics) Analytics.trackProfileView();

        const modal = document.getElementById('profile-modal');
        const modalBody = document.getElementById('profile-modal-body');
        const metrics = gameState.getFormattedMetrics();
        const currentDP = gameState.getCurrentDecisionPoint();
        const pos = currentDP?.playerPosition;

        // CEO display name
        const ceoName = metrics.ceo === "S. Ballmer" ? "Steve Ballmer" : metrics.ceo;

        // ── Market Position section ──
        let heroStat = { label: 'Mobile OS Share', value: `${gameState.metrics.marketShare}%`, color: 'green' };
        let chipStats = [];
        if (pos && pos.stats.length > 0) {
            heroStat = pos.stats[0];
            chipStats = pos.stats.slice(1);
        }

        // Separate strategic assessments (qualitative) from chip stats (quantitative)
        const assessments = chipStats.filter(s => s.color === 'green' || s.color === 'gold' || s.color === 'red');
        const chips = chipStats.filter(s => s.color === 'default' || !s.color);

        // If all are assessments (no plain chips), split: first 3 as chips, rest as assessments
        // Heuristic: if value contains $ or % or a number, it's a chip
        const isQuantitative = (s) => /[\$%\d]/.test(s.value);
        const quantChips = chipStats.filter(isQuantitative);
        const qualAssessments = chipStats.filter(s => !isQuantitative(s));

        // ── Board sentiment ──
        const marketCap = gameState.metrics.marketCap;
        const marketShare = gameState.metrics.marketShare;
        let boardLabel, boardColor, boardPct;
        if (marketCap > 260 && marketShare > 35) {
            boardLabel = 'Confident'; boardColor = '#2D7A4F'; boardPct = 80;
        } else if (marketCap > 230 && marketShare > 25) {
            boardLabel = 'Cautious'; boardColor = '#eab308'; boardPct = 55;
        } else if (marketCap < 200 || marketShare < 20) {
            boardLabel = 'Concerned'; boardColor = '#C43E3E'; boardPct = 25;
        } else {
            boardLabel = 'Monitoring'; boardColor = '#eab308'; boardPct = 50;
        }

        // ── Morale bar ──
        const moraleMap = {
            'high': { pct: 85, color: '#2D7A4F' }, 'optimistic': { pct: 80, color: '#2D7A4F' },
            'cautiously optimistic': { pct: 70, color: '#2D7A4F' }, 'hopeful': { pct: 70, color: '#2D7A4F' },
            'excited': { pct: 90, color: '#2D7A4F' }, 'satisfied': { pct: 75, color: '#2D7A4F' },
            'relieved': { pct: 70, color: '#2D7A4F' }, 'focused': { pct: 75, color: '#2D7A4F' },
            'proud': { pct: 85, color: '#2D7A4F' }, 'neutral': { pct: 50, color: '#eab308' },
            'concerned': { pct: 40, color: '#eab308' }, 'mixed': { pct: 45, color: '#eab308' },
            'stressed': { pct: 35, color: '#eab308' }, 'uncertain': { pct: 40, color: '#eab308' },
            'cautious': { pct: 50, color: '#eab308' }, 'defensive': { pct: 35, color: '#eab308' },
            'urgent': { pct: 30, color: '#eab308' }, 'all-in': { pct: 60, color: '#eab308' },
            'resigned': { pct: 25, color: '#eab308' },
            'frustrated': { pct: 20, color: '#C43E3E' }, 'alarmed': { pct: 15, color: '#C43E3E' },
            'shocked': { pct: 10, color: '#C43E3E' }, 'desperate': { pct: 10, color: '#C43E3E' },
            'disillusioned': { pct: 15, color: '#C43E3E' }, 'defeated': { pct: 5, color: '#C43E3E' },
            'low': { pct: 10, color: '#C43E3E' }
        };
        const moraleInfo = moraleMap[gameState.metrics.morale] || { pct: 50, color: '#eab308' };

        // ── Past decisions ──
        let decisionsHTML = '';
        if (gameState.decisions.length === 0) {
            decisionsHTML = '<div class="sitrep-empty">No decisions made yet</div>';
        } else {
            decisionsHTML = gameState.decisions.map(decision => {
                const dp = gameState.getDecisionPointById(decision.decisionId);
                if (!dp) return '';
                const opt = dp.options.find(o => o.id === decision.optionId);
                if (!opt) return '';
                return `
                    <div class="sitrep-decision">
                        <div class="sitrep-decision-dot"></div>
                        <div class="sitrep-decision-body">
                            <div class="sitrep-decision-title">${dp.title}</div>
                            <div class="sitrep-decision-choice">${opt.title}</div>
                        </div>
                    </div>
                `;
            }).join('');
        }

        // Hero stat color
        const heroBarColor = heroStat.color === 'green' ? '#2D7A4F' : heroStat.color === 'red' ? '#C43E3E' : '#eab308';

        modalBody.innerHTML = `
            <div class="sitrep">
                <div class="sitrep-header-label">SITUATION REPORT</div>
                <h1 class="sitrep-ceo">${ceoName}</h1>
                <div class="sitrep-subtitle">CEO, Microsoft · ${metrics.date}</div>

                <div class="sitrep-divider"></div>

                <div class="sitrep-section-label">MARKET POSITION</div>
                <div class="sitrep-hero-row">
                    <div class="sitrep-hero-value">${heroStat.value}</div>
                    <div class="sitrep-hero-label">${heroStat.label}</div>
                </div>
                <div class="sitrep-hero-bar" style="--bar-color: ${heroBarColor}"></div>

                ${quantChips.length > 0 ? `
                    <div class="sitrep-chips">
                        ${quantChips.map(s => `
                            <div class="sitrep-chip">
                                <span class="sitrep-chip-label">${s.label}</span>
                                <span class="sitrep-chip-value">${s.value}</span>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}

                ${qualAssessments.length > 0 ? `
                    <div class="sitrep-divider"></div>
                    <div class="sitrep-section-label">STRATEGIC ASSESSMENT</div>
                    <div class="sitrep-assessments">
                        ${qualAssessments.map(s => {
                            const barColor = s.color === 'green' ? '#2D7A4F' : s.color === 'red' ? '#C43E3E' : '#c4a35a';
                            return `
                                <div class="sitrep-assessment" style="--assess-color: ${barColor}">
                                    <div class="sitrep-assess-title">${s.value}</div>
                                    <div class="sitrep-assess-sub">${s.label}</div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                ` : ''}

                <div class="sitrep-divider"></div>

                <div class="sitrep-section-label">INTERNAL TEMPERATURE</div>
                <div class="sitrep-temp-rows">
                    <div class="sitrep-temp-row">
                        <span class="sitrep-temp-name">Board</span>
                        <span class="sitrep-temp-status" style="color: ${boardColor}">${boardLabel}</span>
                    </div>
                    <div class="sitrep-temp-bar"><div class="sitrep-temp-fill" style="width: ${boardPct}%; background: ${boardColor}"></div></div>

                    <div class="sitrep-temp-row">
                        <span class="sitrep-temp-name">Team Morale</span>
                        <span class="sitrep-temp-status" style="color: ${moraleInfo.color}">${metrics.moraleText}</span>
                    </div>
                    <div class="sitrep-temp-bar"><div class="sitrep-temp-fill" style="width: ${moraleInfo.pct}%; background: ${moraleInfo.color}"></div></div>
                </div>

                <div class="sitrep-divider"></div>

                <div class="sitrep-section-label">YOUR DECISIONS</div>
                <div class="sitrep-decisions">
                    ${decisionsHTML}
                </div>
            </div>
        `;

        this._clearProfileNotify();
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
