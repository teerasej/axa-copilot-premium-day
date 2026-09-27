# แบบฝึกหัดที่ 2 วิเคราะห์ KPI อย่างโปร่งใสสู่ Decision Brief

## Exercise Overview

Grounded Brief ชี้ให้เห็นแรงกดดันด้านบริการ แต่ผู้นำต้องการตัวเลขที่ตรวจสอบแล้วก่อนตัดสินใจ คุณจะใช้ Copilot in Excel แบบมาตรฐานสร้างผลวิเคราะห์ที่ตรวจย้อนกลับได้ ตรวจว่าเกิดการเปลี่ยนแปลงอะไร และส่งต่อเฉพาะหลักฐานที่ยืนยันแล้วไปยัง Word ส่วน Advanced analysis ด้วย Python เป็นเพียงทางเลือก ไม่ใช่สิ่งจำเป็น

> **License:** ต้องใช้ Microsoft 365 Copilot Premium และบัญชีผู้เรียนต้องเข้าถึง Copilot in Excel และ Copilot in Word ได้

## Prerequisites

- `Asteria_Service_KPI_28days.xlsx` ใน OneDrive
- `Asteria_Operational_Context.docx` ใน OneDrive
- `Asteria_Grounded_Evidence_Brief.docx` จากแบบฝึกหัดที่ 1
- สำเนาใหม่ของ `Asteria_Decision_Brief_Starter.docx`

## Scenario 1 สร้างการวิเคราะห์ที่ตรวจสอบได้

ทีมผู้นำ Asteria ต้องการรู้ว่าแรงกดดันด้านบริการเป็นเหตุการณ์วันเดียวหรือเป็นรูปแบบต่อเนื่อง กราฟที่ดูน่าเชื่อยังไม่พอ เราต้องมองเห็นการคำนวณและแถวข้อมูลต้นทางด้วย

### Practice 1 วิเคราะห์ด้วย Copilot in Excel

**Primary target:** ใช้ Copilot แบบมาตรฐานสร้าง `Reviewed Insights` สูตร ตาราง anomaly และกราฟที่ช่วยการตัดสินใจ

#### Steps

1. เปิด `Asteria_Service_KPI_28days.xlsx` ใน Excel for the web
2. ใช้ `Save As` หรือ `Save a Copy` แล้วบันทึกไฟล์ทำงานเป็น:

   ```text
   Asteria_Service_KPI_Reviewed.xlsx
   ```

3. ตรวจว่า `Formulas > Calculation Options` ตั้งค่าเป็น `Automatic` หาก Client ของคุณแสดง Control นี้
4. เปิด Copilot in Excel แล้ววาง Prompt นี้

   ```text
   Goal: สร้างการวิเคราะห์ความผิดปกติด้านบริการที่สำคัญใน Workbook 28 วันนี้แบบโปร่งใส

   Context: ผู้นำ Asteria กำลังทบทวน Claim turnaround, Complaint และ Digital Conversion เราต้องการหลักฐานที่ผู้ตรวจคนอื่นตรวจต่อได้

   Source: ใช้เฉพาะตาราง KPI_Data และ Metric definitions ใน Workbook นี้

   Expected output:
   - สร้าง Worksheet ชื่อ Reviewed Insights
   - เพิ่มสูตรเพื่อระบุวันที่ Claim TAT Hours สูงกว่า SLA
   - สร้างตาราง anomaly สำหรับช่วงที่ Complaint เพิ่มต่อเนื่องและ Digital Conversion ลดลงต่อเนื่อง
   - แสดงวันที่ Metric ค่าที่พบ ค่าเปรียบเทียบหรือเกณฑ์ สูตรหรือ Source rows และ Review status
   - สร้างกราฟหนึ่งรายการที่ทำให้เห็นช่วงเวลาของ Pattern ที่สำคัญต่อการตัดสินใจ
   - ใช้สูตร Excel ปกติที่มองเห็นและแก้ไขได้

   ห้ามสรุปสาเหตุ เว้นแต่ Workbook มีหลักฐานรองรับ
   ```

5. ตรวจ Proposed edits ของ Copilot ก่อนยอมรับ
6. หาก Copilot ทำได้เพียงบางส่วน ให้ส่ง Prompt ขนาดเล็กต่อไปนี้ทีละรายการ:

   ```text
   สร้าง Worksheet Reviewed Insights และตาราง Anomaly ก่อน โดยใส่ Source rows และ Formula ที่มองเห็นได้ให้ครบ ยังไม่ต้องสร้างกราฟ
   ```

   ```text
   ตอนนี้ให้สร้าง Line chart หนึ่งรายการจากวันที่และค่า Claim TAT ที่ตรวจแล้วใน Reviewed Insights ใช้ชื่อกราฟที่ชัดเจนและแกนที่อ่านง่าย
   ```

