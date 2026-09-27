# แบบฝึกหัดที่ 3 จากหลักฐานการสื่อสารสู่การติดตามผลที่รับผิดชอบได้

## Exercise Overview

ผู้นำ Asteria ต้องเปลี่ยนข้อมูลจากหลายช่องทางให้เป็นคำเชิญประชุม บันทึกการตัดสินใจที่ยืนยันแล้ว และข้อความติดตามผลที่ชัดเจน เราจะใช้ไฟล์ Email, Chat, Meeting recap และ Transcript ที่เตรียมไว้ เพื่อให้เส้นทางหลักไม่ต้องพึ่ง Mailbox ใน Outlook หรือ Meeting ใน Teams ที่ตั้งค่าไว้ล่วงหน้า

> **License:** เส้นทางหลักต้องใช้ Microsoft 365 Copilot Premium สำหรับ Copilot Chat และ Word ส่วน Copilot ใน Teams และ Outlook ขึ้นอยู่กับ Policy, Client Version และการ Rollout ของ Tenant จึงเป็นเส้นทางเสริม ไม่ใช่เงื่อนไขในการทำแบบฝึกหัดให้สำเร็จ

## Prerequisites

- `Asteria_Email_Thread.docx` ใน OneDrive
- `Asteria_Meeting_Chat.docx` ใน OneDrive
- `Asteria_Teams_Meeting_Recap.docx` ใน OneDrive
- `Asteria_Executive_Review_Transcript.vtt` ใน OneDrive
- `Asteria_Communication_Checklist.docx` ใน OneDrive
- `Asteria_Leadership_Decision_Brief.docx` จากแบบฝึกหัดที่ 2
- ใช้งาน Copilot Chat และ Word ได้

### ระดับความสามารถที่ใช้

1. **Core file path:** ทุกคนทำงานจากไฟล์ที่เตรียมไว้ด้วย Copilot Chat และ Word
2. **Tenant-enhanced path:** หากผู้สอนยืนยันว่ามีพื้นที่ฝึกที่ปลอดภัย ให้นำ Draft ที่ตรวจแล้วไปวางใน Teams หรือ Outlook และเก็บไว้โดยไม่ส่ง
3. **Facilitator demo:** ผู้สอนอาจสาธิต Teams recap หรือความสามารถ Email-to-meeting ของ Outlook หลังทดสอบด้วยบัญชีผู้เรียน AXA ทั่วไปแล้ว ผู้เรียนไม่จำเป็นต้องทำขั้นตอนนี้

## Scenario 1 เตรียมการประชุมเพื่อตัดสินใจ

### Practice 1 สร้าง Meeting Request Draft จากหลักฐานการสื่อสาร

**Primary target:** เปลี่ยน Email และ Chat ที่เตรียมไว้ให้เป็น Meeting Request ที่มุ่งสู่การตัดสินใจ โดยไม่เรียกข้อเสนอว่าเป็น Action ที่อนุมัติแล้ว

#### Steps

1. เปิด Copilot Chat แล้วอ้างอิงไฟล์:
   - `Asteria_Email_Thread.docx`
   - `Asteria_Meeting_Chat.docx`
2. วาง Prompt นี้

   ```text
   Goal: เตรียม Meeting Request สำหรับ Asteria executive service review

   Context: Email thread และ Meeting chat มีคำถาม ข้อจำกัด และข้อเสนอแบบมีเงื่อนไข แต่ยังไม่มีการตัดสินใจที่อนุมัติแล้ว

   Sources: ใช้เฉพาะ Asteria_Email_Thread.docx และ Asteria_Meeting_Chat.docx

   Expected output:
   - Meeting title
   - Purpose หนึ่งประโยค
   - Decision question
   - Agenda 4 ข้อ
   - บทบาทของผู้เข้าร่วม โดยไม่ใช้ Email address
   - Pre-read files
   - Prerequisite ที่ยังไม่สรุป

   ระบุ Proposed ให้ Action ทุกข้อที่ยังเป็นข้อเสนอ ห้ามสร้าง Recipient, Approval, Owner, Date หรือ Outcome ขึ้นเอง
   ```

3. เทียบ Draft กับ Source ทั้งสองไฟล์ แล้วลบข้อความที่เปลี่ยนการสนับสนุน ความกังวล หรือข้อเสนอแบบมีเงื่อนไขให้กลายเป็นการตัดสินใจ
4. บันทึกผลที่ตรวจแล้วใน Word เป็น:

   ```text
   Asteria_Meeting_Request_Draft.docx
   ```

