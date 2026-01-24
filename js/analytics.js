// ========================================
// AURORA LABS - ANALYTICS SYSTEM
// Sends game events to Google Sheets via Apps Script webhook
// ========================================

const Analytics = {
    // Configuration - UPDATE THIS with your Google Apps Script URL
    WEBHOOK_URL: 'https://script.google.com/macros/s/AKfycbw9fV3O6IaS5Z-K1m8UimkXfH4SQbUj_n3akXR5Z0xRCQ1nz8JF8T-7J6g1GwmERu7csw/exec', // e.g., 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'

    // Session tracking
    sessionId: null,
    sessionStartTime: null,

    // Initialize analytics
    init() {
        // Generate or retrieve session ID
        this.sessionId = this.getOrCreateSessionId();
        this.sessionStartTime = Date.now();

        // Track session start
        this.trackEvent('session_start', {
            referrer: document.referrer || 'direct',
            userAgent: navigator.userAgent,
            screenWidth: window.innerWidth,
            screenHeight: window.innerHeight
        });

        // Track page visibility changes (for engagement time)
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.trackEvent('page_hidden', {
                    timeOnPage: Math.round((Date.now() - this.sessionStartTime) / 1000)
                });
            } else {
                this.trackEvent('page_visible', {});
            }
        });

        // Track before user leaves
        window.addEventListener('beforeunload', () => {
            this.trackEvent('session_end', {
                totalTime: Math.round((Date.now() - this.sessionStartTime) / 1000),
                decisionsCompleted: gameState?.decisions?.length || 0,
                gameCompleted: gameState?.currentScreen === 'complete'
            });
        });

        console.log('[Analytics] Initialized with session:', this.sessionId);
    },

    // Generate unique session ID
    getOrCreateSessionId() {
        let sessionId = sessionStorage.getItem('aurora_session_id');
        if (!sessionId) {
            sessionId = 'sess_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            sessionStorage.setItem('aurora_session_id', sessionId);
        }
        return sessionId;
    },

    // Get or create persistent user ID (for returning users)
    getUserId() {
        let userId = localStorage.getItem('aurora_user_id');
        if (!userId) {
            userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('aurora_user_id', userId);
        }
        return userId;
    },

    // Get play count for this user
    getPlayCount() {
        return parseInt(localStorage.getItem('aurora_play_count') || '0');
    },

    // Increment play count
    incrementPlayCount() {
        const count = this.getPlayCount() + 1;
        localStorage.setItem('aurora_play_count', count.toString());
        return count;
    },

    // Core event tracking function
    trackEvent(eventName, eventData = {}) {
        // Skip if no webhook configured
        if (!this.WEBHOOK_URL) {
            console.log('[Analytics] Event (no webhook):', eventName, eventData);
            return;
        }

        const payload = {
            timestamp: new Date().toISOString(),
            sessionId: this.sessionId,
            userId: this.getUserId(),
            playCount: this.getPlayCount(),
            event: eventName,
            data: eventData,
            // Current game state context
            currentStage: gameState?.currentDecisionStage || 'unknown',
            currentScreen: gameState?.currentScreen || 'unknown',
            decisionsCount: gameState?.decisions?.length || 0
        };

        // Send asynchronously (fire and forget)
        this.sendToWebhook(payload);
    },

    // Send data to webhook
    async sendToWebhook(payload) {
        try {
            // Use URL parameters for Google Apps Script compatibility
            const params = new URLSearchParams();
            params.append('data', JSON.stringify(payload));

            const url = `${this.WEBHOOK_URL}?${params.toString()}`;

            // Use sendBeacon for reliability (works even on page unload)
            if (navigator.sendBeacon) {
                navigator.sendBeacon(url);
            } else {
                // Fallback to fetch with GET (Apps Script handles both)
                fetch(url, { mode: 'no-cors' });
            }
        } catch (error) {
            console.error('[Analytics] Failed to send event:', error);
        }
    },

    // ========================================
    // GAME-SPECIFIC TRACKING METHODS
    // ========================================

    // Track game start
    trackGameStart() {
        const playNumber = this.incrementPlayCount();
        this.trackEvent('game_start', {
            playNumber: playNumber,
            isReturningUser: playNumber > 1
        });
    },

    // Track backstory progress
    trackBackstoryProgress(chapterNumber, totalChapters) {
        this.trackEvent('backstory_progress', {
            chapter: chapterNumber,
            totalChapters: totalChapters,
            percentComplete: Math.round((chapterNumber / totalChapters) * 100)
        });
    },

    // Track backstory completion
    trackBackstoryComplete() {
        this.trackEvent('backstory_complete', {
            timeSpent: Math.round((Date.now() - this.sessionStartTime) / 1000)
        });
    },

    // Track decision made
    trackDecision(decisionStage, decisionTitle, optionId, optionTitle) {
        this.trackEvent('decision_made', {
            stage: decisionStage,
            decisionTitle: decisionTitle,
            optionId: optionId,
            optionTitle: optionTitle,
            decisionNumber: gameState?.decisions?.length || 0
        });
    },

    // Track info card viewed
    trackInfoCardView(cardId, cardTitle) {
        this.trackEvent('info_card_viewed', {
            cardId: cardId,
            cardTitle: cardTitle
        });
    },

    // Track artifact viewed
    trackArtifactView(artifactId, artifactName) {
        this.trackEvent('artifact_viewed', {
            artifactId: artifactId,
            artifactName: artifactName
        });
    },

    // Track artifact unlocked
    trackArtifactUnlock(artifactId, artifactName) {
        this.trackEvent('artifact_unlocked', {
            artifactId: artifactId,
            artifactName: artifactName
        });
    },

    // Track game completion
    trackGameComplete(endingId, endingTitle, finalMetrics) {
        this.trackEvent('game_complete', {
            endingId: endingId,
            endingTitle: endingTitle,
            finalMarketShare: finalMetrics.marketShare,
            finalMarketCap: finalMetrics.marketCap,
            finalCash: finalMetrics.cash,
            totalDecisions: gameState?.decisions?.length || 0,
            totalTime: Math.round((Date.now() - this.sessionStartTime) / 1000),
            path: gameState?.decisions?.map(d => d.optionId).join(' → ') || ''
        });
    },

    // Track journey modal opened
    trackJourneyView() {
        this.trackEvent('journey_viewed', {
            currentProgress: gameState?.decisions?.length || 0
        });
    },

    // Track profile modal opened
    trackProfileView() {
        this.trackEvent('profile_viewed', {});
    },

    // Track feedback submitted
    trackFeedbackSubmit(rating, enjoyed) {
        this.trackEvent('feedback_submitted', {
            rating: rating,
            enjoyed: enjoyed
        });
    },

    // Track game reset/restart
    trackGameReset() {
        this.trackEvent('game_reset', {
            resetAtStage: gameState?.currentDecisionStage || 'unknown',
            decisionsBeforeReset: gameState?.decisions?.length || 0
        });
    }
};

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    Analytics.init();
});

// Export for global access
window.Analytics = Analytics;
