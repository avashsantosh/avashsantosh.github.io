# Deploying your portfolio site to GitHub Pages (~10 minutes)

Your site will live at **https://avashsantosh.github.io** — the URL that goes on your resume.

## One-time setup

1. **Sign in to GitHub** at github.com (account: `avashsantosh`).
2. **Create the repository**: click **+ → New repository**, name it exactly `avashsantosh.github.io`, set it to **Public**, and click Create. (This special repo name is what makes GitHub serve it as your personal site.)
3. **Add your headshot first**: save your photo as `avash.jpg` inside the `assets` folder (square crop works best — the site renders it in a circle). Until it's there, the site shows an elegant "AP" monogram instead.
4. **Upload the site**: on the new repo page click **uploading an existing file**, then drag in the *contents* of this `website` folder — `index.html` plus the `assets`, `dashboard` and `models` folders (drag the folders themselves; GitHub preserves the structure). Commit with a message like "Portfolio site v1".
4. **Wait ~2 minutes**, then open **https://avashsantosh.github.io** — done. (If it 404s, check Settings → Pages shows "Your site is live", source = `main` branch, `/` root.)

## Updating the site later

- **New market data**: run `refresh_market_data.py` in the Finance AI Portfolio folder, then re-upload `dashboard/market_data.js` (repo → the file → pencil icon or re-drag). The dashboard's "as of" stamp updates for every visitor.
- **Updated models or dashboard**: re-copy the files into this folder's `dashboard`/`models` subfolders and re-upload the changed files.
- **Editing text** (deals, headline, links): edit `index.html` — it's plain HTML — or ask Claude.

## Notes

- The dashboard's ⟳ refresh button will show its fallback message on the live site too (browsers block cross-origin market feeds everywhere) — the `market_data.js` feed you upload is what visitors see, so refresh + re-upload is the update path.
- The model downloads are real files — recruiters can open them in Excel. That's a feature.
- Optional custom domain (e.g. avashpardhootman.com): buy the domain, add it under Settings → Pages → Custom domain, and set the DNS CNAME per GitHub's prompt.