5. ใช้หัวข้อ `Meeting request review` ใน `Asteria_Communication_Checklist.docx` และบันทึกการแก้อย่างน้อยหนึ่งจุด
6. **Tenant-enhanced path:** หากผู้สอนยืนยันว่า Outlook พร้อม ให้สร้าง Calendar Event ใหม่แล้ววางเนื้อหาที่ตรวจแล้ว โดยไม่ใส่ Attendee และไม่กดส่ง

#### Checkpoint

- Meeting Request มี Decision Question หนึ่งข้อและ Agenda สี่ข้อที่อ้างอิงจากไฟล์
- ข้อเสนอยังคงเป็นข้อเสนอ และไม่ได้ทำให้เข้าใจว่าการประชุมตัดสินใจแล้ว
- Draft ไม่มีผู้รับจริงและยังไม่ถูกส่ง

## Scenario 2 ยืนยันผลการประชุม

### Practice 2 กู้คืน Decision และ Commitment จาก Meeting Record

**Primary target:** ร่าง Decision and Action Record จาก Recap ที่เตรียมไว้ แล้วให้คนตรวจทุก Commitment กับ Timestamp ใน Transcript

#### Steps

1. เปิด Copilot Chat แล้วอ้างอิง `Asteria_Teams_Meeting_Recap.docx` หาก File picker หาไฟล์ไม่พบ ให้เปิด DOCX ใน Word แล้วใช้ Copilot in Word สำหรับขั้นตอนนี้
2. วาง Prompt นี้

   ```text
   Goal: สร้างบันทึกที่ระบุความรับผิดชอบได้จากการประชุม Asteria executive review

   Context: Recap เป็น Portable meeting source ทุก Decision และ Commitment จะถูกตรวจเทียบกับ Transcript โดยคนก่อนร่างข้อความติดตามผล

   Source: ใช้เฉพาะ Asteria_Teams_Meeting_Recap.docx

   Expected output:
   1. การตัดสินใจที่เกิดขึ้น
   2. Action items พร้อม owner และ due date
   3. ความเสี่ยงและ dependency
   4. คำถามที่ยังไม่สรุป
   5. Timestamp ใน Transcript ที่ Recap ระบุสำหรับ Decision และ Action แต่ละข้อ

   หาก Recap ไม่ได้ระบุ Owner หรือ Due date ให้เขียน Not stated ห้ามอนุมานขึ้นเอง
   ```

3. เปิด `Asteria_Executive_Review_Transcript.vtt` ด้วยตนเองข้างผลลัพธ์ ไม่ต้อง Attach ไฟล์ VTT กับ Copilot
4. ตรวจ Decision และ Action ทุกข้อกับ Timestamp
5. ลบข้อความที่เป็นเพียงการหารือแต่ยังไม่ได้ตกลง
6. คัดลอกบันทึกที่แก้แล้วไปไว้ท้าย `Asteria_Leadership_Decision_Brief.docx` ใต้หัวข้อใหม่:

   ```text
   Confirmed meeting record
   ```

7. **Facilitator demo:** หากผู้สอนได้ทดสอบ Native Teams recap แล้ว ให้เปรียบเทียบกับบันทึกจากไฟล์ แต่ยังต้องตรวจ Transcript เหมือนเดิม

#### Checkpoint

- Decision และ Action ทุกข้อมี Timestamp ที่ตรงกับ Transcript
- ประเด็นที่หารือไม่ได้ถูกเรียกผิดว่าเป็น Decision
- Owner หรือ Date ที่ขาดยังคงเป็น `Not stated`
- Copilot ใช้ DOCX recap ส่วนคนใช้ VTT transcript เพื่อตรวจสอบรอบสุดท้าย

### Practice 3 เตรียม Teams Update เป็น Portable Draft

**Primary target:** สร้างและบันทึก Teams-style Update แบบกระชับ โดยสื่อสารเฉพาะ Decision และ Action ที่ยืนยันแล้ว

#### Steps

1. ใน Copilot Chat หรือ Word ให้อ้างอิง Confirmed meeting record ใน `Asteria_Leadership_Decision_Brief.docx`
2. วาง Prompt นี้

   ```text
   Goal: ร่าง Teams update แบบกระชับสำหรับทีม Asteria service review

   Source: ใช้เฉพาะ Confirmed meeting record ใน Asteria_Leadership_Decision_Brief.docx

   Expected output:
   - Decision ที่ยืนยันแล้ว
   - Action ไม่เกิน 3 ข้อ พร้อม owner และ due date
   - Dependency ที่ยังไม่สรุป 1 เรื่อง
   - ตำแหน่งที่จัดเก็บ Decision Brief ที่ตรวจสอบแล้ว

   ใช้น้ำเสียงที่ชัดเจนและเป็นมืออาชีพ ห้ามเพิ่ม Commitment ใหม่ และเขียน Not stated เมื่อ Source ไม่ได้ให้ Owner หรือ Date
   ```

