# Exercise 2 Transparent KPI analysis to decision brief

## Exercise Overview

The grounded brief identifies service pressure, but leaders need verified numbers before deciding what to do. You will use standard Copilot in Excel to create a reviewable analysis, inspect what changed, and carry only confirmed evidence into a Word decision brief. Advanced analysis with Python is optional, not required.

> **License:** Microsoft 365 Copilot Premium is required. Copilot in Excel and Word must be available for the learner account.

## Prerequisites

- `Asteria_Service_KPI_28days.xlsx` in OneDrive
- `Asteria_Operational_Context.docx` in OneDrive
- `Asteria_Grounded_Evidence_Brief.docx` from Exercise 1
- A fresh copy of `Asteria_Decision_Brief_Starter.docx`

## Scenario 1 Build a transparent analysis

Asteria’s leadership team wants to know whether the service pressure is a one-day exception or a pattern that needs action. A convincing chart is not enough: the calculations and source rows must remain visible.

### Practice 1 Analyze with Copilot in Excel

**Primary target:** Use standard Copilot editing to create `Reviewed Insights`, formulas, an anomaly table, and a decision-relevant chart.

#### Steps

1. Open `Asteria_Service_KPI_28days.xlsx` in Excel for the web.
2. Use `Save As` or `Save a Copy` and save the working copy as:

   ```text
   Asteria_Service_KPI_Reviewed.xlsx
   ```

3. Confirm that `Formulas > Calculation Options` is set to `Automatic` when that control is available.
4. Open Copilot in Excel and paste this prompt.

   ```text
   Goal: Create a transparent analysis of the most important service anomalies in this 28-day workbook.

   Context: Asteria leaders are reviewing claims turnaround, complaints, and digital conversion. We need evidence that another reviewer can inspect.

   Source: Use only the KPI_Data table and metric definitions in this workbook.

   Expected output:
   - Create a worksheet named Reviewed Insights.
   - Add formulas that identify dates where Claim TAT Hours exceeds its SLA.
   - Add an anomaly table for the sustained complaint increase and digital conversion decrease.
   - Include date, metric, observed value, comparison or threshold, formula or source rows, and review status.
   - Create one chart that makes the timing of the most decision-relevant pattern clear.
   - Use normal Excel formulas that remain visible and editable.

   Do not state a cause unless the workbook contains evidence for it.
   ```

5. Review Copilot’s proposed edits before accepting them.
6. If Copilot completes only part of the request, continue with these smaller prompts one at a time:

   ```text
   Create the Reviewed Insights worksheet and anomaly table first. Include the required source rows and visible formulas. Do not create a chart yet.
   ```

   ```text
   Now create one line chart from the verified Claim TAT values and dates in Reviewed Insights. Use a clear title and readable axes.
   ```

7. If the chart mixes incompatible scales, ask Copilot to separate the metrics or keep the one trend most useful for the decision.

#### Checkpoint

- `Reviewed Insights` contains visible formulas or source references behind every finding.
- The anomaly table includes dates, values, comparisons, and an empty `Review status` field.
- The chart has a meaningful title, readable axes, and a source range you can identify.
- No finding invents a cause.

### Practice 2 Inspect and challenge Copilot’s work

**Primary target:** Attribute supported edits and independently verify the analysis before it is reused.

#### Steps

1. Ask Copilot:

   ```text
   List the changes you made to this workbook. For each change, name the worksheet, cells or range, formula or chart source, and purpose. Do not make new changes.
   ```

2. Open `Review > Show Changes`. Compare the available Copilot-attributed cell edits with Copilot’s list. If `Show Changes` is unavailable in your client, continue with the manual checks and use the note in Step 3.
3. If an edit is absent from history, record this exact note beside the finding:

   ```text
   Not shown in change history
   ```

   Absence is not proof that the work is correct. Verify it against the workbook.
