# Repository instructions

## Purpose

This repository contains participant-facing exercise instructions for the AXA Microsoft 365 Copilot Premium workshop. The site has matching native Thai and English routes.

## Source and privacy boundaries

- Current user instructions govern the course.
- Microsoft Learn is the technical source of truth for Microsoft product capabilities, licensing, and prerequisites.
- The Krungsri workshop is a learning-pattern reference only. Do not copy its client identity, business details, prompts, filenames, data, screenshots, or branded assets.
- Use only synthetic/public-safe learner data. Never add participant names, tenant URLs, customer data, health data, claims records, credentials, internal links, or unapproved AXA operational information.
- Keep audience analysis and curriculum option papers in the private parent workspace, outside this learner repository.

## Capability scope

Core exercises may use Copilot Chat, Work IQ, OneDrive, Word, Excel, Teams, Outlook, and PowerPoint.

Do not add exercises for Agent Builder, Pre-Built Agents, Copilot Studio, Copilot Cowork, or Copilot Notebooks unless the user explicitly changes scope. Treat Copilot Pages, direct Teams references in PowerPoint, Python through Copilot in Excel, Copilot Search enhancements, and recent Outlook actions as capability-gated until tenant rehearsal proves them.

## Bilingual contract

- Keep `/th/` and `/en/` route structures, exercise numbers, artifact names, checkpoints, and navigation equivalent.
- Write Thai natively and let พล guide the learner. Write English natively and let Pon guide the learner.
- Keep official product names, UI labels, filenames, and exact commands in English in both languages.
- Do not publish a literal translation that sounds unnatural in either language.

## Exercise contract

New or substantially revised exercises use this order:

1. Exercise Overview
2. License and prerequisites
3. Scenario
4. Practice with one primary target
5. Numbered steps and copy-ready fenced inputs
6. Checkpoint
7. Expected Output
8. Next exercise

Every Practice ends with evidence that the target is correct. Preserve the artifact handoff between exercises. Do not put exercise duration labels inside exercise pages; timing belongs only on the home timetable.

## Validation

Before finishing, run `pnpm run validate`, `pnpm run docs:build`, `git diff --check`, and inspect the rendered site. Verify download links and the ZIP, and keep static/package validation separate from live AXA tenant readiness.
