# Exercise 1 Ground the executive brief

## Exercise Overview

Asteria Insurance leaders need a short view of a service issue before their review meeting. You will compare a general Copilot answer with an answer grounded in authorized files, then save a checked evidence brief for the next exercise.

> **License:** Microsoft 365 Copilot Premium is required. Work IQ must be available and enabled for the grounded path.

## Prerequisites

- Copilot Chat signed in with your work account
- `Asteria_Operational_Context.docx` in your OneDrive practice folder
- `Asteria_Service_KPI_28days.xlsx` in the same folder
- Permission to open both files

## Scenario 1 Compare a general answer with grounded work

The leadership team asks what is happening, why it matters, and what decision is needed. First, observe what Copilot can and cannot know without the supplied evidence.

### Practice 1 Establish the baseline

**Primary target:** Ask a general business question and identify which parts of the answer are generic rather than supported by Asteria evidence.

#### Steps

1. Open Copilot Chat with your work account.
2. Turn `Work IQ` off, then start a new chat without attaching or referencing a file. This keeps the baseline grounded only in the prompt and any permitted web information.
3. Paste this prompt and select `Send`.

   ```text
   An insurance company has slower claims turnaround, more customer complaints, and lower digital conversion. Prepare a short executive brief with the likely causes, business impact, and three recommended actions.
   ```

4. Read the result and mark three statements that sound plausible but do not have an Asteria source.
5. Do not copy this answer into a business document.

#### Checkpoint

- You can point to at least three claims that are generic, inferred, or unsupported by the supplied evidence.
- The answer does not cite either Asteria practice file.

### Practice 2 Ground the answer in authorized files

**Primary target:** Use Work IQ and explicit file references to produce a brief whose facts can be traced to authorized sources.

#### Steps

1. Turn `Work IQ` on in Copilot Chat. If you cannot find the control, ask the facilitator to verify your account.
2. Start a new chat.
3. Add both practice files with the available file picker or type `/` and select each file:
   - `Asteria_Operational_Context.docx`
   - `Asteria_Service_KPI_28days.xlsx`
   If a recently uploaded file does not appear, open it once from OneDrive, wait briefly, and try the file picker again. Do not replace it with an unrelated work file.
4. Paste the prompt below.

   ```text
   Goal: Prepare an evidence-based leadership brief for the Asteria service review.

   Context: Leaders need to understand what happened, why it matters, and what decision is needed. Do not invent causes, owners, dates, or targets.

   Sources: Use only Asteria_Operational_Context.docx and Asteria_Service_KPI_28days.xlsx.

   Expected output:
   1. Verified facts
   2. Assumptions or interpretations
   3. Open questions
   4. Source used for each fact
   5. One recommended next decision

   If a source does not support a statement, label it as an assumption or omit it.
   ```

5. Check each fact against the named source. Open the source beside Copilot when necessary.
6. Correct any item that uses the wrong period, metric, or source.

#### Checkpoint

- Every fact in the grounded brief names a source or a workbook location.
- Assumptions are visibly separated from facts.
- Missing information appears as an open question, not an invented answer.

### Practice 3 Save the checked handoff

**Primary target:** Save the reviewed brief in Word so the verified context can be reused in the next exercise.

#### Steps

1. Open a blank document in Word.
2. Add this title:

   ```text
   Asteria Grounded Evidence Brief
   ```

3. Copy only the reviewed result from Practice 2 into the document.
4. Add a final heading named:

   ```text
   Human review notes
   ```

5. Under that heading, record one corrected claim and one open question.
6. Save the document in the OneDrive practice folder as:

   ```text
   Asteria_Grounded_Evidence_Brief.docx
   ```

#### Checkpoint

- The saved document contains facts, assumptions, open questions, sources, and human review notes.

## Expected Output

- `Asteria_Grounded_Evidence_Brief.docx`, reviewed and saved in OneDrive
- A visible comparison between an ungrounded answer and a source-grounded answer

<div class="voice-card"><strong>Pon:</strong> Grounding is like attaching receipts to an expense claim. A confident statement is not enough; the reviewer needs to see what supports it.</div>

[← Before you begin](../before-you-begin) · [Exercise 2 Transparent KPI analysis →](./02-kpi-to-decision-brief)
