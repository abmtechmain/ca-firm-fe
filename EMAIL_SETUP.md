# Email Setup Guide

This project uses SMTP to send emails from contact forms. Follow these steps to configure email sending:

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# SMTP Server Settings
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password

# Recipient Email (where form submissions will be sent)
RECIPIENT_EMAIL=riteshmahale15@gmail.com

# reCAPTCHA (optional)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your-recaptcha-site-key
```

## Gmail Setup

If using Gmail, you need to create an App Password:

1. Go to your Google Account settings
2. Navigate to **Security** > **2-Step Verification**
3. Scroll down to **App passwords**
4. Create a new app password for "Mail"
5. Use this app password (not your regular Gmail password) in `SMTP_PASSWORD`

## Other Email Providers

### Outlook/Hotmail
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
```

### Yahoo
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
```

### Custom SMTP Server
```env
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587  # or 465 for SSL
```

## Testing

After setting up the environment variables:

1. Restart your development server
2. Fill out any contact form on the website
3. Check the recipient email inbox for the submission

## Troubleshooting

- **"Email service configuration error"**: Check that all SMTP variables are set in `.env.local`
- **"Authentication failed"**: Verify your SMTP credentials are correct
- **"Connection timeout"**: Check your SMTP host and port settings
- **Gmail issues**: Make sure you're using an App Password, not your regular password
