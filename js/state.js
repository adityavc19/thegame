// ========================================
// AURORA LABS - STATE MANAGEMENT (NEW STRUCTURE)
// Supports branching decision tree with path memory
// ========================================


class GameState {
    constructor() {
        this.currentDecisionStage = "d1"; // "d1" | "d2" | "d3" | "d4" | "d5"
        this.decisions = [];
        this.metrics = { ...scenarioData.initialMetrics };
        this.previousMetrics = { ...scenarioData.initialMetrics };
        this.pathState = { ...scenarioData.initialPathState };
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
        this.currentDecisionStage = "d1";
        this.decisions = [];
        this.metrics = { ...scenarioData.initialMetrics };
        this.previousMetrics = { ...scenarioData.initialMetrics };
        this.pathState = { ...scenarioData.initialPathState };
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


    // Get current decision point data (handles branching)
    getCurrentDecisionPoint() {
        const stage = this.currentDecisionStage;
        const decisionData = scenarioData.decisions[stage];

        if (!decisionData) {
            console.error(`[DEBUG] No decision data found for stage: ${stage}`);
            return null;
        }

        // D1 is a single decision, not variant-based
        if (stage === "d1") {
            return decisionData;
        }

        // D2-D5 use variants based on path state
        if (decisionData.variants) {
            const variantKey = this.getVariantKey(stage);
            console.log(`[DEBUG] Stage ${stage}, looking for variant: ${variantKey}`);

            if (variantKey && decisionData.variants[variantKey]) {
                const variant = decisionData.variants[variantKey];

                // Handle path-specific framing
                if (variant.framingByPath && this.pathState.d2Choice) {
                    const pathFraming = variant.framingByPath[this.pathState.d2Choice];
                    if (pathFraming && pathFraming.storyText) {
                        // Return variant with path-specific story text
                        return {
                            ...variant,
                            storyText: pathFraming.storyText
                        };
                    }
                }

                return variant;
            } else {
                console.error(`[DEBUG] Variant not found: ${variantKey} in stage ${stage}`);
                console.log(`[DEBUG] Available variants:`, Object.keys(decisionData.variants));
                return null;
            }
        }

        return decisionData;
    }


    // Get the correct variant key based on path state
    getVariantKey(stage) {
        switch (stage) {
            case "d2":
                // D2 variant is determined by d2Branch (set by D1 choice)
                return this.pathState.d2Branch;

            case "d3":
                // D3 variant is determined by d3Variant (set by D2 choice)
                return this.pathState.d3Variant;

            case "d4":
                // D4 variant is determined by d4State (set by D3 choice)
                const d4StateMap = {
                    "still-fighting": "d4-still-fighting",
                    "crisis-mode": "d4-crisis-mode",
                    "differentiated": "d4-differentiated"
                };
                return d4StateMap[this.pathState.d4State];

            case "d5":
                // D5 variant is determined by d5State (set by D4 choice)
                const d5StateMap = {
                    "last-stand": "d5-last-stand",
                    "niche-survivor": "d5-niche-survivor",
                    "platform-contender": "d5-platform-contender"
                };
                return d5StateMap[this.pathState.d5State];

            default:
                return null;
        }
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
            stage: this.currentDecisionStage,
            decisionId: decisionPoint.id,
            optionId: this.selectedOption,
            timestamp: new Date().toISOString()
        });


        // Update path state based on option's setsPathState
        if (option.setsPathState) {
            console.log('[DEBUG] Updating path state with:', option.setsPathState);
            Object.assign(this.pathState, option.setsPathState);
            console.log('[DEBUG] New path state:', this.pathState);
        }


        // Get consequences (may be path-specific)
        let consequences = option.consequences.immediate;

        // Check for path-specific immediate consequences
        if (option.consequences.immediateByPath && this.pathState.d2Choice) {
            const pathConsequences = option.consequences.immediateByPath[this.pathState.d2Choice];
            if (pathConsequences) {
                // Merge path-specific consequences (narrative override)
                consequences = {
                    ...consequences,
                    ...pathConsequences
                };
            }
        }

        // Apply immediate consequences
        this.applyConsequences(consequences);


        // Unlock new information cards
        if (consequences.unlockedCards) {
            this.unlockedCards.push(...consequences.unlockedCards);
        }


        // Move to consequence screen
        this.currentScreen = "consequence";
        this.saveState();


