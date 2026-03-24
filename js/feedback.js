// ========================================
// AURORA LABS - FEEDBACK SYSTEM
// ========================================

const FeedbackSystem = {
    // Google Forms configuration
    FORM_ACTION_URL: 'https://docs.google.com/forms/d/e/1FAIpQLSc8uq1UPZj79K6K8T4X5ecBtUP03cRcrbjp0CwpnH4x89Bu-g/formResponse',

    // Form field entry IDs (verified via pre-filled URL 2025-03-17)
    FIELD_IDS: {
        rating: 'entry.1364191561',        // How would you rate this experience? (1-5 linear scale)
        email: 'entry.1755580600',         // Your email (optional)
        storySuggestions: 'entry.615639945',  // Would you like to play more? Story suggestions?
        improvements: 'entry.1011962974',  // What could be better?
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
            <div class="feedback-section" id="feedback-section" style="margin: 0; padding: 18px 20px; background: #EDE8E0; border-radius: 0; border: none;">
                <div class="feedback-header" style="text-align: left; margin-bottom: 12px;">
                    <div style="font-size: 14px; letter-spacing: 0.15em; color: #C4653A; font-family: system-ui, sans-serif; font-weight: 700; text-transform: uppercase; margin-bottom: 6px;">HELP US IMPROVE</div>
                    <p style="color: #6A6560; font-size: 14px; font-family: 'Georgia', serif; margin: 0;">
                        Your feedback shapes future scenarios
                    </p>
                </div>

                <form id="feedback-form" class="feedback-form" style="display: flex; flex-direction: column; gap: 10px;">
                    <!-- Row 1: Rating and Email side by side -->
                    <div class="feedback-row" style="display: flex; gap: 10px; flex-wrap: wrap;">
                        <div class="feedback-question" style="flex: 1; min-width: 200px;">
                            <label class="feedback-label" style="font-size: 0.75rem; margin-bottom: 5px; display: block;">Rate this experience <span style="color: var(--accent-primary);">*</span></label>
                            <div class="rating-scale" id="rating-scale">
                                ${[1,2,3,4,5].map(n => `
                                    <button type="button" class="rating-scale-btn" data-value="${n}">${n}</button>
                                `).join('')}
                            </div>
                            <input type="hidden" name="rating" id="rating-hidden" required>
                            <div class="rating-scale-label" id="rating-scale-label"></div>
                        </div>

                        <div class="feedback-question" style="flex: 1; min-width: 200px;">
                            <label class="feedback-label" style="font-size: 0.75rem; margin-bottom: 6px; display: block;">Your email (optional)</label>
                            <input
                                type="email"
                                name="email"
                                class="feedback-email-input"
                                placeholder="your@email.com"
                                style="font-size: 0.8rem; padding: 8px;"
                            >
                        </div>
                    </div>

                    <!-- Row 2: Story suggestions and Improvements side by side -->
                    <div class="feedback-row" style="display: flex; gap: 10px; flex-wrap: wrap;">
                        <div class="feedback-question" style="flex: 1; min-width: 200px;">
                            <label class="feedback-label" style="font-size: 0.75rem; margin-bottom: 6px; display: block;">Play more scenarios? Story suggestions?</label>
                            <input
                                type="text"
                                name="storySuggestions"
                                class="feedback-email-input"
                                placeholder="E.g., Netflix vs Blockbuster..."
                                maxlength="500"
                                style="font-size: 0.8rem; padding: 8px;"
                            >
                        </div>

                        <div class="feedback-question" style="flex: 1; min-width: 200px;">
                            <label class="feedback-label" style="font-size: 0.75rem; margin-bottom: 6px; display: block;">What could be better?</label>
                            <input
                                type="text"
                                name="improvements"
                                class="feedback-email-input"
                                placeholder="Your suggestions..."
                                maxlength="500"
                                style="font-size: 0.8rem; padding: 8px;"
                            >
                        </div>
                    </div>

                    <!-- Submit -->
                    <div style="display: flex; justify-content: flex-start; margin-top: 2px;">
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
        if (form) {
            form.addEventListener('submit', (e) => this.handleSubmit(e));
        }

        // Rating scale buttons — store numeric value for Google Forms linear scale
        const ratingLabels = { 1: 'Poor', 2: 'Fair', 3: 'Good', 4: 'Great', 5: 'Excellent' };
        document.querySelectorAll('.rating-scale-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.rating-scale-btn').forEach(b => b.classList.remove('rating-scale-btn--active'));
                btn.classList.add('rating-scale-btn--active');
                const val = btn.dataset.value;
                document.getElementById('rating-hidden').value = val;
                const labelEl = document.getElementById('rating-scale-label');
                if (labelEl) labelEl.textContent = ratingLabels[val];
            });
        });
    },

    // Handle form submission
    async handleSubmit(e) {
        e.preventDefault();

        if (this.submitting) return;

        // Validate rating (only required field)
        const ratingVal = document.getElementById('rating-hidden')?.value;
        if (!ratingVal) {
            alert('Please rate your experience.');
            return;
        }

        this.submitting = true;
        const submitBtn = document.getElementById('feedback-submit-btn');
        const btnText = document.getElementById('submit-btn-text');
        const btnLoading = document.getElementById('submit-btn-loading');

        submitBtn.disabled = true;
        btnText.classList.add('hidden');
        btnLoading.classList.remove('hidden');

        const formData = this.collectFormData(e.target);

        try {
            await this.submitToGoogleForms(formData);
            this.submitted = true;
            this.saveSubmissionState();
            this._showThankYou();
            if (window.Analytics) Analytics.trackFeedbackSubmit(formData.rating);
        } catch (error) {
            console.error('Feedback submission error:', error);
            this.submitted = true;
            this.saveSubmissionState();
            this._showThankYou();
        }

        this.submitting = false;
    },

    _showThankYou() {
        const feedbackSection = document.getElementById('feedback-section');
        if (feedbackSection) {
            feedbackSection.innerHTML = this.renderThankYou().replace(
                /<div class="feedback-section[^>]*>/,
                '<div'
            );
        }
    },

    // Collect form data
    collectFormData(form) {
        const formData = new FormData(form);
        return {
            rating: formData.get('rating'),
            email: formData.get('email'),
            storySuggestions: formData.get('storySuggestions'),
            improvements: formData.get('improvements'),
            scenarioId: scenarioData.id,
            timestamp: new Date().toISOString(),
            completionTime: this.calculateCompletionTime()
        };
    },

    // Submit to Google Forms via hidden iframe (avoids CORS issues entirely)
    submitToGoogleForms(data) {
        return new Promise((resolve) => {
            const iframeName = 'feedback_iframe_' + Date.now();
            const iframe = document.createElement('iframe');
            iframe.name = iframeName;
            iframe.style.display = 'none';
            document.body.appendChild(iframe);

            const form = document.createElement('form');
            form.method = 'POST';
            form.action = this.FORM_ACTION_URL;
            form.target = iframeName;
            form.style.display = 'none';

            // Helper to add a field
            const addField = (name, value) => {
                if (value && value.toString().trim()) {
                    const input = document.createElement('input');
                    input.name = name;
                    input.value = value;
                    form.appendChild(input);
                }
            };

            addField(this.FIELD_IDS.rating, data.rating);
            addField(this.FIELD_IDS.email, data.email);
            addField(this.FIELD_IDS.storySuggestions, data.storySuggestions);
            addField(this.FIELD_IDS.improvements, data.improvements);

            document.body.appendChild(form);

            iframe.addEventListener('load', () => {
                setTimeout(() => { iframe.remove(); form.remove(); }, 500);
                resolve();
            });

            setTimeout(() => {
                if (iframe.parentNode) iframe.remove();
                if (form.parentNode) form.remove();
                resolve();
            }, 5000);

            form.submit();
            this.saveToLocalStorage(data);
        });
    },

    saveToLocalStorage(data) {
        const key = `aurora_feedback_${Date.now()}`;
        localStorage.setItem(key, JSON.stringify(data));
    },

    skipFeedback() {
        const feedbackSection = document.getElementById('feedback-section');
        if (feedbackSection) feedbackSection.style.display = 'none';
    },

    calculateCompletionTime() {
        const startTime = localStorage.getItem('aurora_game_start_time');
        if (startTime) {
            const elapsed = Date.now() - parseInt(startTime);
            return `${Math.floor(elapsed / 60000)} minutes`;
        }
        return 'Unknown';
    },

    saveSubmissionState() {
        localStorage.setItem('aurora_feedback_submitted', 'true');
    },

    loadSubmissionState() {
        this.submitted = localStorage.getItem('aurora_feedback_submitted') === 'true';
    },

    reset() {
        this.submitted = false;
        localStorage.removeItem('aurora_feedback_submitted');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    FeedbackSystem.init();
});
