// ========================================
// AURORA LABS - UI RENDERING
// ========================================

const UI = {
    // Update metrics bar
    updateMetricsBar(showArrows = false) {
        const metrics = gameState.getFormattedMetrics();

        // Update metrics with arrows
        this.updateMetricWithArrow('cash-metric', metrics.cash, 'cash', showArrows);
        this.updateMetricWithArrow('stock-metric', metrics.stock, 'stock', showArrows);
        this.updateMetricWithArrow('share-metric', metrics.marketShare, 'marketShare', showArrows);

        // Update non-arrow metrics
        document.getElementById('date-metric').textContent = metrics.date;
        document.getElementById('ceo-metric').textContent = metrics.ceo === "S. Ballmer" ? "Steve Ballmer" : metrics.ceo;
        document.getElementById('morale-metric').textContent = `${metrics.morale} ${metrics.moraleText}`;

        // Add animation class for changes
        if (showArrows) {
            this.animateMetricChange('cash-metric');
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
                    <span style="font-size: 4rem;">${decisionPoint.storyImage}</span>
                </div>

                <div class="story-text">
                    ${decisionPoint.storyText.split('\n\n').map(para =>
                        `<p>${para.trim()}</p>`
                    ).join('')}
                </div>

                <div class="continue-hint">Scroll down to continue</div>

                <button class="continue-btn" id="start-decision-btn">
                    View Decision Point →
                </button>
            </div>
        `;

        // Add event listener to continue button
        document.getElementById('start-decision-btn').addEventListener('click', () => {
            console.log('Button clicked! Transitions object:', Transitions);
            // Show pre-decision transition before rendering decision
            Transitions.showPreDecisionTransition(() => {
                gameState.currentScreen = "decision";
                this.renderDecisionPoint();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });
    },

    // Render decision point screen
    renderDecisionPoint() {
        const decisionPoint = gameState.getCurrentDecisionPoint();
        const mainContent = document.getElementById('main-content');

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
                <p class="text-center" style="color: var(--text-tertiary); font-size: 0.875rem; margin-top: -10px;">
                    ← → swipe to see all
                </p>

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
                <input type="text" class="action-input" placeholder="Type anything, or choose a suggestion below." id="custom-action-input">

                <div class="decision-options" id="decision-options">
                    ${decisionPoint.options.map(option =>
                        this.renderDecisionOption(option)
                    ).join('')}
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
        return `
            <div class="decision-option ${isSelected ? 'selected' : ''}" data-option-id="${option.id}">
                <div class="decision-option-title">${option.title}</div>
                ${option.cost ? `<div class="decision-option-cost">${option.cost}</div>` : ''}
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
            <div class="consequence-reveal">
                <h1 class="section-header" style="font-size: 1.5rem; margin: 40px 0;">
                    SCENARIO ANALYSIS COMPLETE
                </h1>

                <div class="impact-section">
                    <h3>Your Final Position</h3>
                    <div class="impact-item">
                        <span>Stock Price:</span>
                        <span class="impact-change">${metrics.stock}</span>
                    </div>
                    <div class="impact-item">
                        <span>Cash Position:</span>
                        <span class="impact-change">${metrics.cash}</span>
                    </div>
                    <div class="impact-item">
                        <span>Market Share:</span>
                        <span class="impact-change">${metrics.marketShare}</span>
                    </div>
                    <div class="impact-item">
                        <span>Morale:</span>
                        <span class="impact-change">${metrics.moraleText}</span>
                    </div>
                </div>

                <div class="consequence-narrative">
                    <p>You've completed this segment of the Microsoft-Nokia mobile strategy scenario. Your decisions have shaped the company's trajectory in the critical early response to the iPhone.</p>

                    <p>In the full experience, you would continue through 2010-2015, facing decisions about the Nokia partnership, Windows Phone 7 launch, and eventual mobile exit strategy.</p>
                </div>

                <button class="continue-btn" id="restart-btn">
                    Try Different Approach →
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

        modal.classList.remove('hidden');
    },

    // Close modal
    closeModal() {
        document.getElementById('card-modal').classList.add('hidden');
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
            this.renderConsequence(option);
        } else if (gameState.currentScreen === "complete") {
            this.renderComplete();
        }
    }
};
