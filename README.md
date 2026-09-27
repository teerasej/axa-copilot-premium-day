# AXA Microsoft 365 Copilot Premium Workshop

Bilingual Thai and English participant exercises for a one-day, cross-app Microsoft 365 Copilot workshop.

## Learner site

The GitHub Pages site is published from this repository through the manually dispatched `Deploy VitePress site to Pages` workflow.

## Local development

```bash
pnpm install
pnpm run docs:dev
```

## Validation

```bash
pnpm run validate
pnpm run docs:build
```

## Publication boundary

The Pages workflow is manual-dispatch only. A successful site deployment validates the static learner package; live learner readiness still requires a separate AXA tenant rehearsal.
