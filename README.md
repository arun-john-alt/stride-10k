# Stride — clean 10K training template

[Use Stride](https://arun-john-alt.github.io/stride-10k/)

A reusable, mobile-friendly eight-week training plan with **40 unlogged sessions**. New browsers start with zero completed sessions, distance and recorded time. There are no preloaded personal workouts or summary metrics.

## Start your own plan

1. Open **Settings → Schedule**.
2. Choose your first session date. Any start day works; rest days follow your chosen date.
3. Update planned dates, then log each workout on your own device.

The plan includes running, cross-training, interval recovery and rest-day reminders. Today shows the next planned workout; Programme lists each week's sessions by recorded date; Activity shows completed workouts. You can edit dates, status, distance, duration and notes. Duration values use decimal minutes. Full workout instructions remain available under View guide. Changing the start date reschedules planned sessions only; recorded completed or skipped entries stay unchanged.

## Local data and backups

Each browser profile and device keeps its own progress in localStorage. Logs are **not uploaded to GitHub or synced between devices**. There is no account, analytics, cloud database or external font request. Other people using this website cannot see your local logs through the app.

Use **Backup**, or **Settings → Export JSON**, to download your own JSON backup. Use **Settings → Import JSON** to restore a Stride JSON backup on another browser or device. Settings → Reset progress clears this browser’s log after confirmation. CSV export provides a readable log; JSON is the restore format. The importer accepts Stride backup JSON, not arbitrary TCX or fitness-app files. Backups include your personal notes and metrics: keep them private.

Clearing site data or using private browsing can remove progress. Moving from the hosted app to a local copy creates a different storage location: export and import a backup to transfer your progress. Existing compatible saved progress on this same origin is preserved when the template updates.

## Run your own copy

Unzip the template, serve its folder with `python3 -m http.server 8000`, and open `http://localhost:8000`. Use the same address and port on later visits to keep the same browser storage. You can open `index.html` directly, but persistence for `file:` URLs varies between browsers; serving it locally is more reliable.

You can also host the static file on GitHub Pages or another static host. No build or installation is needed. The included GitHub Actions workflow tests and publishes only `index.html` from `main`; enable GitHub Actions under repository Settings → Pages.

## Development

Run `node tests/smoke.cjs` for JavaScript syntax, blank defaults, plan integrity, guides, date validation, chronology and saved-progress compatibility.

Designed with [Impeccable](https://github.com/pbakaus/impeccable). The cobalt Race programme design uses embedded Albert Sans; its license is included in the HTML and THIRD_PARTY_LICENSES.txt. DESIGN.md records the visual system.

Never commit personal backups, credentials, or raw activity files. `.gitignore` excludes common forms of these files. The template distribution contains no browser storage or personal exports.

Cleanup guidance: [Unslop](https://github.com/heydamir/unslop) by Damir Sokolovsky (@heydamir), licensed CC BY 4.0.

The custom running logo is included in the header and embedded SVG favicon. Hosted files also include `favicon.ico` and `apple-touch-icon.png`.
