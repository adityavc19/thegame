// ========================================
// AURORA LABS - UI RENDERING
// ========================================

const UI = {
    // Sync mute icon to actual AudioEngine state
    _syncMuteIcon() {
        const icon = document.getElementById('mute-icon');
        if (icon && typeof AudioEngine !== 'undefined') {
            icon.className = AudioEngine.isMuted() ? 'ph ph-speaker-simple-slash' : 'ph ph-speaker-simple-high';
        }
    },

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
        // Competitor shares removed from header — shown in profile modal instead
        const el = document.getElementById('competitor-shares');
        if (el) el.textContent = '';
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
            } else {
                progressBadge.classList.remove('visible');
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
                        <span class="stat-value">42% smartphone market share</span>
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
        if (window.Analytics) Analytics.trackScreenView('backstory', { chapter: chapterIndex });
        this.currentBackstoryChapter = chapterIndex;
        const chapter = this.backstoryChapters[chapterIndex];
        const totalChapters = this.backstoryChapters.length;
        const mainContent = document.getElementById('main-content');

        // Show metrics bar in story mode (back + mute only) during backstory
        const metricsBar = document.getElementById('metrics-bar');
        metricsBar.style.display = 'flex';
        metricsBar.classList.add('metrics-bar--story-mode', 'metrics-bar--backstory');
        document.getElementById('back-btn').style.display = 'flex';
        // artifact button removed — collection lives in profile modal
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
                        ${chapter.isFinal ? 'Begin' : 'Continue'}
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
                this._inBackstory = false;
                // Start the game — story mode (back btn visible, metrics hidden)
                const mb = document.getElementById('metrics-bar');
                mb.classList.remove('metrics-bar--backstory');
                mb.style.display = 'flex';
                mb.classList.add('metrics-bar--story-mode');
                document.getElementById('back-btn').style.display = 'flex';
                // artifact button removed — collection lives in profile modal
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
        if (window.Analytics) Analytics.trackScreenView('landing');
        this._inBackstory = false;
        const mainContent = document.getElementById('main-content');

        // Hide metrics bar and utility buttons on landing screen
        const metricsBar = document.getElementById('metrics-bar');
        metricsBar.style.display = 'none';
        metricsBar.classList.remove('metrics-bar--story-mode', 'metrics-bar--backstory');
        // artifact button removed — collection lives in profile modal
        document.getElementById('profile-icon-btn').style.display = 'none';

        mainContent.innerHTML = `
            <div class="landing-screen">
                <video class="landing-bg-video" src="assets/images/Phone.mp4" autoplay loop muted playsinline></video>
                <div class="landing-overlay"></div>

                <div class="landing-content">
                    <div class="landing-top">
                        <h1 class="landing-title">the mobile wars</h1>
                        <div class="landing-info-card">
                            <p class="landing-subtitle">redmond, 2007</p>
                            <p class="landing-description">You're Microsoft's CEO.<br>The iPhone just launched. You have $800M in mobile revenue and 42% market share. In ten years, you'll have neither.</p>
                            <p class="landing-hook">Can you change the ending?</p>
                            <div class="landing-meta">
                                <span class="landing-meta-item"><i class="ph ph-clock"></i> ~15-20 min</span>
                                <span class="landing-meta-item"><i class="ph ph-path"></i> 5 decisions</span>
                            </div>
                        </div>
                    </div>

                    <div class="landing-bottom">
                        <div class="landing-audio-hint"><i class="ph ph-headphones"></i> best with audio</div>
                        <div class="landing-actions">
                            <button class="landing-begin-btn" id="begin-btn">Begin</button>
                            <a class="landing-backstory-link" id="manifesto-btn"><i class="ph ph-clock-counter-clockwise"></i> <span style="text-decoration: underline; text-underline-offset: 3px;">the backstory</span></a>
                        </div>

                        <a href="how-to-play.html" class="landing-how-to-play" id="how-to-play-link"><i class="ph ph-question"></i></a>
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

            // Show metrics bar in story mode when game starts
            const startMb = document.getElementById('metrics-bar');
            startMb.style.display = 'flex';
            startMb.classList.add('metrics-bar--story-mode');
            document.getElementById('back-btn').style.display = 'flex';
            // artifact button removed — collection lives in profile modal
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

            this._inBackstory = true;
            this.currentBackstoryChapter = 0;
            this.renderBackstoryChapter(0);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Mute button — controls BGM + narration + TTS
        document.getElementById('mute-btn').addEventListener('click', () => {
            const nowMuted = AudioEngine.toggleMute();
            // Sync narration audio
            if (typeof Narration !== 'undefined') Narration.setMuted(nowMuted);
            // Sync browser TTS
            if (nowMuted && 'speechSynthesis' in window) speechSynthesis.cancel();
            this._syncMuteIcon();
            if (window.Analytics) Analytics.trackMuteToggle(nowMuted);
        });

        // Home button — restart with confirmation
        document.getElementById('back-btn').addEventListener('click', () => {
            this.showRestartConfirm();
        });
    },

    showRestartConfirm() {
        // If in backstory, go straight to home
        if (this._inBackstory) {
            this._inBackstory = false;
            this.renderLandingScreen();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        // If already on landing, no-op
        if (gameState.currentScreen === 'landing') return;

        const overlay = document.createElement('div');
        overlay.className = 'restart-confirm-overlay';
        overlay.innerHTML = `
            <div class="restart-confirm-card">
                <h3>Start over?</h3>
                <p>Your progress will be lost. You'll return to the beginning.</p>
                <div class="restart-confirm-actions">
                    <button class="restart-btn-cancel">Cancel</button>
                    <button class="restart-btn-confirm">Restart</button>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
        requestAnimationFrame(() => overlay.classList.add('visible'));

        overlay.querySelector('.restart-btn-cancel').addEventListener('click', () => {
            overlay.classList.remove('visible');
            setTimeout(() => overlay.remove(), 200);
        });

        overlay.querySelector('.restart-confirm-card').addEventListener('click', (e) => e.stopPropagation());
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            setTimeout(() => overlay.remove(), 200);
        });

        overlay.querySelector('.restart-btn-confirm').addEventListener('click', () => {
            overlay.remove();
            // Stop any playing audio/narration
            try {
                if (typeof speechSynthesis !== 'undefined') speechSynthesis.cancel();
                if (typeof Narration !== 'undefined') Narration.stop();
                if (typeof AudioEngine !== 'undefined') AudioEngine.stopBgm();
            } catch(e) { console.warn('Audio cleanup error:', e); }
            // Reset game state
            gameState.reset();
            // Clear artifact seen state
            if (typeof ArtifactUI !== 'undefined') ArtifactUI._seenArtifacts.clear();
            // Re-render landing
            this.renderLandingScreen();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    },

    // Simple toast for role/status changes (no action, auto-dismiss)
    _showRoleToast(message) {
        const existing = document.querySelector('.role-toast');
        if (existing) existing.remove();

        const toast = document.createElement('div');
        toast.className = 'role-toast';
        toast.innerHTML = `<i class="ph ph-user-switch"></i><span>${message}</span>`;
        document.body.appendChild(toast);

        requestAnimationFrame(() => toast.classList.add('role-toast--show'));

        setTimeout(() => {
            if (toast.parentNode) {
                toast.classList.remove('role-toast--show');
                setTimeout(() => toast.remove(), 300);
            }
        }, 5000);
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

                    <p>Steve Ballmer is stepping down as CEO. After 14 years, the man who championed your mobile strategy, who greenlit your budgets, who pounded the table in board meetings defending your team, he's done.</p>

                    <p>His replacement: Satya Nadella. Cloud division. Enterprise background. The opposite of a devices guy.</p>

                    <p>The new org chart arrives three weeks later. You're no longer reporting to the CEO. You're no longer in the room where the big calls are made. Your new title: <strong>Corporate Vice President, Mobile Devices Division.</strong></p>

                    <p>It's not a firing. It's worse, it's a demotion wrapped in corporate language. "Streamlining leadership to align with our cloud-first vision." You've gone from shaping Microsoft's mobile strategy at the executive table to running a division that Nadella sees as a legacy problem.</p>

                    <p>He calls you into his office on day one. He's polite. Direct. "I inherited your bet," he says. "I'm not going to kill it, yet. But you have to show me it's worth keeping. Show me the numbers. Show me a path."</p>

                    <p>You have one shot. One final chapter to prove that the years, the billions, the sleepless nights, that they meant something.</p>
                </div>

                <button class="continue-btn" id="transition-continue-btn">
                    Continue
                </button>
            </div>
        `;

        // Pivot phase: Nadella era begins
        AudioEngine.setPhase('pivot');

        // Toast: role change notification
        this._showRoleToast('Satya Nadella is now CEO. You are CVP, Mobile Devices.');

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
        // Stop any lingering consequence audio from previous screen
        if (typeof Transitions !== 'undefined') Transitions._stopCsqAudio();

        this._syncMuteIcon();
        if (window.Analytics) Analytics.trackScreenView('story', { stage: gameState.currentDecisionStage });
        const decisionPoint = gameState.getCurrentDecisionPoint();
        const mainContent = document.getElementById('main-content');

        // Safety: ensure body scroll is not locked from a previous modal
        document.body.style.overflow = '';

        // Story mode: show back button, hide metrics
        const storyMetricsBar = document.getElementById('metrics-bar');
        storyMetricsBar.style.display = 'flex';
        storyMetricsBar.classList.add('metrics-bar--story-mode');
        document.getElementById('back-btn').style.display = 'flex';

        // Audio phase: D1 is disruption, everything else boardroom (pivot set by CEO transition)
        const stage = gameState.currentDecisionStage;
        if (stage === 'd1') AudioEngine.setPhase('disruption');
        else if (stage === 'd2' || stage === 'd3' || stage === 'd4') AudioEngine.setPhase('boardroom');

        const rawText = gameState.resolveTemplate(decisionPoint.storyText);
        const audioHash = Narration.textHash(rawText);
        const audioSrc = `assets/audio/story-${audioHash}.mp3`;

        const _proceedToDecision = () => {
            Narration.stop();
            // Remove cinematic bg layer if present
            const bgLayer = document.querySelector('.story-bg-layer');
            if (bgLayer) bgLayer.remove();
            // Re-show full metrics bar for decision screen
            const decMetrics = document.getElementById('metrics-bar');
            decMetrics.style.display = 'flex';
            decMetrics.classList.remove('metrics-bar--story-mode');
            document.getElementById('back-btn').style.display = 'flex';
            Transitions.showMetricsLoader(() => {
                gameState.currentScreen = "decision";
                this.renderDecisionPoint();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        };

        // Default view: audio narration screen
        const hasBg = !!decisionPoint.storyBg;
        const bgClass = hasBg ? 'story-point--cinematic' : '';

        mainContent.innerHTML = `
            ${hasBg ? `<div class="story-bg-layer" style="background-image:url('${decisionPoint.storyBg}')"></div>` : ''}
            <div class="story-point ${bgClass}">
                ${hasBg ? `<div class="story-card-glass">` : ''}

                <div class="time-marker">${decisionPoint.timeMarker}</div>
                <h1 class="story-title">${decisionPoint.title}</h1>

                ${!hasBg && decisionPoint.storyImage && decisionPoint.storyImage.startsWith('<img')
                    ? `<div class="story-image">${decisionPoint.storyImage}</div>`
                    : ''}

                <div class="story-text story-text--readmode" id="story-text-block" style="display:none;">
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
                        Continue
                    </button>
                </div>

                ${hasBg ? `</div>` : ''}
            </div>
        `;

        // Toggle between read and listen modes
        let isReadMode = false;
        const readBtn = document.getElementById('read-btn');
        const anchor = document.getElementById('narration-anchor');

        const enterReadMode = () => {
            Narration.stop();
            const textBlock = document.getElementById('story-text-block');
            const narrationCard = document.getElementById('narration-card');
            textBlock.style.display = '';
            if (narrationCard) narrationCard.style.display = 'none';
            readBtn.innerHTML = '<i class="ph ph-speaker-high"></i> Listen instead';
            document.getElementById('start-decision-btn').textContent = 'Continue';
            isReadMode = true;
        };

        const enterListenMode = () => {
            // Unmute if needed
            if (typeof AudioEngine !== 'undefined' && AudioEngine.isMuted()) {
                AudioEngine.toggleMute();
                if (typeof Narration !== 'undefined') Narration.setMuted(false);
                this._syncMuteIcon();
            }
            const textBlock = document.getElementById('story-text-block');
            const narrationCard = document.getElementById('narration-card');
            textBlock.style.display = 'none';
            if (narrationCard) narrationCard.style.display = '';
            readBtn.innerHTML = '<i class="ph ph-book-open-text"></i> Read instead';
            document.getElementById('start-decision-btn').textContent = 'Continue';
            Narration.start(rawText, audioSrc, anchor, () => {
                _proceedToDecision();
            });
            isReadMode = false;
        };

        // If audio is muted, go straight to read mode; otherwise start narration
        const isMuted = typeof AudioEngine !== 'undefined' && AudioEngine.isMuted();
        if (isMuted) {
            // Defer so DOM is ready
            setTimeout(() => enterReadMode(), 50);
        } else {
            Narration.start(rawText, audioSrc, anchor, () => {
                _proceedToDecision();
            }, () => {
                // Audio file missing — fall back to read mode
                enterReadMode();
            });
        }

        readBtn.addEventListener('click', () => {
            if (!isReadMode) {
                enterReadMode();
            } else {
                enterListenMode();
            }
        });

        // Manual continue
        document.getElementById('start-decision-btn').addEventListener('click', () => {
            _proceedToDecision();
        });
    },

    // Render decision point screen
    renderDecisionPoint() {
        this._syncMuteIcon();
        if (window.Analytics) Analytics.trackScreenView('decision', { stage: gameState.currentDecisionStage });
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
                    <div class="decision-objective">
                        <span class="decision-objective-text">${gameState.resolveTemplate(decisionPoint.objective)}</span>
                        <button class="objective-speak-btn" id="objective-speak-btn" aria-label="Read aloud" title="Read aloud">
                            <i class="ph ph-speaker-high" id="objective-speak-icon"></i>
                        </button>
                    </div>

                    <div class="intel-section-label">
                        <i class="ph ph-binoculars"></i> THE LANDSCAPE
                    </div>
                    ${this.renderIntelGrid(decisionPoint.intelCards)}
                    <div class="intel-hint">Swipe to browse · Tap any card for full briefing</div>

                    <div class="decision-divider"></div>

                    <div class="intel-section-label">
                        <i class="ph ph-crosshair"></i> CHOOSE YOUR STRATEGY
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

            // Hide carousel fade hint when scrolled to end + update dot indicators + arrow visibility
            const carousel = document.getElementById('intel-carousel');
            const fadeMask = carousel?.parentElement?.querySelector('.intel-carousel-fade');
            const dots = document.querySelectorAll('.intel-dot');
            const arrowLeft = document.getElementById('carousel-arrow-left');
            const arrowRight = document.getElementById('carousel-arrow-right');
            if (carousel) {
                const checkFade = () => {
                    const atEnd = carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 8;
                    const atStart = carousel.scrollLeft <= 8;
                    if (fadeMask) fadeMask.style.opacity = atEnd ? '0' : '1';
                    if (arrowLeft) arrowLeft.style.opacity = atStart ? '0.3' : '1';
                    if (arrowRight) arrowRight.style.opacity = atEnd ? '0.3' : '1';
                    // Update dot indicators
                    if (dots.length > 0) {
                        const cardWidth = carousel.firstElementChild?.offsetWidth || 200;
                        const activeIdx = Math.round(carousel.scrollLeft / (cardWidth + 8));
                        dots.forEach((d, i) => d.classList.toggle('intel-dot--active', i === activeIdx));
                    }
                };
                carousel.addEventListener('scroll', checkFade, { passive: true });
                checkFade();

                // Arrow click handlers
                if (arrowLeft) arrowLeft.addEventListener('click', () => {
                    carousel.scrollBy({ left: -220, behavior: 'smooth' });
                });
                if (arrowRight) arrowRight.addEventListener('click', () => {
                    carousel.scrollBy({ left: 220, behavior: 'smooth' });
                });
            }

            // Wire objective speak button
            this._wireObjectiveSpeaker(gameState.resolveTemplate(decisionPoint.objective));

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
                <div class="objective">${gameState.resolveTemplate(decisionPoint.objective)}</div>

                <h2 class="section-header">INFORMATION SOURCES</h2>
                <div class="info-carousel" id="info-carousel">
                    ${decisionPoint.availableInfo.map(cardId => {
                        const card = gameState.getInfoCard(cardId);
                        return this.renderInfoCard(card);
                    }).join('')}
                </div>

                <h2 class="section-header" id="your-call-header">CHOOSE YOUR STRATEGY</h2>
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

    // Wire objective speaker button — pre-generated MP3 narration
    _objectiveSpeaking: false,
    _objectiveAudio: null,

    _stopObjectiveAudio() {
        if (this._objectiveAudio) {
            this._objectiveAudio.pause();
            this._objectiveAudio.removeAttribute('src');
            this._objectiveAudio = null;
        }
        this._objectiveSpeaking = false;
        if (typeof AudioEngine !== 'undefined' && AudioEngine.isStarted()) AudioEngine.duckVolume(false);
    },

    _wireObjectiveSpeaker(text) {
        const btn = document.getElementById('objective-speak-btn');
        const icon = document.getElementById('objective-speak-icon');
        if (!btn || !icon) return;

        const clean = text.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
        if (!clean) { btn.style.display = 'none'; return; }

        const audioHash = typeof Narration !== 'undefined' ? Narration.textHash(clean) : '';
        if (!audioHash) { btn.style.display = 'none'; return; }
        const audioSrc = `assets/audio/story-${audioHash}.mp3`;

        const markSpeaking = () => {
            this._objectiveSpeaking = true;
            icon.className = 'ph ph-speaker-x';
            btn.classList.add('speaking');
            if (typeof AudioEngine !== 'undefined' && AudioEngine.isStarted()) AudioEngine.duckVolume(true);
        };

        const markDone = () => {
            this._objectiveSpeaking = false;
            icon.className = 'ph ph-speaker-high';
            btn.classList.remove('speaking');
            if (typeof AudioEngine !== 'undefined' && AudioEngine.isStarted()) AudioEngine.duckVolume(false);
        };

        const audio = new Audio(audioSrc);
        this._objectiveAudio = audio;

        // Respect global mute
        if (typeof AudioEngine !== 'undefined' && AudioEngine.isMuted()) {
            audio.muted = true;
        }

        audio.addEventListener('ended', markDone);
        audio.addEventListener('error', () => {
            console.warn('Objective audio not found:', audioSrc);
            markDone();
        });

        const startPlaying = () => {
            if (this._objectiveSpeaking) return;
            audio.currentTime = 0;
            const p = audio.play();
            if (p !== undefined) p.then(markSpeaking).catch(markDone);
            else markSpeaking();
        };

        btn.addEventListener('click', () => {
            if (this._objectiveSpeaking) {
                audio.pause();
                markDone();
            } else {
                startPlaying();
            }
        });

        // Auto-play with 1s delay
        setTimeout(() => {
            audio.load();
            audio.addEventListener('canplaythrough', () => {
                if (!this._objectiveSpeaking) startPlaying();
            }, { once: true });
        }, 1000);
    },

    // Wire accordion option interactions
    _wireAccordionOptions(decisionPoint) {
        const container = document.getElementById('accord-options');
        if (!container) return;

        container.querySelectorAll('.accord-option').forEach(el => {
            // Click anywhere on the card toggles expansion
            const toggleExpand = (e) => {
                // Don't toggle if clicking the CTA button
                if (e.target.closest('.accord-option-cta')) return;
                if (el.dataset.disabled === 'true') return;
                const wasExpanded = el.classList.contains('accord-option--expanded');

                // Collapse all and reset dimmed/selected states for re-selection
                container.querySelectorAll('.accord-option').forEach(o => {
                    o.classList.remove('accord-option--expanded');
                    o.classList.remove('accord-option--dimmed');
                    o.classList.remove('accord-option--selected');
                });

                // Toggle this one
                if (!wasExpanded) {
                    el.classList.add('accord-option--expanded');
                    container.classList.add('accord-options--has-expanded');
                    setTimeout(() => {
                        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }, 50);
                    const optionId = el.dataset.optionId;
                    const option = decisionPoint.options.find(o => o.id === optionId);
                    if (window.Analytics) Analytics.trackChoiceExpand(gameState.currentDecisionStage, optionId, option?.title || 'unknown');
                } else {
                    container.classList.remove('accord-options--has-expanded');
                    // Hide confirm button when collapsing without selection
                    const wrap = document.getElementById('decision-confirm-wrap');
                    if (wrap) wrap.classList.add('hidden');
                }
            };
            el.addEventListener('click', toggleExpand);

            // "Choose This Path" CTA — use both touchend and click for reliable mobile taps
            const cta = el.querySelector('.accord-option-cta');
            if (cta) {
                const handleCta = (e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    const optionId = el.dataset.optionId;
                    this._selectAccordionOption(optionId, container);
                };
                cta.addEventListener('click', handleCta);
                cta.addEventListener('touchend', handleCta, { passive: false });
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
            const cta = o.querySelector('.accord-option-cta');
            if (o.dataset.optionId === optionId) {
                o.classList.add('accord-option--selected');
                if (cta) cta.textContent = 'Path Selected ✓';
            } else {
                o.classList.remove('accord-option--selected');
                o.classList.add('accord-option--dimmed');
                if (cta) cta.textContent = 'Choose This Path';
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
                <h2>CHOOSE YOUR STRATEGY</h2>
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

    // ── Intel image mapping (icon → image) ──
    _intelImageMap: {
        'ph-chart-pie':       'assets/images/intel/market-devices.jpg',
        'ph-chart-line':      'assets/images/intel/market-devices.jpg',
        'ph-device-mobile':   'assets/images/intel/enterprise-byod.jpg',
        'ph-code':            'assets/images/intel/dev-ecosystem.jpg',
        'ph-buildings':       'assets/images/intel/enterprise-byod.jpg',
        'ph-app-store-logo':  'assets/images/intel/apple.jpg',
        'ph-currency-dollar': 'assets/images/intel/financial.jpg',
        'ph-path':            'assets/images/intel/strategy.jpg',
        'ph-handshake':       'assets/images/intel/strategy.jpg',
    },
    // Avoid duplicate images on same screen
    _usedIntelImages: new Set(),
    _allIntelImages: [
        'assets/images/intel/market-devices.jpg',
        'assets/images/intel/dev-ecosystem.jpg',
        'assets/images/intel/enterprise-byod.jpg',
        'assets/images/intel/app-ecosystem.jpg',
        'assets/images/intel/apple.jpg',
        'assets/images/intel/financial.jpg',
        'assets/images/intel/strategy.jpg',
    ],
    resetIntelImages() { this._usedIntelImages.clear(); },
    _getIntelImage(icon, cardId) {
        // Apple-specific cards get apple image regardless of icon
        if (cardId && cardId.includes('iphone')) return 'assets/images/intel/apple.jpg';
        let img = this._intelImageMap[icon] || 'assets/images/intel/market-devices.jpg';
        // If already used on this screen, pick an unused one
        if (this._usedIntelImages.has(img)) {
            const alt = this._allIntelImages.find(i => !this._usedIntelImages.has(i));
            if (alt) img = alt;
        }
        this._usedIntelImages.add(img);
        return img;
    },

    // ── Card Thumbnail Renderer ──
    _intelGradients: {
        'MARKET REPORT':   { from: '#4B9B4B', to: '#2D6B2D' },
        'INTERNAL MEMO':   { from: '#0078D4', to: '#004578' },
        'COMPETITOR':      { from: '#C05028', to: '#7A3018' },
        'COMPETITOR INTEL': { from: '#C05028', to: '#7A3018' },
        'INDUSTRY':        { from: '#2D7A4F', to: '#1A4A30' },
        'STRATEGY':        { from: '#7B5EA7', to: '#4A3868' },
        'STRATEGIC ANALYSIS': { from: '#4B9B4B', to: '#2D6B2D' },
        '_default':        { from: '#6B7280', to: '#3D4451' }
    },

    renderCardThumb(card) {
        const t = card.thumb;
        const T = (text) => typeof gameState !== 'undefined' ? gameState.resolveTemplate(text) : text;
        const typeClass = `intel-thumb--${card.type}`;
        const secondaryClass = card.secondary ? 'intel-thumb--secondary' : '';
        const labelKey = (t.label || '').toUpperCase();
        const grad = this._intelGradients[labelKey] || this._intelGradients['_default'];
        const displayTitle = T(t.headline || t.title);
        const bodyHTML = t.implication
            ? `<div class="intel-thumb-implication">${T(t.implication)}</div>`
            : (t.subtitle ? `<div class="intel-thumb-subtitle">${T(t.subtitle)}</div>` : '');

        // ── MARKET REPORT → image header + green title + light body ──
        if (labelKey === 'MARKET REPORT' || labelKey === 'STRATEGIC ANALYSIS' || labelKey === 'FINANCIAL ANALYSIS') {
            const subText = t.subtitle || t.implication || '';
            const thumbImg = this._getIntelImage(t.icon, card.id);
            return `
                <div class="intel-thumb intel-thumb--tc ${secondaryClass}" data-intel-id="${card.id}">
                    <div class="intel-thumb-tc-img" style="background-image:url('${thumbImg}')"></div>
                    <div class="intel-thumb-tc-green">
                        <span class="intel-thumb-tc-logo"><i class="ph ph-newspaper-clipping"></i> MARKET INTEL</span>
                        <div class="intel-thumb-tc-headline">${displayTitle}</div>
                    </div>
                    ${subText ? `<div class="intel-thumb-tc-body">${subText}</div>` : ''}
                </div>
            `;
        }

        // ── INTERNAL MEMO → iOS notification style ──
        if (labelKey === 'INTERNAL MEMO' || labelKey === 'LEADERSHIP BRIEF') {
            const fromLine = t.subtitle || '';
            const senderName = fromLine.replace(/^From:\s*/i, '').split(',')[0].trim();
            const initials = senderName.split(' ').map(w => w[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
            const previewText = t.implication || '';
            const date = card.popup?.date || '';
            const source = card.popup?.source || 'Microsoft Internal';
            return `
                <div class="intel-thumb intel-thumb--notif ${secondaryClass}" data-intel-id="${card.id}">
                    <span class="notif-unread-dot"></span>
                    <div class="notif-top-row">
                        <span class="notif-label"><i class="ph ph-envelope-simple"></i> INTERNAL MEMO</span>
                        <span class="notif-date">${date}</span>
                    </div>
                    <div class="notif-body">
                        <div class="notif-avatar">${initials}</div>
                        <div class="notif-text">
                            <div class="notif-sender">${senderName}</div>
                            <div class="notif-subject">${displayTitle}</div>
                            ${previewText ? `<div class="notif-preview">${previewText}</div>` : ''}
                        </div>
                    </div>
                    <div class="notif-footer">
                        <span class="notif-source">${source}</span>
                        ${t.implication ? `<span class="notif-hint">${t.headline || ''}</span>` : ''}
                    </div>
                </div>
            `;
        }

        // ── DEFAULT (competitor, entity, etc.) — Google News style ──
        if (t.headerImage) {
            return `
                <div class="intel-thumb intel-thumb--news ${secondaryClass}" data-intel-id="${card.id}">
                    <div class="intel-thumb-news-img" style="background-image:url('${t.headerImage}')">
                    </div>
                    <div class="intel-thumb-news-body">
                        <span class="intel-thumb-news-source"><i class="ph ${t.icon}"></i> ${t.label}</span>
                        <div class="intel-thumb-news-headline">${displayTitle}</div>
                    </div>
                </div>
            `;
        }

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
        this.resetIntelImages(); // Reset per-screen dedup
        let html = '<div class="intel-carousel-wrap">';
        // Left arrow
        if (cards.length > 1) html += '<button class="carousel-arrow carousel-arrow--left" id="carousel-arrow-left"><i class="ph ph-caret-left"></i></button>';
        html += '<div class="intel-carousel" id="intel-carousel">';
        cards.forEach((card, i) => {
            let thumb = this.renderCardThumb(card);
            // Add stagger class without breaking existing classes
            thumb = thumb.replace(
                /class="intel-thumb([^"]*)"/,
                `class="intel-thumb$1 intel-thumb--stagger"`
            );
            // Merge --stagger-i into existing style or add new style attr
            if (thumb.includes('style="')) {
                thumb = thumb.replace('style="', `style="--stagger-i:${i};`);
            } else {
                thumb = thumb.replace('intel-thumb--stagger"', `intel-thumb--stagger" style="--stagger-i:${i};"`);
            }
            html += thumb;
        });
        html += '</div>';
        html += '<div class="intel-carousel-fade"></div>';
        // Right arrow
        if (cards.length > 1) html += '<button class="carousel-arrow carousel-arrow--right" id="carousel-arrow-right"><i class="ph ph-caret-right"></i></button>';
        // Dot indicators
        if (cards.length > 1) {
            html += '<div class="intel-carousel-dots" id="intel-carousel-dots">';
            cards.forEach((_, i) => {
                html += `<span class="intel-dot${i === 0 ? ' intel-dot--active' : ''}"></span>`;
            });
            html += '</div>';
        }
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

        // Shimmer across cards after stagger completes — hints tappability
        const shimmerDelay = 200 + cards.length * 150 + 400;
        cards.forEach((card, i) => {
            setTimeout(() => {
                card.classList.add('intel-thumb--shimmer');
            }, shimmerDelay + i * 120);
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
    _currentIntelCards: [],
    _currentIntelIndex: 0,

    openIntelPopup(cardData) {
        this._hasOpenedCard = true;
        const hint = document.querySelector('.intel-hint');
        if (hint) hint.style.display = 'none';
        // Mark card as seen
        const thumbEl = document.querySelector(`[data-intel-id="${cardData.id}"]`);
        if (thumbEl) thumbEl.classList.add('intel-thumb--seen');
        // Track info card view (direct tap)
        if (window.Analytics) Analytics.trackInfoCardView(cardData.id, cardData.popup?.title || cardData.thumb?.title || cardData.id, 'tap');
        // SFX
        if (typeof AudioEngine !== 'undefined' && AudioEngine.isStarted()) {
            AudioEngine.playSfx('cardOpen');
        }

        // Track current card index for swipe navigation
        const decisionPoint = gameState.getCurrentDecisionPoint();
        if (decisionPoint?.intelCards) {
            this._currentIntelCards = decisionPoint.intelCards;
            this._currentIntelIndex = this._currentIntelCards.findIndex(c => c.id === cardData.id);
            if (this._currentIntelIndex < 0) this._currentIntelIndex = 0;
        }

        this._renderIntelPopupContent(cardData);
    },

    _renderIntelPopupContent(cardData) {
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

        // Add prev/next navigation arrows if multiple cards
        if (this._currentIntelCards.length > 1) {
            const total = this._currentIntelCards.length;
            const idx = this._currentIntelIndex;

            // Counter indicator (inside popup)
            const popup = container.querySelector('.intel-popup');
            if (popup) {
                const counter = document.createElement('div');
                counter.className = 'intel-popup-counter';
                counter.textContent = `${idx + 1} / ${total}`;
                popup.appendChild(counter);
            }

            // Arrows (on container, outside popup, for overflow visibility)
            if (idx > 0) {
                const prev = document.createElement('button');
                prev.className = 'intel-popup-nav intel-popup-nav--prev';
                prev.innerHTML = '<i class="ph ph-caret-left"></i>';
                prev.addEventListener('click', (e) => { e.stopPropagation(); this._navigateIntelPopup(-1); });
                container.appendChild(prev);
            }
            if (idx < total - 1) {
                const next = document.createElement('button');
                next.className = 'intel-popup-nav intel-popup-nav--next';
                next.innerHTML = '<i class="ph ph-caret-right"></i>';
                next.addEventListener('click', (e) => { e.stopPropagation(); this._navigateIntelPopup(1); });
                container.appendChild(next);
            }

            // Swipe gesture support
            let touchStartX = 0;
            container.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
            container.addEventListener('touchend', (e) => {
                const dx = e.changedTouches[0].clientX - touchStartX;
                if (Math.abs(dx) > 60) {
                    if (dx < 0 && idx < total - 1) this._navigateIntelPopup(1);
                    else if (dx > 0 && idx > 0) this._navigateIntelPopup(-1);
                }
            }, { passive: true });
        }

        // Entity artifact link handler
        if (cardData.type === 'entity') {
            const artifactLink = container.querySelector('.intel-artifact-link');
            if (artifactLink) {
                artifactLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    const artifactId = artifactLink.dataset.artifactId;
                    if (artifactId && typeof Artifacts !== 'undefined') {
                        this.closeIntelPopup();
                        Artifacts.showArtifact(artifactId);
                    }
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
                // Unlock if needed, then always open viewer directly
                if (!gameState.unlockedArtifacts.includes(artifactId)) {
                    gameState.unlockArtifact(artifactId);
                    ArtifactUI.updateArtifactBar();
                }
                this.closeIntelPopup();
                ArtifactUI.openArtifactViewer(artifactId);
            });
        });
    },

    _navigateIntelPopup(dir) {
        const newIdx = this._currentIntelIndex + dir;
        if (newIdx < 0 || newIdx >= this._currentIntelCards.length) return;
        this._currentIntelIndex = newIdx;
        const card = this._currentIntelCards[newIdx];
        // Track navigated card view (arrow/swipe)
        if (window.Analytics) Analytics.trackInfoCardView(card.id, card.popup?.title || card.thumb?.title || card.id, 'navigate');
        AudioEngine.playSfx('cardOpen');
        this._renderIntelPopupContent(card);
    },

    closeIntelPopup() {
        const overlay = document.getElementById('intel-popup-overlay');
        overlay.classList.add('hidden');
        document.body.style.overflow = '';
        AudioEngine.duckVolume(false);
        // Flush any queued artifact unlock animations
        if (typeof ArtifactUI !== 'undefined') ArtifactUI.flushPendingAnim();
    },

    // ── Shared: Render structured sections ──
    _renderSections(sections) {
        const T = (text) => typeof gameState !== 'undefined' ? gameState.resolveTemplate(text) : text;
        return sections.map(s => {
            let content = '';
            if (s.type === 'stats') {
                content = `<div class="intel-stats-grid">${s.items.map(item =>
                    `<div class="intel-stat-item">
                        <span class="intel-stat-label">${T(item.label)}</span>
                        <span class="intel-stat-value ${item.color ? 'intel-stat--' + item.color : ''}">${T(item.value)}</span>
                    </div>`
                ).join('')}</div>`;
            } else if (s.type === 'list') {
                content = `<ul class="intel-list">${s.items.map(item => `<li>${T(item)}</li>`).join('')}</ul>`;
            } else {
                content = `<p class="${s.isHighlighted ? 'intel-highlighted' : ''}">${T(s.content)}</p>`;
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
        return `
            <div class="intel-source-bar">
                <span class="intel-source">${source || ''}</span>
                ${date ? `<span class="intel-source-sep">·</span><span class="intel-date">${date}</span>` : ''}
            </div>
        `;
    },

    // ── Entity Popup (Analyst Terminal style) ──
    _renderEntityPopup(card) {
        const p = card.popup;
        const T = (text) => typeof gameState !== 'undefined' ? gameState.resolveTemplate(text) : text;
        const f = p.front;
        const b = p.back;

        // Map sentimentKey to posture color
        const postureColors = {
            panicking: '#E8A838',
            dismissive: '#8B8B8B',
            unproven: '#E8A838',
            aggressive: '#E05A3A',
            defensive: '#5A9BD5'
        };
        const postureColor = postureColors[f.sentimentKey] || '#E8A838';

        // Reliability badge color
        const relColors = { HIGH: '#4CAF50', MEDIUM: '#E8A838', LOW: '#E05A3A' };
        const relColor = relColors[f.reliability] || '#E8A838';

        return `
            <div class="intel-popup intel-popup--entity analyst-terminal">
                <button class="intel-popup-close">✕</button>

                <!-- 1. IMAGE HEADER with overlay -->
                <div class="at-header${p.headerImage ? ' at-header--img' : ''}"${p.headerImage ? ` style="background-image:url('${p.headerImage}')"` : ''}>
                    <div class="at-header-overlay"></div>
                    <div class="at-header-top">
                        <span class="at-label">COMPETITOR INTEL</span>
                    </div>
                    <div class="at-entity-row">
                        <span class="at-entity-name">${p.name}</span>
                        <span class="at-status-dot" style="background:${postureColor}"></span>
                        <span class="at-class-tag">${p.category}</span>
                    </div>
                    <div class="at-accent-line" style="background:${postureColor}"></div>
                </div>

                <!-- 2. POSTURE STRIP -->
                <div class="at-posture-strip">
                    <div class="at-posture-row">
                        <span class="at-posture-label">POSTURE</span>
                        <span class="at-posture-value" style="color:${postureColor}">${f.sentiment}</span>
                    </div>
                </div>

                <!-- 3. SIGNAL SECTION -->
                <div class="at-signal-section">
                    <div class="at-signal-label">KEY SIGNAL</div>
                    <blockquote class="at-signal-quote">"${T(b.keySignal)}"</blockquote>
                    <div class="at-signal-source">${f.source}</div>
                </div>

                <!-- 4. DATA GRID (2×2) -->
                <div class="at-data-grid">
                    ${f.quickStats.map(s => {
                        const valColor = s.color === 'green' ? '#4CAF50' : s.color === 'red' ? '#E05A3A' : s.color === 'gold' ? '#E8A838' : '#1a1a1a';
                        return `
                        <div class="at-data-cell">
                            <span class="at-data-label">${T(s.label)}</span>
                            <span class="at-data-value" style="color:${valColor}">${T(s.value)}</span>
                        </div>`;
                    }).join('')}
                </div>

                <!-- 5. ASSESSMENT FOOTER -->
                <div class="at-assessment">
                    <div class="at-assessment-label">ASSESSMENT</div>
                    <p class="at-assessment-text">${T(b.analysisNote)}</p>
                    ${b.artifactId ? `<a href="#" class="intel-artifact-link" data-artifact-id="${b.artifactId}"><i class="ph ph-cube"></i> View artifact</a>` : ''}
                </div>
            </div>
        `;
    },

    // ── Memo Popup (Outlook-style email UI) ──
    _renderMemoPopup(card) {
        const p = card.popup;
        const T = (text) => typeof gameState !== 'undefined' ? gameState.resolveTemplate(text) : text;
        // Parse sender name and role
        const fromParts = (p.from || '').split(',');
        const senderName = fromParts[0].trim();
        const senderRole = fromParts.slice(1).join(',').trim();
        // Generate initials for avatar
        const initials = senderName.split(' ').map(w => w[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();

        return `
            <div class="intel-popup intel-popup--memo memo-wrapper">
                <button class="intel-popup-close">✕</button>

                <!-- Outer card header (not part of the email) -->
                <div class="memo-card-header">
                    <i class="ph ph-envelope-simple"></i>
                    <span>INTERNAL MEMO</span>
                </div>

                <!-- Email container (looks like an embedded email object) -->
                <div class="outlook-email-inner">
                    <!-- Subject line -->
                    <div class="outlook-subject">
                        <span class="outlook-subject-text">${p.re}</span>
                        ${p.classification && p.classification !== 'INTERNAL' ? `<span class="outlook-classification">${p.classification}</span>` : ''}
                    </div>

                    <!-- Sender row -->
                    <div class="outlook-sender-row">
                        <div class="outlook-avatar">${initials}</div>
                        <div class="outlook-sender-info">
                            <div class="outlook-sender-name">${senderName}</div>
                            <div class="outlook-sender-role">${senderRole}</div>
                        </div>
                        <div class="outlook-date">${p.date || ''}</div>
                    </div>

                    <!-- To line -->
                    <div class="outlook-to-line">
                        <span class="outlook-to-label">To:</span> You (${gameState.currentDecisionStage === 'd5' ? 'CVP, Mobile Devices' : 'CEO'})
                    </div>

                    <!-- Email body -->
                    <div class="outlook-body">
                        ${p.keyPoints ? `
                            <div class="outlook-key-points">
                                ${p.keyPoints.map(pt => `<div class="outlook-key-point"><i class="ph ph-caret-right"></i> ${T(pt)}</div>`).join('')}
                            </div>
                        ` : ''}
                        <div class="intel-popup-body intel-popup-detail-section${p.keyPoints ? ' collapsed' : ''}">
                            <button class="intel-detail-toggle"${p.keyPoints ? '' : ' style="display:none"'}><i class="ph ph-caret-down"></i> Full email</button>
                            <div class="intel-detail-content">
                                ${this._renderSections(p.sections)}
                            </div>
                        </div>
                        ${p.footnote ? `<div class="outlook-footnote"><i class="ph ph-info"></i> ${T(p.footnote)}</div>` : ''}
                    </div>
                </div>

                <!-- Source bar (outside email) -->
                ${this._renderSourceBar(p.source, p.reliability, p.date)}
            </div>
        `;
    },

    // ── Briefing Popup (TechCrunch-style article) ──
    _renderBriefingPopup(card) {
        const p = card.popup;
        const T = (text) => typeof gameState !== 'undefined' ? gameState.resolveTemplate(text) : text;
        // Extract author-like source
        const authorName = (p.source || 'Industry Analysis').split('+')[0].trim();
        const popupImg = this._getIntelImage(card.thumb?.icon, card.id);

        return `
            <div class="intel-popup intel-popup--briefing tc-article">
                <button class="intel-popup-close">✕</button>

                <!-- Header image -->
                <div class="tc-header-img" style="background-image:url('${popupImg}')"></div>

                <!-- TC green header banner (matches card preview) -->
                <div class="tc-header">
                    <div class="tc-header-logo">
                        <i class="ph ph-newspaper-clipping"></i>
                        <span>MARKET INTEL</span>
                    </div>
                    <h2 class="tc-header-headline">${p.title}</h2>
                    ${p.heroStat ? `
                        <div class="tc-hero-stat">
                            <span class="tc-hero-value">${T(p.heroStat.value)}</span>
                            <span class="tc-hero-label">${T(p.heroStat.label)}</span>
                        </div>
                    ` : ''}
                </div>

                <!-- Article meta -->
                <div class="tc-article-head">
                    <div class="tc-byline">
                        <span class="tc-author">${authorName}</span>
                        <span class="tc-date">${p.date || ''}</span>
                    </div>
                </div>

                <!-- Article body -->
                <div class="tc-body">
                    ${p.keyPoints ? `
                        <div class="tc-key-points">
                            ${p.keyPoints.map(pt => `<p class="tc-key-point">${T(pt)}</p>`).join('')}
                        </div>
                    ` : ''}
                    <div class="intel-popup-body intel-popup-detail-section${p.keyPoints ? ' collapsed' : ''}">
                        <button class="intel-detail-toggle"${p.keyPoints ? '' : ' style="display:none"'}><i class="ph ph-caret-down"></i> Read full report</button>
                        <div class="intel-detail-content">
                            ${this._renderSections(p.sections)}
                        </div>
                    </div>
                    ${p.footnote ? `<div class="tc-footnote">${T(p.footnote)}</div>` : ''}
                </div>
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
        // Stop any ongoing objective narration
        this._stopObjectiveAudio();

        // SFX on decision confirm
        if (typeof AudioEngine !== 'undefined' && AudioEngine.isStarted()) {
            AudioEngine.playSfx('decisionConfirm');
        }

        // Get selected option title for the animation keyword
        const decisionPt = gameState.getCurrentDecisionPoint();
        const selectedOpt = decisionPt ? decisionPt.options.find(o => o.id === gameState.selectedOption) : null;
        const keyword = selectedOpt ? selectedOpt.title : 'Processing';

        // Show propagation animation overlay
        const overlay = document.createElement('div');
        overlay.className = 'decision-processing-overlay';
        overlay.innerHTML = this._buildPropagationHTML(keyword);
        document.body.appendChild(overlay);
        requestAnimationFrame(() => {
            overlay.classList.add('show');
            this._playPropagation(overlay);
        });

        // Disable confirm button to prevent double-click
        const confirmBtn = document.getElementById('confirm-action-btn');
        if (confirmBtn) confirmBtn.disabled = true;

        // Contraction + exit after expansion completes
        setTimeout(() => {
            const container = overlay.querySelector('.dp-container');
            if (container) container.classList.add('contracting');
        }, 1800);
        setTimeout(() => {
            overlay.classList.remove('show');
            setTimeout(() => overlay.remove(), 300);
            this._executeConfirmedDecision();
        }, 2400);
    },

    _buildPropagationHTML(keyword) {
        return `
        <div class="dp-container">
            <svg class="dp-lines-layer" viewBox="0 0 400 700" preserveAspectRatio="xMidYMid meet">
                <line class="dp-prop-line dp-d" x1="200" y1="350" x2="88" y2="154" style="animation-delay:.38s"/>
                <line class="dp-prop-line dp-d" x1="200" y1="350" x2="312" y2="126" style="animation-delay:.46s"/>
                <line class="dp-prop-line dp-d" x1="200" y1="350" x2="40" y2="350" style="animation-delay:.42s"/>
                <line class="dp-prop-line dp-d" x1="200" y1="350" x2="360" y2="364" style="animation-delay:.50s"/>
                <line class="dp-prop-line dp-d" x1="200" y1="350" x2="112" y2="560" style="animation-delay:.44s"/>
                <line class="dp-prop-line dp-d" x1="200" y1="350" x2="296" y2="574" style="animation-delay:.54s"/>

                <line class="dp-sec-line dp-d" x1="88" y1="154" x2="32" y2="70" style="animation-delay:.82s"/>
                <line class="dp-sec-line dp-d" x1="88" y1="154" x2="120" y2="56" style="animation-delay:.88s"/>
                <line class="dp-sec-line dp-d" x1="88" y1="154" x2="20" y2="224" style="animation-delay:.92s"/>
                <line class="dp-sec-line dp-d" x1="312" y1="126" x2="368" y2="56" style="animation-delay:.86s"/>
                <line class="dp-sec-line dp-d" x1="312" y1="126" x2="380" y2="196" style="animation-delay:.92s"/>
                <line class="dp-sec-line dp-d" x1="312" y1="126" x2="280" y2="42" style="animation-delay:.96s"/>
                <line class="dp-sec-line dp-d" x1="40" y1="350" x2="12" y2="434" style="animation-delay:.84s"/>
                <line class="dp-sec-line dp-d" x1="40" y1="350" x2="16" y2="280" style="animation-delay:.90s"/>
                <line class="dp-sec-line dp-d" x1="360" y1="364" x2="388" y2="448" style="animation-delay:.88s"/>
                <line class="dp-sec-line dp-d" x1="360" y1="364" x2="384" y2="294" style="animation-delay:.94s"/>
                <line class="dp-sec-line dp-d" x1="112" y1="560" x2="48" y2="644" style="animation-delay:.86s"/>
                <line class="dp-sec-line dp-d" x1="112" y1="560" x2="144" y2="665" style="animation-delay:.92s"/>
                <line class="dp-sec-line dp-d" x1="296" y1="574" x2="352" y2="658" style="animation-delay:.90s"/>
                <line class="dp-sec-line dp-d" x1="296" y1="574" x2="264" y2="672" style="animation-delay:.96s"/>

                <line class="dp-ter-line dp-d" x1="32" y1="70" x2="12" y2="28" style="animation-delay:1.05s"/>
                <line class="dp-ter-line dp-d" x1="120" y1="56" x2="200" y2="28" style="animation-delay:1.08s"/>
                <line class="dp-ter-line dp-d" x1="368" y1="56" x2="388" y2="20" style="animation-delay:1.10s"/>
                <line class="dp-ter-line dp-d" x1="280" y1="42" x2="200" y2="28" style="animation-delay:1.12s"/>
                <line class="dp-ter-line dp-d" x1="48" y1="644" x2="36" y2="680" style="animation-delay:1.09s"/>
                <line class="dp-ter-line dp-d" x1="352" y1="658" x2="360" y2="688" style="animation-delay:1.11s"/>

                <polygon class="dp-sig-diamond dp-d" points="144,252 148,246 152,252 148,258" style="animation-delay:.48s"/>
                <polygon class="dp-sig-diamond dp-d" points="256,238 260,232 264,238 260,244" style="animation-delay:.53s"/>
                <polygon class="dp-sig-diamond dp-d" points="156,455 160,449 164,455 160,461" style="animation-delay:.52s"/>
                <polygon class="dp-sig-diamond dp-d" points="248,462 252,456 256,462 252,468" style="animation-delay:.56s"/>

                <g class="dp-sig-cross dp-d" transform="translate(120,350)" style="animation-delay:.50s">
                    <line x1="-4" y1="0" x2="4" y2="0"/><line x1="0" y1="-4" x2="0" y2="4"/>
                </g>
                <g class="dp-sig-cross dp-d" transform="translate(280,357)" style="animation-delay:.54s">
                    <line x1="-4" y1="0" x2="4" y2="0"/><line x1="0" y1="-4" x2="0" y2="4"/>
                </g>

                <rect class="dp-sig-square dp-d" x="168" y="290" width="3" height="3" style="animation-delay:.58s"/>
                <rect class="dp-sig-square dp-d" x="232" y="282" width="3" height="3" style="animation-delay:.62s"/>

                <g class="dp-sig-tick dp-d" transform="translate(110,270)" style="animation-delay:.68s">
                    <line x1="0" y1="-3" x2="0" y2="3"/><line x1="3" y1="-2" x2="3" y2="2"/><line x1="6" y1="-3" x2="6" y2="3"/>
                </g>

                <g class="dp-sig-dots dp-d" transform="translate(258,418)" style="animation-delay:.72s">
                    <circle cx="0" cy="0" r="1"/><circle cx="4" cy="1" r="1.2"/><circle cx="2" cy="-3" r="0.8"/>
                </g>

                <path class="dp-sig-arc dp-d" d="M186,330 Q190,324 196,328" style="animation-delay:.66s"/>

                <text class="dp-micro-glyph dp-mg-coral dp-d" x="138" y="240" style="animation-delay:.53s">07.4</text>
                <text class="dp-micro-glyph dp-mg-ink dp-d" x="256" y="226" style="animation-delay:.60s">-2.1%</text>
                <text class="dp-micro-glyph dp-mg-ink dp-d" x="104" y="358" style="animation-delay:.56s">REF</text>
                <text class="dp-micro-glyph dp-mg-coral dp-d" x="290" y="366" style="animation-delay:.63s">0xA3</text>
                <text class="dp-micro-glyph dp-mg-coral dp-d" x="152" y="470" style="animation-delay:.58s">$7.2B</text>
                <text class="dp-micro-glyph dp-mg-ink dp-d" x="250" y="478" style="animation-delay:.68s">INT</text>
            </svg>

            <div class="dp-center-node dp-d"></div>
            <div class="dp-center-keyword dp-d">${keyword}</div>

            <div class="dp-node dp-d" style="left:22%;top:22%;animation-delay:.58s"></div>
            <div class="dp-node dp-d" style="left:78%;top:18%;animation-delay:.66s"></div>
            <div class="dp-node dp-d" style="left:10%;top:50%;animation-delay:.62s"></div>
            <div class="dp-node dp-d" style="left:90%;top:52%;animation-delay:.70s"></div>
            <div class="dp-node dp-d" style="left:28%;top:80%;animation-delay:.64s"></div>
            <div class="dp-node dp-d" style="left:74%;top:82%;animation-delay:.74s"></div>

            <div class="dp-node-t dp-d" style="left:8%;top:10%;animation-delay:1.04s"></div>
            <div class="dp-node-t dp-d" style="left:30%;top:8%;animation-delay:1.08s"></div>
            <div class="dp-node-t dp-d" style="left:5%;top:32%;animation-delay:1.10s"></div>
            <div class="dp-node-t dp-d" style="left:92%;top:8%;animation-delay:1.06s"></div>
            <div class="dp-node-t dp-d" style="left:95%;top:28%;animation-delay:1.12s"></div>
            <div class="dp-node-t dp-d" style="left:70%;top:6%;animation-delay:1.09s"></div>
            <div class="dp-node-t dp-d" style="left:3%;top:62%;animation-delay:1.08s"></div>
            <div class="dp-node-t dp-d" style="left:97%;top:64%;animation-delay:1.10s"></div>
            <div class="dp-node-t dp-d" style="left:12%;top:92%;animation-delay:1.06s"></div>
            <div class="dp-node-t dp-d" style="left:36%;top:95%;animation-delay:1.12s"></div>
            <div class="dp-node-t dp-d" style="left:88%;top:94%;animation-delay:1.10s"></div>
            <div class="dp-node-t dp-d" style="left:66%;top:96%;animation-delay:1.14s"></div>
            <div class="dp-node-t dp-d" style="left:50%;top:4%;animation-delay:1.07s"></div>
            <div class="dp-node-t dp-d" style="left:50%;top:97%;animation-delay:1.16s"></div>
        </div>`;
    },

    _playPropagation(overlay) {
        const els = overlay.querySelectorAll('.dp-d');
        requestAnimationFrame(() => {
            els.forEach(el => el.classList.add('active'));
        });
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
                    Continue
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
        // Stop any lingering consequence audio
        if (typeof Transitions !== 'undefined') Transitions._stopCsqAudio();

        this._syncMuteIcon();
        if (window.Analytics) Analytics.trackScreenView('ending');
        // Update metrics bar to show final state
        this.updateMetricsBar();

        // Delegate to new magazine cover ending system
        if (window.EndingScreen) {
            EndingScreen.render();
        } else {
            // Fallback if ending.js hasn't loaded
            document.getElementById('main-content').innerHTML = '<div style="padding:40px;text-align:center;">Game Complete! Refresh to see your ending.</div>';
        }
    },

    // Open info card modal
    openInfoModal(cardId) {
        const card = gameState.getInfoCard(cardId);
        const modal = document.getElementById('card-modal');
        const modalBody = document.getElementById('modal-body');

        // Track info card view
        if (window.Analytics && card) {
            Analytics.trackEvent('info_card_viewed', {
                cardId: cardId,
                cardTitle: card.title,
                cardType: card.label || 'unknown'
            });
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

        // Update artifact bar (profile notify dot)
        ArtifactUI.updateArtifactBar();
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

    // Switch profile modal tab
    _switchProfileTab(tabName) {
        // Update tab buttons
        document.querySelectorAll('.profile-tab').forEach(t => {
            t.classList.toggle('profile-tab--active', t.dataset.tab === tabName);
        });
        // Update tab panels
        document.getElementById('profile-tab-journey').classList.toggle('hidden', tabName !== 'journey');
        document.getElementById('profile-tab-collection').classList.toggle('hidden', tabName !== 'collection');

        // Render collection content when switching to it
        if (tabName === 'collection') {
            if (typeof ArtifactUI !== 'undefined') {
                ArtifactUI.renderArtifactCards();
                ArtifactUI._markAllSeen();
            }
            const emptyMsg = document.getElementById('profile-collection-empty');
            if (emptyMsg) {
                emptyMsg.classList.toggle('hidden', gameState.unlockedArtifacts.length > 0);
            }
            if (window.Analytics) Analytics.trackArtifactCollectionOpen();
        }
    },

    // Open profile modal (Situation Report design)
    // tab: 'journey' (default) or 'collection'
    openProfileModal(tab) {
        if (window.Analytics) Analytics.trackProfileView();

        const modal = document.getElementById('profile-modal');
        const modalBody = document.getElementById('profile-modal-body');
        const metrics = gameState.getFormattedMetrics();
        const currentDP = gameState.getCurrentDecisionPoint();
        const pos = currentDP?.playerPosition;

        // CEO display name & player role
        const ceoName = "Steve Ballmer";
        const isNadellaEra = gameState.currentDecisionStage === 'd5';
        const playerRole = isNadellaEra ? 'CVP, Mobile Devices Division' : 'CEO, Microsoft';

        // ── Market Position section ──
        const T = (text) => gameState.resolveTemplate(text);
        let heroStat = { label: 'Mobile OS Share', value: `${gameState.metrics.marketShare}%`, color: 'green' };
        let chipStats = [];
        if (pos && pos.stats.length > 0) {
            // Resolve template tokens in playerPosition stat values
            heroStat = { ...pos.stats[0], label: T(pos.stats[0].label), value: T(pos.stats[0].value) };
            chipStats = pos.stats.slice(1).map(s => ({ ...s, label: T(s.label), value: T(s.value) }));
        }

        // Separate strategic assessments (qualitative) from chip stats (quantitative)
        const assessments = chipStats.filter(s => s.color === 'green' || s.color === 'gold' || s.color === 'red');
        const chips = chipStats.filter(s => s.color === 'default' || !s.color);

        // If all are assessments (no plain chips), split: first 3 as chips, rest as assessments
        // Heuristic: if value contains $ or % or a number, it's a chip
        const isQuantitative = (s) => /[\$%\d]/.test(s.value);
        const hiddenLabels = ['OEM Partners', 'Carrier deals'];
        const quantChips = chipStats.filter(s => isQuantitative(s) && !hiddenLabels.includes(s.label));
        const qualAssessments = chipStats.filter(s => !isQuantitative(s) && !hiddenLabels.includes(s.label));

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
                <div class="sitrep-header-banner" style="background-image: url('assets/images/micros-.avif')">
                    <div class="sitrep-header-banner-overlay">
                        <div class="sitrep-header-label">SITUATION REPORT</div>
                        <h1 class="sitrep-ceo">${ceoName}</h1>
                        <div class="sitrep-subtitle">${playerRole} · ${metrics.date}</div>
                    </div>
                </div>

                <div class="sitrep-body">

                <div class="sitrep-market-block">
                    <div class="sitrep-section-label">MARKET POSITION</div>
                    <div class="sitrep-hero-row">
                        <div class="sitrep-hero-value">${heroStat.value}</div>
                        <div class="sitrep-hero-label">${heroStat.label}</div>
                    </div>
                    <div class="sitrep-hero-bar" style="--bar-color: ${heroBarColor}"></div>

                    <!-- Competitor market shares -->
                    <div class="sitrep-competitors-grid">
                        ${gameState.metrics.appleShare > 0 ? `<div class="sitrep-comp-row"><span class="sitrep-comp-name">Apple</span><span class="sitrep-comp-share">${gameState.metrics.appleShare}%</span></div>` : ''}
                        ${gameState.metrics.googleShare > 0 ? `<div class="sitrep-comp-row"><span class="sitrep-comp-name">Google</span><span class="sitrep-comp-share">${gameState.metrics.googleShare}%</span></div>` : ''}
                        ${gameState.metrics.nokiaShare > 0 ? `<div class="sitrep-comp-row"><span class="sitrep-comp-name">Nokia</span><span class="sitrep-comp-share">${gameState.metrics.nokiaShare}%</span></div>` : ''}
                        ${gameState.metrics.bbShare > 0 ? `<div class="sitrep-comp-row"><span class="sitrep-comp-name">BlackBerry</span><span class="sitrep-comp-share">${gameState.metrics.bbShare}%</span></div>` : ''}
                    </div>

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
                </div>

                ${qualAssessments.length > 0 ? `
                    <div class="sitrep-divider"></div>
                    <div class="sitrep-section-label">STRATEGIC ASSESSMENT</div>
                    <div class="sitrep-assessments">
                        ${qualAssessments.map(s => {
                            const barColor = s.color === 'green' ? '#2D7A4F' : s.color === 'red' ? '#C43E3E' : '#c4a35a';
                            return `
                                <div class="sitrep-assessment" style="--assess-color: ${barColor}">
                                    <div class="sitrep-assess-title">${s.label}</div>
                                    <div class="sitrep-assess-sub">${s.value}</div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                ` : ''}

                <div class="sitrep-temp-block">
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
                </div>

                <div class="sitrep-divider"></div>

                <div class="sitrep-section-label">YOUR DECISIONS</div>
                <div class="sitrep-decisions">
                    ${decisionsHTML}
                </div>
                </div>
            </div>
        `;

        this._clearProfileNotify();

        // Set up tab switching
        document.querySelectorAll('.profile-tab').forEach(tabBtn => {
            tabBtn.onclick = () => this._switchProfileTab(tabBtn.dataset.tab);
        });

        // Switch to requested tab (default: journey)
        this._switchProfileTab(tab || 'journey');

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
            if (typeof AudioEngine !== 'undefined') AudioEngine.playSfx('cardOpen');
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
        const dateInfoPopup = document.getElementById('date-info-popup');
        if (progressTrigger) {
            progressTrigger.addEventListener('click', (e) => {
                // If info icon was clicked, toggle popup instead of opening journey modal
                if (e.target.closest('.ph-info')) {
                    e.stopPropagation();
                    if (dateInfoPopup) dateInfoPopup.classList.toggle('open');
                    return;
                }
                if (dateInfoPopup) dateInfoPopup.classList.remove('open');
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
        // Close date info popup when clicking outside
        if (dateInfoPopup) {
            document.addEventListener('click', (e) => {
                if (!progressTrigger.contains(e.target)) {
                    dateInfoPopup.classList.remove('open');
                }
            });
        }

        // P&L breakdown popup click handler (works for mobile tap and desktop click)
        const plTrigger = document.getElementById('pl-trigger');
        const plPopup = document.getElementById('pl-breakdown-popup');
        if (plTrigger && plPopup) {
            plTrigger.addEventListener('click', (e) => {
                e.stopPropagation();
                // Close date popup if open
                if (dateInfoPopup) dateInfoPopup.classList.remove('open');
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
