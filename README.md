# AXA Microsoft 365 Copilot Premium Workshop

English participant exercises for a one-day, cross-app Microsoft 365 Copilot workshop. Legacy Thai URLs redirect to English; Thai originals are retained in the private planning workspace.

## Learner site

The GitHub Pages site is published from this repository through the manually dispatched `Deploy VitePress site to Pages` workflow.

## Local development

```bash
pnpm install
pnpm run docs:dev
```

## Validation

All four core exercises use one or two short Quick check items per Practice. Learners spot-check key facts, a number/chart or action details before saving or reusing an output. Review-status columns, per-slide source notes and separate review paperwork are not required. Exercise 1 uses four Word headings and keeps its Auto rewrite and Japanese addition as separate steps; Exercise 2 preserves Plan/refinement/Proceed, charting, complaint colours and the optional template comparison.

Exercise 3 uses one Copilot Chat conversation to recap the prepared meeting/email files, request a downloadable Word Action Plan and draft an unsent email. Manual Word creation is only the file-generation fallback. Exercise 4 reads actions from that Word file and takes KPI content separately from the Exercise 2 dashboard/workbook. The communication checklist is an optional reference, not a required learner output.

The practice ZIP contains eleven files: eight source files, the prepared `Asteria_Grounded_Evidence_Brief.docx` and `Asteria_Service_KPI_Reviewed_backup.xlsx` backups, and `Asteria_Presentation_Template.pptx`. All are available individually. Keep backups and the optional template separate until needed and retain their prepared origin. Spot-check the brief's two facts/reporting period or the workbook's one number/chart before reuse; extra review fields can remain unused. The existing KPI backup uses green complaint bands with the same boundaries as the revised red exercise bands. The presentation template provides three editable examples, a native 28-day claims/SLA chart and reusable theme/master/layouts. Its existing source notes remain available without becoming required learner work. The optional six-slide comparison preserves the original three-slide dashboard handoff; PPTX referencing and style fidelity require tenant rehearsal.

```bash
pnpm run validate
pnpm run docs:build
```

## Publication boundary

The Pages workflow is manual-dispatch only. A successful site deployment validates the static learner package; live learner readiness still requires a separate AXA tenant rehearsal.
