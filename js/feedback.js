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
            <div class="feedback-section" id="feedback-section">
                <div class="section-divider" style="margin: 60px 0 40px 0;">
                    <span>HELP US IMPROVE</span>
                </div>

                <div class="feedback-intro">
                    <p style="color: var(--text-secondary); margin-bottom: 30px; text-align: center;">
                        Your feedback shapes future scenarios. Take 2 minutes to share your thoughts.
                    </p>
                </div>

                <form id="feedback-form" class="feedback-form">
                    <!-- Question 1: Rating -->
                    <div class="feedback-question">
                        <label class="feedback-label">How would you rate this experience?</label>
                        <div class="rating-options">
                            <label class="rating-option">
                                <input type="radio" name="rating" value="Excellent" required>
                                <span class="rating-text">Excellent</span>
                            </label>
                            <label class="rating-option">
                                <input type="radio" name="rating" value="Good">
                                <span class="rating-text">Good</span>
                            </label>
                            <label class="rating-option">
                                <input type="radio" name="rating" value="Fair">
                                <span class="rating-text">Fair</span>
                            </label>
                            <label class="rating-option">
                                <input type="radio" name="rating" value="Poor">
                                <span class="rating-text">Poor</span>
                            </label>
                        </div>
                    </div>

                    <!-- Question 2: What they enjoyed -->
                    <div class="feedback-question">
                        <label class="feedback-label">What did you enjoy most? (select all that apply)</label>
                        <div class="checkbox-options">
                            <label class="checkbox-option">
                                <input type="checkbox" name="enjoyed" value="Decision-making process">
                                <span class="checkbox-text">Decision-making process</span>
                            </label>
                            <label class="checkbox-option">
                                <input type="checkbox" name="enjoyed" value="Historical context">
                                <span class="checkbox-text">Historical context</span>
                            </label>
                            <label class="checkbox-option">
                                <input type="checkbox" name="enjoyed" value="Information sources">
                                <span class="checkbox-text">Information sources</span>
                            </label>
                            <label class="checkbox-option">
                                <input type="checkbox" name="enjoyed" value="Outcome comparison">
                                <span class="checkbox-text">Outcome comparison</span>
                            </label>
                            <label class="checkbox-option">
                                <input type="checkbox" name="enjoyed" value="Artifact collection">
                                <span class="checkbox-text">Artifact collection</span>
                            </label>
                        </div>
                    </div>

                    <!-- Question 3: Improvements -->
                    <div class="feedback-question">
                        <label class="feedback-label">What could be better?</label>
                        <textarea
                            name="improvements"
                            class="feedback-textarea"
                            placeholder="Share your suggestions..."
                            maxlength="500"
                            rows="4"
                        ></textarea>
                        <div class="char-count" id="improvements-count">0/500</div>
                    </div>

                    <!-- Question 4: Other scenarios interest -->
                    <div class="feedback-question">
                        <label class="feedback-label">What other scenarios or stories would you want to experience in an interactive format?</label>
                        <textarea
                            name="playAgain"
                            class="feedback-textarea"
                            placeholder="E.g., Netflix vs Blockbuster, Tesla's rise, COVID-19 response decisions..."
                            maxlength="500"
                            rows="4"
                        ></textarea>
                        <div class="char-count" id="scenarios-count">0/500</div>
                        <p style="font-size: 0.75rem; color: var(--text-tertiary); margin-top: 8px;">
                            Help us understand what decisions interest you most
                        </p>
                    </div>

                    <!-- Email signup -->
                    <div class="section-divider" style="margin: 40px 0 30px 0;">
                        <span>STAY UPDATED</span>
                    </div>

                    <div class="feedback-question">
                        <label class="feedback-label">Get notified when we launch new scenarios</label>
                        <input
                            type="email"
                            name="email"
                            class="feedback-email-input"
                            placeholder="your@email.com"
                        >
                        <p style="font-size: 0.75rem; color: var(--text-tertiary); margin-top: 8px;">
                            Optional. We'll only email you about new scenarios. No spam.
                        </p>
                    </div>

                    <!-- Submit button -->
                    <button
                        type="submit"
                        class="feedback-submit-btn"
                        id="feedback-submit-btn"
                    >
                        <span id="submit-btn-text">Submit Feedback</span>
                        <span id="submit-btn-loading" class="hidden">Submitting...</span>
                    </button>

                    <p class="feedback-skip" id="skip-feedback" style="text-align: center; margin-top: 16px;">
                        <a href="#" style="color: var(--text-tertiary); text-decoration: underline; font-size: 0.875rem;">
                            Skip for now
                        </a>
                    </p>
                </form>
            </div>
        `;
    },

    // Render thank you message after submission
    renderThankYou() {
        return `
            <div class="feedback-section feedback-thank-you">
                <div class="section-divider" style="margin: 60px 0 40px 0;">
                    <span>THANK YOU</span>
                </div>

                <div class="thank-you-content">
                    <div class="thank-you-icon">
                        <i class="ph ph-check-circle" style="font-size: 4rem; color: var(--accent-primary);"></i>
                    </div>
                    <h3 style="color: var(--accent-primary); margin: 20px 0;">
                        Feedback Submitted
                    </h3>
                    <p style="color: var(--text-secondary); max-width: 500px; margin: 0 auto;">
                        Your insights help us create better scenarios. We'll use your feedback to improve future experiences.
                    </p>
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

            // Analytics tracking (if implemented)
            if (window.Analytics) {
                Analytics.trackFeedbackSubmission(formData);
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

        // Create form data for Google Forms submission
        const formData = new FormData();
        formData.append(this.FIELD_IDS.rating, data.rating);
        formData.append(this.FIELD_IDS.enjoyed, data.enjoyed);
        formData.append(this.FIELD_IDS.improvements, data.improvements);
        formData.append(this.FIELD_IDS.playAgain, data.playAgain);
        formData.append(this.FIELD_IDS.email, data.email);
        formData.append(this.FIELD_IDS.scenarioId, data.scenarioId);
        formData.append(this.FIELD_IDS.completionTime, data.completionTime);

        // Submit to Google Forms (using no-cors mode to avoid CORS issues)
        await fetch(this.FORM_ACTION_URL, {
            method: 'POST',
            mode: 'no-cors',
            body: formData
        });

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
