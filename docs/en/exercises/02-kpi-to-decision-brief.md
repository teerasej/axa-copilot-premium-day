# Exercise 2 KPI analysis to executive dashboard

<ExerciseHeaderImage src="/images/exercise-headers/02-analyze-transparently.png" alt="Two colleagues check spreadsheet evidence, charts and an unusual KPI result." />

## Exercise Overview

Ask Excel for three insights, turn them into a useful worksheet and chart, then create a three-slide dashboard in PowerPoint. Finish with a quick comparison of the chart and one important number. No Python is required.

> **License:** Microsoft 365 Copilot Premium and Copilot in Excel and PowerPoint are required.

## Prerequisites

- `Asteria_Service_KPI_28days.xlsx` in OneDrive
- `Asteria_Operational_Context.docx` and your Exercise 1 brief for context
- Excel for the web and PowerPoint for the web or a supported desktop client

> **Missing the Exercise 1 brief?** [Download the prepared backup](/files/Asteria_Grounded_Evidence_Brief.docx) and open it in Word. Check two important facts and the reporting period, then continue. Keep your own completed brief untouched.

## Scenario 1 Explore the service patterns

Asteria's leaders want to understand the changes in claims turnaround, complaints and digital conversion.

### Practice 1 Discover the top three insights

**Primary target:** Ask Copilot in Excel for the workbook's main insights.

#### Steps

1. Open `Asteria_Service_KPI_28days.xlsx` from OneDrive in **Excel for the web**.
2. Use the available copy control to save a working copy as:

   ```text
   Asteria_Service_KPI_Reviewed.xlsx
   ```

3. Select a cell in `KPI_Data`, open `Copilot` and ask:

   ```text
   Tell me the top 3 insights and trends in this workbook.
   ```

4. Read the response and find one important number in `KPI_Data`. Use `Definitions` if a metric is unfamiliar. Treat suggested causes as questions to investigate.

#### Quick check

- You can explain the three insights and find one matching number in the workbook.

### Practice 2 Build the leadership analysis

**Primary target:** Refine Copilot's plan and create an insights sheet with a claims/SLA chart.

#### Steps

1. Continue in the same **Excel Copilot** conversation. In the mode selector, choose `Plan`, then send:

   ```text
   Help me prepare this workbook for Asteria’s leadership review. Look at claims turnaround, complaints and digital conversion, using KPI_Data and Definitions only.
   ```

2. Read Copilot’s questions or initial response before choosing `Proceed`. Answer any question using the workbook, then add this context:

   ```text
   Add a sheet called 'Reviewed Insights' with the 3 most useful findings. Include the dates, metric, values and comparisons.

   Add a line chart comparing Claim TAT Hours with Claim SLA Hours by date. Label the vertical axis in hours. Keep the original data unchanged.
   ```

3. Review the updated plan. If it covers the insights sheet and chart, press **`Proceed`**.
4. Open `Reviewed Insights`. Compare one important number with `KPI_Data` and look at the chart's dates, hours and 48-hour SLA line. Ask for a correction if something is obviously wrong; use `Undo` for unwanted edits.
5. Save the workbook.

> If only part was completed, try these smaller requests one at a time, reviewing any plan before choosing `Proceed`:

   ```text
   Add Reviewed Insights with the three findings, dates, values, comparisons and normal Excel formulas. Keep the source data unchanged.
   ```

   ```text
   Add the daily Claim TAT Hours and Claim SLA Hours line chart. Keep dates in order and label the vertical axis in hours.
   ```

#### Fallback: Plan mode or Proceed is unavailable

Ask the facilitator to confirm the available controls. Use standard Copilot editing with this request:

```text
Using KPI_Data and Definitions, add Reviewed Insights with three findings about claims turnaround, complaints and digital conversion. Include dates, values, comparisons and normal Excel formulas where useful. Add a daily claims turnaround/SLA line chart with hours on the vertical axis. Keep the original data unchanged and do not guess causes.
```

Review a preview if offered; otherwise inspect the result and use `Undo` for unwanted edits. Continue with the same quick check below.

#### Quick check

- The insights sheet exists and one important number matches `KPI_Data`.
- The chart shows dates in order, hours and the 48-hour SLA line.

### Practice 3 Make complaint patterns visible

**Primary target:** Use conditional formatting to make complaint counts easier to spot.

#### Steps

1. In **Excel**, return to `KPI_Data`. Show all 28 days and select the `Complaint Count` data cells, excluding the header.
2. Ask Copilot:

   ```text
   Replace the existing conditional formatting on Complaint Count in KPI_Data, cells F2:F29, with three red shades: light red for 0–10, medium red for 11–17 and dark red for 18 or more. Keep the numbers unchanged and readable. Leave other columns unchanged.
   ```

   Darker red means more complaints. These are display bands, not business targets.
3. Look at three sample dates: 1 September (8) should be light, 14 September (13) medium and 21 September (24) dark.
4. If Copilot cannot apply the colours, ask the facilitator to help create the same three rules using Excel's `Conditional Formatting` controls. Save the workbook and wait for OneDrive to finish saving.

#### Quick check

- The three sample dates have the expected shades and readable, unchanged numbers.
- Your working workbook is saved in OneDrive.

## Scenario 2 Present the service patterns

Use your saved workbook to create a short leadership snapshot.

### Fallback: Your reviewed Excel workbook is not ready

