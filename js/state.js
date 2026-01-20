// ========================================
// AURORA LABS - STATE MANAGEMENT
// ========================================

class GameState {
    constructor() {
        this.currentDecisionIndex = 0;
        this.decisions = [];
        this.metrics = { ...scenarioData.initialMetrics };
        this.previousMetrics = { ...scenarioData.initialMetrics };
        this.unlockedCards = [];
        this.unlockedArtifacts = [];
        this.currentScreen = "landing";
        this.selectedOption = null;
    }

    // Initialize game
    init() {
        this.loadState();
        if (this.decisions.length === 0) {
            this.startNewGame();
        }
    }

    // Start new game
    startNewGame() {
        this.currentDecisionIndex = 0;
        this.decisions = [];
        this.metrics = { ...scenarioData.initialMetrics };
        this.previousMetrics = { ...scenarioData.initialMetrics };
        this.unlockedCards = [];
        this.unlockedArtifacts = [];
        this.currentScreen = "landing";
        this.selectedOption = null;
        this.saveState();
    }

    // Get current decision point data
    getCurrentDecisionPoint() {
        return scenarioData.decisionPoints[this.currentDecisionIndex];
    }

    // Select an option
    selectOption(optionId) {
        this.selectedOption = optionId;
        this.saveState();
    }

    // Confirm decision and apply consequences
    confirmDecision() {
        const decisionPoint = this.getCurrentDecisionPoint();
        const option = decisionPoint.options.find(opt => opt.id === this.selectedOption);

        if (!option) return;

        // Record decision
        this.decisions.push({
            decisionId: decisionPoint.id,
            optionId: this.selectedOption,
            timestamp: new Date().toISOString()
        });

        // Apply immediate consequences
        this.applyConsequences(option.consequences.immediate);

        // Unlock new information cards
        if (option.consequences.immediate.unlockedCards) {
            this.unlockedCards.push(...option.consequences.immediate.unlockedCards);
        }

        // Move to consequence screen
        this.currentScreen = "consequence";
        this.saveState();

        return option;
    }

    // Apply consequences to metrics
    applyConsequences(consequences) {
        // Store previous metrics for comparison
        this.previousMetrics = { ...this.metrics };

        if (consequences.cash !== undefined) {
            this.metrics.cash += consequences.cash;
        }
        if (consequences.stock !== undefined) {
            this.metrics.stock += consequences.stock;
        }
        if (consequences.marketShare !== undefined) {
            this.metrics.marketShare += consequences.marketShare;
        }
        if (consequences.morale) {
            this.metrics.morale = consequences.morale;
        }
        if (consequences.date) {
            this.metrics.date = consequences.date;
        }

        // Unlock artifacts
        if (consequences.unlockedArtifacts) {
            consequences.unlockedArtifacts.forEach(artifactId => {
                if (!this.unlockedArtifacts.includes(artifactId)) {
                    this.unlockedArtifacts.push(artifactId);
                }
            });
        }

        this.saveState();
    }

    // Get artifact data
    getArtifact(artifactId) {
        return scenarioData.artifacts[artifactId];
    }

    // Unlock a specific artifact (for manual unlocking via links)
    unlockArtifact(artifactId) {
        if (!this.unlockedArtifacts.includes(artifactId)) {
            this.unlockedArtifacts.push(artifactId);
            this.saveState();
        }
    }

    // Get metric change direction
    getMetricChange(metricName) {
        const current = this.metrics[metricName];
        const previous = this.previousMetrics[metricName];

        if (typeof current === 'number' && typeof previous === 'number') {
            if (current > previous) return 'up';
            if (current < previous) return 'down';
        }
        return 'neutral';
    }

    // Continue to next decision
    continueToNext() {
        this.currentDecisionIndex++;
        this.selectedOption = null;

        if (this.currentDecisionIndex < scenarioData.decisionPoints.length) {
            this.currentScreen = "story";
            // Update date to the new decision point's date
            const nextDecisionPoint = this.getCurrentDecisionPoint();
            if (nextDecisionPoint && nextDecisionPoint.date) {
                this.metrics.date = nextDecisionPoint.date;
            }
        } else {
            this.currentScreen = "complete";
        }

        this.saveState();
    }

