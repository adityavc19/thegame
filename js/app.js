// ========================================
// AURORA LABS - APP INITIALIZATION
// ========================================

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize game state
    gameState.init();

    // Initialize UI
    UI.init();

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // ESC to close modal
        if (e.key === 'Escape') {
            UI.closeModal();
        }
    });

    // Add smooth scrolling for better UX
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Log welcome message
    console.log('%cAurora Labs', 'font-size: 24px; font-weight: bold; color: #E8B4A0;');
    console.log('%cInteractive Business Intelligence Platform', 'font-size: 14px; color: #B8A896;');
    console.log('%cVersion 1.0 | January 2026', 'font-size: 12px; color: #8A7A6A;');
    console.log('\nDebug commands:');
    console.log('- gameState: View current game state');
    console.log('- gameState.reset(): Restart scenario');
    console.log('- UI: Access UI rendering functions');
});

// Service Worker for offline support (future enhancement)
if ('serviceWorker' in navigator) {
    // Uncomment when service worker is implemented
    // navigator.serviceWorker.register('/sw.js');
}

// Analytics placeholder (future enhancement)
const Analytics = {
    trackDecision(decisionId, optionId) {
        console.log(`Decision tracked: ${decisionId} -> ${optionId}`);
        // Send to analytics service
    },

    trackInfoCardView(cardId) {
        console.log(`Info card viewed: ${cardId}`);
        // Send to analytics service
    },

    trackCompletion(finalMetrics) {
        console.log('Scenario completed:', finalMetrics);
        // Send to analytics service
    }
};

// Share functionality placeholder
const Share = {
    shareDecisionPath() {
        const path = gameState.decisions.map(d => d.optionId).join('-');
        const url = `${window.location.origin}${window.location.pathname}?path=${path}`;

        if (navigator.share) {
            navigator.share({
                title: 'Aurora Labs - My Decision Path',
                text: 'Check out my decision path in this interactive business scenario',
                url: url
            }).catch(err => console.log('Share failed:', err));
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(url).then(() => {
                alert('Link copied to clipboard!');
            });
        }
    }
};

// Export for console access
window.gameState = gameState;
window.UI = UI;
window.Analytics = Analytics;
window.Share = Share;
