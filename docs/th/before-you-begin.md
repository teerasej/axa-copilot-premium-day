# เตรียมตัวก่อนเริ่ม

ตรวจสอบรายการต่อไปนี้ก่อนเริ่มแบบฝึกหัดที่ 1 เส้นทางหลักใช้เฉพาะความสามารถที่ยืนยันไว้สำหรับเวิร์กชอปนี้

> **License:** ต้องมี Microsoft 365 Copilot Premium license และบัญชี Microsoft 365 ที่รองรับ การมองเห็นแต่ละฟีเจอร์ยังขึ้นอยู่กับการตั้งค่าและ policy ของ AXA tenant

## ตรวจสอบบัญชีและแอป

ให้เราตรวจสอบว่า:

1. Sign in ด้วยบัญชี AXA work account ไม่ใช่บัญชี Microsoft ส่วนตัว
2. เปิด Copilot Chat จากช่องทางที่องค์กรอนุมัติได้
3. เปิด OneDrive, Word, Excel, PowerPoint, Outlook และ Microsoft Teams ได้
4. มองเห็น Copilot ใน Word, Excel, PowerPoint, Outlook และ Teams
5. Upload ไฟล์สำหรับฝึกไปยัง OneDrive folder ของตนเองได้

หากข้อใดใช้งานไม่ได้ ให้แจ้งวิทยากรก่อนเริ่ม และใช้ prepared transcript หรือวิธี copy-and-paste เมื่อได้รับคำแนะนำ

## ฟีเจอร์ที่ไม่ได้ใช้ในเวิร์กชอปนี้

สภาพแวดล้อมของ AXA ยังไม่รองรับ Agent Builder, Pre-Built Agents (รวม Researcher, Analyst และ Facilitator), Copilot Studio, Copilot Cowork และ Copilot Notebooks แบบฝึกหัดจึงไม่ต้องใช้ฟีเจอร์เหล่านี้

## กติกาการใช้ข้อมูลอย่างปลอดภัย

- ใช้เฉพาะไฟล์ Asteria Insurance ที่เตรียมไว้ในช่วง guided exercise
- ห้าม upload ข้อมูลลูกค้า สุขภาพ เคลม การชำระเงิน ความปลอดภัย พนักงาน หรือข้อมูลธุรกิจที่เป็นความลับ
- อย่ากดส่ง Outlook email หรือ meeting invitation ที่สร้างจากแบบฝึกหัด
- ตรวจคำตอบของ Copilot ทุกครั้งก่อนนำไปใช้ต่อในแอปอื่น
- หาก Source ไม่รองรับ claim ให้ระบุว่าเป็นข้อสันนิษฐานหรือนำออก

## เตรียมโฟลเดอร์

1. [เปิดหน้าไฟล์สำหรับฝึก](./files) แล้วดาวน์โหลด ZIP หรือเลือกดาวน์โหลดทีละไฟล์
2. สร้าง folder ใน OneDrive ชื่อ:

   ```text
   Asteria Copilot Workshop
   ```

3. Upload ไฟล์ทั้งสี่รายการเข้า folder นี้
4. อย่าเปลี่ยนชื่อไฟล์ เพื่อให้ prompt ในแบบฝึกหัดถัดไปค้นหาไฟล์ได้ตรงกัน

<div class="voice-card"><strong>พล:</strong> ไฟล์เหล่านี้เหมือนวัตถุดิบที่เตรียมไว้ก่อนทำอาหารครับ เมื่อทุกอย่างอยู่ถูกที่และใช้ชื่อเดิม การส่งต่องานข้ามแอปจะทำได้ง่ายขึ้นมาก</div>

## Ready check

- [ ] ฉัน Sign in ด้วย work account แล้ว
- [ ] ฉันเปิด Microsoft 365 apps ที่ต้องใช้ได้
- [ ] ไฟล์ Asteria ทั้งสี่รายการอยู่ใน OneDrive folder แล้ว
- [ ] ฉันเข้าใจว่าทุกคำตอบของ Copilot ต้องผ่านการตรวจสอบโดยคน

[เริ่มแบบฝึกหัดที่ 1 →](./exercises/01-ground-the-brief)
