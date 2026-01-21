# Google Form Settings Checklist

## ✅ Required Settings for Public Form

Your form needs these settings to accept anonymous submissions from your website:

### **1. Form Must Accept Responses**

1. Open your form: https://forms.google.com
2. Find "Feedback - The Mobile Wars"
3. Click to edit
4. Look at the top of the form
5. There should be a toggle/switch that says **"Accepting responses"**
6. Make sure it's **ON** (usually green)

### **2. Form Must Be Public (No Sign-in Required)**

1. In your form editor, click ⚙️ **Settings** (gear icon)
2. Under **"General"** section:
   - **UNCHECK** "Limit to 1 response"
   - **UNCHECK** "Collect email addresses"
   - **UNCHECK** "Restrict to users in [your domain]"

3. Under **"Responses"** section:
   - You can leave "Collect email addresses" unchecked since we have an optional email field

### **3. Verify Public Access**

Test in incognito/private window:
```
https://docs.google.com/forms/d/e/1FAIpQLSc8uq1UPZj79K6K8T4X5ecBtUP03cRcrbjp0CwpnH4x89Bu-g/viewform
```

You should be able to:
- ✅ See the form without signing in
- ✅ Fill it out
- ✅ Submit it

---

## 📊 Viewing Responses

### **Important: Viewing responses DOES require sign-in**

**This is normal!** Here's why:

| Action | Requires Sign-in? | Why |
|--------|------------------|-----|
| **Submit to form** | ❌ No | Form is public |
| **View responses** | ✅ Yes | Only owner can see data |

### **How to View Your Responses**

**Method 1: Google Forms Homepage**
1. Go to [forms.google.com](https://forms.google.com)
2. Sign in with your account
3. Click "Feedback - The Mobile Wars"
4. Click "Responses" tab

**Method 2: Direct URL** (Only works if signed in)
1. First, go to [forms.google.com](https://forms.google.com) and sign in
2. Then navigate to:
   ```
   https://docs.google.com/forms/d/1FAIpQLSc8uq1UPZj79K6K8T4X5ecBtUP03cRcrbjp0CwpnH4x89Bu-g/edit
   ```
3. Click "Responses" tab

---

## 🧪 Test Submission

### Using Our Test Page

1. Open `test-feedback.html` in your browser
2. Click "Send Test Submission"
3. Wait 5 seconds
4. Go to [forms.google.com](https://forms.google.com) and sign in
5. Open your form
6. Click "Responses"
7. Look for the test entry

### Using the Form Directly

1. Open form in incognito:
   ```
   https://docs.google.com/forms/d/e/1FAIpQLSc8uq1UPZj79K6K8T4X5ecBtUP03cRcrbjp0CwpnH4x89Bu-g/viewform
   ```
2. Fill out with test data
3. Submit
4. Sign into [forms.google.com](https://forms.google.com)
5. Check responses

---

## 🔍 Troubleshooting

### **Problem: Can't see form in incognito mode**

**Solution:**
1. Go to form settings (⚙️ icon)
2. Uncheck "Restrict to [your domain]"
3. Save
4. Try incognito again

### **Problem: See form but can't submit**

**Solution:**
1. Check "Accepting responses" toggle is ON
2. Check form has no restrictions
3. Try clearing browser cache

### **Problem: Can't see responses after sign-in**

**Solution:**
1. Make sure you're signed into the CORRECT Google account
2. The account that created the form
3. Try signing out and back in
4. Check if you have multiple Google accounts

### **Problem: Responses link gives 404 error**

**Solution:**
This is normal if you're not signed in. You MUST:
1. First go to forms.google.com
2. Sign in
3. Then navigate to your form
4. Click Responses

---

## ✅ Verification Checklist

- [ ] Form is set to "Accepting responses"
- [ ] Form does NOT require sign-in
- [ ] Form does NOT restrict to specific domain
- [ ] Can open form in incognito/private window
- [ ] Can submit test response in incognito
- [ ] Can see responses after signing into forms.google.com
- [ ] Test submission from website works
- [ ] Responses appear in Google Forms within 30 seconds

---

## 📧 Email Notifications Setup

Once you confirm responses are working:

1. Link form to Google Sheets (green icon in Responses tab)
2. In the Sheet: Tools → Notification rules
3. "Notify me when: Any changes are made"
4. "Email - right away"
5. Save

Now you'll get instant emails for new feedback!

---

## 🎯 Summary

**No authentication is needed in the code** because:
- Form submissions are public (anyone can submit)
- Only viewing responses requires sign-in (only owner can view)
- This is exactly how Google Forms is designed to work

**The error you saw** is because:
- You tried to access the responses view
- That requires being signed into the form owner's Google account
- The direct link won't work unless you're signed in first

**Solution:**
1. Go to forms.google.com and sign in
2. Navigate to your form from there
3. Click Responses tab
4. You'll see all submissions!