    // Get formatted metrics for display
    getFormattedMetrics() {
        const moralEmoji = {
            'optimistic': '<i class="ph-fill ph-circle" style="color: #22c55e;"></i>',
            'neutral': '<i class="ph-fill ph-circle" style="color: #22c55e;"></i>',
            'concerned': '<i class="ph-fill ph-circle" style="color: #eab308;"></i>',
            'mixed': '<i class="ph-fill ph-circle" style="color: #eab308;"></i>',
            'frustrated': '<i class="ph-fill ph-circle" style="color: #ef4444;"></i>',
            'stressed': '<i class="ph-fill ph-circle" style="color: #eab308;"></i>',
            'hopeful': '<i class="ph-fill ph-circle" style="color: #22c55e;"></i>',
            'uncertain': '<i class="ph-fill ph-circle" style="color: #eab308;"></i>',
            'shocked': '<i class="ph-fill ph-circle" style="color: #ef4444;"></i>',
            'urgent': '<i class="ph-fill ph-circle" style="color: #eab308;"></i>',
            'cautious': '<i class="ph-fill ph-circle" style="color: #22c55e;"></i>',
            'defensive': '<i class="ph-fill ph-circle" style="color: #eab308;"></i>',
            'alarmed': '<i class="ph-fill ph-circle" style="color: #ef4444;"></i>',
            'cautiously optimistic': '<i class="ph-fill ph-circle" style="color: #22c55e;"></i>',
            'excited': '<i class="ph-fill ph-circle" style="color: #22c55e;"></i>',
            'desperate': '<i class="ph-fill ph-circle" style="color: #ef4444;"></i>',
            'disillusioned': '<i class="ph-fill ph-circle" style="color: #ef4444;"></i>',
            'satisfied': '<i class="ph-fill ph-circle" style="color: #22c55e;"></i>',
            'relieved': '<i class="ph-fill ph-circle" style="color: #22c55e;"></i>',
            'all-in': '<i class="ph-fill ph-circle" style="color: #eab308;"></i>',
            'defeated': '<i class="ph-fill ph-circle" style="color: #ef4444;"></i>',
            'focused': '<i class="ph-fill ph-circle" style="color: #22c55e;"></i>',
            'proud': '<i class="ph-fill ph-circle" style="color: #22c55e;"></i>',
            'resigned': '<i class="ph-fill ph-circle" style="color: #eab308;"></i>'
        };

        return {
            date: this.metrics.date,
            ceo: this.metrics.ceo,
            cash: `$${this.metrics.cash.toFixed(1)}B`,
            stock: `$${this.metrics.stock.toFixed(2)}`,
            marketShare: `${this.metrics.marketShare}%`,
            morale: moralEmoji[this.metrics.morale] || '<i class="ph-fill ph-circle" style="color: #22c55e;"></i>',
            moraleText: this.metrics.morale.charAt(0).toUpperCase() + this.metrics.morale.slice(1)
        };
    }

    // Get information card data
    getInfoCard(cardId) {
        return scenarioData.infoCards[cardId];
    }

    // Save state to localStorage
    saveState() {
        const state = {
            currentDecisionIndex: this.currentDecisionIndex,
            decisions: this.decisions,
            metrics: this.metrics,
            previousMetrics: this.previousMetrics,
            unlockedCards: this.unlockedCards,
            unlockedArtifacts: this.unlockedArtifacts,
            currentScreen: this.currentScreen,
            selectedOption: this.selectedOption
        };
        localStorage.setItem('auroraLabsState', JSON.stringify(state));
    }

    // Load state from localStorage
    loadState() {
        const saved = localStorage.getItem('auroraLabsState');
        if (saved) {
            const state = JSON.parse(saved);
            this.currentDecisionIndex = state.currentDecisionIndex || 0;
            this.decisions = state.decisions || [];
            this.metrics = state.metrics || { ...scenarioData.initialMetrics };
            this.previousMetrics = state.previousMetrics || { ...scenarioData.initialMetrics };
            this.unlockedCards = state.unlockedCards || [];
            this.unlockedArtifacts = state.unlockedArtifacts || [];
            this.currentScreen = state.currentScreen || "story";
            this.selectedOption = state.selectedOption || null;
        }
    }

    // Reset game
    reset() {
        localStorage.removeItem('auroraLabsState');
        this.startNewGame();
    }
}

// Global game state instance
const gameState = new GameState();
