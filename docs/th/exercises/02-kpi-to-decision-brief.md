# แบบฝึกหัดที่ 2 จากความผิดปกติของ KPI สู่ Decision Brief

## Exercise Overview

Grounded Brief ชี้ให้เห็นแรงกดดันด้านบริการ แต่ผู้นำต้องการตัวเลขที่ตรวจสอบแล้วก่อนตัดสินใจ คุณจะใช้ Copilot in Excel เพื่อค้นหาความผิดปกติ ตรวจสอบการเปลี่ยนแปลง และนำเฉพาะหลักฐานที่ยืนยันแล้วไปสร้าง Decision Brief ใน Word

> **License:** ต้องใช้ Microsoft 365 Copilot Premium และบัญชีผู้เรียนต้องเข้าถึง Copilot in Excel และ Copilot in Word ได้

## Prerequisites

- `Asteria_Service_KPI_28days.xlsx` ใน OneDrive
- `Asteria_Operational_Context.docx` ใน OneDrive
- `Asteria_Grounded_Evidence_Brief.docx` จากแบบฝึกหัดที่ 1
- สำเนาใหม่ของ `Asteria_Decision_Brief_Starter.docx`

## Scenario 1 ค้นหาและตรวจสอบสัญญาณสำคัญ

ทีมผู้นำของ Asteria ต้องการทราบว่าแรงกดดันด้านบริการเป็นเหตุการณ์วันเดียว หรือเป็นรูปแบบต่อเนื่องที่ต้องลงมือจัดการ

### Practice 1 ให้ Excel ช่วยค้นหาความผิดปกติ

**Primary target:** ใช้ Copilot in Excel สร้างตารางความผิดปกติและกราฟแนวโน้มจากข้อมูล KPI ที่กำหนด

#### Steps

1. เปิด `Asteria_Service_KPI_28days.xlsx` ใน Excel for the web
2. ใช้ `Save As` หรือ `Save a Copy` เพื่อเก็บไฟล์ต้นฉบับไว้ แล้วบันทึกไฟล์ทำงานเป็น:

   ```text
   Asteria_Service_KPI_Reviewed.xlsx
   ```

3. เปิด Copilot in Excel
4. วาง Prompt นี้

   ```text
   Goal: ค้นหาความผิดปกติด้านบริการที่สำคัญที่สุดใน Workbook ระยะเวลา 28 วันนี้

   Context: ผู้นำ Asteria กำลังทบทวนระยะเวลาดำเนินการเคลม ข้อร้องเรียน และ Digital Conversion เราต้องการหลักฐาน ไม่ใช่การคาดเดา

   Source: ใช้เฉพาะตาราง KPI_Data และคำอธิบายตัวชี้วัดใน Workbook นี้

   Expected output:
   - ระบุวันที่ Claim TAT Hours สูงกว่า SLA
   - ระบุช่วงที่ Complaint Count เพิ่มขึ้นต่อเนื่อง
   - ระบุช่วงที่ Digital Conversion Rate ลดลงต่อเนื่อง
   - แสดงการคำนวณหรือแถวข้อมูลต้นทางของทุกข้อค้นพบ
   - สร้าง Worksheet ใหม่ชื่อ Reviewed Insights พร้อมตารางสรุปความผิดปกติ
   - เพิ่ม Line chart ที่ช่วยให้ผู้นำเห็นช่วงเวลาที่เกิดแรงกดดันด้านบริการ

   อย่าระบุสาเหตุ เว้นแต่ Workbook มีหลักฐานรองรับ
   ```

5. ตรวจการเปลี่ยนแปลงที่ Copilot เสนอก่อนยอมรับ
6. หากกราฟรวมตัวชี้วัดที่มีสเกลต่างกันจนอ่านยาก ให้ขอ Copilot แยกกราฟหรือเลือกแนวโน้มที่สำคัญต่อการตัดสินใจเพียงรายการเดียว

#### Checkpoint

- `Reviewed Insights` มีวันที่ ตัวชี้วัด ค่าที่พบ ค่าเปรียบเทียบหรือเกณฑ์ และตำแหน่งข้อมูลต้นทาง
- กราฟมีชื่อที่สื่อความหมายและแกนอ่านง่าย
- ไม่มีข้อค้นพบใดสรุปสาเหตุที่ Workbook ไม่ได้ให้ไว้

### Practice 2 ตรวจสอบผลวิเคราะห์ด้วยตนเอง

**Primary target:** ตรวจตารางความผิดปกติกับแถวข้อมูลและสูตรต้นทางอย่างอิสระก่อนนำไปใช้ต่อ

#### Steps

