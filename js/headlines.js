// ========================================
// AURORA LABS - HEADLINE GENERATOR
// Dynamic headlines based on player path + archetype
// ========================================

const HeadlineEngine = {

    /**
     * Generate all cover data based on archetype and game state
     * Returns { headline, subheadline, deck, verdict, turningPoint, bigNumber, bigNumberLabel, category, sideStories, issueTheme }
     */
    generate(archetype, gameState) {
        const ending = gameState.getCurrentEnding();
        const endingKey = this._getEndingKey(gameState);
        const metrics = gameState.metrics;
        const playerPL = metrics.cumulativePL !== undefined ? metrics.cumulativePL : (metrics.mobileRevenue || 0) - (metrics.mobileCosts || 0);
        const divergenceAmt = ArchetypeEngine.computeDivergenceAmount(gameState);
        const share = metrics.marketShare || 0;
        const d1Choice = gameState.pathState.d1Choice || '';

        // Find turning point
        const turningPoint = this._findTurningPoint(gameState);

        // Select template
        const templates = this.TEMPLATES[archetype] || this.TEMPLATES.tc;
        let template = this._selectTemplate(templates, endingKey, share, playerPL);

        // Interpolate values
        const vars = {
            divergenceAmount: divergenceAmt.toFixed(1),
            marketShare: share,
            revenue: this._formatBillions(metrics.mobileRevenue || 0),
            costs: this._formatBillions(metrics.mobileCosts || 0),
            pl: this._formatBillions(playerPL),
            plAbs: this._formatBillions(Math.abs(playerPL)),
            historyPL: '-$7.6B',
            endingTitle: ending?.title || 'Journey Complete',
            d1Title: turningPoint.decision,
            d1Choice: turningPoint.choice,
        };

        // Map ending key to cover image
        const coverImageMap = {
            'sustainable-third': 'assets/images/endings/sustainable-third.jpg',
            'sustainable-niche': 'assets/images/endings/sustainable-niche.jpg',
            'graceful-exit': 'assets/images/endings/graceful-exit.jpg',
            'fought-to-end': 'assets/images/endings/fought-to-end.jpg',
            'sold-division': 'assets/images/endings/sold-division.jpg',
            'pushed-for-second': 'assets/images/endings/pushed-for-second.jpg',
            'strategic-exit': 'assets/images/endings/strategic-exit.jpg',
            'early-exit-services': 'assets/images/endings/early-exit-services.jpg',
        };

        return {
            headline: this._interpolate(template.headline, vars),
            subheadline: this._interpolate(template.subheadline, vars),
            deck: this._interpolate(template.deck, vars),
            verdict: this._interpolate(template.verdict, vars),
            turningPoint: turningPoint,
            bigNumber: template.bigNumber ? this._interpolate(template.bigNumber, vars) : String(share),
            bigNumberLabel: template.bigNumberLabel || 'PERCENT',
            category: template.category || 'Strategy',
            sideStories: template.sideStories || ['The App Gap', 'Platform Wars'],
            issueTheme: template.issueTheme || 'The Strategy Issue',
            coverImage: coverImageMap[endingKey] || 'assets/images/endings/fought-to-end.png',
        };
    },

    // ── Templates ──────────────────────────────────────────

    TEMPLATES: {
        wired: [
            {
                // High boldness, any outcome
                match: () => true,
                headline: 'The $${divergenceAmount}B Difference',
                subheadline: 'What if Microsoft had thrown out the playbook and bet everything on a future no one else could see?',
                deck: 'While the board demanded safe bets, one path led through Nokia, Android forks, and billion-dollar gambles. The math says it cost $${plAbs}. The question is whether the alternative universe was worth reaching for.',
                verdict: 'You swung for the fences. In a market that punishes caution just as hard, that might have been the only move.',
                bigNumber: '${divergenceAmount}',
                bigNumberLabel: 'BILLION',
                issueTheme: 'The Strategy Issue',
                sideStories: ['Nokia\'s Last Stand', 'The App Gap'],
                category: 'Strategy',
            },
            {
                match: (ek) => ek === 'fought-to-end',
                headline: 'The Last True Believer',
                subheadline: 'Everyone said stop. You didn\'t.',
                deck: '$15 billion and ten years later, Windows Phone died the way it lived, defiantly. You kept the platform alive longer than the market wanted. The visionaries don\'t always win. But they always try.',
                verdict: 'History is written by the winners. But the interesting chapters are about the ones who refused to lose quietly.',
                bigNumber: '10',
                bigNumberLabel: 'YEARS',
                issueTheme: 'The Defiance Issue',
                sideStories: ['50M Loyal Users', 'The Write-Down'],
            },
            {
                match: (ek, share) => share >= 10,
                headline: 'The Third Way',
                subheadline: '${marketShare}% of the mobile market said there was room for one more.',
                deck: 'They called it impossible. A third mobile ecosystem in a winner-take-all market. You built it anyway, ${marketShare}% market share, real revenue, real users. Not dominant. Not dead. Something rarer: viable.',
                verdict: 'You didn\'t beat Apple or Google. You proved they weren\'t the only options. That\'s a different kind of winning.',
                bigNumber: '${marketShare}',
                bigNumberLabel: 'PERCENT',
                issueTheme: 'The Platform Issue',
                sideStories: ['180M Users', 'The Ecosystem Gap'],
            },
        ],

        tc: [
            {
                match: () => true,
                headline: 'The $${divergenceAmount}B Difference: How a Different Strategy Could Have Changed Everything',
                subheadline: 'A data-driven autopsy of the mobile war that Microsoft almost won.',
                deck: 'The numbers tell a story the headlines missed. ${revenue} in revenue against ${costs} in costs. A ${marketShare}% market share versus the 0% of actual history. This is what happens when you run the simulation differently.',
                verdict: 'The data doesn\'t lie. You changed the math. Whether you changed the outcome is a different question.',
                category: 'Analysis',
            },
            {
                match: (ek) => ek === 'graceful-exit' || ek === 'early-exit-services',
                headline: 'The Exit Interview: Why Microsoft\'s Smartest Move Was Walking Away',
                subheadline: 'Sometimes the best strategy is knowing when to stop.',
                deck: 'You looked at a market dominated by iOS and Android and made the call most CEOs can\'t: you stopped. The mobile division was bleeding. You chose cloud and services instead. The market cap says you were right.',
                verdict: 'You didn\'t win mobile. You won the argument about what matters more.',
                category: 'Opinion',
            },
            {
                match: (ek) => ek === 'strategic-exit',
                headline: 'The $${divergenceAmount}B Write-Down That Saved Microsoft',
                subheadline: 'Inside the decision to admit defeat, and why it worked.',
                deck: 'The write-down made headlines. The pivot made history. By exiting mobile hardware and doubling down on cloud, Microsoft transformed from a legacy company into the world\'s most valuable enterprise. The cost of wisdom: $${plAbs}.',
                verdict: 'The best investments are sometimes the ones you stop making.',
                category: 'Enterprise',
            },
            {
                match: (ek) => ek === 'sold-division',
                headline: 'Microsoft to Amazon: $4.2B and 40 Million Users',
                subheadline: 'The deal that nobody saw coming.',
                deck: 'When Microsoft sold its mobile division to Amazon, Wall Street called it surrender. Inside Redmond, they called it liberation. The $4.2B proceeds funded two years of Azure development. Sometimes you sell the cow to build the farm.',
                verdict: 'You turned a burning platform into someone else\'s problem, and got paid for it.',
                category: 'Deals',
            },
        ],

        time: [
            {
                match: () => true,
                headline: 'The $${divergenceAmount}B Difference',
                subheadline: 'What if Microsoft had played mobile differently, and won?',
                deck: 'Bold moves. Real consequences. A ${marketShare}% market share where history recorded zero. This is the counterfactual that changes how we think about platform wars, corporate courage, and the cost of playing it safe.',
                verdict: 'You committed when others hedged. The numbers prove it mattered.',
            },
            {
                match: (ek) => ek === 'sustainable-third',
                headline: 'The Platform That Lived',
                subheadline: 'Against all odds, Microsoft built a third mobile ecosystem.',
                deck: 'In a market that killed BlackBerry, Palm, Symbian, webOS, and Fire Phone, Windows Mobile endured. ${marketShare}% share. 180 million users. Profitable. The history books will remember this as the third platform that survived.',
                verdict: 'Not the winner. Not the loser. Something harder to be: the one that lasted.',
            },
            {
                match: (ek) => ek === 'pushed-for-second',
                headline: 'The Challenger',
                subheadline: '${marketShare}% of the world chose a different future.',
                deck: 'You didn\'t just build a third ecosystem, you pushed for second. $5 billion in subsidies. An 18% peak that settled at ${marketShare}%. Ambitious, expensive, and closer to success than anyone thought possible.',
                verdict: 'You proved the duopoly wasn\'t inevitable. That changes everything, even if you didn\'t win.',
            },
        ],
    },

    // ── Turning Point Logic ──────────────────────────────────

    _findTurningPoint(gameState) {
        let bestDecision = null;
        let bestImpact = 0;

        gameState.decisions.forEach(d => {
            const decisionPoint = gameState.getDecisionPointById(d.decisionId);
            if (!decisionPoint) return;

            const option = decisionPoint.options.find(opt => opt.id === d.optionId);
            if (!option?.consequences?.immediate) return;

            const imm = option.consequences.immediate;
            // Composite impact score
            const impact = Math.abs(imm.marketShare || 0) * 2
                + Math.abs(imm.cash || 0)
                + Math.abs((imm.mobileRevenue || 0) - (imm.mobileCosts || 0)) * 3;

            if (impact > bestImpact) {
                bestImpact = impact;
                bestDecision = {
                    decision: decisionPoint.title,
                    choice: option.title,
                    insight: this._generateInsight(decisionPoint, option, gameState),
                    decisionId: d.decisionId,
                };
            }
        });

        // Fallback to first decision
        if (!bestDecision && gameState.decisions.length > 0) {
            const d = gameState.decisions[0];
            const dp = gameState.getDecisionPointById(d.decisionId);
            const opt = dp?.options.find(o => o.id === d.optionId);
            bestDecision = {
                decision: dp?.title || 'First Decision',
                choice: opt?.title || 'Unknown',
                insight: 'This was the moment that set everything in motion.',
                decisionId: d.decisionId,
            };
        }

        return bestDecision || {
            decision: 'The iPhone Moment',
            choice: 'Your Response',
            insight: 'Every path diverged from this single choice.',
        };
    },

    _generateInsight(decisionPoint, option, gameState) {
        const title = decisionPoint.title;
        const choice = option.title;
        const imm = option.consequences?.immediate;

        if (imm?.marketShare && Math.abs(imm.marketShare) >= 5) {
            const dir = imm.marketShare > 0 ? 'gained' : 'cost';
            return `Choosing "${choice}" at "${title}" ${dir} you ${Math.abs(imm.marketShare)}% market share. Every subsequent decision was shaped by this one.`;
        }

        if (imm?.cash && Math.abs(imm.cash) >= 2) {
            return `The $${Math.abs(imm.cash)}B commitment to "${choice}" defined the financial trajectory of every move that followed.`;
        }

        return `"${choice}" at "${title}" was the fork in the road. Everything after flowed from this decision.`;
    },

    // ── Helpers ──────────────────────────────────────────────

    _getEndingKey(gameState) {
        let key = gameState.pathState.earlyEnding;
        if (!key) {
            const last = gameState.decisions[gameState.decisions.length - 1];
            if (last) {
                const dp = gameState.getDecisionPointById(last.decisionId);
                const opt = dp?.options.find(o => o.id === last.optionId);
                key = opt?.consequences?.delayed?.triggersEnding;
            }
        }
        return key || 'unknown';
    },

    _selectTemplate(templates, endingKey, share, pl) {
        // Try to find a specific match first
        for (let i = 1; i < templates.length; i++) {
            if (templates[i].match(endingKey, share, pl)) return templates[i];
        }
        // Fall back to default (first template)
        return templates[0];
    },

    _interpolate(str, vars) {
        return str.replace(/\$\{(\w+)\}/g, (_, key) => vars[key] !== undefined ? vars[key] : _);
    },

    _formatBillions(val) {
        if (Math.abs(val) >= 1) {
            return (val >= 0 ? '' : '-') + '$' + Math.abs(val).toFixed(1) + 'B';
        }
        return (val >= 0 ? '' : '-') + '$' + Math.abs(val * 1000).toFixed(0) + 'M';
    },
};

window.HeadlineEngine = HeadlineEngine;
