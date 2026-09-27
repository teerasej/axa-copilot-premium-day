# Exercise 3 From communication evidence to accountable follow-up

## Exercise Overview

Asteria leaders need to move from scattered communication to a meeting, a confirmed decision record, and clear follow-up. You will work from prepared email, chat, meeting-recap, and transcript files, so the core exercise does not depend on a seeded Outlook mailbox or Teams meeting.

> **License:** Microsoft 365 Copilot Premium is required for Copilot Chat and Word. Native Copilot experiences in Teams and Outlook depend on organizational policy, client version, and tenant rollout; they are enhancements, not completion requirements.

## Prerequisites

- `Asteria_Email_Thread.docx` in OneDrive
- `Asteria_Meeting_Chat.docx` in OneDrive
- `Asteria_Teams_Meeting_Recap.docx` in OneDrive
- `Asteria_Executive_Review_Transcript.vtt` in OneDrive
- `Asteria_Communication_Checklist.docx` in OneDrive
- `Asteria_Leadership_Decision_Brief.docx` from Exercise 2
- Access to Copilot Chat and Word

### Capability levels

1. **Core file path:** Everyone completes the work with the prepared files, Copilot Chat, and Word.
2. **Tenant-enhanced path:** If the facilitator confirms a safe practice destination, move the reviewed draft into Teams or Outlook and keep it unsent.
3. **Facilitator demo:** Native Teams recap or Outlook thread-to-meeting features may be demonstrated only after rehearsal with an ordinary AXA learner account. They are not required learner steps.

## Scenario 1 Prepare the decision meeting

### Practice 1 Create a meeting request draft from communication evidence

**Primary target:** Convert the prepared email and chat records into a decision-focused meeting request without treating proposals as approved actions.

#### Steps

1. Open Copilot Chat and reference:
   - `Asteria_Email_Thread.docx`
   - `Asteria_Meeting_Chat.docx`
2. Paste this prompt.

   ```text
   Goal: Prepare a meeting request for the Asteria executive service review.

   Context: The email thread and meeting chat contain questions, constraints, and conditional offers. They do not contain an approved decision.

   Sources: Use only Asteria_Email_Thread.docx and Asteria_Meeting_Chat.docx.

   Expected output:
   - meeting title
   - purpose in one sentence
   - decision question
   - four-item agenda
   - participant roles, not email addresses
   - pre-read files
   - unresolved prerequisites

   Label every proposed action as proposed. Do not invent recipients, approvals, owners, dates, or outcomes.
   ```

3. Compare the draft with both source files. Remove any statement that turns support, concern, or a conditional offer into a decision.
4. Save the reviewed result in Word as:

   ```text
   Asteria_Meeting_Request_Draft.docx
   ```

5. Use the `Meeting request review` section in `Asteria_Communication_Checklist.docx` and record at least one correction.
6. **Tenant-enhanced path:** If the facilitator confirms that Outlook is ready, create a new calendar event and paste the reviewed content. Add no attendees and do not send it.

#### Checkpoint

- The request contains one decision question and four agenda items grounded in the files.
- Proposals remain proposals; no meeting outcome is implied.
- The saved draft contains no real recipients and remains unsent.

## Scenario 2 Confirm the meeting outcome

### Practice 2 Recover decisions and commitments from the meeting record

**Primary target:** Draft a decision and action record from the prepared recap, then verify every commitment manually against transcript timestamps.

#### Steps

1. Open Copilot Chat and reference `Asteria_Teams_Meeting_Recap.docx`. If the file picker cannot find it, open the DOCX in Word and use Copilot in Word for this step.
2. Paste this prompt.

   ```text
   Goal: Create an accountable record of the Asteria executive review.

   Context: The recap is a portable meeting source. Every decision and commitment will be checked manually against the transcript before any follow-up is drafted.

   Source: Use only Asteria_Teams_Meeting_Recap.docx.

   Expected output:
   1. Decisions made
   2. Action items with owner and due date
   3. Risks and dependencies
   4. Questions that remain unresolved
   5. The stated transcript timestamp for each decision and action

   If the recap does not state an owner or due date, write Not stated. Do not infer one.
   ```

