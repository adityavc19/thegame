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

        // Track game start time for completion metrics
        if (!localStorage.getItem('aurora_game_start_time')) {
            localStorage.setItem('aurora_game_start_time', Date.now().toString());
        }

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
        const currentDecision = this.getCurrentDecisionPoint();
        const lastDecision = this.decisions[this.decisions.length - 1];

        console.log('[DEBUG] continueToNext called');
        console.log('[DEBUG] currentDecision:', currentDecision?.id);
        console.log('[DEBUG] lastDecision:', lastDecision);
        console.log('[DEBUG] currentDecisionIndex:', this.currentDecisionIndex);

        // Check for conditional routing based on choices
        const nextIndex = this.getNextDecisionIndex(currentDecision?.id, lastDecision?.optionId);

        console.log('[DEBUG] nextIndex from routing:', nextIndex);

        if (nextIndex !== null) {
            this.currentDecisionIndex = nextIndex;
        } else {
            this.currentDecisionIndex++;
        }

        console.log('[DEBUG] new currentDecisionIndex:', this.currentDecisionIndex);
        console.log('[DEBUG] total decision points:', scenarioData.decisionPoints.length);

        this.selectedOption = null;

        if (this.currentDecisionIndex < scenarioData.decisionPoints.length) {
            this.currentScreen = "story";
            // Update date to the new decision point's date
            const nextDecisionPoint = this.getCurrentDecisionPoint();
            console.log('[DEBUG] next decision:', nextDecisionPoint?.id);
            if (nextDecisionPoint && nextDecisionPoint.date) {
                this.metrics.date = nextDecisionPoint.date;
            }
        } else {
            console.log('[DEBUG] Game complete - index out of bounds');
            this.currentScreen = "complete";
        }

        this.saveState();
    }

    // Get next decision index based on routing rules
    getNextDecisionIndex(currentDecisionId, chosenOptionId) {
        console.log('[DEBUG] getNextDecisionIndex called with:', currentDecisionId, chosenOptionId);

        // Define conditional routing rules
        const routingRules = {
            // D1: iPhone Response - Enterprise double down branches to alternate path
            "d1-iphone-response": {
                "enterprise-double-down": "d1-alt-enterprise-fortress"
            },
            // D1-ALT: Enterprise Fortress - All options converge to D3 Platform Rebuild
            "d1-alt-enterprise-fortress": {
                "consumer-pivot-late": "d3-platform-rebuild",
                "secure-enterprise-fortress": "d3-platform-rebuild",
                "acquire-blackberry-2009": "d3-platform-rebuild",
                "hybrid-strategy-doomed": "d3-platform-rebuild"
            },
            // D2: Android Threat - Acquire Palm branches to alternate path
            "d2-android-threat": {
                "acquire-palm": "d3-alt-integration-crisis"
            },
            // D3-ALT: Integration Crisis - All options converge to D5 Sustainability
            "d3-alt-integration-crisis": {
                "commit-webos": "d5-sustainability",
                "merge-platforms-nightmare": "d5-sustainability",
                "abandon-palm-writeoff": "d5-sustainability",
                "dual-track-platforms": "d5-sustainability"
            }
            // Add more routing rules here as needed
            // "decision-id": {
            //     "option-id": "target-decision-id"
            // }
        };

        console.log('[DEBUG] routingRules:', routingRules);

        // Check if current decision has routing rules
        if (routingRules[currentDecisionId] && routingRules[currentDecisionId][chosenOptionId]) {
            const targetDecisionId = routingRules[currentDecisionId][chosenOptionId];
            console.log('[DEBUG] Found routing rule, target:', targetDecisionId);

            // Find the index of the target decision
            const targetIndex = scenarioData.decisionPoints.findIndex(dp => dp.id === targetDecisionId);
            console.log('[DEBUG] Target index:', targetIndex);

            if (targetIndex !== -1) {
                return targetIndex;
            }
        } else {
            console.log('[DEBUG] No routing rule found for', currentDecisionId, chosenOptionId);
        }

        // Return null to use default sequential behavior
        return null;
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
