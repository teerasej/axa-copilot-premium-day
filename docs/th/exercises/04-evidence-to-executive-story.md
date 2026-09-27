# แบบฝึกหัดที่ 4 จาก Meeting สู่ Executive Deck

## Exercise Overview

คุณจะเปลี่ยน Meeting record ให้เป็น Executive Update 5 Slides ใช้ Teams meeting หรือ chat ที่ได้รับอนุมัติเมื่อสามารถ Reference โดยตรงได้ หรือใช้ Asteria recap ที่เตรียมไว้เพื่อให้ผู้เรียนทุกคนทำแบบฝึกหัดสำเร็จได้

> **License:** ต้องใช้ Microsoft 365 Copilot Premium และ Copilot in PowerPoint การ Reference Teams meeting หรือ chat โดยตรงผ่าน Agent Mode เป็น Tenant-enhanced path ส่วนการสร้าง Presentation จาก Word recap ที่เตรียมไว้เป็น Core path ที่รับประกันว่าทำได้

## Prerequisites

- `Asteria_Teams_Meeting_Recap.docx`
- `Asteria_Service_KPI_Reviewed.xlsx` และ `Asteria_Leadership_Decision_Brief.docx` สำหรับเส้นทาง Asteria
- PowerPoint for the web หรือ PowerPoint client ที่รองรับ
- ทางเลือก: Teams meeting หรือ chat ที่ได้รับอนุญาตและผ่าน Safety check ของผู้สอน

## Scenario 1 เลือก Source ที่ปลอดภัย

### Practice 1 เลือกและตรวจ Source route

**Primary target:** เลือก Source route ที่ได้รับอนุญาตหนึ่งเส้นทาง และบันทึกขอบเขตของหลักฐานก่อนสร้าง Slides

#### Steps

1. เลือกเพียงหนึ่งเส้นทาง:
   - **Route A — Own approved Teams source:** ใช้ Meeting หรือ Chat ที่ได้รับอนุญาต เมื่อยืนยัน Access, Classification, Permission, การใช้ในชั้นเรียน และ `Agent Mode` ใน PowerPoint แล้วเท่านั้น
   - **Route B — Guaranteed fallback:** ใช้ `Asteria_Teams_Meeting_Recap.docx`
2. ห้ามผสมข้อมูลจริงขององค์กรกับเรื่องสมมติของ Asteria
3. สำหรับ Route A ให้บันทึกชื่อ Meeting หรือ Chat, วันที่, วัตถุประสงค์ที่อนุมัติ และผู้อนุมัติให้ใช้ในชั้นเรียน หากข้อใดไม่ชัด ให้เปลี่ยนเป็น Route B
4. สำหรับ Route B ให้อ่าน Confirmed decisions, Actions, Conditional statements, Unresolved dependencies, Next decision gate และ Source boundary ใน Recap
5. เขียนรายการสั้น 3 ชุดในบันทึกของคุณ: `Confirmed`, `Discussion only` และ `To confirm`

#### Checkpoint

- เลือก Source route เพียงหนึ่งเส้นทางและขอบเขต Permission ชัดเจน
- ไม่ผสมข้อมูลจริงกับข้อมูลสมมติ
- แยก Decision, Discussion และข้อมูลที่ยังขาดก่อนสร้าง Slides แล้ว

## Scenario 2 สร้างและตรวจ Executive Update

### Practice 2 สร้าง Executive Update 5 Slides

**Primary target:** สร้าง Deck 5 Slides ที่กระชับและรักษาเส้นแบ่งของ Decision ใน Meeting record

#### Steps

1. เริ่มตาม Route ที่เลือก:
   - **Route A:** เปิด `Agent Mode` ใน PowerPoint แล้ว Reference Teams meeting หรือ chat ที่อนุมัติ
   - **Route B:** เปิด Blank presentation เลือก Copilot เลือก `Create presentation from file` แล้วเลือก `Asteria_Teams_Meeting_Recap.docx`
2. วาง Prompt นี้

   ```text
   Goal: สร้าง Executive Update 5 Slides จาก Meeting source ที่เลือก

   Context: ผู้ชมคือทีมผู้นำข้ามสายงาน Deck ต้องแยก Discussion ออกจาก Confirmed commitment ให้ชัดเจน

   Source: ใช้เฉพาะ Meeting หรือ Chat ที่เลือก หรือ Asteria_Teams_Meeting_Recap.docx ห้ามเพิ่มข้อเท็จจริงจากเว็บหรือความรู้ทั่วไปเกี่ยวกับธุรกิจประกัน

   Expected output: 5 Slides เท่านั้น
   1. Decision headline
   2. Evidence and important patterns
   3. Discussion versus confirmed decision
   4. Actions, owners, dates, and unresolved dependencies
   5. Next decision gate

   ใช้ข้อความกระชับ เขียน To confirm เมื่อ Source ไม่มีข้อมูล และห้ามสร้าง Cause, Target, Owner, Date, Access approval หรือ Financial effect ขึ้นเอง
   ```

