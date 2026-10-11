# Proof of Work

[View the live portfolio](https://amandaklafke92.github.io/proof-of-work/)

Source files for my portfolio of selected projects and writing. Astro builds the
homepage; the existing project case studies remain static HTML pages at their
original URLs.

## Editing the portfolio

- `src/pages/index.astro` — edit the homepage structure, copy and project links.
- `src/styles/global.css` — edit the homepage typography, layout and card styles.
- `public/` — homepage media and other files copied directly into the build.
- `personal-os/`, `workout-tracker/`, `flavour-lab/` — each project's `index.html`
  contains its case study; supporting screenshots and demos live alongside it.

Run `npm install` once, then `npm run dev` for local editing or `npm run build`
to produce the deployable site in `dist/`. GitHub Pages deploys that build via
the workflow in `.github/workflows/deploy-pages.yml`.

## Next-edit review checkpoint

Before a guided edit to the public portfolio, raise the [conversation-CTA idea](../career/backlog.md) for Amanda’s review. Its core goal is to start conversations; the recorded CTA copy, arrow, sticky-note and delayed mouse/speech-bubble concepts are hypotheses, not approved changes. Preserve the preference for minimal visual clutter. Do not add a timer, tracking/analytics, a persistent CTA or any related UI unless Amanda selects and explicitly requests an approach. This checkpoint guides future portfolio editing work only; it cannot detect or change manual GitHub edits.

## Public content boundary

Workout Tracker demo data may include workout names, weights, volumes and
related training metrics; these are approved for public use.

Do not publish credentials, private source repositories, live Google Sheet
links, raw project logs, raw research material, meeting notes, unrelated
personal records, third-party private material or other user data unless
Amanda has explicitly approved that specific material for public use.
