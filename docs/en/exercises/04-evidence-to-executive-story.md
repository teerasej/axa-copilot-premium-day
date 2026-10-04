# Exercise 4 Action Plan to executive presentation

<ExerciseHeaderImage src="/images/exercise-headers/04-build-executive-update.png" alt="An executive presents a five-part update with charts, decisions and next steps." />

## Exercise Overview

Turn your meeting and email Action Plan into a five-slide leadership update in PowerPoint. Use the reviewed Excel workbook from Exercise 2 to complete the KPI snapshot so leaders can see the service pattern alongside the next actions.

> **License:** Microsoft 365 Copilot Premium and Copilot in PowerPoint are required. File-based presentation creation must be available for your account; use the manual fallback if it is not.

## Prerequisites

- `Asteria_Action_Plan.docx` from Exercise 3, saved in OneDrive
- `Asteria_Service_KPI_Reviewed.xlsx` from Exercise 2, saved in OneDrive
- `Asteria_KPI_Dashboard.pptx` from Exercise 2 for the chart fallback
- PowerPoint for the web

The Action Plan does not need a KPI evidence section. Use it for the written story in Practice 1, then reference the reviewed Excel workbook for the KPI snapshot in Practice 2. You do not need to reopen Teams or Outlook.

## Start here: PowerPoint for the web

Open PowerPoint for the web with your work account. Keep your OneDrive practice folder available so you can select the Action Plan.

> **Missing the Action Plan?** Select `Asteria_Teams_Meeting_Recap.docx` from your OneDrive workshop folder instead in Practice 1. If you need another copy, [download the supplied meeting recap](/files/Asteria_Teams_Meeting_Recap.docx) and upload it to that folder. Use the same prompt below. Check actions, owners and dates against the recap when finishing.

## Scenario 1 Prepare the leadership update

### Practice 1 Create five executive slides

**Primary target:** Use Copilot in PowerPoint to create a five-slide presentation from your Action Plan.

#### Steps

1. Open [PowerPoint for the web](https://www.microsoft365.com/launch/powerpoint) and select  **Create with Copilot**.
   > if create with Copilot is not available, select **New blank presentation** and then open the Copilot pane manually.
2. Select **Add Content** then select `Asteria_Action_Plan.docx` from your OneDrive practice folder as the reference file. Confirm that its filename appears before continuing.
3. Enter this request.

   ```text
   Create a concise five-slide leadership update using the attached file for the written content:
   1. Main decision, or the decision needed if none has been agreed
   2. KPI snapshot: leave space for me to insert the chart from my Exercise 2 dashboard
   3. Meeting and email highlights available in the file
   4. Actions, owners and due dates
   5. Open questions and next steps

   Keep the wording short and easy to present. Do not infer KPI figures from this file or generate a replacement chart. Keep proposals labelled Proposed and missing details labelled To confirm. Do not invent decisions, owners, dates, causes, approvals or financial effects.
   ```

4. Review the outline if one appears, then generate the slides.
5. Keep exactly **five slides** in the order above.
6. Save the presentation in your OneDrive practice folder as:

   ```text
   Asteria_Executive_Update.pptx
   ```

#### Fallback: Copilot cannot create the presentation

Stay in the blank PowerPoint presentation. Add five slides manually using the same outline, and copy the relevant summary and actions from your Action Plan or supplied recap. Leave Slide 2's chart space empty for Practice 2. Save with the filename above. Ask the facilitator for help if you cannot open or save files; do not change organization policies or switch to a personal account.

#### Quick check

- Five slides follow the requested order, with space for the chart on Slide 2.
- The presentation is saved in OneDrive as `Asteria_Executive_Update.pptx`.

### Practice 2 Complete the KPI snapshot and finish

**Primary target:** Use the reviewed Excel workbook as a Copilot reference to complete the KPI snapshot on Slide 2.

#### Steps

1. Open `Asteria_Executive_Update.pptx` in **PowerPoint for the web**
2. Select **Slide 2**, the KPI snapshot left ready in Practice 1.
3. Open the **Copilot pane**.
4. Use the **Add Content** button to select `Asteria_Service_KPI_Reviewed.xlsx` from your OneDrive practice folder. Confirm that the workbook's filename appears before continuing. If your pane cannot reference an Excel workbook, use the manual fallback below.

   > **Workbook incomplete?** Select `Asteria_Service_KPI_Reviewed_backup.xlsx` from your OneDrive workshop folder’s `Prepared assets` subfolder instead. If you need another copy, [download the reviewed KPI backup](/files/Asteria_Service_KPI_Reviewed_backup.xlsx) and upload it to that subfolder. Use the same prompt below. Retain the backup filename and leave your own workbook unchanged.

5. Enter this request in the Copilot pane:

   ```text
   Complete Slide 2, “KPI snapshot”, using the attached Excel workbook.

   Add up to three short insights about the service trends. Include a chart comparing daily claims turnaround hours with the SLA hours from the workbook. Make the reporting dates, hours and SLA line easy to read.

   Use only figures supported by the workbook. Do not infer causes or financial effects. If something is missing, label it “To confirm”.
   ```

6. Review any proposed changes before applying them.
   > If Copilot only suggests content instead of editing the slide, add the supported content to Slide 2 manually. Check that Slides 1, 3, 4 and 5 remain unchanged; undo any unwanted changes.

7. Save `Asteria_Executive_Update.pptx` in OneDrive.

#### Fallback: Excel references, slide editing or chart generation are unavailable

Keep the five-slide executive update open. Open your reviewed workbook in **Excel for the web** and manually add up to three short insights supported by its figures to Slide 2. For KPI numbers, do not ask Copilot to infer them from the Action Plan or recreate the chart from that file.

Open `Asteria_KPI_Dashboard.pptx` from Exercise 2 separately in **PowerPoint**. Copy its **claims-turnaround/SLA chart**, return to Slide 2 of the executive update, and paste it into the reserved space. Remove any incorrect chart first and resize the replacement so its title, dates, hours and SLA line are readable.

If the chart cannot be copied, use the claims-turnaround/SLA chart from the reviewed workbook in **Excel for the web**. Copy it, or capture/export a readable image and insert that image on Slide 2 using PowerPoint's `Insert > Pictures` control. If using the reviewed KPI backup, find its chart on `Reviewed Insights`. Keep the editable original in Excel. Finish with the same quick checks and save; this fallback does not demonstrate successful Excel referencing or slide editing by Copilot.

#### Quick check

- Slide 2 has workbook-supported KPI figures and a readable chart with the same dates, hours and 48-hour SLA line as Exercise 2.
- Exactly five slides remain. The other four slides are unchanged, with actions, owners and dates matching the Action Plan or supplied recap; suggestions remain `Proposed` and missing details remain `To confirm`.

## Expected Output

- `Asteria_Executive_Update.pptx`: five slides with the required KPI chart, meeting highlights, actions and next steps


<div class="voice-card"><strong>Pon:</strong> Think of this like packing a meeting bag: the Action Plan gives you the talking points, and the chart gives you the picture. Put both in the presentation, then make one quick check before you finish.</div>

[← Exercise 3](./03-meeting-to-follow-up) · [Session 5 →](./05-explore-ai-agents)
