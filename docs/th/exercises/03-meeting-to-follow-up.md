# แบบฝึกหัดที่ 3 จากหลักฐานการประชุมสู่การติดตามผลที่รับผิดชอบได้

## Exercise Overview

ผู้นำ Asteria ได้หารือหลักฐานและตกลงการดำเนินการถัดไป คุณจะเปลี่ยน Transcript จำลองเป็น Decision Record ที่ตรวจสอบแล้ว จากนั้นเตรียมข้อความใน Teams และอีเมลใน Outlook โดยไม่ส่งจริง

> **License:** ต้องใช้ Microsoft 365 Copilot Premium การถอดเสียงและ Copilot ใน Teams ขึ้นอยู่กับนโยบายองค์กร ไฟล์ VTT ที่เตรียมไว้คือเส้นทางสำรองหลัก

## Prerequisites

- `Asteria_Executive_Review_Transcript.vtt` ใน OneDrive
- `Asteria_Leadership_Decision_Brief.docx` จากแบบฝึกหัดที่ 2
- เข้าถึง Microsoft Teams และ Outlook ได้

## Scenario 1 กู้คืนการตัดสินใจและคำมั่นที่ยืนยันได้

### Practice 1 สร้างบันทึกการประชุมที่ระบุความรับผิดชอบได้

**Primary target:** เปลี่ยน Transcript เป็นบันทึกการตัดสินใจและ Action Items โดยแสดงข้อมูลที่ยังขาดไว้อย่างชัดเจน

#### Steps

1. หากผู้สอนเตรียม Teams meeting recap ที่เข้าถึงได้ ให้เปิดการประชุมนั้นใน Teams หากไม่มี ให้เปิด Copilot Chat และอ้างอิง `Asteria_Executive_Review_Transcript.vtt`
2. วาง Prompt นี้

   ```text
   Goal: สร้างบันทึกที่ระบุความรับผิดชอบได้จากการประชุม Asteria executive review

   Context: บันทึกนี้จะถูกตรวจเทียบกับ Transcript ก่อนร่างข้อความติดตามผล

   Source: ใช้เฉพาะ Transcript การประชุมที่อ้างอิง

   Expected output:
   1. การตัดสินใจที่เกิดขึ้น
   2. Action items พร้อม owner และ due date
   3. ความเสี่ยงและ dependency
   4. คำถามที่ยังไม่สรุป
   5. Timestamp ใน Transcript ของการตัดสินใจและ Action แต่ละข้อ

   หาก Transcript ไม่ได้ระบุ owner หรือ due date ให้เขียน Not stated ห้ามอนุมานขึ้นเอง
   ```

3. เปิดไฟล์ VTT เทียบกับผลลัพธ์
4. ตรวจการตัดสินใจและ Action ทุกข้อกับ Timestamp
5. ลบข้อความที่เป็นเพียงการหารือแต่ยังไม่ได้ตกลง
6. คัดลอกบันทึกที่แก้แล้วไปไว้ท้าย `Asteria_Leadership_Decision_Brief.docx` ใต้หัวข้อใหม่:

   ```text
   Confirmed meeting record
   ```

#### Checkpoint

- การตัดสินใจและ Action ทุกข้อมี Timestamp ที่ตรงกับ Transcript
- ประเด็นที่หารือไม่ได้ถูกเรียกผิดว่าเป็นการตัดสินใจ
- owner หรือวันที่ที่ขาดยังคงเป็น `Not stated`

### Practice 2 เตรียมข้อความอัปเดตใน Teams

**Primary target:** ร่างข้อความ Teams แบบสั้น โดยสื่อสารเฉพาะการตัดสินใจและ Action ที่ยืนยันแล้ว

#### Steps