        // Return option with resolved consequences for UI
        return {
            ...option,
            consequences: {
                ...option.consequences,
                immediate: consequences
            }
        };
    }


    // Apply consequences to metrics
    applyConsequences(consequences) {
        // Store previous metrics for comparison
        this.previousMetrics = { ...this.metrics };


        if (consequences.cash !== undefined) {
            this.metrics.cash += consequences.cash;
        }
        if (consequences.marketCap !== undefined) {
            this.metrics.marketCap += consequences.marketCap;
        }
        if (consequences.marketShare !== undefined) {
            this.metrics.marketShare += consequences.marketShare;
            // Ensure market share doesn't go below 0
            if (this.metrics.marketShare < 0) {
                this.metrics.marketShare = 0;
            }
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
        console.log('[DEBUG] continueToNext called');
        console.log('[DEBUG] current stage:', this.currentDecisionStage);
        console.log('[DEBUG] path state:', this.pathState);

        // Apply delayed consequences from the last decision FIRST
        const lastDecision = this.decisions[this.decisions.length - 1];
        if (lastDecision) {
            const decisionPoint = this.getDecisionPointById(lastDecision.decisionId);
            if (decisionPoint) {
                const option = decisionPoint.options.find(opt => opt.id === lastDecision.optionId);
                if (option?.consequences?.delayed) {
                    console.log('[DEBUG] Applying delayed consequences:', option.consequences.delayed);
                    this.applyConsequences(option.consequences.delayed);
                    console.log('[DEBUG] Metrics after delayed:', this.metrics);
                }
            }
        }

        // Check for early ending (after applying delayed consequences)
        if (this.pathState.earlyEnding) {
            console.log('[DEBUG] Early ending triggered:', this.pathState.earlyEnding);
            this.currentScreen = "complete";
            this.saveState();
            return;
        }

        // Check for triggersEnding in delayed consequences
        if (lastDecision) {
            const decisionPoint = this.getDecisionPointById(lastDecision.decisionId);
            if (decisionPoint) {
                const option = decisionPoint.options.find(opt => opt.id === lastDecision.optionId);
                if (option?.consequences?.delayed?.triggersEnding) {
                    console.log('[DEBUG] Delayed ending triggered:', option.consequences.delayed.triggersEnding);
                    this.currentScreen = "complete";
                    this.saveState();
                    return;
                }
            }
        }

        // Progress to next stage
        const stageOrder = ["d1", "d2", "d3", "d4", "d5"];
        const currentIndex = stageOrder.indexOf(this.currentDecisionStage);

        if (currentIndex < stageOrder.length - 1) {
            this.currentDecisionStage = stageOrder[currentIndex + 1];
            console.log('[DEBUG] Advanced to stage:', this.currentDecisionStage);

            // Check if the next stage has a valid variant
            const nextDecisionPoint = this.getCurrentDecisionPoint();
            if (!nextDecisionPoint) {
                console.log('[DEBUG] No valid decision point for next stage, ending game');
                this.currentScreen = "complete";
            } else {
                this.currentScreen = "story";
                // Update date to the new decision point's date
                if (nextDecisionPoint.date) {
                    this.metrics.date = nextDecisionPoint.date;
                }
            }
        } else {
            console.log('[DEBUG] Game complete - reached end of stages');
            this.currentScreen = "complete";
        }

        this.selectedOption = null;
        this.saveState();
    }


    // Helper to get decision point by ID (searches all variants)
    getDecisionPointById(decisionId) {
        // Check D1
        if (scenarioData.decisions.d1.id === decisionId) {
            return scenarioData.decisions.d1;
        }

        // Check D2-D5 variants
        for (const stage of ["d2", "d3", "d4", "d5"]) {
            const stageData = scenarioData.decisions[stage];
            if (stageData?.variants) {
                for (const variant of Object.values(stageData.variants)) {
                    if (variant.id === decisionId) {
                        return variant;
                    }
                }
            }
        }

        return null;
    }


    // Get the current ending data
    getCurrentEnding() {
        // Determine which ending based on path state or last decision
        let endingKey = this.pathState.earlyEnding;

        if (!endingKey) {
            // Check the last decision's delayed consequences
            const lastDecision = this.decisions[this.decisions.length - 1];
            if (lastDecision) {
                const decisionPoint = this.getDecisionPointById(lastDecision.decisionId);
                if (decisionPoint) {
                    const option = decisionPoint.options.find(opt => opt.id === lastDecision.optionId);
                    endingKey = option?.consequences?.delayed?.triggersEnding;
                }
            }
        }

        if (endingKey && scenarioData.endings[endingKey]) {
            return scenarioData.endings[endingKey];
        }

        // Default ending
        return {
            title: "Journey Complete",
            summary: "Your mobile strategy has reached its conclusion.",
            achievement: "Completed",
            metrics: {
                investment: "Various",
                finalShare: `${this.metrics.marketShare}%`,
                outcome: "Story concluded"
            }
        };
    }


    // Get formatted metrics for display
    getFormattedMetrics() {
        const moralEmoji = {
            'high': '<i class="ph-fill ph-circle" style="color: #22c55e;"></i>',
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
            'resigned': '<i class="ph-fill ph-circle" style="color: #eab308;"></i>',
            'low': '<i class="ph-fill ph-circle" style="color: #ef4444;"></i>'
        };


        return {
            date: this.metrics.date,
            ceo: this.metrics.ceo,
            cash: `$${this.metrics.cash.toFixed(1)}B`,
            marketCap: `$${this.metrics.marketCap.toFixed(0)}B`,
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
            currentDecisionStage: this.currentDecisionStage,
            decisions: this.decisions,
            metrics: this.metrics,
            previousMetrics: this.previousMetrics,
            pathState: this.pathState,
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
            this.currentDecisionStage = state.currentDecisionStage || "d1";
            this.decisions = state.decisions || [];
            this.metrics = state.metrics || { ...scenarioData.initialMetrics };
            this.previousMetrics = state.previousMetrics || { ...scenarioData.initialMetrics };
            this.pathState = state.pathState || { ...scenarioData.initialPathState };
            this.unlockedCards = state.unlockedCards || [];
            this.unlockedArtifacts = state.unlockedArtifacts || [];
            this.currentScreen = state.currentScreen || "story";
            this.selectedOption = state.selectedOption || null;

            // Migration: Convert old 'stock' to 'marketCap' if needed
            if (this.metrics.stock !== undefined && this.metrics.marketCap === undefined) {
                // Convert stock price to market cap (rough conversion: stock × 8B shares)
                this.metrics.marketCap = Math.round(this.metrics.stock * 8);
                delete this.metrics.stock;
                this.saveState();
            }
            if (this.previousMetrics.stock !== undefined && this.previousMetrics.marketCap === undefined) {
                this.previousMetrics.marketCap = Math.round(this.previousMetrics.stock * 8);
                delete this.previousMetrics.stock;
            }
        }
    }


    // Reset game
    reset() {
        localStorage.removeItem('auroraLabsState');
        this.startNewGame();
    }


    // Legacy compatibility: currentDecisionIndex getter
    get currentDecisionIndex() {
        const stageOrder = ["d1", "d2", "d3", "d4", "d5"];
        return stageOrder.indexOf(this.currentDecisionStage);
    }

    // Get progress information
    getProgress() {
        const totalDecisions = 6; // Maximum decisions in longest path
        const completedDecisions = this.decisions.length;
        const currentStageNum = parseInt(this.currentDecisionStage.replace('d', ''));
        const isComplete = this.currentScreen === "complete";

        // If game is complete, show 100% regardless of path length
        // Otherwise calculate based on decisions made
        const percentage = isComplete ? 100 : Math.round((completedDecisions / totalDecisions) * 100);

        return {
            completed: completedDecisions,
            total: isComplete ? completedDecisions : totalDecisions, // Show actual total when complete
            percentage: percentage,
            currentStage: currentStageNum,
            isComplete: isComplete
        };
    }

    // Get journey data for progress modal
    getJourneyData() {
        const journey = [];

        for (const decision of this.decisions) {
            const decisionPoint = this.getDecisionPointById(decision.decisionId);
            if (decisionPoint) {
                const option = decisionPoint.options.find(opt => opt.id === decision.optionId);
                journey.push({
                    title: decisionPoint.title,
                    timeMarker: decisionPoint.timeMarker,
                    chosenOption: option ? option.title : 'Unknown',
                    decisionId: decision.decisionId
                });
            }
        }

        return journey;
    }
}


// Global game state instance
const gameState = new GameState();
