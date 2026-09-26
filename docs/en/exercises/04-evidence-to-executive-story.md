# Exercise 4 From evidence pack to executive story

## Exercise Overview

The evidence, analysis, and meeting record are ready. You will use PowerPoint to create a concise executive update, then conduct a claim-by-claim review before saving the final workshop artifact.

> **License:** Microsoft 365 Copilot Premium and Copilot in PowerPoint are required. The core path references the reviewed Word brief; direct Teams meeting references are not required.

## Prerequisites

- `Asteria_Leadership_Decision_Brief.docx` with the confirmed meeting record
- `Asteria_Service_KPI_Reviewed.xlsx`
- PowerPoint for the web or another supported PowerPoint client

## Scenario 1 Create the executive update

### Practice 1 Build the presentation from reviewed evidence

**Primary target:** Create a short PowerPoint narrative from the reviewed decision brief without adding unsupported claims.

#### Steps

1. Open PowerPoint and choose `Create with Copilot` or the equivalent Copilot presentation entry point available in your client.
2. Select `Asteria_Leadership_Decision_Brief.docx` as the reference file.
3. Paste this prompt.

   ```text
   Goal: Create an executive update for the Asteria service review.

   Context: The audience is a cross-functional leadership team. The presentation must support a decision, not retell every detail.

   Source: Use only Asteria_Leadership_Decision_Brief.docx. Do not add facts from the web or general insurance knowledge.

   Expected output: Six slides.
   1. Decision in one sentence
   2. Verified evidence
   3. What the evidence may mean, labelled as interpretation
   4. Confirmed actions with owners and due dates
   5. Risks, dependencies, and unresolved questions
   6. Next review and decision gate

   Use concise text. Include a source note on slides containing numbers. Write To confirm wherever the source lacks an owner, date, target, or cause.
   ```

4. Review the proposed outline before generating the deck when that option is available.
5. Create the presentation.
6. Replace decorative images that imply facts not contained in the source with simple shapes or remove them.
7. Save the presentation as:

   ```text
   Asteria_Executive_Update.pptx
   ```

#### Checkpoint

- The deck contains six slides in the requested sequence.
- Every number has a source note.
- Interpretation is visibly different from verified evidence.
- No slide introduces a new cause, target, owner, date, or financial impact.

### Practice 2 Conduct the evidence review

**Primary target:** Compare each slide with the reviewed Word and Excel artifacts and correct unsupported or misleading content.

#### Steps

1. Open `Asteria_Leadership_Decision_Brief.docx` and `Asteria_Service_KPI_Reviewed.xlsx` beside the presentation.
2. For every slide, record:
   - the claim being made
   - the source file and location
   - whether the wording is supported
   - the required correction
3. Ask Copilot in PowerPoint this review question:

   ```text
   Review this presentation for claims that are not supported by the referenced decision brief. List the slide number, the claim, and what source evidence is missing. Do not rewrite the slides yet.
   ```

4. Treat Copilot’s review as a second opinion. Compare it with your own source check.
5. Correct or remove every unsupported claim.
6. Confirm that the action slide matches the meeting record rather than an earlier draft.
7. Save the corrected presentation.

#### Checkpoint

- Every slide has been checked against a named source.
- Unsupported claims have been corrected, labelled, or removed.
- The decision and actions match the latest confirmed meeting record.

### Practice 3 Prepare the handoff

**Primary target:** Package the final workshop artifacts so another reviewer can understand the evidence trail.

#### Steps

1. Confirm that your OneDrive folder contains:
   - `Asteria_Grounded_Evidence_Brief.docx`
   - `Asteria_Service_KPI_Reviewed.xlsx`
   - `Asteria_Leadership_Decision_Brief.docx`
   - `Asteria_Executive_Update.pptx`
2. Open each file once and verify that the latest version is saved.
3. Do not share the folder outside the workshop unless instructed by the facilitator.
4. Continue to the wrap-up and choose one safe workplace experiment.

#### Checkpoint

- The four artifacts form a traceable chain from source evidence to executive communication.

## Expected Output

- `Asteria_Executive_Update.pptx`, reviewed against the evidence pack
- A complete four-artifact workshop handoff in OneDrive

<div class="voice-card"><strong>Pon:</strong> A persuasive slide is not automatically a trustworthy slide. The final review checks that the story became clearer without becoming less true.</div>

[← Exercise 3](./03-meeting-to-follow-up) · [Wrap-up and workplace transfer →](../wrap-up)
