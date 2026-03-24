# FarmConnecta Website

Public-facing website for FarmConnecta.

This repository is best suited for:
- landing pages
- ecosystem and role-based messaging
- marketplace previews
- community and partner entry points

The full application experience should live in the separate frontend and backend repositories.

## Local preview

Open `index.html` in a browser to preview the site locally.

## Deployment

This repository includes a GitHub Pages workflow at `.github/workflows/deploy.yml`.

To publish successfully:
- enable GitHub Pages for this repository
- set the source to GitHub Actions
- keep `CNAME` updated with the production domain if needed

## Editing notes

- update WhatsApp and Telegram links in `app.js`
- public website pages live in the repository root as static HTML files
- shared styling lives in `styles.css`
