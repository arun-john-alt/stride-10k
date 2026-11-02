# Stride — Road to 10K

[Open Stride](https://arun-john-alt.github.io/stride-10k/)

A mobile-first eight-week 10K training tracker with all 40 scheduled sessions: running, cross-training, interval recovery, and separate rest-day reminders. Includes run/walk guides, editable dates and completion logs, JSON backup/restore, and CSV exports. Distance-based sessions retain their prescribed targets without invented time estimates.

## Your progress

The two supplied Zepp workout summaries (30 October and 2 November 2026) are preloaded. The original plan's weekday names remain visible even when an actual workout date differs. Duration values use decimal minutes.

Progress uses the existing `tenk-tracker-v1` localStorage key, preserving compatible saved entries on the same origin. It is saved only in the current browser profile and device and **does not sync across devices** or to GitHub. Private browsing, clearing site data, or unavailable browser storage can lose progress. Use **Backup**, then **Settings → Import backup** on another device to transfer it. Exporting CSV provides a readable log; JSON is the restore format. Import replaces matching valid entries after confirmation.

Moving from a local file or another preview URL to GitHub Pages creates a different browser origin. Export from the old app and import into the live site to carry existing progress across.

## Privacy

The public source intentionally includes the two supplied summaries: workout dates, distance, duration, average/maximum heart rate, calories, and pace. No raw TCX, GPS tracks, credentials, or personal backup exports are included. User-entered progress stays in the browser until explicitly exported. The app has no analytics, external fonts, API calls, or account backend. GitHub Pages serves the static app.

Never commit raw activity files, credentials, or personal training exports. `.gitignore` excludes common forms of these files; review every staged file before pushing. The deployment workflow publishes only `index.html`.

## Development and deployment

No build or runtime dependencies. Serve with `python3 -m http.server 8000`, then open `http://localhost:8000`. Run `node tests/smoke.cjs` for JS syntax, plan integrity, interval timing, storage validation, and persistence checks.

The GitHub Actions workflow tests and deploys every push to `main`. Repository Settings → Pages must use **GitHub Actions**. Production: https://arun-john-alt.github.io/stride-10k/.
