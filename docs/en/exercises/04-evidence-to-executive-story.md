# Exercise 4 Meeting to executive deck

## Exercise Overview

You will turn a meeting record into a five-slide executive update. Use an approved Teams meeting or chat when direct reference is available, or use the supplied Asteria recap so every participant can complete the exercise.

> **License:** Microsoft 365 Copilot Premium and Copilot in PowerPoint are required. Direct Teams meeting or chat reference through Agent Mode is tenant-enhanced; creating a presentation from the prepared Word recap is the guaranteed core route.

## Prerequisites

- `Asteria_Teams_Meeting_Recap.docx`
- `Asteria_Service_KPI_Reviewed.xlsx` and `Asteria_Leadership_Decision_Brief.docx` for the Asteria route
- PowerPoint for the web or another supported PowerPoint client
- Optional: a permitted Teams meeting or chat that passes the facilitator’s safety check

## Scenario 1 Choose a safe source

### Practice 1 Select and validate the source route

**Primary target:** Choose one permitted source route and record its evidence boundary before generating slides.

#### Steps

1. Choose exactly one route:
   - **Route A — Own approved Teams source:** Use a permitted meeting or chat only when access, classification, permissions, classroom use, and `Agent Mode` in PowerPoint are confirmed.
   - **Route B — Guaranteed fallback:** Use `Asteria_Teams_Meeting_Recap.docx`.
2. Do not combine real organizational content with the fictional Asteria case.
3. For Route A, record the meeting or chat title, date, approved purpose, and who authorized classroom use. If any answer is unclear, switch to Route B.
4. For Route B, scan the recap’s confirmed decisions, actions, conditional statements, unresolved dependencies, next decision gate, and source boundary.
5. In your own notes, write three short lists: `Confirmed`, `Discussion only`, and `To confirm`.

#### Checkpoint

- One source route is selected and its permission boundary is clear.
- Real and fictional content have not been mixed.
- Decisions are separated from discussion and missing information before slide generation.

## Scenario 2 Create and verify the executive update

### Practice 2 Create a five-slide executive update

**Primary target:** Generate a concise five-slide deck that preserves the meeting’s decision boundaries.

#### Steps

1. Start the route you selected:
   - **Route A:** Open `Agent Mode` in PowerPoint and reference the approved Teams meeting or chat.
   - **Route B:** Open a blank presentation, select Copilot, choose `Create presentation from file`, and select `Asteria_Teams_Meeting_Recap.docx`.
2. Paste this prompt.

   ```text
   Goal: Create a five-slide executive update from the selected meeting source.

   Context: The audience is a cross-functional leadership team. The deck must distinguish discussion from confirmed commitments.

   Source: Use only the selected meeting or chat, or Asteria_Teams_Meeting_Recap.docx. Do not add facts from the web or general insurance knowledge.

   Expected output: Exactly five slides.
   1. Decision headline
   2. Evidence and important patterns
   3. Discussion versus confirmed decision
   4. Actions, owners, dates, and unresolved dependencies
   5. Next decision gate

   Use concise text. Write To confirm wherever the source does not provide information. Do not invent a cause, target, owner, date, access approval, or financial effect.
   ```

3. Review the proposed outline before generating when that option is available.
4. Generate the deck. If Copilot creates more or fewer than five slides, use this follow-up prompt:

   ```text
   Restructure this presentation into exactly five slides using the required sequence. Merge repeated content and keep every confirmed decision, action, dependency, and To confirm item. Do not add new facts.
   ```

   If the result still differs, merge or remove slides manually while preserving the required sequence.
5. Replace decorative images that imply unsupported facts with simple shapes or remove them.
6. For Route B, save as:

   ```text
   Asteria_Executive_Update.pptx
   ```

#### Checkpoint

- The deck contains exactly five slides in the requested sequence.
- Slide 3 visibly separates discussion from a confirmed decision.
- Missing information says `To confirm`.
- No image or statement implies an unsupported fact.

### Practice 3 Review every slide

**Primary target:** Trace every claim to the selected meeting source and correct unsupported content.

#### Steps

1. In each slide’s `Speaker Notes`, record the claim, source location, support status, and correction required. Start the note with `Source:`.
2. Ask Copilot in PowerPoint:

   ```text
   Review every slide against the selected meeting source. List the slide number, claim, supporting source location, and missing evidence. Flag discussion rewritten as a decision and missing information not labelled To confirm. Do not rewrite the slides yet.
   ```

3. Treat Copilot’s review as a second opinion and complete your own source check.
4. For the Asteria route, compare every numeric claim with `Asteria_Service_KPI_Reviewed.xlsx` and `Asteria_Leadership_Decision_Brief.docx` as well as the recap.
5. Correct, label, or remove every unsupported claim. Remove decorative images that imply unsupported causes, outcomes, or financial effects.
6. Confirm that actions, owners, dates, dependencies, and the next decision gate match the source.
7. Save the corrected presentation and keep it with the workshop artifact chain.

#### Checkpoint

- Every slide has a named source location.
- Every slide has a `Source:` entry in `Speaker Notes`.
- Discussion has not been promoted into a commitment.
- For Asteria, numeric claims agree with the reviewed workbook and decision brief.
- Unsupported claims and misleading images have been corrected or removed.

## Expected Output

- A five-slide executive update reviewed claim by claim
- `Asteria_Executive_Update.pptx` for the guaranteed fallback route
- A traceable source record in `Speaker Notes` showing what was confirmed, discussed, and still missing

<div class="voice-card"><strong>Pon:</strong> A meeting is like a busy airport board: many items are visible, but only some flights are confirmed. Your deck should never turn “discussed” into “departed.”</div>

[← Exercise 3](./03-meeting-to-follow-up) · [Wrap-up and workplace transfer →](../wrap-up)
