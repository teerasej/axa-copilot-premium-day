# แบบฝึกหัดที่ 4 จาก Evidence Pack สู่เรื่องเล่าสำหรับผู้บริหาร

## Exercise Overview

หลักฐาน ผลวิเคราะห์ และบันทึกการประชุมพร้อมแล้ว คุณจะใช้ PowerPoint สร้าง Executive Update แบบกระชับ จากนั้นตรวจทุกข้อกล่าวอ้างกับแหล่งข้อมูลก่อนบันทึกผลงานสุดท้าย

> **License:** ต้องใช้ Microsoft 365 Copilot Premium และ Copilot in PowerPoint เส้นทางหลักอ้างอิง Word Brief ที่ตรวจสอบแล้ว โดยไม่ต้องอ้างอิง Teams meeting โดยตรง

## Prerequisites

- `Asteria_Leadership_Decision_Brief.docx` ที่มี Confirmed meeting record
- `Asteria_Service_KPI_Reviewed.xlsx`
- PowerPoint for the web หรือ PowerPoint client ที่รองรับ

## Scenario 1 สร้าง Executive Update

### Practice 1 สร้าง Presentation จากหลักฐานที่ตรวจสอบแล้ว

**Primary target:** สร้าง PowerPoint แบบสั้นจาก Decision Brief ที่ตรวจสอบแล้ว โดยไม่เพิ่มข้อกล่าวอ้างที่แหล่งข้อมูลไม่รองรับ

#### Steps

1. เปิด PowerPoint แล้วเลือก `Create with Copilot` หรือจุดเริ่มต้นสำหรับสร้าง Presentation ด้วย Copilot ที่มีใน Client ของคุณ
2. เลือก `Asteria_Leadership_Decision_Brief.docx` เป็นไฟล์อ้างอิง
3. วาง Prompt นี้

   ```text
   Goal: สร้าง Executive Update สำหรับ Asteria service review

   Context: ผู้ชมคือทีมผู้นำข้ามสายงาน Presentation ต้องสนับสนุนการตัดสินใจ ไม่ใช่เล่ารายละเอียดทุกอย่างซ้ำ

   Source: ใช้เฉพาะ Asteria_Leadership_Decision_Brief.docx ห้ามเพิ่มข้อเท็จจริงจากเว็บหรือความรู้ทั่วไปเกี่ยวกับธุรกิจประกัน

   Expected output: 6 slides
   1. Decision ในหนึ่งประโยค
   2. Verified evidence
   3. ความหมายที่เป็นไปได้ของหลักฐาน โดยระบุว่าเป็น interpretation
   4. Confirmed actions พร้อม owners และ due dates
   5. Risks, dependencies และ unresolved questions
   6. Next review และ decision gate

   ใช้ข้อความกระชับ เพิ่ม source note ใน Slide ที่มีตัวเลข และเขียน To confirm เมื่อแหล่งข้อมูลไม่มี owner, date, target หรือ cause
   ```

4. ตรวจ Outline ที่ Copilot เสนอก่อนสร้าง Deck หาก Client ของคุณมีขั้นตอนนี้
5. สร้าง Presentation
6. หากมีภาพตกแต่งที่สื่อข้อเท็จจริงซึ่งไม่มีในแหล่งข้อมูล ให้แทนที่ด้วย Shape เรียบง่ายหรือลบออก
7. บันทึก Presentation เป็น:

   ```text
   Asteria_Executive_Update.pptx
   ```

#### Checkpoint

- Deck มี 6 Slides ตามลำดับที่กำหนด
- ตัวเลขทุกตัวมี Source note
- Interpretation แตกต่างจาก Verified evidence อย่างเห็นได้ชัด
- ไม่มี Slide ใดเพิ่ม cause, target, owner, date หรือ financial impact ใหม่

### Practice 2 ตรวจสอบหลักฐานของทุก Slide