4. In `KPI_Data`, filter `Claim SLA Status` to `Above SLA`, sort `Complaint Count` from largest to smallest, and sort `Digital Conversion Rate` from smallest to largest.
5. Inspect representative formulas, the chart source range, dates, thresholds, and percentages.

   <details>
   <summary>Open after you have checked the source rows</summary>

   Your checked evidence should show:

   - Claim TAT above the 48-hour SLA on 14–17 September: 50, 55, 58, and 52 hours.
   - Complaint Count rising from 13 to 24 on 14–21 September, with the three highest values on 19–21 September: 18, 22, and 24.
   - Digital Conversion Rate at approximately 11.3%, 10.5%, 9.8%, and 9.5% on 22–25 September.

   If your result differs, check the dates, source rows, formulas, and percentage formatting before continuing.

   </details>
6. Mark every finding in `Reviewed Insights` with one exact value:

   ```text
   Verified
   Corrected
   Needs more evidence
   ```

7. Correct any mismatched period, threshold, formula, chart range, or percentage.
8. If the facilitator confirms `Advanced analysis` or Python is available, use it as a second opinion and compare its result with the standard analysis. Otherwise, use this standard-Copilot fallback:

   ```text
   Using normal Excel formulas only, add a rolling comparison or multi-metric anomaly table to Reviewed Insights. Show every formula and source range. Do not use Python and do not infer a cause.
   ```

#### Checkpoint

- Every finding has a review status.
- At least one finding has been checked directly against source rows and a visible formula.
- Chart sources, dates, thresholds, and percentages have been inspected manually.
- Any missing history entry is labelled `Not shown in change history` and verified another way.
- An optional advanced result is treated as a comparison, not as the source of truth.

## Scenario 2 Transfer verified evidence to Word

### Practice 3 Draft the decision brief

**Primary target:** Create a one-page decision brief using only findings marked `Verified` or `Corrected`.

#### Steps

1. Open `Asteria_Decision_Brief_Starter.docx` in Word and immediately use `Save a Copy` to create:

   ```text
   Asteria_Leadership_Decision_Brief.docx
   ```

   Continue only in this working copy so the starter remains unchanged.
2. Open Copilot and reference:
   - `Asteria_Service_KPI_Reviewed.xlsx`
   - `Asteria_Operational_Context.docx`
   - `Asteria_Grounded_Evidence_Brief.docx`
3. Paste this prompt.

   ```text
   Goal: Complete this one-page Asteria leadership decision brief.

   Context: Leaders need a decision-ready summary, but every number and claim must remain reviewable.

   Sources: Use only the three referenced Asteria files. Use only findings marked Verified or Corrected in Reviewed Insights. Exclude findings marked Needs more evidence.

   Expected output:
   - Executive summary with no more than five bullets
   - Verified evidence with date, value, comparison, and source
   - Business implications clearly labelled as interpretations
   - Decision needed
   - Actions with owner, due date, and dependency; write To confirm when a source does not provide one
   - Risks and open questions

   Do not invent a root cause, target, owner, due date, or financial impact.
   ```

4. Keep the starter headings and replace its instructional placeholders.
5. Compare every number in Word with `Reviewed Insights` and reject any finding without an allowed status.
6. Save the latest version of `Asteria_Leadership_Decision_Brief.docx`.

#### Checkpoint

- Every number traces to a `Verified` or `Corrected` workbook finding.
- Interpretations are not presented as verified facts.
- Missing owners or dates say `To confirm`.
- The brief states one clear decision.

## Expected Output

- `Asteria_Service_KPI_Reviewed.xlsx` with visible analysis, change review, and verification status
- `Asteria_Leadership_Decision_Brief.docx` containing only verified or corrected findings

<div class="voice-card"><strong>Pon:</strong> Think of change history as a delivery receipt, not a quality certificate. It may show that a change arrived; you still inspect the formula, source range, and meaning before you sign for it.</div>

[← Exercise 1](./01-ground-the-brief) · [Exercise 3 Communication to follow-up →](./03-meeting-to-follow-up)
