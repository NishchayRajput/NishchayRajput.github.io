# Setting Up Google OAuth for Your Portfolio Contact Form

This guide will walk you through the process of setting up Google OAuth to enable the contact form on your portfolio website to send emails through your Gmail account.

## Step 1: Create a Project in Google Cloud Console

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Sign in with your Google account
3. Create a new project or select an existing one
4. Name your project (e.g., "Portfolio Website")
5. Click "CREATE"

## Step 2: Enable the Gmail API

1. In the Google Cloud Console, navigate to "APIs & Services" > "Library"
2. Search for "Gmail API"
3. Click on "Gmail API" in the results
4. Click "ENABLE"

## Step 3: Create OAuth Consent Screen

1. Go to "APIs & Services" > "OAuth consent screen"
2. Select "External" as the user type (unless you have a G Suite account)
3. Fill in the required information:
   - App name: "Portfolio Contact Form"
   - User support email: Your email
   - Developer contact information: Your email
4. Click "SAVE AND CONTINUE"
5. For scopes, add the Gmail API scope:
   - Click "Add or remove scopes"
   - Find and select "https://mail.google.com/"
   - Click "SAVE AND CONTINUE"
6. Add test users:
   - Add your Gmail address
   - Click "SAVE AND CONTINUE"
7. Review your app and click "BACK TO DASHBOARD"

## Step 4: Create OAuth Credentials

1. Go to "APIs & Services" > "Credentials"
2. Click "CREATE CREDENTIALS" > "OAuth client ID"
3. Select "Web application" as the application type
4. Name your OAuth client (e.g., "Portfolio Contact Form")
5. Add authorized JavaScript origins:
   - For development: `http://localhost:3000`
   - For production: `https://yourwebsite.com` (your actual domain)
6. Add authorized redirect URIs:
   - For development: `http://localhost:3000/api/auth/callback/google`
   - For production: `https://yourwebsite.com/api/auth/callback/google`
7. Click "CREATE"
8. Note down your Client ID and Client Secret

## Step 5: Get Your Refresh Token

1. Go to [Google OAuth Playground](https://developers.google.com/oauthplayground/)
2. Click the gear icon (⚙️) in the top right corner
3. Check "Use your own OAuth credentials"
4. Enter your OAuth Client ID and Secret
5. Close the settings panel
6. Select "Gmail API v1" from the list of APIs
7. Select "https://mail.google.com/" scope
8. Click "Authorize APIs"
9. Sign in with your Google account and grant permissions
10. Click "Exchange authorization code for tokens"
11. Note down your Refresh Token

## Step 6: Update Your .env.local File

1. Create a `.env.local` file in your project root (if not already created)
2. Add the following variables with your values:

```
GOOGLE_CLIENT_ID=your_client_id_here
GOOGLE_CLIENT_SECRET=your_client_secret_here
GOOGLE_REFRESH_TOKEN=your_refresh_token_here
EMAIL_FROM=your_email@gmail.com
EMAIL_TO=your_email@gmail.com
```

## Step 7: Deploy Your Application

1. Make sure your `.env.local` file is properly configured
2. Deploy your Next.js application to your hosting provider (Vercel, Netlify, etc.)
3. Set up the environment variables in your hosting provider's dashboard

## Notes

- Your OAuth refresh token doesn't expire unless you explicitly revoke it or change your Google account password
- Make sure to keep your credentials secret
- For production use, you might want to publish your OAuth app to avoid the "Unverified App" warning
- If you're running into CORS issues during development, make sure your local development URL is added to the authorized JavaScript origins in Google Cloud Console
