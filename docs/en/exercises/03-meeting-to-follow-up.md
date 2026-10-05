# Exercise 3 Meeting and email recap to Action Plan

<ExerciseHeaderImage src="/images/exercise-headers/03-communicate-accountably.png" alt="Meeting, chat and email evidence comes together into an action record with an owner and date." />

## Exercise Overview

Turn a meeting recap and email thread into a Word Action Plan, then draft a follow-up email. Use one Copilot Chat conversation for the three core Practices; you do not need to open Teams or Outlook for that route. The optional Scenario 3 starts a separate private chat to explore one of your own past Teams meetings.

> **License:** Microsoft 365 Copilot Premium is required for this workshop. Copilot Chat file generation depends on account availability; a manual Word fallback is provided. Native Teams and Outlook experiences are optional and require confirmed access and policy.

## Prerequisites

- Microsoft 365 Copilot Chat, OneDrive and Word for the web
- **Files to use:**
   - `Asteria_Teams_Meeting_Recap.docx`
   - `Asteria_Email_Thread.docx`
   - Save both files in your OneDrive practice folder before you begin.
- The original meeting chat and VTT transcript are optional references if a meeting detail needs clarification. Open the transcript manually; do not attach the VTT file to Copilot.

## Start here: Microsoft 365 Copilot Chat

Open Microsoft 365 Copilot Chat at your organization's approved entry point and start a **new chat**. Keep this conversation open for the three core Practices. Use the supplied Asteria files, not your real mailbox or meetings.

Your route is simple: recap in Chat → generate the Word Action Plan in Chat → draft the email in Chat. Open Word only to review or save the Action Plan.

## Scenario 1 Prepare the follow-up

### Practice 1 Recap the meeting and email

**Primary target:** Create separate meeting and email summaries in Copilot Chat.

#### Steps

1. In your new **Copilot Chat** conversation, use the attachment / `Add Content` control available
2. Select `Asteria_Teams_Meeting_Recap.docx` from OneDrive.
   > If cloud selection is unavailable, download the file from OneDrive and use the local file-upload control.
3. Ask for the meeting summary:

   ```text
   Summarise for me. Give me the key points, what was agreed, suggested actions and outstanding questions. Keep the owners and dates from the file. Use To confirm for missing details
   ```

4. Stay in the **same Copilot Chat conversation**
5. Attach `Asteria_Email_Thread.docx` to the chat.
6. Send:

   ```text
   Now summarise Asteria_Email_Thread.docx separately from the meeting recap. What does the email confirm, suggest or leave unanswered? Keep the owners and dates from the email. Use To confirm for missing details and point out any difference from the meeting summary.
   ```

7. Spot-check the main agreement and one action's owner/date against the files. Ask Copilot to correct an obvious error.

#### Quick check

- Both summaries identify the main agreement and preserve an important owner/date.
- Suggestions remain distinct from agreed actions.

### Practice 2 Generate the Word Action Plan

**Primary target:** Ask Copilot Chat to generate a downloadable Word Action Plan from the two recaps.

#### Steps

1. Continue in the **same Copilot Chat conversation**. Use the two summaries above and ask:

   ```text
   Combine the meeting and email recaps above into a short Action Plan. Create a word file named Asteria_Action_Plan.docx.

   Include a short summary of what was agreed, a table with Action, Owner and Due date, and an Outstanding questions section. Include the next decision point if the sources specify one; otherwise write To confirm.

   Use only the meeting and email content in this chat. Keep missing owners and dates as To confirm. If an action is only a suggestion, begin its Action text with Proposed: and keep any conditions. Do not invent commitments or resolve conflicting information yourself.
   ```

2. Wait for the Word file to appear in the chat. If Copilot returns only text, ask once:

   ```text
   Please generate Asteria_Action_Plan.docx as a downloadable Word file using the Action Plan you just wrote. Keep the content unchanged.
   ```

3. Open the file or preview.
4. Look for the short summary, action table and outstanding questions. Ask for a correction if an important detail is wrong.
5. Save the file in your OneDrive practice folder, uploading the download if needed. Open it in Word for the web, then return to the same Copilot Chat conversation for Practice 3.

#### Fallback: Word file generation is unavailable

Use this only if Chat cannot produce the downloadable file. Ask in the same chat:

```text
Show the same Action Plan here, including its summary, Action / Owner / Due date table and outstanding questions, so I can copy it into Word. Do not change its content.
```

Open a blank document in Word for the web, copy in that content and save it in your OneDrive practice folder as:

```text
Asteria_Action_Plan.docx
```

Return to the same Copilot Chat conversation for the email draft.

#### Quick check

- `Asteria_Action_Plan.docx` opens in Word and is saved in OneDrive.
- Missing owners and dates say `To confirm`; suggested actions remain labelled `Proposed:`.

## Scenario 2 Draft the follow-up

### Practice 3 Draft an email in Copilot Chat

**Primary target:** Produce a clear internal follow-up email draft in Copilot Chat.