3. ตรวจ Proposed outline ก่อน Generate หาก Client ของคุณมีขั้นตอนนี้
4. สร้าง Deck หาก Copilot สร้างมากกว่าหรือน้อยกว่า 5 Slides ให้ใช้ Follow-up prompt นี้:

   ```text
   จัด Presentation นี้ใหม่ให้มี 5 Slides ตามลำดับที่กำหนด รวมเนื้อหาที่ซ้ำ และเก็บ Confirmed decision, Action, Dependency และรายการ To confirm ให้ครบ ห้ามเพิ่มข้อเท็จจริงใหม่
   ```

   หากผลยังไม่ตรง ให้ Merge หรือลบ Slides ด้วยตนเองโดยรักษาลำดับที่กำหนด
5. แทนที่ภาพตกแต่งที่สื่อข้อเท็จจริงซึ่งไม่มีหลักฐานด้วย Shape เรียบง่าย หรือลบออก
6. สำหรับ Route B ให้บันทึกเป็น:

   ```text
   Asteria_Executive_Update.pptx
   ```

#### Checkpoint

- Deck มี 5 Slides ตามลำดับที่กำหนด
- Slide 3 แยก Discussion ออกจาก Confirmed decision อย่างเห็นได้ชัด
- ข้อมูลที่ยังขาดใช้คำว่า `To confirm`
- ไม่มีภาพหรือข้อความใดสื่อข้อเท็จจริงที่ Source ไม่รองรับ

### Practice 3 ตรวจทุก Slide

**Primary target:** ตรวจย้อนกลับ Claim ทุกข้อไปยัง Meeting source ที่เลือก และแก้เนื้อหาที่ไม่มีหลักฐานรองรับ

#### Steps

1. ใน `Speaker Notes` ของทุก Slide ให้บันทึก Claim, Source location, Support status และสิ่งที่ต้องแก้ โดยขึ้นต้นด้วย `Source:`
2. ถาม Copilot in PowerPoint:

   ```text
   ตรวจทุก Slide เทียบกับ Meeting source ที่เลือก แสดงหมายเลข Slide, Claim, Source location ที่รองรับ และ Evidence ที่ยังขาด ระบุกรณีที่ Discussion ถูกเขียนเป็น Decision และข้อมูลที่ขาดแต่ไม่ได้เขียน To confirm ห้ามแก้ Slide ในตอนนี้
   ```

3. ใช้ผลตรวจของ Copilot เป็นความเห็นที่สอง แล้วทำ Source check ของคุณเองให้ครบ
4. สำหรับเส้นทาง Asteria ให้เทียบ Numeric claim ทุกข้อกับ `Asteria_Service_KPI_Reviewed.xlsx`, `Asteria_Leadership_Decision_Brief.docx` และ Recap
5. แก้ ติดป้าย หรือลบ Claim ที่ไม่มีหลักฐาน และลบภาพตกแต่งที่สื่อ Cause, Outcome หรือ Financial effect ที่ Source ไม่รองรับ
6. ยืนยันว่า Actions, Owners, Dates, Dependencies และ Next decision gate ตรงกับ Source
7. บันทึก Presentation ที่แก้แล้วและเก็บไว้ใน Artifact chain ของ Workshop

#### Checkpoint

- ทุก Slide ระบุ Source location ได้
- ทุก Slide มีรายการ `Source:` ใน `Speaker Notes`
- Discussion ไม่ถูกยกระดับเป็น Commitment
- สำหรับ Asteria ตัวเลขตรงกับ Workbook และ Decision Brief ที่ตรวจแล้ว
- Claim และภาพที่ชวนให้เข้าใจผิดถูกแก้หรือลบแล้ว

## Expected Output

- Executive Update 5 Slides ที่ผ่านการตรวจ Claim ทีละข้อ
- `Asteria_Executive_Update.pptx` สำหรับ Guaranteed fallback route
- Source record ใน `Speaker Notes` ที่ตรวจย้อนกลับได้ว่าอะไร Confirmed, Discussed หรือยัง Missing

<div class="voice-card"><strong>พล:</strong> Meeting เหมือนป้ายเที่ยวบินที่สนามบินครับ มีหลายรายการให้เห็น แต่มีเพียงบางเที่ยวที่ Confirmed อย่าให้ Deck เปลี่ยนคำว่า “คุยแล้ว” เป็น “ออกเดินทางแล้ว”</div>

[← แบบฝึกหัดที่ 3](./03-meeting-to-follow-up) · [Wrap-up และการนำไปใช้กับงาน →](../wrap-up)