3. Open `Asteria_Executive_Review_Transcript.vtt` manually beside the result. Do not attach the VTT file to Copilot.
4. Check every decision and action against its timestamp.
5. Remove statements that were discussed but not agreed.
6. Copy the corrected record into the end of `Asteria_Leadership_Decision_Brief.docx` under a new heading:

   ```text
   Confirmed meeting record
   ```

7. **Facilitator demo:** If a native Teams recap has been rehearsed, compare it with the file-based record. Do not replace the transcript check.

#### Checkpoint

- Every decision and action has a matching transcript timestamp.
- Discussion points are not mislabelled as decisions.
- Missing owners or dates remain `Not stated`.
- Copilot used the DOCX recap; a person used the VTT transcript for final verification.

### Practice 3 Prepare the Teams update as a portable draft

**Primary target:** Create and save a concise Teams-style update that communicates only confirmed decisions and actions.

#### Steps

1. In Copilot Chat or Word, reference the confirmed meeting record in `Asteria_Leadership_Decision_Brief.docx`.
2. Paste this prompt.

   ```text
   Goal: Draft a concise Teams update for the Asteria service-review team.

   Source: Use only the Confirmed meeting record in Asteria_Leadership_Decision_Brief.docx.

   Expected output:
   - the confirmed decision
   - up to three actions with owner and due date
   - one unresolved dependency
   - where the reviewed decision brief is stored

   Use a clear, professional tone. Do not add new commitments. Write Not stated when the source does not provide an owner or date.
   ```

3. Check the draft against the transcript timestamps and the `Teams update review` section of `Asteria_Communication_Checklist.docx`.
4. Save the reviewed draft in Word as:

   ```text
   Asteria_Teams_Update_Draft.docx
   ```

5. **Tenant-enhanced path:** If the facilitator has approved a practice chat or channel, paste the reviewed text into a new message. Keep it unsent. If no safe destination is confirmed, the Word file is the completed output.

#### Checkpoint

- The update fits on one screen and contains no invented commitment.
- The decision, actions, dates, and dependency match the confirmed meeting record.
- A portable Word draft exists even when Teams is unavailable.

### Practice 4 Prepare the Outlook follow-up as a portable draft

**Primary target:** Create and save a follow-up email that makes ownership and unresolved items easy to review without requiring mailbox history.

#### Steps

1. In Copilot Chat or Word, reference the confirmed meeting record in `Asteria_Leadership_Decision_Brief.docx`.
2. Paste this prompt.

   ```text
   Goal: Draft a follow-up email after the Asteria executive service review.

   Source: Use only the Confirmed meeting record in Asteria_Leadership_Decision_Brief.docx.

   Expected output:
   - Subject: Asteria service review decisions and next actions
   - Decision confirmed
   - Actions with owner and due date
   - Dependency or item still to confirm
   - Request for corrections before the next review

   Keep the tone concise and accountable. Do not invent recipients, owners, dates, approvals, or commitments.
   ```

3. Compare the result with the transcript and complete the `Outlook follow up review` and `Final safety gate` sections in `Asteria_Communication_Checklist.docx`.
4. Save the reviewed draft in Word as:

   ```text
   Asteria_Outlook_Follow_Up_Draft.docx
   ```

5. **Tenant-enhanced path:** If Outlook is ready, select `New mail`, add no recipients, and use `Draft with Copilot` or paste the reviewed text. Keep the message unsent.

#### Checkpoint

- The subject and body match the confirmed record.
- The message asks for corrections and does not claim final approval.
- No real recipient has been added, and a portable Word draft exists.

## Expected Output

- `Asteria_Meeting_Request_Draft.docx`
- A checked meeting record added to `Asteria_Leadership_Decision_Brief.docx`
- `Asteria_Teams_Update_Draft.docx`
- `Asteria_Outlook_Follow_Up_Draft.docx`
- A completed `Asteria_Communication_Checklist.docx`

<div class="voice-card"><strong>Pon:</strong> The prepared files are like a flight simulator: everyone can practice the same judgment safely. Teams and Outlook then become destinations for a reviewed draft, not sources the exercise must hope are available.</div>

[← Exercise 2](./02-kpi-to-decision-brief) · [Exercise 4 Meeting to executive deck →](./04-evidence-to-executive-story)