#### Steps

1. Return to the **same Copilot Chat conversation**. Attach the saved `Asteria_Action_Plan.docx` so Copilot uses the final version, then send:

   ```text
   Draft an internal follow-up email using Asteria_Action_Plan.docx. Include a subject line, a short recap and up to 3 key actions with their owners and due dates. Mention outstanding questions and ask readers to reply with corrections or missing details.

   Keep suggested actions clearly labelled Proposed and missing details as To confirm. Use a friendly, professional tone. Do not add new commitments or recipients. Show the draft here in the chat only; do not send it or create a mailbox draft.
   ```

2. Read the draft and spot-check an important action, owner and date against the Action Plan. If the file cannot be read, paste its final content beneath the same prompt.
3. (Optional) Send this prompt to ask Copilot to crate a draft in Outlook
   ```text
   create a draft in my inbox, don't send it.
   ```

#### Quick check

- The draft's key actions match the Action Plan, including owners and dates.
- The email is visible in Chat and remains unsent.

## (**Optional**) Scenario 3 : Discover your own Teams meeting

Only try this with facilitator/client approval and suitable information, privately and without screen sharing. Keep the entire real-work case separate from Asteria. Use your own work account with Microsoft 365 Copilot licensing and work grounding available. You need permission to access the selected meeting's retained recording and transcript; having attended a meeting does not guarantee that access.

### Practice 4 Find and select a past meeting

**Primary target:** Discover a suitable past Teams meeting with an accessible recording and transcript.

#### Steps

1. Start a **fresh, private Copilot Chat conversation**. Enable work grounding (`Work IQ` if shown, or the work-grounded experience available in your account). Do not reuse the Asteria conversation or attach its files.
2. Ask Copilot to find meetings you can choose from:

   ```text
   Find up to 5 past Teams meetings I attended that have both a recording and a transcript. Show the meeting title, date and a source link so I can choose one. Only include meetings where you can confirm both are available. If you cannot confirm this, tell me.
   ```

3. Review the results and choose one meeting suitable for this private activity. Treat the list as suggestions, not proof that its recording and transcript are available.
4. Open the meeting's source link. In its Teams meeting details or **Recap**, confirm the correct date, recording and transcript. For a recurring meeting, check the individual occurrence rather than the whole series. Return to your private Copilot Chat conversation.

Microsoft documents [referencing meetings in Copilot Chat](https://support.microsoft.com/en-us/microsoft-365-copilot/refer-to-specific-files-and-more-in-microsoft-365-copilot). Automatic discovery of recording/transcript availability is not guaranteed and needs tenant rehearsal. Do not change meeting policies or download and upload real transcripts to bypass an access problem.

#### Quick check

- One suitable meeting occurrence is selected, and you can access both its recording and transcript.

### Practice 5 Ask about the selected meeting

**Primary target:** Use the selected meeting's transcript as context for useful answers in Copilot Chat.

#### Steps

1. Continue in the **same private Copilot Chat conversation** from Practice 4. Type `/`, choose **Meetings**, search for the selected meeting and insert the correct occurrence as a work reference. Confirm that its title appears in your prompt before sending.
2. With the meeting reference selected, send:

   ```text
   Summarise this meeting. What was discussed, what was agreed and what still needs an answer? 
   
   Keep suggestions separate from decisions. 
   
   If you cannot access the transcript, tell me rather than guessing.
   ```

3. Follow up in the same chat:

   ```text
   List up to 3 follow-up actions from this meeting, with owners and due dates where stated. 
   ```

4. Open a source reference where available and compare one agreement or action with the transcript in Teams. A response based only on calendar details or meeting chat is not evidence that Copilot read the transcript. If Copilot cannot access it, stop this optional route rather than filling gaps yourself.

#### Quick check

- One agreement or action matches the selected meeting's transcript, without invented owners or dates.

Keep these results in your private chat only. Do not copy them into Asteria files, sample folders, shared screens or workshop submissions. Do not send messages or create invitations; Exercise 4 does not depend on this scenario.

## Optional: Use your own Outlook source

With the same facilitator/client approval and privacy rules, open a permitted thread's summary or Copilot experience in **Outlook**, if available. Bring that summary into a separate private Copilot Chat conversation. Adapt company and output names to your own case; never combine the result with Asteria files or share it in class. If access or suitability is uncertain, skip this option. No message is sent.

## Expected Output

- `Asteria_Action_Plan.docx` saved in OneDrive for Exercise 4
- One unsent follow-up email draft visible in Copilot Chat

Exercise 4 uses this Action Plan and takes its KPI chart directly from your Exercise 2 dashboard/workbook.


<div class="voice-card"><strong>Pon:</strong> Think of this chat as one conversation with an assistant: first catch up, then prepare the action list, then write the follow-up. You do not need to move desks for every request.</div>

[← Exercise 2](./02-kpi-to-decision-brief) · [Exercise 4 →](./04-evidence-to-executive-story)
