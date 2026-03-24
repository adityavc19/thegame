// ========================================
// AURORA LABS - ARCHETYPE ENGINE
// Scores player's path and assigns a magazine cover
// ========================================

const ArchetypeEngine = {

    // Boldness weights for every option (0-10 scale)
    // Higher = more unconventional / contrarian / risky
    BOLDNESS: {
        // D1 — The iPhone Moment
        'd1-enterprise-fortress': 2,
        'd1-consumer-pivot': 5,
        'd1-acquire-nokia': 9,
        'd1-wait-and-watch': 1,

        // D2-A — Enterprise path
        'd2a-option-1': 2,   // Double Down Enterprise
        'd2a-option-2': 5,   // Build Business iPhone
        'd2a-option-3': 8,   // Acquire BlackBerry
        'd2a-option-4': 7,   // Abandon Enterprise, Go Consumer

        // D2-B — Consumer path
        'd2b-option-1': 7,   // Match Free—Go Zero
        'd2b-option-2': 8,   // Go Vertical—Build Own Phone
        'd2b-option-3': 4,   // Premium Position—Hold Line
        'd2b-option-4': 6,   // Ship Pink Now

        // D2-C — Nokia acquisition path
        'd2c-option-1': 8,   // Kill Symbian—Windows Only
        'd2c-option-2': 4,   // Run Both—Dual Platform
        'd2c-option-3': 6,   // Let Nokia Lead—MeeGo
        'd2c-option-4': 9,   // Fork Android

        // D2-D — Wait path
        'd2d-option-1': 7,   // Acquire Nokia Now
        'd2d-option-2': 5,   // Build Windows Phone 7
        'd2d-option-3': 8,   // Fork Android
        'd2d-option-4': 3,   // Exit Mobile—Go Services

        // D3 — Platform Crossroads
        'd3p-option-1': 6,   // All-In Nokia Partnership
        'd3p-option-2': 7,   // Acquire Platform Innovation
        'd3p-option-3': 9,   // Fork Android
        'd3v-option-1': 5,   // Stay Vertical—Premium Only
        'd3v-option-2': 6,   // Hybrid Model
        'd3v-option-3': 4,   // Abandon Hardware—All-In Nokia
        'd3ab-option-1': 6,  // Similar to standard variants
        'd3ab-option-2': 7,
        'd3ab-option-3': 9,
        'd3e-option-1': 3,   // Security Fortress
        'd3e-option-2': 4,   // Pivot to MDM
        'd3e-option-3': 8,   // Acquire Nokia late
        'd3ibb-option-1': 7, // Force Merger—One Platform
        'd3ibb-option-2': 3, // Spin Off BlackBerry
        'd3ifw-option-1': 7, // Accelerate Windows—Ship Now
        'd3ifw-option-2': 4, // Managed Transition
        'd3id-option-1': 5,  // Converge to One
        'd3id-option-2': 4,  // Keep Dual
        'd3inl-option-1': 6, // Push MeeGo Harder
        'd3inl-option-2': 4, // Fall Back to Windows
        'd3in-option-1': 6,  // Nokia exclusive
        'd3in-option-2': 5,  // Nokia + others
        'd3ana-option-1': 7, // Double Down on Fork
        'd3ana-option-2': 4, // Retreat to Windows
        'd3afnh-option-1': 7,// Scale the Fork
        'd3afnh-option-2': 4,// Abandon Fork

        // D4 — The Integration
        'd4sf-option-1': 8,  // Acquire Nokia—All In
        'd4sf-option-2': 3,  // Accept Niche—Profitable Third
        'd4cm-option-1': 6,  // Restructure
        'd4cm-option-2': 4,  // Strategic Exit
        'd4cmno-option-1': 5,// Restructure (Nokia owned)
        'd4cmno-option-2': 4,// Strategic Write-Down
        'd4d-option-1': 3,   // Defend Position
        'd4d-option-2': 7,   // Push Aggressive Growth

        // D5 — The Third Ecosystem
        'd5ls-option-1': 7,  // Fight to End—Windows 10 Mobile
        'd5ls-option-2': 3,  // Graceful Exit
        'd5ns-option-1': 3,  // Defend Niche
        'd5ns-option-2': 4,  // Sell Division
        'd5pc-option-1': 4,  // Sustain & Solidify
        'd5pc-option-2': 8,  // Push for Second
    },

    // Historical baseline (what actually happened)
    HISTORY: {
        marketShare: 0,
        revenue: 8,      // ~$8B total mobile revenue
        costs: 15.6,     // ~$15.6B total costs
        pl: -7.6         // Net loss
    },

    /**
     * Compute boldness score (0-10) from player decisions
     */
    computeBoldness(gameState) {
        if (!gameState.decisions || gameState.decisions.length === 0) return 5;

        let total = 0;
        let count = 0;

        gameState.decisions.forEach(d => {
            const weight = this.BOLDNESS[d.optionId];
            if (weight !== undefined) {
                total += weight;
                count++;
            }
        });

        return count > 0 ? total / count : 5;
    },

    /**
     * Compute divergence score (0-10) — how different is the outcome from reality
     */
    computeDivergence(gameState) {
        const m = gameState.metrics;
        const h = this.HISTORY;

        // Player cumulative P&L (includes acquisition costs)
        const playerPL = m.cumulativePL !== undefined ? m.cumulativePL : (m.mobileRevenue || 0) - (m.mobileCosts || 0);

        // Deltas
        const shareDelta = Math.abs((m.marketShare || 0) - h.marketShare);
        const plDelta = Math.abs(playerPL - h.pl);

        // Normalize: share delta of 14% = 10, P&L delta of $7.6B = 10
        const shareScore = Math.min(shareDelta / 14 * 10, 10);
        const plScore = Math.min(plDelta / 7.6 * 10, 10);

        // Weighted average (P&L matters more)
        return Math.min((shareScore * 0.4 + plScore * 0.6), 10);
    },

    /**
     * Compute the divergence amount in dollars (for headlines)
     */
    computeDivergenceAmount(gameState) {
        const m = gameState.metrics;
        const playerPL = m.cumulativePL !== undefined ? m.cumulativePL : (m.mobileRevenue || 0) - (m.mobileCosts || 0);
        return Math.abs(playerPL - this.HISTORY.pl);
    },

    /**
     * Assign cover archetype based on scores
     * Returns 'wired' | 'tc' | 'time'
     */
    assignCover(gameState) {
        const boldness = this.computeBoldness(gameState);
        const divergence = this.computeDivergence(gameState);

        console.log(`[Archetype] Boldness: ${boldness.toFixed(1)}, Divergence: ${divergence.toFixed(1)}`);

        // TIME — bold moves that actually changed history (hardest to earn)
        if (boldness >= 5 && divergence >= 7) return 'time';

        // WIRED — visionary risk-takers regardless of outcome
        if (boldness >= 7) return 'wired';

        // TechCrunch — default / methodical / data-driven
        return 'tc';
    }
};

window.ArchetypeEngine = ArchetypeEngine;