3. ตรวจ Draft กับ Timestamp ใน Transcript และหัวข้อ `Teams update review` ใน `Asteria_Communication_Checklist.docx`
4. บันทึก Draft ที่ตรวจแล้วใน Word เป็น:

   ```text
   Asteria_Teams_Update_Draft.docx
   ```

5. **Tenant-enhanced path:** หากผู้สอนอนุมัติ Practice Chat หรือ Channel ให้เปิด Message ใหม่แล้ววางข้อความที่ตรวจแล้ว เก็บไว้โดยไม่ส่ง หากยังไม่มีพื้นที่ปลอดภัย Word file คือผลงานที่สมบูรณ์แล้ว

#### Checkpoint

- Update อ่านจบได้ในหนึ่งหน้าจอและไม่มี Commitment ที่สร้างขึ้นใหม่
- Decision, Action, Date และ Dependency ตรงกับ Confirmed meeting record
- มี Portable Word Draft แม้ Teams ใช้งานไม่ได้

### Practice 4 เตรียม Outlook Follow-up เป็น Portable Draft

**Primary target:** สร้างและบันทึก Follow-up Email ที่ทำให้ตรวจ Owner และเรื่องที่ยังไม่สรุปได้ง่าย โดยไม่ต้องใช้ Mailbox History

#### Steps

1. ใน Copilot Chat หรือ Word ให้อ้างอิง Confirmed meeting record ใน `Asteria_Leadership_Decision_Brief.docx`
2. วาง Prompt นี้

   ```text
   Goal: ร่าง Follow-up Email หลังการประชุม Asteria executive service review

   Source: ใช้เฉพาะ Confirmed meeting record ใน Asteria_Leadership_Decision_Brief.docx

   Expected output:
   - Subject: Asteria service review decisions and next actions
   - Decision confirmed
   - Actions พร้อม owner และ due date
   - Dependency หรือรายการที่ยังต้องยืนยัน
   - คำขอให้ตรวจแก้ก่อนการ Review ครั้งถัดไป

   ใช้น้ำเสียงกระชับและชัดเจนเรื่องความรับผิดชอบ ห้ามสร้าง Recipient, Owner, Date, Approval หรือ Commitment ขึ้นเอง
   ```

3. เทียบผลลัพธ์กับ Transcript แล้วทำหัวข้อ `Outlook follow up review` และ `Final safety gate` ใน `Asteria_Communication_Checklist.docx`
4. บันทึก Draft ที่ตรวจแล้วใน Word เป็น:

   ```text
   Asteria_Outlook_Follow_Up_Draft.docx
   ```

5. **Tenant-enhanced path:** หาก Outlook พร้อม ให้เลือก `New mail` โดยไม่ใส่ Recipient แล้วใช้ `Draft with Copilot` หรือวางข้อความที่ตรวจแล้ว เก็บ Message ไว้โดยไม่ส่ง

#### Checkpoint

- Subject และ Body ตรงกับ Confirmed meeting record
- Message ขอให้ตรวจแก้และไม่ได้อ้างว่าได้รับอนุมัติแล้ว
- ไม่มี Recipient จริง และมี Portable Word Draft

## Expected Output

- `Asteria_Meeting_Request_Draft.docx`
- Meeting Record ที่ตรวจแล้วใน `Asteria_Leadership_Decision_Brief.docx`
- `Asteria_Teams_Update_Draft.docx`
- `Asteria_Outlook_Follow_Up_Draft.docx`
- `Asteria_Communication_Checklist.docx` ที่ตรวจครบแล้ว

<div class="voice-card"><strong>พล:</strong> ไฟล์ที่เตรียมไว้เหมือนเครื่องจำลองการบินครับ ทุกคนได้ฝึกใช้วิจารณญาณกับสถานการณ์เดียวกันอย่างปลอดภัย ส่วน Teams และ Outlook จะเป็นปลายทางของ Draft ที่ตรวจแล้ว ไม่ใช่ Source ที่เราต้องลุ้นว่าจะพร้อมหรือไม่</div>

[← แบบฝึกหัดที่ 2](./02-kpi-to-decision-brief) · [แบบฝึกหัดที่ 4 จาก Meeting สู่ Executive Deck →](./04-evidence-to-executive-story)
