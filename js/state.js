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
                if (variant.framingByPath) {
                    let lookupKey = null;
                    let pathFraming = null;

                    if (stage === "d3") {
                        // D3 uses d2Choice as lookup key
                        lookupKey = this.pathState.d2Choice;
                    } else if (stage === "d4") {
                        // D4: try composite key (d3Variant:d3OptionId) first, then d3Variant alone
                        const d3Decision = this.decisions.find(d => d.stage === "d3");
                        if (d3Decision && this.pathState.d3Variant) {
                            const compositeKey = this.pathState.d3Variant + ":" + d3Decision.optionId;
                            if (variant.framingByPath[compositeKey]) {
                                lookupKey = compositeKey;
                            } else {
                                lookupKey = this.pathState.d3Variant;
                            }
                        } else if (this.pathState.d3Variant) {
                            // Fallback: use d3Variant directly if d3Decision not found
                            lookupKey = this.pathState.d3Variant;
                        }
                    } else if (stage === "d5") {
                        // D5: use d4State as primary key (determines Nokia context)
                        if (this.pathState.d4State && variant.framingByPath[this.pathState.d4State]) {
                            lookupKey = this.pathState.d4State;
                        }
                    }

                    console.log(`[DEBUG] framingByPath lookup: stage=${stage}, lookupKey=${lookupKey}, d3Variant=${this.pathState.d3Variant}, available keys=`, Object.keys(variant.framingByPath));

                    if (lookupKey) {
                        pathFraming = variant.framingByPath[lookupKey];
                    }

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
                    "crisis-mode-nokia-owned": "d4-crisis-mode-nokia-owned",
                    "still-fighting-nokia-owned": "d4-still-fighting-nokia-owned",
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

        // Apply immediate consequences (with declared pathMetrics if available)
        this.applyConsequences(consequences, option.pathMetrics);


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
    // pathMetrics: if provided, declared values override computed deltas (e.g. marketShare)
    applyConsequences(consequences, pathMetrics = null) {
        // Store previous metrics for comparison
        this.previousMetrics = { ...this.metrics };


        if (consequences.cash !== undefined) {
            this.metrics.cash += consequences.cash;
        }
        if (consequences.marketCap !== undefined) {
            this.metrics.marketCap += consequences.marketCap;
        }
        if (consequences.mobileRevenue !== undefined) {
            this.metrics.mobileRevenue += consequences.mobileRevenue;
        }
        if (consequences.mobileCosts !== undefined) {
            this.metrics.mobileCosts += consequences.mobileCosts;
        }

        // Accumulate cumulative P&L: period ops + explicit acquisition costs
        // acquisitionCost field = full price of an acquisition (regardless of cash/debt split)
        const periodPL = (consequences.mobileRevenue || 0) - (consequences.mobileCosts || 0);
        const acqCost = consequences.acquisitionCost || 0; // explicit field, e.g. 54 for Nokia
        if (this.metrics.cumulativePL === undefined) this.metrics.cumulativePL = 0;
        this.metrics.cumulativePL += periodPL - acqCost;
        // Market share: use declared pathMetrics value if available, else fall back to delta
        if (pathMetrics && pathMetrics.marketShare !== undefined) {
            this.metrics.marketShare = pathMetrics.marketShare;
        } else if (consequences.marketShareOverride !== undefined) {
            // Legacy fallback — will be removed once all options use pathMetrics
            this.metrics.marketShare = consequences.marketShareOverride;
        } else if (consequences.marketShare !== undefined) {
            this.metrics.marketShare += consequences.marketShare;
        }
        if (this.metrics.marketShare < 0) {
            this.metrics.marketShare = 0;
        }
        if (consequences.morale) {
            this.metrics.morale = consequences.morale;
        }
        if (consequences.date) {
            this.metrics.date = consequences.date;
        }
        // Competitor shares: SET from pathMetrics if declared (absolute values)
        ['appleShare', 'googleShare', 'nokiaShare', 'bbShare'].forEach(key => {
            if (pathMetrics && pathMetrics[key] !== undefined) {
                this.metrics[key] = pathMetrics[key];
            } else if (consequences[key] !== undefined) {
                this.metrics[key] = (this.metrics[key] || 0) + consequences[key];
                if (this.metrics[key] < 0) this.metrics[key] = 0;
            }
        });

        // Enforce absorption: acquired entities' share stays at 0 (folded into MSFT)
        // This prevents generic pathMetrics from resurrecting absorbed entities
        if (this.pathState.d1Choice === 'acquire-nokia') {
            this.metrics.nokiaShare = 0;
        }
        if (this.pathState.d2Choice === 'acquire-blackberry') {
            this.metrics.bbShare = 0;
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
                    this.applyConsequences(option.consequences.delayed, option.pathMetrics);
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
            'high': '<i class="ph-fill ph-circle" style="color: #2D7A4F;"></i>',
            'optimistic': '<i class="ph-fill ph-circle" style="color: #2D7A4F;"></i>',
            'neutral': '<i class="ph-fill ph-circle" style="color: #2D7A4F;"></i>',
            'concerned': '<i class="ph-fill ph-circle" style="color: #eab308;"></i>',
            'mixed': '<i class="ph-fill ph-circle" style="color: #eab308;"></i>',
            'frustrated': '<i class="ph-fill ph-circle" style="color: #C43E3E;"></i>',
            'stressed': '<i class="ph-fill ph-circle" style="color: #eab308;"></i>',
            'hopeful': '<i class="ph-fill ph-circle" style="color: #2D7A4F;"></i>',
            'uncertain': '<i class="ph-fill ph-circle" style="color: #eab308;"></i>',
            'shocked': '<i class="ph-fill ph-circle" style="color: #C43E3E;"></i>',
            'urgent': '<i class="ph-fill ph-circle" style="color: #eab308;"></i>',
            'cautious': '<i class="ph-fill ph-circle" style="color: #2D7A4F;"></i>',
            'defensive': '<i class="ph-fill ph-circle" style="color: #eab308;"></i>',
            'alarmed': '<i class="ph-fill ph-circle" style="color: #C43E3E;"></i>',
            'cautiously optimistic': '<i class="ph-fill ph-circle" style="color: #2D7A4F;"></i>',
            'excited': '<i class="ph-fill ph-circle" style="color: #2D7A4F;"></i>',
            'desperate': '<i class="ph-fill ph-circle" style="color: #C43E3E;"></i>',
            'disillusioned': '<i class="ph-fill ph-circle" style="color: #C43E3E;"></i>',
            'satisfied': '<i class="ph-fill ph-circle" style="color: #2D7A4F;"></i>',
            'relieved': '<i class="ph-fill ph-circle" style="color: #2D7A4F;"></i>',
            'all-in': '<i class="ph-fill ph-circle" style="color: #eab308;"></i>',
            'defeated': '<i class="ph-fill ph-circle" style="color: #C43E3E;"></i>',
            'focused': '<i class="ph-fill ph-circle" style="color: #2D7A4F;"></i>',
            'proud': '<i class="ph-fill ph-circle" style="color: #2D7A4F;"></i>',
            'resigned': '<i class="ph-fill ph-circle" style="color: #eab308;"></i>',
            'low': '<i class="ph-fill ph-circle" style="color: #C43E3E;"></i>'
        };


        // Calculate P&L
        const mobileRevenue = this.metrics.mobileRevenue || 0;
        const mobileCosts = this.metrics.mobileCosts || 0;
        const mobilePL = mobileRevenue - mobileCosts;

        // Format P&L with sign
        const formatPL = (value) => {
            const absValue = Math.abs(value);
            const formatted = absValue >= 1 ? `$${absValue.toFixed(1)}B` : `$${(absValue * 1000).toFixed(0)}M`;
            if (value > 0) return `+${formatted}`;
            if (value < 0) return `-${formatted}`;
            return formatted;
        };

        // Format revenue/costs (always positive display)
        const formatMoney = (value) => {
            if (value >= 1) return `$${value.toFixed(1)}B`;
            return `$${(value * 1000).toFixed(0)}M`;
        };

        return {
            date: this.metrics.date,
            ceo: this.metrics.ceo,
            cash: `$${this.metrics.cash.toFixed(1)}B`,
            marketCap: `$${this.metrics.marketCap.toFixed(0)}B`,
            marketShare: `${this.metrics.marketShare}%`,
            morale: moralEmoji[this.metrics.morale] || '<i class="ph-fill ph-circle" style="color: #2D7A4F;"></i>',
            moraleText: this.metrics.morale.charAt(0).toUpperCase() + this.metrics.morale.slice(1),
            // P&L metrics
            mobilePL: formatPL(mobilePL),
            mobilePLRaw: mobilePL,
            mobileRevenue: formatMoney(mobileRevenue),
            mobileRevenueRaw: mobileRevenue,
            mobileCosts: formatMoney(mobileCosts),
            mobileCostsRaw: mobileCosts,
            // Competitor shares
            appleShare: this.metrics.appleShare || 0,
            googleShare: this.metrics.googleShare || 0,
            nokiaShare: this.metrics.nokiaShare || 0,
            bbShare: this.metrics.bbShare || 0
        };
    }


    // Get information card data
    getInfoCard(cardId) {
        return scenarioData.infoCards[cardId];
    }


    // ── Template Variable Engine ──────────────────────────────────────
    // Resolves {{variableName}} and {{#if flag}}...{{else}}...{{/if}}
    // in non-narrated content (intel cards, timeline events, playerPosition)

    getTemplateVars() {
        const m = this.metrics;
        return {
            // Market shares (rounded integers for clean display)
            marketShare: Math.round(m.marketShare || 0),
            nokiaShare: Math.round(m.nokiaShare || 0),
            appleShare: Math.round(m.appleShare || 0),
            googleShare: Math.round(m.googleShare || 0),
            bbShare: Math.round(m.bbShare || 0),
            // Financial
            cash: m.cash,
            mobileRevenue: m.mobileRevenue,
            mobileCosts: m.mobileCosts,
            marketCap: m.marketCap,
            // Path flags (derived from existing pathState — no storage needed)
            ownsNokia: this.pathState.d1Choice === 'acquire-nokia',
            forkedAndroid: ['nokia-android', 'fork-android'].includes(this.pathState.d2Choice),
            ownsBB: this.pathState.d2Choice === 'acquire-blackberry',
            wpAbandoned: (this.pathState.d3Variant || '').startsWith('d3-a-'),
        };
    }

    resolveTemplate(text) {
        if (!text || typeof text !== 'string' || !text.includes('{{')) return text;
        const vars = this.getTemplateVars();
        // Pass 1: Conditional blocks — {{#if flag}}...{{else}}...{{/if}}
        let result = text.replace(
            /\{\{#if (\w+)\}\}([\s\S]*?)(?:\{\{else\}\}([\s\S]*?))?\{\{\/if\}\}/g,
            (_, key, ifBlock, elseBlock) => vars[key] ? ifBlock : (elseBlock || '')
        );
        // Pass 2: Simple substitution — {{marketShare}} → 8
        result = result.replace(
            /\{\{(\w+)\}\}/g,
            (match, key) => vars[key] !== undefined ? String(vars[key]) : match
        );
        return result;
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

            // Migration: Add P&L metrics if not present
            if (this.metrics.mobileRevenue === undefined) {
                this.metrics.mobileRevenue = scenarioData.initialMetrics.mobileRevenue;
                this.metrics.mobileCosts = scenarioData.initialMetrics.mobileCosts;
                this.saveState();
            }
            if (this.previousMetrics.mobileRevenue === undefined) {
                this.previousMetrics.mobileRevenue = scenarioData.initialMetrics.mobileRevenue;
                this.previousMetrics.mobileCosts = scenarioData.initialMetrics.mobileCosts;
            }

            // Migration: Add cumulative P&L if not present
            if (this.metrics.cumulativePL === undefined) {
                // Best-effort: approximate from current annual P&L × number of decisions
                const annualPL = (this.metrics.mobileRevenue || 0) - (this.metrics.mobileCosts || 0);
                this.metrics.cumulativePL = annualPL * Math.max(1, this.decisions.length);
                this.saveState();
            }
        }
    }


    // Reset game
    reset() {
        // Track reset before clearing state
        if (window.Analytics) Analytics.trackGameReset();

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
        const totalDecisions = 5; // D1 through D5
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
