# Feedback System Setup Guide

This guide will help you set up Google Forms to collect user feedback and email addresses from the Aurora Labs prototype.

## Overview

The feedback system collects:
- User rating of the experience
- What users enjoyed most
- Improvement suggestions
- Whether they'd play another scenario
- Email addresses for updates
- Metadata (scenario ID, completion time, timestamp)

---

## Step 1: Create Google Form

### 1.1 Create New Form

1. Go to [Google Forms](https://forms.google.com)
2. Click **"+ Blank"** to create a new form
3. Title: **"Aurora Labs - User Feedback"**
4. Description: **"Help us improve Aurora Labs by sharing your experience."**

### 1.2 Add Questions

Add these questions **in this exact order**:

#### Question 1: Overall Rating
- **Type**: Multiple choice
- **Question**: "How would you rate this experience?"
- **Options**:
  - Excellent
  - Good
  - Fair
  - Poor
- **Required**: Yes

#### Question 2: What They Enjoyed
- **Type**: Checkboxes
- **Question**: "What did you enjoy most? (select all that apply)"
- **Options**:
  - Decision-making process
  - Historical context
  - Information sources
  - Outcome comparison
  - Artifact collection
- **Required**: No

#### Question 3: Improvements
- **Type**: Paragraph
- **Question**: "What could be better?"
- **Required**: No

#### Question 4: Play Another Scenario
- **Type**: Multiple choice
- **Question**: "Would you play another scenario?"
- **Options**:
  - Definitely
  - Probably
  - Maybe
  - No
- **Required**: Yes

#### Question 5: Email Address
- **Type**: Short answer
- **Question**: "Your email (optional - to receive updates about new scenarios)"
- **Validation**: Response validation → Text → Email
- **Required**: No

#### Question 6: Scenario ID (Hidden)
- **Type**: Short answer
- **Question**: "Scenario ID"
- **Required**: No

#### Question 7: Completion Time (Hidden)
- **Type**: Short answer
- **Question**: "Completion Time"
- **Required**: No

---

## Step 2: Get Form URL and Entry IDs

### 2.1 Get Form Action URL

1. In your Google Form, click **"Send"** (top right)
2. Click the **"<>"** (Link/Embed) icon
3. Copy the form URL (it will look like: `https://forms.google.com/forms/d/e/FORM_ID/viewform`)
4. Change `/viewform` to `/formResponse` at the end
5. This is your **FORM_ACTION_URL**

Example:
```
Before: https://forms.google.com/forms/d/e/1FAIpQLSdXXXXXXXXXX/viewform
After:  https://forms.google.com/forms/d/e/1FAIpQLSdXXXXXXXXXX/formResponse
```

### 2.2 Get Entry IDs

1. Open your Google Form in edit mode
2. Click **"Preview"** (eye icon)
3. Right-click on the page and select **"View Page Source"** or **"Inspect"**
4. Search for `entry.` (Ctrl+F or Cmd+F)
5. Find the entry IDs for each question:
   - Question 1 (Rating): `entry.XXXXXXXXX`
   - Question 2 (Enjoyed): `entry.XXXXXXXXX`
   - Question 3 (Improvements): `entry.XXXXXXXXX`
   - Question 4 (Play Again): `entry.XXXXXXXXX`
   - Question 5 (Email): `entry.XXXXXXXXX`
   - Question 6 (Scenario ID): `entry.XXXXXXXXX`
   - Question 7 (Completion Time): `entry.XXXXXXXXX`

**Tip**: They usually look like `entry.123456789`

---

## Step 3: Update JavaScript Configuration

1. Open `js/feedback.js` in your code editor
2. Find the configuration section at the top:

```javascript
// Google Forms configuration
FORM_ACTION_URL: 'YOUR_GOOGLE_FORM_URL_HERE',

// Form field IDs
FIELD_IDS: {
    rating: 'entry.123456789',
    enjoyed: 'entry.987654321',
    improvements: 'entry.111111111',
    playAgain: 'entry.222222222',
    email: 'entry.333333333',
    scenarioId: 'entry.444444444',
    completionTime: 'entry.555555555'
},
```

3. Replace:
   - `YOUR_GOOGLE_FORM_URL_HERE` with your form action URL from Step 2.1
   - Each `entry.XXXXXXXXX` with the actual entry IDs from Step 2.2

---

## Step 4: Configure Response Collection

### 4.1 Link to Google Sheets

1. In your Google Form, click the **"Responses"** tab
2. Click the **Google Sheets icon** (green)
3. Create a new spreadsheet or select an existing one
4. Name it: **"Aurora Labs Feedback Responses"**

### 4.2 Set Up Email Notifications (Optional)

1. In the linked Google Sheet, go to **Tools → Notification rules**
2. Select:
   - **Notify me when**: "Any changes are made"
   - **Notify me with**: Email - right away
3. Click **Save**

This will email you immediately when someone submits feedback.

---

## Step 5: Test the Integration

### 5.1 Local Testing

1. Open your prototype locally:
   ```bash
   cd aurora-labs-prototype
   python3 -m http.server 8000
   ```

2. Play through to the completion screen
3. Fill out the feedback form
4. Click "Submit Feedback"

### 5.2 Verify Submission

1. Check your Google Sheet for the new response
2. Verify all fields are populated correctly
3. Check the email notification (if enabled)

### 5.3 Test Thank You Screen

After submission:
- Form should be replaced with thank you message
- Submission should be saved to localStorage
- Page refresh should still show thank you (not form again)

### 5.4 Reset for Testing

To test multiple submissions:
1. Open browser console (F12)
2. Type: `FeedbackSystem.reset()`
3. Refresh the page

---

## Step 6: Deploy

1. Commit your changes:
   ```bash
   git add js/feedback.js index.html
   git commit -m "Add user feedback system with Google Forms integration"
   git push origin main
   ```

2. Your site will auto-deploy to GitHub Pages
3. Test on the live site

---

## Viewing Feedback Data

### Access Responses

1. **Google Form**: Click "Responses" tab to see individual submissions
2. **Google Sheet**: View all responses in spreadsheet format
3. **Download**: File → Download → CSV or Excel

### Analysis

Google Sheets automatically provides:
- Summary charts
- Response trends over time
- Individual response details

---

## Privacy & Data Handling

### GDPR Compliance

If you have European users, add this text to your form:

> "By submitting this form, you consent to us storing your feedback. Your email will only be used to notify you about new scenarios. You can request data deletion at any time by emailing [your-email]."

### Email List Management

For email marketing:
1. Export emails from Google Sheet
2. Import to your email service (Mailchimp, ConvertKit, etc.)
3. Send welcome email to new subscribers

---

## Troubleshooting

### Form Not Submitting

**Issue**: Form submits but data doesn't appear in Google Sheet

**Solution**:
- Verify FORM_ACTION_URL ends with `/formResponse`
- Check entry IDs match exactly (case-sensitive)
- Test by filling out Google Form directly

### CORS Errors in Console

**Issue**: Browser console shows CORS errors

**Solution**:
- This is expected when using `mode: 'no-cors'`
- Submission still works despite the error
- Data will appear in Google Sheet

### Submission State Not Persisting

**Issue**: Thank you message doesn't persist on refresh

**Solution**:
- Check browser localStorage is enabled
- Clear localStorage and test again
- Check console for errors

### Entry IDs Not Found

**Issue**: Can't find entry IDs in page source

**Solution**:
1. Open form in preview mode
2. Inspect element on any input field
3. Look for `name="entry.XXXXXXXXX"` attribute
4. Use that exact entry ID

---

## Alternative: Test Without Google Forms

For testing without setting up Google Forms:

1. Leave `FORM_ACTION_URL` as `'YOUR_GOOGLE_FORM_URL_HERE'`
2. Feedback will be saved to localStorage instead
3. View submissions in browser console:
   ```javascript
   // See all localStorage keys
   Object.keys(localStorage).filter(k => k.startsWith('aurora_feedback_'))

   // View specific submission
   localStorage.getItem('aurora_feedback_1234567890')
   ```

---

## Advanced: Custom Backend

If you prefer a custom backend instead of Google Forms:

1. Replace the `submitToGoogleForms()` function in `js/feedback.js`
2. Send data to your API endpoint:
   ```javascript
   await fetch('https://your-api.com/feedback', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(data)
   });
   ```

3. Store in your database (Firebase, Supabase, PostgreSQL, etc.)

---

## FAQ

**Q: Is this free?**
A: Yes, Google Forms is completely free with no submission limits.

**Q: Can I customize the questions?**
A: Yes, but you'll need to update both the Google Form and the `feedback.js` render function.

**Q: How do I export email addresses?**
A: In Google Sheets: File → Download → CSV, then filter the email column.

**Q: Can I use this in production?**
A: Yes, this is a production-ready solution used by many applications.

**Q: What if I want real-time notifications?**
A: Use Google Sheets notification rules or integrate with Zapier/Make for webhooks.

---

## Support

If you encounter issues:
1. Check browser console for errors
2. Verify Google Form is set to "Accept responses"
3. Test by submitting directly to Google Form
4. Ensure all entry IDs match exactly

---

**Setup Time**: ~15 minutes
**Cost**: Free
**Monthly Limit**: Unlimited submissions
**Data Retention**: Forever (in your Google Drive)

**Last Updated**: January 2026
