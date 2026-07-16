# Developer Tools

A fast, private, browser-based developer tools website inspired by modern utility tool hubs.

## Features

- 50+ browser-side tools across formatters, generators, converters, validators, text, design, utilities and fun tools
- Responsive header, mobile menu, search dialog and dark/light theme
- No framework or install step required
- Local preview server included

## Run Locally

```bash
node server.js
```

Then open `http://127.0.0.1:5177`.

## Contact Form Backend

The contact form posts to `/api/contact` on the included Node backend. Set these environment variables before running the server in production:

```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=rushilardeshna@gmail.com
SMTP_PASS=your_gmail_app_password
SMTP_FROM=rushilardeshna@gmail.com
PORT=5177
```

For Gmail, use a Google App Password, not your normal Gmail password.