Open `Asteria_Service_KPI_Reviewed_backup.xlsx` from your OneDrive workshop folder’s `Prepared assets` subfolder. If you need another copy, [download the reviewed KPI backup](/files/Asteria_Service_KPI_Reviewed_backup.xlsx) and upload it to that subfolder. Open `Reviewed Insights`, compare one number with `KPI_Data` and look at the chart's dates and hours. Use this file wherever the following steps or later exercises ask for `Asteria_Service_KPI_Reviewed.xlsx`.

Retain the `Prepared backup` label and filename. Its extra calculation and review fields can remain; you only need its findings and chart. It uses green complaint bands with the same count boundaries. Leave your own workbook untouched.

### Practice 1 Create a three-slide KPI dashboard

**Primary target:** Create a short PowerPoint dashboard from your Excel findings.

#### Steps

1. In **PowerPoint**, create a **blank presentation** and save it in OneDrive as:

   ```text
   Asteria_KPI_Dashboard.pptx
   ```

2. Open Copilot's **side panel**. Use `Add Content` or the equivalent control to add your saved reviewed Excel file **as a work item**. Check that the filename is your working copy or prepared backup.
3. Send this prompt:

   ```text
   Create a three-slide executive KPI dashboard for Asteria’s service review using the attached workbook:
   1. KPI overview: reporting period and three main indicators.
   2. Service trend: the claims turnaround chart, SLA line and a short explanation. Leave space for me to insert the Excel chart if you cannot reuse it accurately.
   3. Decision discussion: main findings, open questions and one decision needed.

   Use only the workbook's information. Do not invent causes or financial effects. Keep missing details as To confirm.
   ```

4. Answer Copilot's questions if shown, then create the slides. If the chart is missing or differs from Excel, paste the Excel chart onto Slide 2, or insert a readable image of it.
5. Compare the chart and one important number with Excel. Correct obvious errors, keep exactly three slides and save the dashboard.

#### Fallback: Excel cannot be added as a work item

Copy the three findings from `Reviewed Insights` into the side panel beneath the same prompt. Insert the chart yourself. If Copilot cannot create slides, add three slides manually using the same outline.

#### Quick check

- The three-slide dashboard has a readable chart and one important number that matches Excel.
- It ends with a clear decision question and is saved in OneDrive.

### Practice 2 Optional: Add three Asteria-styled slides

**Primary target:** Try a presentation template on three new slides in a copy of the dashboard.

#### Steps

1. In **PowerPoint**, copy your completed dashboard and name the copy:

   ```text
   Asteria_KPI_Dashboard_Template_Comparison.pptx
   ```

   Keep the original `Asteria_KPI_Dashboard.pptx` for later exercises.
2. Open `Asteria_Presentation_Template.pptx` from your OneDrive workshop folder’s `Prepared assets` subfolder to see its three examples. If you need another copy, [download the Asteria presentation template](/files/Asteria_Presentation_Template.pptx) and upload it to that subfolder.
3. In the comparison deck's Copilot side panel, use `Reference file` or the equivalent control to select the template as the **design reference**. Keep your reviewed workbook available for the numbers, then send:

   ```text
   Add three slides after the existing three, using the same data and decision question. Use Asteria_Presentation_Template.pptx as the design template and match its colours, fonts, layouts and chart style.

   Create a KPI overview, a claims turnaround trend slide and a decision-discussion slide. Leave slides 1–3 unchanged. Keep the numbers and missing information unchanged; use To confirm for missing details. Do not add causes or financial claims.
   ```

4. Compare slides 1–3 with your original and slides 4–6 with the template. Spot-check one number against Excel, correct any obvious mismatch and save exactly six slides. Apply the style only to the three new slides.

PPTX referencing and style matching depend on rollout. Ask the facilitator or use the fallback if these controls are unavailable. [Microsoft release notes](https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes#july-01,-2026)

#### Fallback: PPTX referencing or styling is unavailable

Open a copy of the template and update its three examples with your findings. Append them to the comparison deck using `Keep Source Formatting`. If that is unavailable, ask the facilitator or skip the extension. Recognise this as the manual fallback when Copilot did not generate the styled slides. [Microsoft copying guidance](https://support.microsoft.com/en-us/powerpoint/copy-and-paste-in-powerpoint-for-the-web)

#### Quick check

- Slides 1–3 remain unchanged and the saved comparison contains six slides.
- Slides 4–6 follow the template's style and preserve the numbers and decision question.

## Expected Output

- `Asteria_Service_KPI_Reviewed.xlsx` with insights, formulas, a line chart and complaint colours, or the prepared backup
- `Asteria_KPI_Dashboard.pptx` with three slides
- Optional: `Asteria_KPI_Dashboard_Template_Comparison.pptx` with six slides; later exercises use the original dashboard

## Tips & tricks: Try one improved prompt

In PowerPoint's Copilot pane, try:

```text
Make these slide titles easier for a busy executive to understand. Keep the numbers and message unchanged, and finish with one clear decision question.
```

Keep a suggestion if it communicates the point more clearly. No extra file is required.

<div class="voice-card"><strong>Pon:</strong> The colours work like a highlighter on a printed report. They help a pattern stand out; a quick comparison with Excel helps you carry it into the slides.</div>

[← Exercise 1](./01-ground-the-brief) · [Exercise 3 Recap to Action Plan →](./03-meeting-to-follow-up)
