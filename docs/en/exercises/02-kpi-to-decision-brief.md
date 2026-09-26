# Exercise 2 From KPI anomaly to decision brief

## Exercise Overview

The grounded brief identifies service pressure, but leaders need verified numbers before deciding what to do. You will use Copilot in Excel to locate anomalies, inspect the changes, and carry only confirmed evidence into a Word decision brief.

> **License:** Microsoft 365 Copilot Premium is required. Copilot in Excel and Word must be available for the learner account.

## Prerequisites

- `Asteria_Service_KPI_28days.xlsx` in OneDrive
- `Asteria_Operational_Context.docx` in OneDrive
- `Asteria_Grounded_Evidence_Brief.docx` from Exercise 1
- A fresh copy of `Asteria_Decision_Brief_Starter.docx`

## Scenario 1 Find and verify the signal

Asteria’s leadership team wants to know whether the service pressure is a one-day exception or a pattern that needs action.

### Practice 1 Ask Excel to identify anomalies

**Primary target:** Use Copilot in Excel to create an anomaly table and trend chart from the supplied KPI data.

#### Steps

1. Open `Asteria_Service_KPI_28days.xlsx` in Excel for the web.
2. Use `Save As` or `Save a Copy` to keep the original unchanged. Save your working copy as:

   ```text
   Asteria_Service_KPI_Reviewed.xlsx
   ```

3. Open Copilot in Excel.
4. Paste this prompt.

   ```text
   Goal: Identify the most important service anomalies in this 28-day workbook.

   Context: Asteria leaders are reviewing claims turnaround, complaints, and digital conversion. We need evidence, not guesses.

   Source: Use only the KPI_Data table and the metric definitions in this workbook.

   Expected output:
   - Identify dates where Claim TAT Hours exceeds its SLA.
   - Identify a sustained increase in Complaint Count.
   - Identify a sustained decrease in Digital Conversion Rate.
   - Show the calculation or source rows behind every finding.
   - Create a new worksheet named Reviewed Insights with a short anomaly table.
   - Add a line chart that helps a leader see the timing of the service pressure.

   Do not state a cause unless the workbook contains evidence for it.
   ```

5. Review the changes Copilot proposes before accepting them.
6. If the chart combines metrics with incompatible scales, ask Copilot to separate them or choose one decision-relevant trend.

#### Checkpoint

- `Reviewed Insights` contains dates, metrics, observed values, thresholds or comparison values, and a source reference.
- The chart has a meaningful title and readable axes.
- No finding claims a cause that the workbook does not contain.

### Practice 2 Verify the analysis

**Primary target:** Independently check the anomaly table against source rows and formulas before it is reused.

#### Steps

1. Open the `KPI_Data` worksheet.
2. Filter `Claim SLA Status` to show only `Above SLA` and compare the dates with `Reviewed Insights`.
3. Sort `Complaint Count` from largest to smallest and confirm the highest values and their dates.
4. Sort `Digital Conversion Rate` from smallest to largest and confirm the low period.
5. Select three representative cells and inspect their formulas or source values.
6. In `Reviewed Insights`, add a `Review status` column and mark each finding with one of these exact values:

   ```text
   Verified
   ```

   ```text
   Corrected
   ```

   ```text
   Needs more evidence
   ```

7. Correct any mismatched period, threshold, or percentage.

#### Checkpoint

- Every finding has a review status.
- At least one finding has been checked directly against its source rows.
- Percentages are treated as percentages, not percentage points or whole numbers.

## Scenario 2 Turn evidence into a leadership decision brief

### Practice 3 Draft the brief in Word

**Primary target:** Use the verified workbook and operational context to draft a one-page decision brief that preserves facts, assumptions, and decision boundaries.

#### Steps

1. Open a fresh copy of `Asteria_Decision_Brief_Starter.docx` in Word.
2. Open Copilot and reference these files:
   - `Asteria_Service_KPI_Reviewed.xlsx`
   - `Asteria_Operational_Context.docx`
   - `Asteria_Grounded_Evidence_Brief.docx`
3. Paste this prompt.

   ```text
   Goal: Complete this one-page Asteria leadership decision brief.

   Context: Leaders need a decision-ready summary, but every number and claim must remain reviewable.

   Sources: Use only the three referenced Asteria files. Give priority to findings marked Verified or Corrected in Reviewed Insights.

   Expected output:
   - Executive summary with no more than five bullets
   - Verified evidence with date, value, comparison, and source
   - Business implications clearly labelled as interpretations
   - Decision needed
   - Actions with owner, due date, and dependency; write To confirm when a source does not provide one
   - Risks and open questions

   Do not invent a root cause, target, owner, due date, or financial impact.
   ```

4. Keep the starter headings and replace its instructional placeholders with the draft.
5. Compare every number in Word with `Reviewed Insights`.
6. Save the completed document as:

   ```text
   Asteria_Leadership_Decision_Brief.docx
   ```

#### Checkpoint

- Every number can be traced to the reviewed workbook.
- Interpretations are not presented as verified facts.
- Missing owners or dates say `To confirm`.
- The brief states one clear decision rather than a list of unrelated recommendations.

## Expected Output

- `Asteria_Service_KPI_Reviewed.xlsx` with a checked anomaly table and chart
- `Asteria_Leadership_Decision_Brief.docx` ready for a meeting review

<div class="voice-card"><strong>Pon:</strong> Think of Excel as the measuring instrument and Word as the decision note. The note is only as reliable as the measurements that entered it.</div>

[← Exercise 1](./01-ground-the-brief) · [Exercise 3 Meeting to follow-up →](./03-meeting-to-follow-up)
