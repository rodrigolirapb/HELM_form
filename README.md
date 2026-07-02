# HELM — Design Partner Landing Page

Static site, ready to publish on GitHub Pages.

## Publish it
1. Create a new GitHub repo (public).
2. Upload everything in this folder to the repo root (or push via git).
3. In the repo: Settings → Pages → Deploy from branch → select `main` / root.
4. GitHub gives you a URL like `https://<username>.github.io/<repo>/` within a minute or two.

## What's inside
- `index.html` — the page.
- `styles.css`, `base.css`, `tokens/` — HELM design tokens (colors, type, spacing).
- `ds-bundle.js` — compiled HELM design-system components (Button, Input, Badge, Avatar) used on the page.
- `assets/` — HELM logo mark + wordmark.

React/ReactDOM/Babel load from a public CDN (unpkg) — no build step needed, no npm install. Just static files.

## Note on the form
The "Apply" form is a working front-end prototype (validates fields, shows a confirmation state) but does not yet send data anywhere. To actually collect applications, wire the submit handler in `index.html` to Airtable, a form backend (Formspree/Basin), or similar.
