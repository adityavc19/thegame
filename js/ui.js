// ========================================
// AURORA LABS - UI RENDERING
// ========================================

const UI = {
    // Update metrics bar
    updateMetricsBar(showArrows = false) {
        const metrics = gameState.getFormattedMetrics();

        // Update metrics with arrows (only the ones still in the UI)
        this.updateMetricWithArrow('stock-metric', metrics.stock, 'stock', showArrows);
        this.updateMetricWithArrow('share-metric', metrics.marketShare, 'marketShare', showArrows);

        // Update date metric (no arrow)
        document.getElementById('date-metric').textContent = metrics.date;

        // Add animation class for changes
        if (showArrows) {
            this.animateMetricChange('stock-metric');
            this.animateMetricChange('share-metric');
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

    // Render story point screen
    renderStoryPoint() {
        const decisionPoint = gameState.getCurrentDecisionPoint();
        const mainContent = document.getElementById('main-content');

        mainContent.innerHTML = `
            <div class="story-point">
                <div class="time-marker">${decisionPoint.timeMarker}</div>
                <h1 class="story-title">${decisionPoint.title}</h1>

                <div class="story-image">
                    ${decisionPoint.storyImage.startsWith('<img')
                        ? decisionPoint.storyImage
                        : `<span style="font-size: 4rem;">${decisionPoint.storyImage}</span>`}
                </div>

                <div class="story-text">
                    ${decisionPoint.storyText.split('\n\n').map(para =>
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
        return `
            <div class="decision-option ${isSelected ? 'selected' : ''} ${isDisabled ? 'disabled' : ''}" data-option-id="${option.id}" ${isDisabled ? 'data-disabled="true"' : ''}>
                <div class="decision-option-title">${option.title}</div>
                ${option.cost ? `<div class="decision-option-cost">${option.cost}</div>` : ''}
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
                // After consequences are fully revealed, continue
                if (consequences.delayed) {
                    gameState.applyConsequences(consequences.delayed);
                    this.updateMetricsBar(true);
                }
                gameState.continueToNext();

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
                label: 'Cash',
                value: `${consequences.cash > 0 ? '+' : ''}$${Math.abs(consequences.cash).toFixed(1)}B`,
                positive: consequences.cash > 0
            });
        }
        if (consequences.stock !== 0) {
            changes.push({
                label: 'Stock',
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
            changes.push({
                label: 'Morale',
                value: consequences.morale.charAt(0).toUpperCase() + consequences.morale.slice(1),
                positive: ['optimistic', 'hopeful', 'neutral'].includes(consequences.morale)
            });
        }

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

                ${consequences.delayed ? `
                    <div class="impact-section">
                        <h3>Emerging Challenges</h3>
                        <p style="font-size: 0.875rem; line-height: 1.6; margin: 0;">
                            ${consequences.delayed.narrative}
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
            if (consequences.delayed) {
                gameState.applyConsequences(consequences.delayed);
                this.updateMetricsBar(true); // Show arrows for delayed changes
            }
            gameState.continueToNext();

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
        const mainContent = document.getElementById('main-content');
        const metrics = gameState.getFormattedMetrics();

        mainContent.innerHTML = `
            <div class="consequence-reveal ending-screen">
                <h1 class="section-header" style="font-size: 1.8rem; margin: 40px 0; color: var(--accent-primary);">
                    THE SUSTAINABLE THIRD
                </h1>

                <div class="ending-subtitle">
                    <p style="font-size: 1rem; color: var(--text-secondary); margin-bottom: 40px;">
                        You found the narrow path to Windows Phone survival
                    </p>
                </div>

                <div class="ending-comparison">
                    <div class="comparison-section your-path">
                        <h3 style="color: var(--accent-primary); margin-bottom: 20px;">YOUR PATH (2007-2024)</h3>
                        <div class="comparison-stats">
                            <div class="stat-item">
                                <span class="stat-label">Investment:</span>
                                <span class="stat-value">$2.0B</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Market Share:</span>
                                <span class="stat-value">12% (stable)</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Final Outcome:</span>
                                <span class="stat-value positive">+$400M profit ✓</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Active Users:</span>
                                <span class="stat-value">180M worldwide</span>
                            </div>
                        </div>
                    </div>

                    <div class="comparison-divider">VS</div>

                    <div class="comparison-section actual-history">
                        <h3 style="color: #ff6b6b; margin-bottom: 20px;">ACTUAL MICROSOFT (2007-2017)</h3>
                        <div class="comparison-stats">
                            <div class="stat-item">
                                <span class="stat-label">Investment:</span>
                                <span class="stat-value">$18.7B</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Market Share:</span>
                                <span class="stat-value">0.1% (exited)</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Final Outcome:</span>
                                <span class="stat-value negative">-$13.7B loss ✗</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Status:</span>
                                <span class="stat-value">Discontinued 2017</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="savings-banner">
                    <h2 style="font-size: 2rem; color: var(--accent-primary); margin: 0;">
                        YOU SAVED $14.1 BILLION
                    </h2>
                </div>

                <div class="key-decisions-section">
                    <h3 style="margin-bottom: 20px;">KEY DECISIONS</h3>
                    <ul class="decision-list">
                        <li>✓ <strong>Waited 18 months</strong> instead of rushing (avoided $500M mistakes, identified real threat)</li>
                        <li>✓ <strong>Made OS free</strong> to compete with Android (kept OEMs, preserved market share)</li>
                        <li>✓ <strong>Built WP7 12 months faster</strong> (launched at 21% share, not 7%)</li>
                        <li>✓ <strong>Let apps grow organically</strong> at 21% share (avoided $500M fund waste)</li>
                        <li>✓ <strong>Defended 18%</strong> instead of chasing #2 (avoided $7.2B Nokia disaster)</li>
                        <li>✓ <strong>Maintained profitable niche</strong> (didn't exit, served 180M users profitably)</li>
                    </ul>
                </div>

                <div class="lessons-section">
                    <h3 style="margin-bottom: 20px;">LESSONS LEARNED</h3>
                    <div class="lesson-grid">
                        <div class="lesson-item">
                            <strong>Being #3 is okay if you're profitable</strong>
                            <p>Mac survived at 7% for 30+ years. 12-15% is above viability threshold.</p>
                        </div>
                        <div class="lesson-item">
                            <strong>Sustainability > Growth at any cost</strong>
                            <p>Small profitable business beats expensive failure. Focus matters.</p>
                        </div>
                        <div class="lesson-item">
                            <strong>Platform wars aren't winner-take-all</strong>
                            <p>Third platforms can survive with the right positioning and economics.</p>
                        </div>
                        <div class="lesson-item">
                            <strong>Timing determines market share</strong>
                            <p>Launching WP7 at 21% vs 7% made the difference between viable and desperate.</p>
                        </div>
                    </div>
                </div>

                <div class="achievement-badge">
                    <div class="badge-icon">🏆</div>
                    <div class="badge-text">
                        <h3>ACHIEVEMENT UNLOCKED</h3>
                        <p>"The Sustainable Third"</p>
                    </div>
                </div>

                <button class="continue-btn" id="restart-btn" style="margin-top: 40px;">
                    Try Different Path →
                </button>
            </div>
        `;

        // Add restart button
        document.getElementById('restart-btn').addEventListener('click', () => {
            if (confirm('Start a new scenario? Your current progress will be lost.')) {
                gameState.reset();
                this.updateMetricsBar();
                this.renderStoryPoint();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    },

    // Open info card modal
    openInfoModal(cardId) {
        const card = gameState.getInfoCard(cardId);
        const modal = document.getElementById('card-modal');
        const modalBody = document.getElementById('modal-body');

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

        modal.classList.remove('hidden');
    },

    // Show artifact unlock notification
    showArtifactUnlockNotification(artifactId) {
        const artifact = gameState.getArtifact(artifactId);
        if (!artifact) return;

        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'artifact-unlock-notification';
        notification.innerHTML = `
            <div class="artifact-unlock-icon">🏆</div>
            <div class="artifact-unlock-text">
                <div class="artifact-unlock-title">Artifact Unlocked!</div>
                <div class="artifact-unlock-name">${artifact.name}</div>
            </div>
        `;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => notification.classList.add('show'), 10);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);

        // Update artifact counter and collection
        ArtifactUI.updateArtifactBar();
    },

    // Close modal
    closeModal() {
        document.getElementById('card-modal').classList.add('hidden');
    },

    // Open profile modal
    openProfileModal() {
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
                const decisionPoint = scenarioData.decisionPoints.find(dp => dp.id === decision.decisionId);
                const option = decisionPoint.options.find(opt => opt.id === decision.optionId);

                pastDecisionsHTML += `
                    <li class="past-decision-item">
                        <div class="past-decision-title">${decisionPoint.title}</div>
                        <div class="past-decision-choice">
                            <strong>${option.title}</strong>
                        </div>
                    </li>
                `;
            });
            pastDecisionsHTML += '</ul>';
        }

        // Get board sentiment based on metrics
        let boardSentiment = 'Neutral';
        const stock = gameState.metrics.stock;
        const marketShare = gameState.metrics.marketShare;

        if (stock > 32 && marketShare > 35) {
            boardSentiment = '🟢 Confident';
        } else if (stock > 28 && marketShare > 25) {
            boardSentiment = '🟡 Cautious';
        } else if (stock < 25 || marketShare < 20) {
            boardSentiment = '🔴 Concerned';
        } else {
            boardSentiment = '🟡 Monitoring';
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

        // Update metrics bar
        this.updateMetricsBar();

        // Render initial screen
        if (gameState.currentScreen === "story") {
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