7. หากกราฟรวม Metric ที่มีสเกลต่างกันจนอ่านยาก ให้ขอ Copilot แยก Metric หรือเก็บเฉพาะแนวโน้มที่มีประโยชน์ต่อการตัดสินใจที่สุด

#### Checkpoint

- `Reviewed Insights` แสดงสูตรหรือ Source reference ของทุกข้อค้นพบ
- ตาราง anomaly มีวันที่ ค่า ค่าเปรียบเทียบ และช่อง `Review status` ที่ยังว่าง
- กราฟมีชื่อที่สื่อความหมาย แกนอ่านง่าย และระบุ Source range ได้
- ไม่มีข้อค้นพบใดสร้างสาเหตุขึ้นเอง

### Practice 2 ตรวจและท้าทายผลงานของ Copilot

**Primary target:** ตรวจที่มาของ Edit ที่ระบบรองรับ และยืนยันผลวิเคราะห์ด้วยตนเองก่อนนำไปใช้ต่อ

#### Steps

1. ถาม Copilot:

   ```text
   แสดงรายการเปลี่ยนแปลงที่คุณทำใน Workbook นี้ สำหรับแต่ละรายการให้ระบุ Worksheet, Cells หรือ Range, Formula หรือ Chart source และวัตถุประสงค์ ห้ามแก้ Workbook เพิ่ม
   ```

2. เปิด `Review > Show Changes` แล้วเทียบ Cell edits ที่ระบุว่าเกิดจาก Copilot กับรายการที่ Copilot สรุป หาก Client ไม่มี `Show Changes` ให้ทำ Manual checks ต่อและใช้ข้อความใน Step 3
3. หาก Edit ใดไม่ปรากฏใน History ให้บันทึกข้อความนี้ไว้ข้างข้อค้นพบ:

   ```text
   Not shown in change history
   ```

   การไม่ปรากฏใน History ไม่ใช่หลักฐานว่างานถูกต้อง ให้ตรวจเทียบกับ Workbook ต่อ
4. ใน `KPI_Data` ให้ Filter `Claim SLA Status` เป็น `Above SLA`, Sort `Complaint Count` จากมากไปน้อย และ Sort `Digital Conversion Rate` จากน้อยไปมาก
5. ตรวจสูตรตัวอย่าง Source range ของกราฟ วันที่ เกณฑ์ และเปอร์เซ็นต์

   <details>
   <summary>เปิดหลังจากตรวจ Source rows ด้วยตนเองแล้ว</summary>

   หลักฐานที่ตรวจแล้วควรแสดงว่า:

   - Claim TAT สูงกว่า SLA 48 ชั่วโมงในวันที่ 14–17 กันยายน โดยมีค่า 50, 55, 58 และ 52 ชั่วโมง
   - Complaint Count เพิ่มจาก 13 เป็น 24 ในช่วง 14–21 กันยายน และค่าสูงสุดสามวันอยู่ที่ 19–21 กันยายน คือ 18, 22 และ 24
   - Digital Conversion Rate ในวันที่ 22–25 กันยายนอยู่ที่ประมาณ 11.3%, 10.5%, 9.8% และ 9.5%

   หากผลต่างออกไป ให้ตรวจวันที่ Source rows สูตร และ Percentage formatting ก่อนทำต่อ

   </details>
6. กำหนดทุกข้อค้นพบใน `Reviewed Insights` ด้วยค่าใดค่าหนึ่ง:

   ```text
   Verified
   Corrected
   Needs more evidence
   ```

7. แก้ช่วงเวลา เกณฑ์ สูตร Chart range หรือเปอร์เซ็นต์ที่ไม่ตรงกับข้อมูลต้นทาง
8. หากผู้สอนยืนยันว่า `Advanced analysis` หรือ Python พร้อมใช้งาน ให้ใช้เป็นความเห็นที่สองแล้วเปรียบเทียบกับผลแบบมาตรฐาน หากไม่พร้อม ให้ใช้ Prompt สำรองนี้กับ Copilot แบบมาตรฐาน:

   ```text
   ใช้สูตร Excel ปกติเท่านั้น เพิ่ม Rolling comparison หรือ Multi-metric anomaly table ใน Reviewed Insights แสดงทุก Formula และ Source range ห้ามใช้ Python และห้ามอนุมานสาเหตุ
   ```