1. เปิด Chat หรือ Channel สำหรับการฝึกใน Microsoft Teams
2. เริ่ม Post หรือ Message ใหม่ แต่ยังไม่ส่ง
3. ใช้ Copilot in Teams หากมี หรือร่างด้วย Copilot Chat โดยใช้ Prompt นี้

   ```text
   ร่างข้อความ Teams แบบกระชับสำหรับทีม Asteria service review

   ใช้เฉพาะ Confirmed meeting record ที่ฉันจะให้
   เนื้อหาต้องมี:
   - การตัดสินใจ
   - Action ไม่เกิน 3 ข้อ พร้อม owner และ due date
   - dependency ที่ยังไม่สรุป 1 เรื่อง
   - ตำแหน่งที่จัดเก็บ Decision Brief ที่ตรวจสอบแล้ว

   ใช้น้ำเสียงที่ชัดเจนและเป็นมืออาชีพ ห้ามเพิ่มคำมั่นใหม่
   ```

4. วาง Confirmed meeting record เมื่อ Copilot ขอแหล่งข้อมูล
5. ตรวจว่าข้อความใช้เฉพาะ owner และวันที่ที่ยืนยันแล้ว
6. เก็บเป็น Draft โดยไม่ส่ง และคัดลอกไว้ใน Notes สำหรับทบทวน

#### Checkpoint

- Draft อ่านจบได้ในหนึ่งหน้าจอและไม่มีคำมั่นที่สร้างขึ้นใหม่
- การตัดสินใจ Action และ dependency ตรงกับบันทึกการประชุม

## Scenario 2 เตรียมอีเมลติดตามผลใน Outlook

### Practice 3 ร่างอีเมลติดตามผล

**Primary target:** สร้าง Outlook Draft ที่ยังไม่ส่ง และทำให้ผู้ตรวจเห็น owner กับเรื่องที่ยังไม่สรุปได้ง่าย

#### Steps

1. เปิด Outlook แล้วเลือก `New mail`
2. ใส่ Subject:

   ```text
   Asteria service review decisions and next actions
   ```

3. เปิด `Draft with Copilot` แล้ววาง Prompt นี้

   ```text
   ร่างอีเมลติดตามผลหลังการประชุม Asteria executive service review

   ใช้ Confirmed meeting record ที่ฉันจะวางไว้ด้านล่าง
   จัดโครงสร้างเป็น:
   - Decision confirmed
   - Actions พร้อม owner และ due date
   - Dependency หรือรายการที่ยังต้องยืนยัน
   - คำขอให้ตรวจแก้ก่อนการทบทวนครั้งถัดไป

   ใช้น้ำเสียงกระชับและชัดเจนเรื่องความรับผิดชอบ ห้ามสร้าง recipients, owners, dates หรือ commitments ขึ้นเอง และห้ามกล่าวว่าข้อความได้รับอนุมัติแล้ว
   ```

4. วาง Confirmed meeting record ต่อท้าย Prompt
5. สร้าง Draft แล้วเทียบกับบันทึกต้นทาง
6. เก็บ Draft ไว้โดยไม่ส่ง และไม่ใส่ผู้รับจริง

#### Checkpoint

- Subject และเนื้อหาอีเมลตรงกับบันทึกที่ยืนยันแล้ว
- ไม่มีผู้รับจริง
- อีเมลขอให้ตรวจแก้และไม่ได้อ้างว่าได้รับอนุมัติแล้ว

## Expected Output

- บันทึกการประชุมที่ตรวจแล้วและเพิ่มไว้ใน Decision Brief
- Teams update ที่ยังไม่ส่ง
- Outlook follow-up email ที่ยังไม่ส่ง

<div class="voice-card"><strong>พล:</strong> Transcript เป็นหลักฐานว่าใครพูดอะไร แต่ไม่ได้แปลว่าทุกประโยคคือข้อตกลง การตรวจโดยมนุษย์ช่วยรักษาเส้นแบ่งระหว่าง “คุยกันแล้ว” กับ “ตกลงทำแล้ว”</div>

[← แบบฝึกหัดที่ 2](./02-kpi-to-decision-brief) · [แบบฝึกหัดที่ 4 จากหลักฐานสู่เรื่องเล่าสำหรับผู้บริหาร →](./04-evidence-to-executive-story)
