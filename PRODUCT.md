# Stride

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Anyone can start an eight-week 10K plan and record their own sessions locally. Mobile usability is required.

## Product Purpose

Show and log the next workout quickly. Preserve access to workout guides, the full plan, and completed progress.

## Operating Context

Public static GitHub Pages app at https://arun-john-alt.github.io/stride-10k/. Used in a browser; no account or backend. The plan comes from the supplied workbook and app archive.

## Capabilities and Constraints

40 scheduled running and cross-training sessions over eight weeks, recovery reminders, run/walk guides, editable dates, status, distance, duration, notes, JSON backup/restore, and CSV export. Start with all 40 sessions pending and no preloaded personal workout data. Let users choose their own first session date. Preserve the tenk-tracker-v1 localStorage key and existing saved progress. Storage is per browser and origin, with no cross-device synchronization. No raw TCX, credentials, or sensitive backups may be published. Retain static HTML/CSS/JS and GitHub Pages deployment.

## Brand Commitments

Name: Stride. The user requested a redesign using the Impeccable GitHub repository skill. No palette or typography was specified.

## Evidence on Hand

index.html holds the 40-session plan with blank log defaults; README.md documents privacy and backup behavior; tests/smoke.cjs verifies plan integrity and storage. No testimonial, commercial claim, or coaching outcome is provided.

## Product Principles

- Put the next workout and its logging action first.
- Preserve plan content and trustworthy progress.
- Keep data ownership and backup behavior clear.
- Make the app usable on a phone and with a keyboard.