#### Checkpoint

- ข้อค้นพบทุกข้อมี Review status
- มีอย่างน้อยหนึ่งข้อที่ตรวจตรงกับ Source rows และสูตรที่มองเห็นได้
- ตรวจ Chart source วันที่ เกณฑ์ และเปอร์เซ็นต์ด้วยตนเองแล้ว
- รายการที่ไม่มีใน History ถูกระบุ `Not shown in change history` และตรวจด้วยวิธีอื่น
- ผลจาก Advanced analysis ซึ่งเป็นทางเลือกถูกใช้เพื่อเปรียบเทียบ ไม่ใช่เป็น Source of truth

## Scenario 2 ส่งต่อหลักฐานที่ตรวจแล้วไปยัง Word

### Practice 3 ร่าง Decision Brief

**Primary target:** สร้าง Decision Brief หนึ่งหน้าโดยใช้เฉพาะข้อค้นพบที่มีสถานะ `Verified` หรือ `Corrected`

#### Steps

1. เปิด `Asteria_Decision_Brief_Starter.docx` ใน Word แล้วใช้ `Save a Copy` ทันทีเพื่อสร้างไฟล์:

   ```text
   Asteria_Leadership_Decision_Brief.docx
   ```

   ทำงานต่อในสำเนานี้เท่านั้น เพื่อเก็บ Starter ไว้เหมือนเดิม
2. เปิด Copilot แล้วอ้างอิง:
   - `Asteria_Service_KPI_Reviewed.xlsx`
   - `Asteria_Operational_Context.docx`
   - `Asteria_Grounded_Evidence_Brief.docx`
3. วาง Prompt นี้

   ```text
   Goal: จัดทำ Asteria Leadership Decision Brief หนึ่งหน้านี้ให้สมบูรณ์

   Context: ผู้นำต้องการสรุปที่พร้อมต่อการตัดสินใจ แต่ตัวเลขและ Claim ทุกข้อต้องตรวจย้อนกลับได้

   Sources: ใช้เฉพาะไฟล์ Asteria ทั้งสามไฟล์ที่อ้างอิง ใช้เฉพาะข้อค้นพบที่มีสถานะ Verified หรือ Corrected ใน Reviewed Insights และไม่นำรายการ Needs more evidence มาใช้

   Expected output:
   - Executive summary ไม่เกิน 5 bullet
   - Verified evidence พร้อมวันที่ ค่า ค่าเปรียบเทียบ และ Source
   - Business implications ที่ระบุชัดว่าเป็น Interpretation
   - Decision needed
   - Actions พร้อม Owner, Due date และ Dependency; หาก Source ไม่มีให้เขียน To confirm
   - Risks and open questions

   ห้ามสร้าง Root cause, Target, Owner, Due date หรือ Financial impact ขึ้นเอง
   ```

4. คงหัวข้อเดิมใน Starter แล้วแทนที่ข้อความแนะนำ
5. เทียบตัวเลขทุกตัวใน Word กับ `Reviewed Insights` และไม่นำข้อค้นพบที่ไม่มีสถานะที่อนุญาตมาใช้
6. บันทึก Version ล่าสุดของ `Asteria_Leadership_Decision_Brief.docx`

#### Checkpoint

- ตัวเลขทุกตัวตรวจย้อนกลับไปยังรายการ `Verified` หรือ `Corrected` ใน Workbook ได้
- Interpretation ไม่ถูกนำเสนอเป็น Verified fact
- Owner หรือวันที่ที่ยังไม่มีข้อมูลใช้คำว่า `To confirm`
- Brief ระบุการตัดสินใจหลักหนึ่งเรื่องอย่างชัดเจน

## Expected Output

- `Asteria_Service_KPI_Reviewed.xlsx` ที่แสดง Analysis, Change review และ Verification status
- `Asteria_Leadership_Decision_Brief.docx` ที่ใช้เฉพาะข้อค้นพบที่ตรวจแล้วหรือแก้ไขแล้ว

<div class="voice-card"><strong>พล:</strong> ลองนึกว่า Change history เป็นใบรับของ ไม่ใช่ใบรับรองคุณภาพครับ ใบรับของบอกว่างานมาถึงแล้ว แต่เรายังต้องตรวจสูตร Source range และความหมายก่อนเซ็นรับ</div>

[← แบบฝึกหัดที่ 1](./01-ground-the-brief) · [แบบฝึกหัดที่ 3 จาก Communication สู่ Follow-up →](./03-meeting-to-follow-up)
