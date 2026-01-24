// ========================================
// AURORA LABS - FEEDBACK SYSTEM
// ========================================

const FeedbackSystem = {
    // Google Forms configuration
    FORM_ACTION_URL: 'https://docs.google.com/forms/d/e/1FAIpQLSc8uq1UPZj79K6K8T4X5ecBtUP03cRcrbjp0CwpnH4x89Bu-g/formResponse',

    // Form field IDs (these correspond to Google Forms entry IDs)
    FIELD_IDS: {
        rating: 'entry.1011962974',        // Overall rating
        enjoyed: 'entry.1333243759',       // What they enjoyed (checkboxes)
        improvements: 'entry.1755580600',  // Improvement suggestions (text)
        playAgain: 'entry.1364191561',     // What other scenarios would you like
        email: 'entry.2010499039',         // Email for updates
        scenarioId: 'entry.1755580600',    // Using improvements field for tracking
        completionTime: 'entry.1755580600' // Using improvements field for tracking
    },

    // State
    submitted: false,
    submitting: false,

    // Initialize feedback system
    init() {
        this.loadSubmissionState();
    },

    // Render feedback form
    renderFeedbackForm() {
        if (this.submitted) {
            return this.renderThankYou();
        }

        return `
            <div class="feedback-section" id="feedback-section" style="margin: 30px auto 20px; padding: 20px; background: rgba(255,255,255,0.03); border-radius: 12px; border: 1px solid var(--border-default);">
                <div class="feedback-header" style="text-align: center; margin-bottom: 20px;">
                    <h3 style="font-size: 0.9rem; color: var(--accent-primary); margin-bottom: 8px;">HELP US IMPROVE</h3>
                    <p style="color: var(--text-tertiary); font-size: 0.8rem;">
                        Your feedback shapes future scenarios
                    </p>
                </div>

                <form id="feedback-form" class="feedback-form" style="display: flex; flex-direction: column; gap: 15px;">
                    <!-- Row 1: Rating and Enjoyed side by side -->
                    <div class="feedback-row" style="display: flex; gap: 15px; flex-wrap: wrap;">
                        <div class="feedback-question" style="flex: 1; min-width: 200px;">
                            <label class="feedback-label" style="font-size: 0.75rem; margin-bottom: 8px; display: block;">Rate this experience</label>
                            <div class="rating-options" style="display: flex; gap: 8px; flex-wrap: wrap;">
                                <label class="rating-option" style="font-size: 0.75rem;">
                                    <input type="radio" name="rating" value="Excellent" required>
                                    <span class="rating-text">Excellent</span>
                                </label>
                                <label class="rating-option" style="font-size: 0.75rem;">
                                    <input type="radio" name="rating" value="Good">
                                    <span class="rating-text">Good</span>
                                </label>
                                <label class="rating-option" style="font-size: 0.75rem;">
                                    <input type="radio" name="rating" value="Fair">
                                    <span class="rating-text">Fair</span>
                                </label>
                                <label class="rating-option" style="font-size: 0.75rem;">
                                    <input type="radio" name="rating" value="Poor">
                                    <span class="rating-text">Poor</span>
                                </label>
                            </div>
                        </div>

                        <div class="feedback-question" style="flex: 1; min-width: 200px;">
                            <label class="feedback-label" style="font-size: 0.75rem; margin-bottom: 8px; display: block;">What did you enjoy? <span style="color: var(--accent-primary);">*</span></label>
                            <div class="checkbox-options" style="display: flex; gap: 6px; flex-wrap: wrap;">
                                <label class="checkbox-option" style="font-size: 0.7rem; padding: 4px 8px; background: var(--bg-elevated); border-radius: 4px;">
                                    <input type="checkbox" name="enjoyed" value="Decision-making" style="margin-right: 4px;">
                                    <span>Decisions</span>
                                </label>
                                <label class="checkbox-option" style="font-size: 0.7rem; padding: 4px 8px; background: var(--bg-elevated); border-radius: 4px;">
                                    <input type="checkbox" name="enjoyed" value="Historical context" style="margin-right: 4px;">
                                    <span>History</span>
                                </label>
                                <label class="checkbox-option" style="font-size: 0.7rem; padding: 4px 8px; background: var(--bg-elevated); border-radius: 4px;">
                                    <input type="checkbox" name="enjoyed" value="Information sources" style="margin-right: 4px;">
                                    <span>Info</span>
                                </label>
                                <label class="checkbox-option" style="font-size: 0.7rem; padding: 4px 8px; background: var(--bg-elevated); border-radius: 4px;">
                                    <input type="checkbox" name="enjoyed" value="Artifacts" style="margin-right: 4px;">
                                    <span>Artifacts</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <!-- Row 2: Textareas side by side -->
                    <div class="feedback-row" style="display: flex; gap: 15px; flex-wrap: wrap;">
                        <div class="feedback-question" style="flex: 1; min-width: 200px;">
                            <label class="feedback-label" style="font-size: 0.75rem; margin-bottom: 6px; display: block;">What could be better?</label>
                            <textarea
                                name="improvements"
                                class="feedback-textarea"
                                placeholder="Your suggestions..."
                                maxlength="300"
                                rows="2"
                                style="font-size: 0.8rem; padding: 8px; resize: none;"
                            ></textarea>
                        </div>

                        <div class="feedback-question" style="flex: 1; min-width: 200px;">
                            <label class="feedback-label" style="font-size: 0.75rem; margin-bottom: 6px; display: block;">Other scenarios you'd like?</label>
                            <textarea
                                name="playAgain"
                                class="feedback-textarea"
                                placeholder="E.g., Netflix vs Blockbuster..."
                                maxlength="300"
                                rows="2"
                                style="font-size: 0.8rem; padding: 8px; resize: none;"
                            ></textarea>
                        </div>
                    </div>

                    <!-- Row 3: Email and Submit -->
                    <div class="feedback-row" style="display: flex; gap: 15px; align-items: flex-end; flex-wrap: wrap;">
                        <div class="feedback-question" style="flex: 1; min-width: 200px;">
                            <label class="feedback-label" style="font-size: 0.75rem; margin-bottom: 6px; display: block;">Get notified of new scenarios (optional)</label>
                            <input
                                type="email"
                                name="email"
                                class="feedback-email-input"
                                placeholder="your@email.com"
                                style="font-size: 0.8rem; padding: 8px;"
                            >
                        </div>

                        <div style="display: flex; gap: 10px; align-items: center;">
                            <button
                                type="submit"
                                class="feedback-submit-btn"
                                id="feedback-submit-btn"
                                style="padding: 10px 20px; font-size: 0.8rem;"
                            >
                                <span id="submit-btn-text">Submit</span>
                                <span id="submit-btn-loading" class="hidden">...</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        `;
    },

    // Render thank you message after submission
    renderThankYou() {
        return `
            <div class="feedback-section feedback-thank-you" style="margin: 30px auto 20px; padding: 20px; background: rgba(255,255,255,0.03); border-radius: 12px; border: 1px solid var(--border-default); text-align: center;">
                <div class="thank-you-content" style="display: flex; align-items: center; justify-content: center; gap: 15px;">
                    <i class="ph ph-check-circle" style="font-size: 2rem; color: var(--accent-primary);"></i>
                    <div>
                        <h3 style="color: var(--accent-primary); font-size: 0.9rem; margin-bottom: 4px;">
                            Thank you!
                        </h3>
                        <p style="color: var(--text-secondary); font-size: 0.8rem;">
                            Your feedback helps us improve.
                        </p>
                    </div>
                </div>
            </div>
        `;
    },

    // Attach event listeners
    attachEventListeners() {
        const form = document.getElementById('feedback-form');
        const skipLink = document.getElementById('skip-feedback');
        const textareas = document.querySelectorAll('.feedback-textarea');

        if (form) {
            form.addEventListener('submit', (e) => this.handleSubmit(e));
        }

        if (skipLink) {
            skipLink.addEventListener('click', (e) => {
                e.preventDefault();
                this.skipFeedback();
            });
        }

        // Add character counters for all textareas
        textareas.forEach((textarea) => {
            textarea.addEventListener('input', (e) => {
                const count = e.target.value.length;
                const name = e.target.name;
                let counterId = '';

                if (name === 'improvements') {
                    counterId = 'improvements-count';
                } else if (name === 'playAgain') {
                    counterId = 'scenarios-count';
                }

                const counter = document.getElementById(counterId);
                if (counter) {
                    counter.textContent = `${count}/500`;
                }
            });
        });
    },

    // Handle form submission
    async handleSubmit(e) {
        e.preventDefault();

        if (this.submitting) return;

        // Validate that at least one checkbox is selected (required field)
        const checkboxes = e.target.querySelectorAll('input[name="enjoyed"]:checked');
        if (checkboxes.length === 0) {
            alert('Please select at least one thing you enjoyed about the experience.');
            return;
        }

        this.submitting = true;
        const submitBtn = document.getElementById('feedback-submit-btn');
        const btnText = document.getElementById('submit-btn-text');
        const btnLoading = document.getElementById('submit-btn-loading');

        // Update button state
        submitBtn.disabled = true;
        btnText.classList.add('hidden');
        btnLoading.classList.remove('hidden');

        const formData = this.collectFormData(e.target);

        try {
            // Submit to Google Forms
            await this.submitToGoogleForms(formData);

            // Mark as submitted
            this.submitted = true;
            this.saveSubmissionState();

            // Re-render with thank you message
            const feedbackSection = document.getElementById('feedback-section');
            if (feedbackSection) {
                feedbackSection.innerHTML = this.renderThankYou().replace(
                    /<div class="feedback-section[^>]*>/,
                    '<div'
                );
            }

            // Analytics tracking
            if (window.Analytics) {
                Analytics.trackFeedbackSubmit(formData.rating, formData.enjoyed);
            }

        } catch (error) {
            console.error('Feedback submission error:', error);
            alert('There was an error submitting your feedback. Please try again or contact us directly.');

            // Reset button
            submitBtn.disabled = false;
            btnText.classList.remove('hidden');
            btnLoading.classList.add('hidden');
        }

        this.submitting = false;
    },

    // Collect form data
    collectFormData(form) {
        const formData = new FormData(form);
        const data = {
            rating: formData.get('rating'),
            enjoyed: formData.getAll('enjoyed').join(', '),
            improvements: formData.get('improvements'),
            playAgain: formData.get('playAgain'),
            email: formData.get('email'),
            scenarioId: scenarioData.id,
            timestamp: new Date().toISOString(),
            completionTime: this.calculateCompletionTime()
        };

        return data;
    },

    // Submit to Google Forms
    async submitToGoogleForms(data) {
        // If no form URL configured, use localStorage fallback
        if (this.FORM_ACTION_URL === 'YOUR_GOOGLE_FORM_URL_HERE') {
            console.warn('Google Form not configured. Saving to localStorage instead.');
            this.saveToLocalStorage(data);
            return;
        }

        // Use hidden iframe submission to avoid CORS issues
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = this.FORM_ACTION_URL;
        form.target = 'aurora_feedback_iframe';
        form.style.display = 'none';

        // Add rating (required) - use type="text" to match Google Forms expectations
        if (data.rating) {
            const ratingInput = document.createElement('input');
            ratingInput.type = 'text';
            ratingInput.name = this.FIELD_IDS.rating;
            ratingInput.value = data.rating;
            form.appendChild(ratingInput);
        }

        // Add enjoyed items (required, checkboxes - need multiple entries)
        if (data.enjoyed) {
            const enjoyedItems = data.enjoyed.split(', ');
            enjoyedItems.forEach(item => {
                if (item.trim()) {
                    const enjoyedInput = document.createElement('input');
                    enjoyedInput.type = 'text';
                    enjoyedInput.name = this.FIELD_IDS.enjoyed;
                    enjoyedInput.value = item.trim();
                    form.appendChild(enjoyedInput);
                }
            });
        }

        // Add improvements (optional)
        if (data.improvements && data.improvements.trim()) {
            const improvementsInput = document.createElement('input');
            improvementsInput.type = 'text';
            improvementsInput.name = this.FIELD_IDS.improvements;
            improvementsInput.value = data.improvements;
            form.appendChild(improvementsInput);
        }

        // Add scenario ideas (optional)
        if (data.playAgain && data.playAgain.trim()) {
            const playAgainInput = document.createElement('input');
            playAgainInput.type = 'text';
            playAgainInput.name = this.FIELD_IDS.playAgain;
            playAgainInput.value = data.playAgain;
            form.appendChild(playAgainInput);
        }

        // Add email (optional) - use type="text" instead of type="email" to match Google Forms
        if (data.email && data.email.trim()) {
            const emailInput = document.createElement('input');
            emailInput.type = 'text';
            emailInput.name = this.FIELD_IDS.email;
            emailInput.value = data.email;
            form.appendChild(emailInput);
        }

        // Create hidden iframe if doesn't exist
        let iframe = document.getElementById('aurora_feedback_iframe');
        if (!iframe) {
            iframe = document.createElement('iframe');
            iframe.name = 'aurora_feedback_iframe';
            iframe.id = 'aurora_feedback_iframe';
            iframe.style.display = 'none';
            document.body.appendChild(iframe);
        }

        // Submit form
        document.body.appendChild(form);
        form.submit();
        document.body.removeChild(form);

        // Also save locally as backup
        this.saveToLocalStorage(data);
    },

    // Save to localStorage as fallback/backup
    saveToLocalStorage(data) {
        const key = `aurora_feedback_${Date.now()}`;
        localStorage.setItem(key, JSON.stringify(data));
        console.log('Feedback saved to localStorage:', key);
    },

    // Skip feedback
    skipFeedback() {
        const feedbackSection = document.getElementById('feedback-section');
        if (feedbackSection) {
            feedbackSection.style.display = 'none';
        }
    },

    // Calculate completion time
    calculateCompletionTime() {
        const startTime = localStorage.getItem('aurora_game_start_time');
        if (startTime) {
            const elapsed = Date.now() - parseInt(startTime);
            const minutes = Math.floor(elapsed / 60000);
            return `${minutes} minutes`;
        }
        return 'Unknown';
    },

    // Save submission state
    saveSubmissionState() {
        localStorage.setItem('aurora_feedback_submitted', 'true');
    },

    // Load submission state
    loadSubmissionState() {
        this.submitted = localStorage.getItem('aurora_feedback_submitted') === 'true';
    },

    // Reset submission state (for testing)
    reset() {
        this.submitted = false;
        localStorage.removeItem('aurora_feedback_submitted');
    }
};

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    FeedbackSystem.init();
});