**Primary target:** เทียบทุก Slide กับไฟล์ Word และ Excel ที่ตรวจสอบแล้ว และแก้เนื้อหาที่ไม่มีหลักฐานรองรับหรือชวนให้เข้าใจผิด

#### Steps

1. เปิด `Asteria_Leadership_Decision_Brief.docx` และ `Asteria_Service_KPI_Reviewed.xlsx` ข้าง Presentation
2. สำหรับทุก Slide ให้บันทึก:
   - ข้อกล่าวอ้างที่กำลังสื่อ
   - ไฟล์และตำแหน่งแหล่งข้อมูล
   - ข้อความนั้นมีหลักฐานรองรับหรือไม่
   - สิ่งที่ต้องแก้ไข
3. ถาม Copilot in PowerPoint ด้วย Prompt นี้:

   ```text
   ตรวจ Presentation นี้เพื่อหาข้อกล่าวอ้างที่ไม่มีหลักฐานรองรับจาก Decision Brief ที่อ้างอิง แสดงหมายเลข Slide ข้อกล่าวอ้าง และหลักฐานที่ยังขาด ห้ามเขียน Slide ใหม่ในตอนนี้
   ```

4. ใช้ผลตรวจของ Copilot เป็นความเห็นที่สอง แล้วเทียบกับการตรวจแหล่งข้อมูลของคุณเอง
5. แก้ ติดป้าย หรือลบข้อกล่าวอ้างที่ไม่มีหลักฐานรองรับทุกข้อ
6. ยืนยันว่า Action Slide ตรงกับ Meeting Record ล่าสุด ไม่ใช่ Draft ก่อนหน้า
7. บันทึก Presentation ที่แก้แล้ว

#### Checkpoint

- ทุก Slide ผ่านการตรวจเทียบกับแหล่งข้อมูลที่ระบุชื่อได้
- ข้อกล่าวอ้างที่ไม่มีหลักฐานถูกแก้ ติดป้าย หรือลบแล้ว
- Decision และ Actions ตรงกับ Confirmed meeting record ล่าสุด

### Practice 3 เตรียมส่งมอบผลงาน

**Primary target:** จัดชุดผลงานสุดท้ายเพื่อให้ผู้ตรวจคนอื่นเข้าใจเส้นทางของหลักฐานได้

#### Steps

1. ตรวจว่าโฟลเดอร์ OneDrive มีไฟล์:
   - `Asteria_Grounded_Evidence_Brief.docx`
   - `Asteria_Service_KPI_Reviewed.xlsx`
   - `Asteria_Leadership_Decision_Brief.docx`
   - `Asteria_Executive_Update.pptx`
2. เปิดทุกไฟล์หนึ่งครั้ง และยืนยันว่าเป็น Version ล่าสุด
3. อย่า Share โฟลเดอร์ออกนอก Workshop เว้นแต่ผู้สอนกำหนด
4. ไปยัง Wrap-up แล้วเลือกการทดลองใช้ที่ปลอดภัยกับงานจริงหนึ่งเรื่อง

#### Checkpoint

- ผลงานทั้งสี่ชิ้นเชื่อมต่อกันเป็นเส้นทางที่ตรวจย้อนกลับได้ ตั้งแต่หลักฐานต้นทางไปจนถึงการสื่อสารสำหรับผู้บริหาร

## Expected Output

- `Asteria_Executive_Update.pptx` ที่ตรวจเทียบกับ Evidence Pack แล้ว
- ชุดผลงาน Workshop 4 ชิ้นใน OneDrive ที่ตรวจย้อนกลับได้

<div class="voice-card"><strong>พล:</strong> Slide ที่โน้มน้าวใจได้ ไม่ได้แปลว่าเชื่อถือได้เสมอ การตรวจรอบสุดท้ายทำให้เรื่องเล่าชัดขึ้น โดยไม่ทำให้ความจริงลดลง</div>

[← แบบฝึกหัดที่ 3](./03-meeting-to-follow-up) · [Wrap-up และการนำไปใช้กับงาน →](../wrap-up)
