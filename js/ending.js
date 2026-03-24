// ========================================
// AURORA LABS - ENDING SCREEN
// Magazine cover system with 3 archetypes
// ========================================

const EndingScreen = {

    // ── Unlock Persistence ──────────────────────────────────

    getUnlockedCovers() {
        return JSON.parse(localStorage.getItem('aurora_cover_unlocks') || '[]');
    },

    saveUnlockedCover(archetype) {
        const unlocks = this.getUnlockedCovers();
        const pubName = { wired: 'WIRED', tc: 'TechCrunch', time: 'TIME' }[archetype];
        if (!unlocks.includes(pubName)) {
            unlocks.push(pubName);
            localStorage.setItem('aurora_cover_unlocks', JSON.stringify(unlocks));
        }
        return unlocks;
    },

    // ── Build Shared Data ───────────────────────────────────

    buildShared(gameState) {
        const m = gameState.metrics;
        const playerPL = m.cumulativePL !== undefined ? m.cumulativePL : (m.mobileRevenue || 0) - (m.mobileCosts || 0);

        const fmtB = (v) => {
            if (Math.abs(v) >= 1) return (v >= 0 ? '' : '-') + '$' + Math.abs(v).toFixed(1) + 'B';
            return (v >= 0 ? '' : '-') + '$' + Math.abs(v * 1000).toFixed(0) + 'M';
        };

        return {
            date: m.date || 'JAN 2014',
            player: {
                status: playerPL >= 0 ? 'Profitable' : 'Unprofitable',
                share: (m.marketShare || 0) + '%',
                revenue: fmtB(m.mobileRevenue || 0),
                costs: fmtB(m.mobileCosts || 0),
                pnl: fmtB(playerPL),
            },
            history: {
                status: 'Discontinued',
                share: '0%',
                revenue: '~$8B',
                costs: '~$15.6B',
                pnl: '-$7.6B',
            },
        };
    },

    // ── Main Render ─────────────────────────────────────────

    render(forceArchetype) {
        const mainContent = document.getElementById('main-content');

        // 1. Compute archetype
        const archetype = forceArchetype || ArchetypeEngine.assignCover(gameState);

        // 2. Generate headline data
        const cover = HeadlineEngine.generate(archetype, gameState);

        // 3. Build shared comparison data
        const shared = this.buildShared(gameState);

        // 4. Save unlock
        const unlocked = this.saveUnlockedCover(archetype);

        // 5. Build decisions list
        const decisions = this._buildDecisionsList(gameState, cover.turningPoint);

        // 6. Track analytics
        const ending = gameState.getCurrentEnding();
        if (window.Analytics && ending) {
            Analytics.trackGameComplete(
                gameState.pathState.endingType || archetype,
                ending.title,
                gameState.metrics
            );
        }

        // 7. Publication name mapping
        const pubName = { wired: 'WIRED', tc: 'TechCrunch', time: 'TIME' }[archetype];

        // 8. Store share data for later
        this._shareData = {
            pubName,
            headline: cover.headline,
            pnl: shared.player.pnl,
            share: shared.player.share,
            verdict: cover.verdict,
        };

        // 9. Render
        let coverHTML = '';
        if (archetype === 'wired') {
            coverHTML = this.renderWiredCover(cover, shared, unlocked);
        } else if (archetype === 'time') {
            coverHTML = this.renderTimeCover(cover, shared, unlocked);
        } else {
            coverHTML = this.renderTechCrunchCover(cover, shared, unlocked);
        }

        mainContent.innerHTML = `
            <div class="ending-cover" id="ending-cover">
                ${coverHTML}
                ${this.renderDebrief(shared, cover, decisions)}
            </div>
        `;

        // 9. Attach event listeners
        this._attachListeners();
    },

    // ── WIRED Cover ─────────────────────────────────────────

    renderWiredCover(cover, shared, unlocked) {
        const letters = ['W','I','R','E','D'];
        return `
        <div class="cover-wired">
            <div class="cover-wired__inner">
                <div id="share-capture">
                <!-- Header above image -->
                <div class="cover-wired__header">
                    <div class="cover-wired__header-meta">
                        <span>The Mobile Wars</span>
                        <span>${shared.date}</span>
                    </div>
                    <div class="cover-wired__header-issue">${cover.issueTheme}</div>
                </div>

                <!-- Image zone with WIRED masthead on top -->
                <div class="cover-wired__hero cover-image-zone" style="background-image: url('${cover.coverImage}');">
                    <!-- Masthead on image -->
                    <div class="cover-wired__masthead">
                        ${letters.map(l => `<div class="cover-wired__letter">${l}</div>`).join('')}
                    </div>

                    <svg class="cover-wired__rings" viewBox="0 0 400 400" width="320" height="320">
                        <circle cx="200" cy="200" r="180" fill="none" stroke="#fff" stroke-width="0.5"/>
                        <circle cx="200" cy="200" r="140" fill="none" stroke="#fff" stroke-width="0.5"/>
                        <circle cx="200" cy="200" r="100" fill="none" stroke="#fff" stroke-width="0.5"/>
                        <circle cx="200" cy="200" r="60" fill="none" stroke="#fff" stroke-width="1"/>
                    </svg>
                    <div class="cover-wired__bignumber">
                        <div class="cover-wired__bignumber-val">${cover.bigNumber}</div>
                        <div class="cover-wired__bignumber-label">${cover.bigNumberLabel}</div>
                    </div>
                    <div class="cover-wired__accent-bar"></div>

                    <!-- Headline at bottom of image -->
                    <div class="cover-wired__hero-footer">
                        <div class="cover-wired__accent-line"></div>
                        <div class="cover-wired__hero-text">
                            <h1 class="cover-wired__headline">${this._breakHeadline(cover.headline)}</h1>
                            <p class="cover-wired__sub">${cover.subheadline}</p>
                        </div>
                    </div>
                </div>

                <!-- Numbers (You vs History) -->
                <div class="cover-wired__bottom-section">
                    <div class="cover-wired__numbers">
                        <div class="cover-numbers__header cover-numbers__header--dark">Net P&L</div>
                        <div class="cover-wired__number">
                            <div class="cover-wired__number-val">${shared.player.pnl}</div>
                            <div class="cover-wired__number-label">You</div>
                        </div>
                        <div class="cover-wired__number-divider"></div>
                        <div class="cover-wired__number">
                            <div class="cover-wired__number-val cover-wired__number-val--dim">${shared.history.pnl}</div>
                            <div class="cover-wired__number-label cover-wired__number-label--dim">History</div>
                        </div>
                    </div>
                </div>

                </div>

                <!-- Share + Unlock -->
                ${this.renderShareAndUnlock('dark', '#FF4444', unlocked, 'WIRED')}
            </div>
        </div>`;
    },

    // ── TechCrunch Cover ────────────────────────────────────

    renderTechCrunchCover(cover, shared, unlocked) {
        const green = '#00BF63';

        return `
        <div class="cover-tc">
            <div class="cover-tc__inner">
                <div id="share-capture">
                <!-- Header above image -->
                <div class="cover-tc__header">
                    <div class="cover-tc__header-meta">
                        <span>The Mobile Wars</span>
                        <span>${shared.date}</span>
                    </div>
                    <div class="cover-tc__header-brand">
                        <span class="cover-tc__header-unlock">Ending Unlocked</span>
                        <span class="cover-tc__header-pub">TechCrunch</span>
                    </div>
                </div>

                <!-- Hero image with headline at bottom -->
                <div class="cover-tc__hero cover-image-zone" style="background-image: url('${cover.coverImage}');">
                    <div class="cover-tc__hero-footer">
                        <h1 class="cover-tc__headline">${cover.headline}</h1>
                    </div>
                </div>

                <!-- Verdict bar (green) -->
                <div class="cover-tc__verdict-bar">
                    <p>"${cover.verdict}"</p>
                </div>
                </div>

                <!-- Compact numbers + expandable story -->
                <div class="cover-tc__bottom">
                    <div class="cover-tc__numbers">
                        <div class="cover-numbers__header cover-numbers__header--dark">Net P&L</div>
                        <div class="cover-tc__number">
                            <div class="cover-tc__number-val">${shared.player.pnl}</div>
                            <div class="cover-tc__number-label">You</div>
                        </div>
                        <div class="cover-tc__number-divider"></div>
                        <div class="cover-tc__number">
                            <div class="cover-tc__number-val cover-tc__number-val--dim">${shared.history.pnl}</div>
                            <div class="cover-tc__number-label cover-tc__number-label--dim">History</div>
                        </div>
                    </div>
                    <div class="cover-tc__story-toggle" id="tc-story-toggle">
                        <span>Read the story</span>
                        <i class="ph ph-caret-down"></i>
                    </div>
                    <div class="cover-tc__story-expand" id="tc-story-expand">
                        <p class="cover-tc__sub">${cover.subheadline || ''}</p>
                        <div class="cover-tc__rule"></div>
                        <p class="cover-tc__deck">${cover.deck || ''}</p>
                    </div>
                </div>

                <!-- Share + Unlock -->
                ${this.renderShareAndUnlock('dark', green, unlocked, 'TechCrunch')}
            </div>
        </div>`;
    },

    // ── TIME Cover ──────────────────────────────────────────

    renderTimeCover(cover, shared, unlocked) {
        const red = '#E3120B';

        return `
        <div class="cover-time">
            <div class="cover-time__frame">
                <div id="share-capture">
                <!-- Header above image -->
                <div class="cover-time__header">
                    <div class="cover-time__header-meta">
                        <span>The Mobile Wars</span>
                        <span>${shared.date}</span>
                    </div>
                    <div class="cover-time__header-unlock">Ending Unlocked</div>
                </div>

                <!-- Hero image with TIME logo + headline at bottom -->
                <div class="cover-time__hero cover-image-zone" style="background-image: url('${cover.coverImage}');">
                    <div class="cover-time__logo">TIME</div>
                    <div class="cover-time__hero-footer">
                        <h1 class="cover-time__headline">${cover.headline}</h1>
                    </div>
                </div>

                <!-- Verdict bar (right below image) -->
                <div class="cover-time__verdict">
                    <p>"${cover.verdict}"</p>
                </div>
                </div>

                <!-- Compact numbers + expandable story -->
                <div class="cover-time__bottom">
                    <div class="cover-time__numbers">
                        <div class="cover-numbers__header">Net P&L</div>
                        <div class="cover-time__number">
                            <div class="cover-time__number-val">${shared.player.pnl}</div>
                            <div class="cover-time__number-label">You</div>
                        </div>
                        <div class="cover-time__number-divider"></div>
                        <div class="cover-time__number">
                            <div class="cover-time__number-val cover-time__number-val--dim">${shared.history.pnl}</div>
                            <div class="cover-time__number-label cover-time__number-label--dim">History</div>
                        </div>
                    </div>
                    <div class="cover-time__story-toggle" id="time-story-toggle">
                        <span>Read the story</span>
                        <i class="ph ph-caret-down"></i>
                    </div>
                    <div class="cover-time__story-expand" id="time-story-expand">
                        <p class="cover-time__sub">${cover.subheadline}</p>
                        <div class="cover-time__rule"></div>
                        <p class="cover-time__deck">${cover.deck}</p>
                    </div>
                </div>

                <!-- Share + Unlock -->
                ${this.renderShareAndUnlock('light', red, unlocked, 'TIME')}
            </div>
        </div>`;
    },

    // ── Share + Unlock ──────────────────────────────────────

    renderShareAndUnlock(theme, accent, unlocked, publication) {
        const isDark = theme === 'dark';
        const bgClass = isDark ? 'cover-share--dark' : 'cover-share--light';
        const allPubs = ['WIRED', 'TechCrunch', 'TIME'];
        const others = allPubs.filter(p => p !== publication);

        return `
        <div class="cover-share ${bgClass}">
            <div class="cover-share__buttons">
                <button class="cover-share__replay" id="restart-btn">Try another path</button>
                <button class="cover-share__cta" style="background:${accent}" id="share-btn">
                    Share ↗
                </button>
            </div>
        </div>

        <div class="cover-share__footer">
            <div class="cover-share__footer-tooltip" id="unlock-tooltip">Play again to unlock different endings</div>
            <div class="cover-share__dots">
                ${allPubs.map(pub => {
                    const isUnlocked = unlocked.includes(pub);
                    const isCurrent = pub === publication;
                    return `<div class="cover-share__dot ${isCurrent ? 'cover-share__dot--current' : ''} ${isUnlocked ? 'cover-share__dot--unlocked' : ''}" style="${isUnlocked ? `background:${accent}` : ''}"></div>`;
                }).join('')}
            </div>
            <span class="cover-share__count cover-share__unlock-trigger" id="unlock-count-trigger">${unlocked.length} of 3 covers unlocked</span>
            <div class="cover-share__others">
                ${others.map(pub => {
                    const isUnlocked = unlocked.includes(pub);
                    const icon = isUnlocked
                        ? `<svg width="10" height="10" viewBox="0 0 16 16" fill="${accent}"><path d="M6.5 12.5l-4-4 1.4-1.4 2.6 2.6 5.6-5.6 1.4 1.4z"/></svg>`
                        : `<svg width="10" height="10" viewBox="0 0 16 16"><rect x="3" y="7" width="10" height="7" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M5.5 7V5a2.5 2.5 0 015 0v2" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`;
                    const fontClass = pub === 'WIRED' ? 'cover-share__pub--wired' : (pub === 'TIME' ? 'cover-share__pub--time' : 'cover-share__pub--tc');
                    return `<div class="cover-share__other ${isUnlocked ? 'cover-share__other--unlocked' : ''} cover-share__unlock-trigger">${icon}<span class="${fontClass}">${pub}</span></div>`;
                }).join('')}
            </div>
        </div>`;
    },

    // ── Debrief Section ─────────────────────────────────────

    renderDebrief(shared, cover, decisions) {
        const tp = cover.turningPoint;
        const playerPLRaw = gameState.metrics.mobileRevenue - gameState.metrics.mobileCosts;
        const diffFromHistory = Math.abs(playerPLRaw - (-7.6));
        const betterOrWorse = playerPLRaw > -7.6 ? 'outperformed' : 'underperformed';
        const fmtB = (v) => {
            if (Math.abs(v) >= 1) return (v >= 0 ? '' : '-') + '$' + Math.abs(v).toFixed(1) + 'B';
            return (v >= 0 ? '' : '-') + '$' + Math.abs(v * 1000).toFixed(0) + 'M';
        };

        return `
        <div class="cover-debrief">
            <!-- Turning Point (title + insight visible, rest collapsible) -->
            <div class="cover-debrief__section">
                <div class="cover-debrief__label cover-debrief__label--accent">Your turning point</div>
                <div class="cover-debrief__turning">
                    ${tp.decision}: <span class="cover-debrief__turning-choice">${tp.choice}</span>
                </div>
                <p class="cover-debrief__text">${tp.insight}</p>

                <!-- Collapsible detail -->
                <div class="cover-debrief__expand-toggle" id="debrief-expand-toggle">
                    Show full breakdown <i class="ph ph-caret-down"></i>
                </div>
                <div class="cover-debrief__collapsible" id="debrief-collapsible" style="display:none;">
                    <!-- Comparison Table -->
                    <div class="cover-debrief__label" style="margin-top:16px;">Full comparison</div>
                    <table class="cover-debrief__table">
                        <thead>
                            <tr>
                                <th></th>
                                <th class="cover-debrief__th--you">YOU</th>
                                <th class="cover-debrief__th--history">HISTORY</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${[
                                ['Status', shared.player.status, shared.history.status],
                                ['Market Share', shared.player.share, shared.history.share],
                                ['Revenue', shared.player.revenue, shared.history.revenue],
                                ['Costs', shared.player.costs, shared.history.costs],
                                ['P&L', shared.player.pnl, shared.history.pnl],
                            ].map(([label, p, h]) => `
                                <tr>
                                    <td class="cover-debrief__td-label">${label}</td>
                                    <td class="cover-debrief__td-you ${label === 'P&L' ? 'cover-debrief__td--accent' : ''}">${p}</td>
                                    <td class="cover-debrief__td-history">${h}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>

                    <!-- Editorial interpretation -->
                    <div class="cover-debrief__editorial">
                        <p>You ${betterOrWorse} reality by ${fmtB(diffFromHistory)} in P&L — ${playerPLRaw >= 0
                            ? 'and actually turned a profit. The platform war wasn\'t unwinnable after all.'
                            : 'but still couldn\'t crack the app ecosystem. The platform war was unwinnable. You just made it less expensive to lose.'
                        }</p>
                    </div>

                    <!-- Decision trail -->
                    <div class="cover-debrief__label">Your decisions</div>
                    ${decisions.map((dec, i) => `
                        <div class="cover-debrief__decision">
                            <div class="cover-debrief__decision-num ${dec.isTurningPoint ? 'cover-debrief__decision-num--accent' : ''}">${i + 1}</div>
                            <div class="cover-debrief__decision-text">
                                <div class="cover-debrief__decision-title">${dec.title}</div>
                                <div class="cover-debrief__decision-choice">${dec.choice}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Feedback -->
            <div class="cover-debrief__feedback" id="debrief-feedback-container">
                ${typeof FeedbackSystem !== 'undefined' ? FeedbackSystem.renderFeedbackForm() : ''}
            </div>
        </div>`;
    },

    // ── Helpers ──────────────────────────────────────────────

    _buildDecisionsList(gameState, turningPoint) {
        const list = [];
        gameState.decisions.forEach(d => {
            const dp = gameState.getDecisionPointById(d.decisionId);
            if (!dp) return;
            const opt = dp.options.find(o => o.id === d.optionId);
            list.push({
                title: dp.title,
                choice: opt ? opt.title : 'Unknown',
                isTurningPoint: d.decisionId === turningPoint?.decisionId,
            });
        });
        return list;
    },

    _breakHeadline(headline) {
        // Break long headlines into multiple lines for WIRED cover
        const words = headline.split(' ');
        if (words.length <= 4) return headline;
        const mid = Math.ceil(words.length / 2);
        return words.slice(0, mid).join(' ') + '<br>' + words.slice(mid).join(' ');
    },

    _attachListeners() {
        // Share button — capture cover image + native share, clipboard fallback
        document.getElementById('share-btn')?.addEventListener('click', async () => {
            const btn = document.getElementById('share-btn');
            const originalText = btn.textContent;
            const d = this._shareData || {};
            const gameUrl = 'https://aurora-labs-prototype.vercel.app';
            const shareText = `I played The Mobile Wars, took charge of Microsoft's mobile strategy and unlocked the ${d.pubName || ''} ending: "${d.headline || ''}"\n\n📊 My P&L: ${d.pnl || '?'} | Market share: ${d.share || '?'}\n\n📱 Think you can do better?\n${gameUrl}`;

            // Try to capture cover as image
            let shareFile = null;
            const captureEl = document.getElementById('share-capture');
            if (captureEl && typeof html2canvas !== 'undefined') {
                btn.textContent = '...';
                try {
                    const canvas = await html2canvas(captureEl, {
                        scale: 2,
                        useCORS: true,
                        allowTaint: true,
                        backgroundColor: null,
                    });
                    const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
                    if (blob) {
                        shareFile = new File([blob], 'mobile-wars-ending.png', { type: 'image/png' });
                    }
                } catch (e) {
                    // Canvas capture failed — continue without image
                }
            }

            if (navigator.share) {
                const sharePayload = {
                    title: 'The Mobile Wars',
                    text: shareText,
                };
                // Attach image if supported
                if (shareFile && navigator.canShare && navigator.canShare({ files: [shareFile] })) {
                    sharePayload.files = [shareFile];
                }
                try {
                    await navigator.share(sharePayload);
                    btn.textContent = originalText;
                } catch (e) {
                    btn.textContent = originalText;
                }
            } else {
                // Desktop fallback — copy to clipboard
                await navigator.clipboard.writeText(shareText);
                btn.textContent = 'Copied! ✓';
                setTimeout(() => { btn.textContent = originalText; }, 2000);
            }
        });

        // Unlock tooltip — show on tap of count or locked labels, dismiss on tap-away
        document.querySelectorAll('.cover-share__unlock-trigger').forEach(el => {
            el.addEventListener('click', (e) => {
                e.stopPropagation();
                const tooltip = document.getElementById('unlock-tooltip');
                if (tooltip) {
                    tooltip.classList.toggle('cover-share__footer-tooltip--visible');
                }
            });
        });
        document.addEventListener('click', () => {
            const tooltip = document.getElementById('unlock-tooltip');
            if (tooltip) tooltip.classList.remove('cover-share__footer-tooltip--visible');
        });

        // Restart button
        document.getElementById('restart-btn')?.addEventListener('click', () => {
            if (confirm('Start a new scenario? Your current progress will be lost.')) {
                gameState.reset();
                UI.updateMetricsBar();
                UI.updateProgressIndicator();
                UI.renderLandingScreen();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });

        // TechCrunch cover story expand toggle
        document.getElementById('tc-story-toggle')?.addEventListener('click', () => {
            const expand = document.getElementById('tc-story-expand');
            const toggle = document.getElementById('tc-story-toggle');
            const isOpen = expand.classList.toggle('cover-tc__story-expand--open');
            toggle.classList.toggle('cover-tc__story-toggle--open', isOpen);
        });

        // TIME cover story expand toggle
        document.getElementById('time-story-toggle')?.addEventListener('click', () => {
            const expand = document.getElementById('time-story-expand');
            const toggle = document.getElementById('time-story-toggle');
            const isOpen = expand.classList.toggle('cover-time__story-expand--open');
            toggle.classList.toggle('cover-time__story-toggle--open', isOpen);
        });

        // Collapsible breakdown toggle
        document.getElementById('debrief-expand-toggle')?.addEventListener('click', () => {
            const content = document.getElementById('debrief-collapsible');
            const toggle = document.getElementById('debrief-expand-toggle');
            if (content.style.display === 'none') {
                content.style.display = 'block';
                toggle.innerHTML = 'Hide breakdown <i class="ph ph-caret-up"></i>';
            } else {
                content.style.display = 'none';
                toggle.innerHTML = 'Show full breakdown <i class="ph ph-caret-down"></i>';
            }
        });

        // Wire inline feedback form
        if (typeof FeedbackSystem !== 'undefined' && FeedbackSystem.attachEventListeners) {
            FeedbackSystem.attachEventListeners();
        }
    },
};

window.EndingScreen = EndingScreen;
