# Exercise 1 Ground the executive brief

<ExerciseHeaderImage src="/images/exercise-headers/01-ground-the-work.png" alt="An executive reviews source documents beside a laptop to ground a leadership brief." />

## Exercise Overview

Compare a general Copilot answer with an answer based on Asteria's files. Then create a Word brief and try a quick rewrite of its executive summary. Optional activities let you discover the project by name and prepare for your own meeting.

> **License:** Microsoft 365 Copilot Premium is required. Work IQ must be available for the grounded path.

## Prerequisites

- [Microsoft 365 Copilot Chat](https://m365.cloud.microsoft/chat), signed in with your work account
- `Asteria_Operational_Context.docx` and `Asteria_Service_KPI_28days.xlsx` in your OneDrive practice folder
- Word for the web with permission to edit and save files

File generation, the summary panel and `Auto rewrite` vary by account. Use the fallback below if needed. A [prepared backup brief](/files/Asteria_Grounded_Evidence_Brief.docx) is available if you cannot create the Word file.

## Scenario 1 Compare a general answer with grounded work

Asteria's leaders want to understand a service issue before their review meeting.

### Practice 1 Establish the baseline

**Primary target:** Notice what Copilot answers without the Asteria files.

#### Steps

1. Open **Copilot Chat**
2. Turn `Work IQ` **off**
3. Start a new chat without files.
4. Send this prompt:

   ```text
   An insurance company has slower claims turnaround, more customer complaints, and lower digital conversion. Prepare a short executive brief with the likely causes, business impact, and 3 recommended actions.
   ```

5. Read the answer. Notice one plausible statement that Copilot cannot confirm without Asteria's information. Keep this answer for comparison with Practice 2.

#### Quick check

- You can identify one general suggestion that has no Asteria source.

### Practice 2 Ground the answer in the files

**Primary target:** Get an Asteria brief using Work IQ and the supplied files.

#### Steps

1. In **Copilot Chat**, turn `Work IQ` **on**
2. Start a new chat.
3. Use the file picker or `/` to select both `Asteria_Operational_Context.docx` and `Asteria_Service_KPI_28days.xlsx`.
4. Send this prompt:

   ```text
   Prepare a short leadership brief for Asteria's service review using only the two attached files.

   Explain what happened, why it matters and one recommended next decision. Separate facts, assumptions and open questions. Include links to the files you used. Do not invent causes, owners, dates or targets.
   ```

5. Compare the reporting period and two important facts with the files. Ask Copilot to correct any obvious error, then compare this answer with Practice 1.

#### Quick check

- The reporting period and two important facts match the supplied files.
- Assumptions and missing information are easy to recognise.

#### Optional: Discover by project name

1. Keep the explicit-file chat open. Start a **fresh chat** with `Work IQ` on. Do not attach files, select work items, use `/` references or include filenames.
2. Try this prompt:

   ```text
   Prepare a short leadership brief for Asteria Insurance service review. Explain what happened, why it matters and one recommended next decision. Separate facts, assumptions and open questions, and include links to the sources you found. Do not invent causes, owners, dates or financial effects.
   ```

3. Open a citation to see whether it found the right project and reporting period. If it retrieves unrelated or sensitive work content, stop and keep that content off shared screens. An unsuccessful search is an acceptable outcome; discovery depends on access and file availability.
4. Return to the **explicit-file chat** for Practice 3, whichever result you get here.

### Practice 3 Generate and refine the Word brief

**Primary target:** Create a Word brief and refine its executive-summary paragraph.

#### Steps

1. In the **explicit-file Copilot Chat** from Practice 2, request the Word file:

   ```text
   Create an actual downloadable Word file named Asteria_Grounded_Evidence_Brief.docx from this brief.

   Use these exact four headings in this order:
   1. Executive summary
   2. Verified facts
   3. Assumptions and interpretations
   4. Open questions

   Under Executive summary, write one paragraph of 80–100 words. Keep the document concise, use navy headings and dark body text, and preserve the facts and missing information from our conversation.
   ```

2. Open the file in **Word for the web**. If Chat offers only a download, upload it to your OneDrive practice folder and open it there. Confirm that the four headings and executive-summary paragraph are present; ask for a corrected file if needed.
3. Look at the summary panel above the document if it is visible. If absent, try Copilot's document-summary function when available. This overview is separate from the document body; read the brief itself before continuing.
4. Select **only the paragraph beneath `Executive summary`**. Exclude the heading and other sections. Open `Edit with Copilot` or the selection's Copilot menu and choose **Auto rewrite**. **Do not type anything into a prompt box.**
5. Compare the suggestion with the original. Keep it only if the meaning and numbers remain unchanged. Discard an unwanted suggestion; use `Undo` if it has already changed the document. If `Auto rewrite` is unavailable, ask the facilitator or skip it; do not substitute a typed rewrite prompt.
6. After finishing the rewrite, open the **Word Copilot side panel** and try this separate request:

   ```text
   Add a Japanese version of the executive summary below the English paragraph. Keep the English text and other sections unchanged.
   ```

   Keep the addition if it appears in the intended place. If it changes the English text or other sections, use `Undo`. Ask the facilitator if this editing control is unavailable.
7. Save the brief in OneDrive as:

   ```text
   Asteria_Grounded_Evidence_Brief.docx
   ```

#### File-generation fallback

If Chat cannot generate the file, copy the brief into a blank Word document using the four headings above and save it with the same filename.

If that is unavailable, open `Asteria_Grounded_Evidence_Brief.docx` from your OneDrive workshop folder’s `Prepared assets` subfolder. If you need another copy, [download the prepared backup brief](/files/Asteria_Grounded_Evidence_Brief.docx) and upload it to that subfolder. Open it in Word. Spot-check two facts and the reporting period, then continue. Retain its `Prepared backup` label and leave your own completed brief untouched. Its extra sections can remain; you do not need to fill in review notes. Ask the facilitator if you cannot open or save files.

#### Quick check

- The rewrite preserved the English paragraph's meaning and numbers; the other sections are unchanged. The Japanese addition sits below it, if available.
- The brief opens in Word and is saved in OneDrive under the required filename.

Product references: [Word rewrite guidance](https://support.microsoft.com/en-us/word/copilot/edit-rewrite-content), [Word document summaries](https://support.microsoft.com/en-us/word/copilot/create-a-summary-of-your-document-with-copilot-in-word), [Create content in Copilot Chat](https://support.microsoft.com/en-us/microsoft-365-copilot/create-content-using-microsoft-365-copilot-chat).

## Scenario 2 Optional personal meeting preparation

Use this only with **facilitator/client approval** and suitable work information. Keep screen sharing off and real work content private, separate from Asteria files and workshop submissions. Skip it if approval or access is uncertain; Exercise 2 does not depend on it.

### Practice 4 Prepare for one upcoming meeting (optional)

**Primary target:** Prepare a private brief for one calendar-confirmed meeting.

#### Steps

1. Open **Copilot Chat** and start a fresh private chat with `Work IQ` on. Stay within the approved work scope and stop if unsuitable sensitive information appears.
2. Ask for a recent-work recap:

   ```text
   Summarize my work activity from the last week.
   ```

3. Read the recap, then ask:

   ```text
   List up to 3 upcoming meetings over the next 7 days.
   ```

4. Find a suitable meeting in your calendar and confirm its title and date/time in the chat. If there is no suitable meeting, skip the remaining step.
5. Ask:

   ```text
   Help me prepare for the meeting I just confirmed. Keep missing details as To confirm.
   ```

#### Quick check

- The meeting and its date/time match your calendar, and the brief is relevant to it.
- The result remains private; no messages were sent or calendar entries changed.

## Expected Output

- `Asteria_Grounded_Evidence_Brief.docx`, saved in OneDrive, or the prepared backup
- A comparison between a general answer and an answer based on the files
- Optional: a private meeting-preparation brief

## Tips & tricks: Try one improved prompt

In the file-based chat, try:

```text
Make this leadership brief easier to scan. Put the three main points first and end with one decision question. Keep the facts and missing information unchanged.
```

Keep it if the message is clearer. No extra file is required.

<div class="voice-card"><strong>Pon:</strong> Think of grounding like checking the label on an ingredient: the file tells you what you are working with. A quick look at two key facts helps you trust the brief.</div>

[← Before you begin](../before-you-begin) · [Exercise 2 KPI dashboard →](./02-kpi-to-decision-brief)
