# Repository instructions

## Purpose

This repository contains participant-facing exercise instructions for the AXA Microsoft 365 Copilot Premium workshop. The current learner site is English-only. Thai originals are archived in the private parent workspace; existing Thai routes redirect to English.

## Source and privacy boundaries

- Current user instructions govern the course.
- Microsoft Learn is the technical source of truth for Microsoft product capabilities, licensing, and prerequisites.
- External workshop material is a learning-pattern reference only. Do not copy another client's identity, business details, prompts, filenames, data, screenshots, or branded assets.
- Use only synthetic/public-safe learner data. Never add participant names, tenant URLs, customer data, health data, claims records, credentials, internal links, or unapproved AXA operational information.
- Keep audience analysis and curriculum option papers in the private parent workspace, outside this learner repository.
- Exercise 1's optional personal-work route requires facilitator/client approval and stays private in each learner's account. Never copy real work context into Asteria artifacts, learner submissions, shared screens, or this repository; skip the route when approval or suitability is uncertain.

## Capability scope

Core exercises may use Copilot Chat, Work IQ, OneDrive, Word, Excel, Teams, Outlook, and PowerPoint.

Do not require learner access to Agent Builder, Pre-Built Agents, Copilot Studio, Copilot Cowork or Copilot Notebooks. The approved Agent Builder exception is instructor demonstration only. Standard Copilot editing in Excel and `Asteria_Teams_Meeting_Recap.docx` are core routes. The `.vtt` transcript is a human-verification source, not a required Copilot attachment. Treat Copilot Pages, direct Teams references through Agent Mode in PowerPoint, Python or Advanced analysis through Copilot in Excel, Copilot Search enhancements, and recent Outlook actions as tenant-enhanced until ordinary-learner rehearsal proves them. Every enhanced route must retain the documented core fallback.

## Publication contract

- Publish learner content and interface text in English.
- Preserve exercise URLs and artifact filenames for existing links.
- Session 5 is an instructor-only Custom Agent demonstration in the instructor tenant. Learners do not create agents. Preserve a recorded fallback.
- Session 5 precedes UI orientation. Simple optional prompt tips belong inside each core exercise; no separate consolidation session.

## Exercise contract

New or substantially revised exercises use this order:

1. Exercise Overview
2. License and prerequisites
3. Scenario
4. Practice with one primary target
5. Numbered steps and copy-ready fenced inputs
6. Quick check
7. Expected Output
8. Next exercise

Every Practice ends with one or two short, observable Quick check items aligned with its target. Use spot-checks rather than requiring every claim to be traced, review-status fields or per-slide source notes. Preserve the artifact handoff between exercises. Do not put exercise duration labels inside exercise pages; timing belongs only on the home timetable.

Exercise 2 retains three Excel Practices and two PowerPoint Practices, the second optional. Preserve the simple insights prompt, two-part Plan/refinement conversation, Proceed control and standard-editing fallback. The insights sheet, formulas and claims/SLA chart remain required; a review-status column, cell-by-cell source records and Speaker Notes are not required learner outputs. Compare one important number and the chart with Excel. Complaint formatting uses three red bands with the same boundaries as the existing green backup: 0–10, 11–17 and 18+. Preserve prepared binaries without recolouring the backup for a wording-only change.

Exercise 3 starts each Practice in the same Microsoft 365 Copilot Chat conversation: separate meeting/email recaps, a downloadable `Asteria_Action_Plan.docx`, then an unsent email draft in Chat. The Action Plan uses Action, Owner and Due date, plus a short agreement summary and outstanding questions; proposed actions stay labelled and missing details remain `To confirm`. Manual Word creation is a file-generation fallback only. Do not require a separate KPI evidence section, completed communication checklist, communication DOCX or Outlook/Teams app switch. Exercise 4 uses the Action Plan for decisions/actions and the Exercise 2 dashboard/workbook separately for KPIs. Real Teams/Outlook sources remain a separate, approved optional route.

Exercise 4 starts in PowerPoint for the web and has two Practices: create five slides from the Action Plan with a KPI placeholder, then reference the reviewed Exercise 2 Excel workbook to complete Slide 2 with up to three insights and the required claims/SLA chart. Keep the other four slides unchanged and exactly five slides overall. Treat Excel referencing and single-slide editing as tenant-dependent; retain manual insights, dashboard-chart copying, chart-image and reviewed-workbook backup fallbacks without claiming successful Copilot editing. Keep the supplied recap and manual slide-creation fallbacks. Do not require per-slide source notes, timestamp/range logs, a separate review checklist or direct Teams/Agent Mode branching. Retain two quick checks: workbook-supported KPI figures and readable chart matching Exercise 2, and unchanged action details matching the plan with proposals and missing details visible.

Exercise 1 uses four fixed Word headings: Executive summary, Verified facts, Assumptions and interpretations, and Open questions. Spot-check two facts and the reporting period; do not require corrections or review notes as separate sections. Its selected-paragraph refinement uses the predefined `Auto rewrite` command only, with no typed rewrite prompt. The Japanese addition is a separate Word side-panel request after the rewrite is finished. Preserve optional project discovery and private meeting preparation, the manual file-generation fallback and skip path for unavailable rewrite controls. Prepared backup extra sections may remain without requiring learners to fill them in.

Retain the prepared `Asteria_Grounded_Evidence_Brief.docx` and `Asteria_Service_KPI_Reviewed_backup.xlsx` backups as individual downloads and ZIP members. The pack contains eight original source files, these two backups and `Asteria_Presentation_Template.pptx`: eleven assets plus the ZIP download. Learners must check their sources and retain their prepared origin; do not overwrite completed learner outputs or treat backups as evidence that Chat file generation or Excel Copilot editing succeeded. The KPI backup must preserve source values and formulas, include a formula-linked `Reviewed Insights` sheet and editable claims/SLA chart, and replace only the complaint-count colour scale with the three exercise bands. Validate calculations, source integrity, XLSX reimport, rendering and archive membership after changes.

The optional Exercise 2 style practice appends three slides to a copy named `Asteria_KPI_Dashboard_Template_Comparison.pptx`, yielding exactly six slides. Preserve slides 1–3 and the canonical three-slide dashboard handoff. The supplied PPTX is a design reference; the reviewed workbook remains evidence. Its native chart, source notes, theme, master/layout placeholders and English Avenir Next typography must remain editable and validated. Treat PPTX referencing and style fidelity as tenant-enhanced, not guaranteed. Retain the template-copy/Keep Source Formatting/manual fallback and distinguish it from successful Copilot generation. Do not require Brand Kit setup or an additional core output.

## Validation

Before finishing, run `pnpm run validate`, `pnpm run docs:build`, `git diff --check`, and inspect the rendered site. Verify download links and the ZIP, and keep static/package validation separate from live AXA tenant readiness.
