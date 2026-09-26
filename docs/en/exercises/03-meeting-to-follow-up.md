# Exercise 3 From meeting evidence to accountable follow-up

## Exercise Overview

Asteria leaders discuss the evidence and agree on next actions. You will turn the prepared meeting transcript into a checked decision record, then prepare Teams and Outlook communication without sending it.

> **License:** Microsoft 365 Copilot Premium is required. Teams transcription and meeting Copilot depend on organizational policy. The supplied VTT file is the core fallback.

## Prerequisites

- `Asteria_Executive_Review_Transcript.vtt` in OneDrive
- `Asteria_Leadership_Decision_Brief.docx` from Exercise 2
- Access to Microsoft Teams and Outlook

## Scenario 1 Recover decisions and commitments

### Practice 1 Extract the accountable meeting record

**Primary target:** Convert the transcript into a decision and action record while keeping missing information visible.

#### Steps

1. If the facilitator has provided an accessible Teams meeting recap, open that meeting in Teams. Otherwise, open Copilot Chat and reference `Asteria_Executive_Review_Transcript.vtt`.
2. Paste this prompt.

   ```text
   Goal: Create an accountable record of the Asteria executive review.

   Context: The record will be checked against the transcript before any follow-up is drafted.

   Source: Use only the referenced meeting transcript.

   Expected output:
   1. Decisions made
   2. Action items with owner and due date
   3. Risks and dependencies
   4. Questions that remain unresolved
   5. Transcript timestamp for each decision and action

   If the transcript does not state an owner or due date, write Not stated. Do not infer one.
   ```

3. Open the VTT file beside the result.
4. Check every decision and action against its timestamp.
5. Remove statements that were discussed but not agreed.
6. Copy the corrected record into the end of `Asteria_Leadership_Decision_Brief.docx` under a new heading:

   ```text
   Confirmed meeting record
   ```

#### Checkpoint

- Every decision and action has a matching transcript timestamp.
- Discussion points are not mislabelled as decisions.
- Missing owners or dates remain `Not stated`.

### Practice 2 Prepare the Teams update

**Primary target:** Draft a short Teams update that communicates only the confirmed decisions and actions.

#### Steps

1. Open the agreed practice chat or channel in Microsoft Teams.
2. Start a new post or message, but do not send it.
3. Use Copilot in Teams if available, or draft with Copilot Chat, using this prompt.

   ```text
   Draft a concise Teams update for the Asteria service-review team.

   Use only the confirmed meeting record I provide.
   Include:
   - the decision
   - up to three actions with owner and due date
   - one unresolved dependency
   - where the reviewed decision brief is stored

   Use a clear, professional tone. Do not add new commitments.
   ```

4. Paste the confirmed meeting record when Copilot requests the source.
5. Check that the message names only confirmed owners and dates.
6. Leave the draft unsent and copy it into your notes for review.

#### Checkpoint

- The Teams draft fits on one screen and contains no invented commitment.
- The decision, actions, and dependency match the meeting record.

## Scenario 2 Prepare the Outlook follow-up

### Practice 3 Draft the follow-up email

**Primary target:** Create an unsent Outlook follow-up that makes ownership and unresolved items easy to review.

#### Steps

1. Open Outlook and select `New mail`.
2. Enter this subject:

   ```text
   Asteria service review decisions and next actions
   ```

3. Open `Draft with Copilot` and paste this prompt.

   ```text
   Draft a follow-up email after the Asteria executive service review.

   Use the confirmed meeting record that I will paste below.
   Structure the message as:
   - Decision confirmed
   - Actions with owner and due date
   - Dependency or item still to confirm
   - Request for corrections before the next review

   Keep the tone concise and accountable. Do not invent recipients, owners, dates, or commitments. Do not say that the message has been approved.
   ```

4. Paste the confirmed meeting record below the prompt.
5. Generate the draft and compare it with the source record.
6. Keep the draft unsent. Do not add real recipients.

#### Checkpoint

- The email subject and body match the confirmed record.
- No real recipient has been added.
- The message asks for corrections and does not claim final approval.

## Expected Output

- A checked meeting record added to the decision brief
- An unsent Teams update
- An unsent Outlook follow-up email

<div class="voice-card"><strong>Pon:</strong> A transcript is evidence of what was said, not automatic proof of what was decided. The human check protects the line between discussion and commitment.</div>

[← Exercise 2](./02-kpi-to-decision-brief) · [Exercise 4 Evidence to executive story →](./04-evidence-to-executive-story)
