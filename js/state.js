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
        this.currentScreen = "story";
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
        this.currentScreen = "story";
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
            'optimistic': '🟢',
            'neutral': '🟢',
            'concerned': '🟡',
            'mixed': '🟡',
            'frustrated': '🔴',
            'stressed': '🟡',
            'hopeful': '🟢',
            'uncertain': '🟡',
            'shocked': '🔴',
            'urgent': '🟡',
            'cautious': '🟢',
            'defensive': '🟡',
            'alarmed': '🔴',
            'cautiously optimistic': '🟢',
            'excited': '🟢',
            'desperate': '🔴',
            'disillusioned': '🔴',
            'satisfied': '🟢',
            'relieved': '🟢',
            'all-in': '🟡',
            'defeated': '🔴',
            'focused': '🟢',
            'proud': '🟢',
            'resigned': '🟡'
        };

        return {
            date: this.metrics.date,
            ceo: this.metrics.ceo,
            cash: `$${this.metrics.cash.toFixed(1)}B`,
            stock: `$${this.metrics.stock.toFixed(2)}`,
            marketShare: `${this.metrics.marketShare}%`,
            morale: moralEmoji[this.metrics.morale] || '🟢',
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
