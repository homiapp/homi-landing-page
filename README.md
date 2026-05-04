# Homi for Enrollment

Landing page for Homi — turning alumni into an enrollment yield lever.

## Deploy

This is a static site. No build step.

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo
3. Click **Deploy** — Vercel auto-detects the static config from `vercel.json`
4. Optional: add your custom domain (e.g. `homi.io`) under **Project → Settings → Domains**

## Local preview

```bash
npx serve .
```

Or just open `index.html` in a browser.

## Files

- `index.html` — the landing page (served at `/`)
- `vercel.json` — clean URLs config