1. เปิด Worksheet `KPI_Data`
2. Filter คอลัมน์ `Claim SLA Status` ให้แสดงเฉพาะ `Above SLA` แล้วเทียบวันที่กับ `Reviewed Insights`
3. Sort `Complaint Count` จากมากไปน้อย แล้วตรวจค่าสูงสุดและวันที่
4. Sort `Digital Conversion Rate` จากน้อยไปมาก แล้วตรวจช่วงค่าต่ำ
5. เลือกเซลล์ตัวอย่าง 3 เซลล์ แล้วตรวจสูตรหรือค่าต้นทาง
6. ใน `Reviewed Insights` เพิ่มคอลัมน์ `Review status` แล้วกำหนดแต่ละข้อค้นพบด้วยค่าใดค่าหนึ่งต่อไปนี้:

   ```text
   Verified
   ```

   ```text
   Corrected
   ```

   ```text
   Needs more evidence
   ```

7. แก้ช่วงเวลา เกณฑ์ หรือเปอร์เซ็นต์ที่ไม่ตรงกับข้อมูลต้นทาง

#### Checkpoint

- ข้อค้นพบทุกข้อมี Review status
- มีข้อค้นพบอย่างน้อย 1 ข้อที่ตรวจตรงกับแถวข้อมูลต้นทางแล้ว
- ใช้เปอร์เซ็นต์อย่างถูกต้อง ไม่สับสนระหว่างเปอร์เซ็นต์ จุดเปอร์เซ็นต์ และจำนวนเต็ม

## Scenario 2 เปลี่ยนหลักฐานเป็น Leadership Decision Brief

### Practice 3 ร่าง Brief ใน Word

**Primary target:** ใช้ Workbook ที่ตรวจสอบแล้วและ Operational Context สร้าง Decision Brief หนึ่งหน้า โดยรักษาเส้นแบ่งระหว่างข้อเท็จจริง ข้อสมมติ และขอบเขตการตัดสินใจ

#### Steps

1. เปิดสำเนาใหม่ของ `Asteria_Decision_Brief_Starter.docx` ใน Word
2. เปิด Copilot แล้วอ้างอิงไฟล์:
   - `Asteria_Service_KPI_Reviewed.xlsx`
   - `Asteria_Operational_Context.docx`
   - `Asteria_Grounded_Evidence_Brief.docx`
3. วาง Prompt นี้

   ```text
   Goal: จัดทำ Asteria Leadership Decision Brief หนึ่งหน้านี้ให้สมบูรณ์

   Context: ผู้นำต้องการสรุปที่พร้อมต่อการตัดสินใจ แต่ตัวเลขและข้อความทุกข้อต้องตรวจย้อนกลับได้

   Sources: ใช้เฉพาะไฟล์ Asteria ทั้งสามไฟล์ที่อ้างอิง ให้ความสำคัญกับข้อค้นพบที่มีสถานะ Verified หรือ Corrected ใน Reviewed Insights

   Expected output:
   - Executive summary ไม่เกิน 5 bullet
   - Verified evidence พร้อมวันที่ ค่า ค่าเปรียบเทียบ และแหล่งข้อมูล
   - Business implications ที่ระบุชัดว่าเป็นการตีความ
   - Decision needed
   - Actions พร้อม owner, due date และ dependency; หากไม่มีในแหล่งข้อมูลให้เขียน To confirm
   - Risks and open questions

   ห้ามสร้าง root cause, target, owner, due date หรือ financial impact ขึ้นเอง
   ```

4. คงหัวข้อเดิมใน Starter แล้วแทนที่ข้อความแนะนำด้วยร่างเนื้อหา
5. เทียบตัวเลขทุกตัวใน Word กับ `Reviewed Insights`
6. บันทึกเอกสารเป็น:

   ```text
   Asteria_Leadership_Decision_Brief.docx
   ```

#### Checkpoint

- ตัวเลขทุกตัวตรวจย้อนกลับไปยัง Workbook ที่ทบทวนแล้วได้
- การตีความไม่ถูกนำเสนอเป็นข้อเท็จจริงที่ยืนยันแล้ว
- owner หรือวันที่ที่ยังไม่มีข้อมูลใช้คำว่า `To confirm`
- Brief ระบุการตัดสินใจหลักเพียงเรื่องเดียว ไม่ใช่รายการคำแนะนำที่ไม่เชื่อมโยงกัน

## Expected Output

- `Asteria_Service_KPI_Reviewed.xlsx` พร้อมตารางความผิดปกติและกราฟที่ตรวจสอบแล้ว
- `Asteria_Leadership_Decision_Brief.docx` ที่พร้อมใช้ทบทวนในการประชุม

<div class="voice-card"><strong>พล:</strong> ลองนึกว่า Excel คือเครื่องมือวัด ส่วน Word คือบันทึกเพื่อการตัดสินใจ บันทึกจะเชื่อถือได้ก็ต่อเมื่อข้อมูลที่วัดก่อนหน้านั้นเชื่อถือได้</div>

[← แบบฝึกหัดที่ 1](./01-ground-the-brief) · [แบบฝึกหัดที่ 3 จากการประชุมสู่การติดตามผล →](./03-meeting-to-follow-up)
