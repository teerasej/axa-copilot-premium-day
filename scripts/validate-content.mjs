import fs from 'node:fs';
import path from 'node:path';
const docs = path.resolve('docs');
const errors = [];
const slugs = ['01-ground-the-brief','02-kpi-to-decision-brief','03-meeting-to-follow-up','04-evidence-to-executive-story','05-explore-ai-agents'];
const read = p => fs.readFileSync(path.join(docs,p),'utf8');
const requireText = (p,text) => { if(!read(p).includes(text)) errors.push(p+' missing '+text); };
const pages = [];
function walk(dir) { for(const e of fs.readdirSync(dir,{withFileTypes:true})) { if(e.name==='public'||e.name.startsWith('.')) continue; const p=path.join(dir,e.name); if(e.isDirectory()) walk(p); else if(p.endsWith('.md')) pages.push(p); } }
walk(docs);
for(const p of pages) {
 const s=fs.readFileSync(p,'utf8');
 if(/[\u0E00-\u0E7F]/.test(s)) errors.push(p+' contains Thai public content');
 if(/Krungsri|onmicrosoft\.com|sharepoint\.com/i.test(s)) errors.push(p+' contains forbidden client or tenant reference');
 for(const m of s.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)) {
  const href=m[1].split('#')[0]; if(!href||/^(https?:|mailto:)/.test(href)) continue;
  const target=href.startsWith('/files/')?path.join(docs,'public',href):href.startsWith('/')?path.join(docs,href):path.resolve(path.dirname(p),href);
  if(![target,target+'.md',path.join(target,'index.md')].some(x=>fs.existsSync(x))) errors.push(p+' broken link '+href);
 }
}
for(const slug of slugs.slice(0,4)) {
 const p='en/exercises/'+slug+'.md';const s=read(p);
 for(const h of ['## Exercise Overview','## Prerequisites','## Scenario','### Practice','#### Steps','#### Quick check','## Expected Output']) requireText(p,h);
 if(['01-ground-the-brief','02-kpi-to-decision-brief'].includes(slug)) requireText(p,'## Tips & tricks: Try one improved prompt');
 const count=re=>[...s.matchAll(re)].length;
 if(count(/^### Practice/gm)!==count(/^\*\*Primary target:/gm)||count(/^### Practice/gm)!==count(/^#### Quick check/gm)) errors.push(p+' has misaligned practices');
 for(const practice of s.split(/^### Practice /m).slice(1)) {
  const check=practice.split('#### Quick check')[1]?.split(/^#{2,4} /m)[0] ?? '';
  const items=[...check.matchAll(/^- /gm)].length;
  if(items<1||items>2) errors.push(p+' must have one or two Quick check items per Practice');
 }
 if(/Agent Builder|Researcher agent|Analyst agent|Copilot Studio|Copilot Cowork|Copilot Notebooks?/i.test(s)) errors.push(p+' requires restricted capability');
 if(/\b\d{2}:\d{2}[–-]\d{2}:\d{2}|^#{1,4}\s+(Duration|Time)/m.test(s)) errors.push(p+' has exercise timing');
}
const brief='en/exercises/01-ground-the-brief.md';
const briefText=read(brief);
const briefHeadings=['Executive summary','Verified facts','Assumptions and interpretations','Open questions'];
const generationPrompt=briefText.split('### Practice 3')[1]?.match(/```text\n([\s\S]*?)```/)?.[1] ?? '';
if(!briefHeadings.every((h,i)=>generationPrompt.includes(`${i+1}. ${h}`))||/5\. |6\. /.test(generationPrompt)) errors.push('Exercise 1 generation prompt must use its four core headings');
if((briefText.match(/^### Practice/gm)||[]).length!==4) errors.push('Exercise 1 must have four Practices');
for(const t of ['80–100 words','two important facts','reporting period','Asteria_Grounded_Evidence_Brief.docx','File-generation fallback','Word for the web','summary panel','Do not type anything into a prompt box','do not substitute a typed rewrite prompt','other sections are unchanged','Exercise 2 does not depend on it','facilitator/client approval','calendar-confirmed','Keep screen sharing off','Japanese version']) requireText(brief,t);
const discovery=briefText.split('#### Optional: Discover by project name')[1]?.split('### Practice 3')[0] ?? '';
const discoveryPrompt=discovery.match(/```text\n([\s\S]*?)```/)?.[1] ?? '';
if(!discoveryPrompt.includes('Asteria Insurance service review')||/\.(docx|xlsx)|\//.test(discoveryPrompt)) errors.push('Exercise 1 optional discovery must use only the project name, without filenames or file references');
for(const t of ['fresh chat','Do not attach files','explicit-file chat','unsuccessful search is an acceptable outcome']) if(!discovery.includes(t)) errors.push('Exercise 1 discovery missing '+t);
const rewriteSteps=briefText.split('4. Select **only the paragraph')[1]?.split('6. After finishing the rewrite')[0] ?? '';
if(!rewriteSteps.includes('Auto rewrite')||!rewriteSteps.includes('Exclude the heading')||!rewriteSteps.includes('Undo')||/```/.test(rewriteSteps)) errors.push('Exercise 1 rewrite must stay menu-only, selection-scoped and reversible');
if(!briefText.includes('After finishing the rewrite')||!/```text\n\s+Add a Japanese version/.test(briefText)) errors.push('Exercise 1 Japanese addition must be a separate request after Auto rewrite');
if(/logo|watermark/i.test(briefText)) errors.push('Exercise 1 retains removed logo/watermark activity');
for(const t of ['Optional personal-work approval gate','Word for the web','do not substitute a typed rewrite prompt','Skip the extension','Permission to access information does not by itself authorize classroom use']) requireText('en/before-you-begin.md',t);
requireText('en/exercises/02-kpi-to-decision-brief.md','Asteria_KPI_Dashboard.pptx');
const kpi='en/exercises/02-kpi-to-decision-brief.md';
const kpiText=read(kpi);
if([...kpiText.matchAll(/^### Practice (\d+)/gm)].map(m=>m[1]).join(',')!=='1,2,3,1,2') errors.push('Exercise 2 must have three Excel Practices, then two PowerPoint Practices (the second optional)');
const templatePractice=kpiText.split('### Practice 2 Optional: Add three Asteria-styled slides')[1]?.split('## Expected Output')[0] ?? '';
for(const t of ['Asteria_KPI_Dashboard_Template_Comparison.pptx','Reference file','design reference','Leave slides 1–3 unchanged','exactly six slides','Keep Source Formatting','manual fallback','Do not add causes or financial claims','To confirm']) if(!templatePractice.includes(t)) errors.push('Exercise 2 optional template practice missing '+t);
for(const t of ['Tell me the top 3 insights and trends in this workbook.','Help me prepare this workbook','conditional formatting','F2:F29','light red for 0–10','medium red for 11–17','dark red for 18 or more','blank presentation','side panel','as a work item','Asteria_Service_KPI_Reviewed.xlsx','Fallback: Excel cannot be added as a work item','one important number','48-hour SLA']) requireText(kpi,t);
if(/Review status|Needs more evidence|Speaker Notes|`Verified`|`Corrected`/.test(kpiText)) errors.push('Exercise 2 retains formal review-status or slide-source requirements');
if(/^\s*(Goal|Context|Source|Expected output):/m.test(kpiText)) errors.push('Exercise 2 prompts must use natural requests without prompt-taxonomy labels');
const excelPlan=kpiText.split('### Practice 2 ')[1]?.split('### Practice 3 ')[0] ?? '';
const planPrompts=[...excelPlan.matchAll(/```text\n([\s\S]*?)```/g)].map(m=>m[1]);
if(!planPrompts[0]?.includes('Help me prepare this workbook')||planPrompts[0]?.includes('Add a sheet')||!planPrompts[1]?.includes('Add a sheet called Reviewed Insights')||!planPrompts[1]?.includes('Do not change the workbook yet')) errors.push('Exercise 2 Practice 2 must split the opening request from the plan-refinement context');
for(const t of ['choose `Plan`','Read Copilot’s questions or initial response','Review the updated plan','press **`Proceed`**','Fallback: Plan mode or Proceed is unavailable']) if(!excelPlan.includes(t)) errors.push('Exercise 2 plan-first flow missing '+t);
if([...excelPlan.matchAll(/^(\d+)\. /gm)].map(m=>m[1]).join(',')!=='1,2,3,4,5') errors.push('Exercise 2 plan-first flow must retain five main steps');
if(read('en/exercises/02-kpi-to-decision-brief.md').includes('Asteria_Leadership_Decision_Brief.docx')) errors.push('Exercise 2 still requires old Word handoff');
requireText('en/exercises/03-meeting-to-follow-up.md','Asteria_Action_Plan.docx');
requireText('en/exercises/03-meeting-to-follow-up.md','Asteria_Email_Thread.docx');
requireText('en/exercises/03-meeting-to-follow-up.md','do not attach the VTT file to Copilot');
const communication='en/exercises/03-meeting-to-follow-up.md';
const communicationText=read(communication);
const communicationPractices=communicationText.split(/^### Practice /m).slice(1);
if([...communicationText.matchAll(/^### Practice (\d+)/gm)].map(m=>m[1]).join(',')!=='1,2,3,4,5') errors.push('Exercise 3 must have three core Practices and two optional Practices numbered 1–5');
for(const practice of communicationPractices) {
 const steps=practice.split('#### Steps')[1]?.split('#### Quick check')[0] ?? '';
 const firstStep=steps.match(/1\. ([^\n]+)/)?.[1] ?? '';
 if(!firstStep.includes('Copilot Chat')) errors.push('Each Exercise 3 Practice must explicitly start in Copilot Chat');
}
for(const t of ['## Start here: Microsoft 365 Copilot Chat','same Copilot Chat conversation','Create a word file named Asteria_Action_Plan.docx.','Please generate Asteria_Action_Plan.docx as a downloadable Word file','table with Action, Owner and Due date','Outstanding questions','Proposed:','Fallback: Word file generation is unavailable','OneDrive practice folder','subject line','chat only; do not send it or create a mailbox draft','## Optional: Use your own Outlook source','(Optional)','create a draft in my inbox, don\'t send it.']) requireText(communication,t);
const meetingDiscovery=communicationPractices[3] ?? '';
const meetingRecap=communicationPractices[4]?.split('## Optional: Use your own Outlook source')[0] ?? '';
for(const t of ['fresh, private Copilot Chat conversation','Work IQ','Do not reuse the Asteria conversation','Find up to five past Teams meetings I attended that have both a recording and a transcript.','Only include meetings where you can confirm both are available.','Treat the list as suggestions','correct date, recording and transcript','Fallback: No suitable meeting is found','choose **Meetings**','skip this optional scenario','Automatic discovery of recording/transcript availability is not guaranteed']) if(!meetingDiscovery.includes(t)) errors.push('Exercise 3 meeting discovery missing '+t);
for(const t of ['same private Copilot Chat conversation','correct occurrence as a work reference','Summarise this meeting using its transcript.','If you cannot access the transcript, tell me rather than guessing.','List up to three follow-up actions','To confirm','Proposed','compare one agreement or action with the transcript','private chat only','Exercise 4 does not depend on this scenario']) if(!meetingRecap.includes(t)) errors.push('Exercise 3 meeting recap missing '+t);
requireText(communication,'## Scenario 3 Optional: Discover your own Teams meeting');
if(/^\s*(Goal|Context|Source|Expected output):/m.test(communicationText)) errors.push('Exercise 3 prompts must use natural requests');
if(/Asteria_(Teams_Update_Draft|Outlook_Follow_Up_Draft|Communication_Checklist)\.docx|Complete the.*checklist|add a verified KPI evidence section/i.test(communicationText)) errors.push('Exercise 3 retains an obsolete mandatory output or KPI evidence handoff');
const presentation='en/exercises/04-evidence-to-executive-story.md';
for(const t of ['Action Plan does not need a KPI evidence section','leave space for me to insert the chart from my Exercise 2 dashboard','Open `Asteria_KPI_Dashboard.pptx` from Exercise 2 separately','do not ask Copilot to infer them from the Action Plan','## Start here: PowerPoint for the web','### Practice 1 Create five executive slides','### Practice 2 Complete the KPI snapshot and finish','Fallback: Copilot cannot create the presentation','/files/Asteria_Teams_Meeting_Recap.docx','/files/Asteria_Service_KPI_Reviewed_backup.xlsx','48-hour SLA','#### Quick check','Asteria_Executive_Update.pptx']) requireText(presentation,t);
const presentationText=read(presentation);
const kpiSnapshot=presentationText.split('### Practice 2 Complete the KPI snapshot and finish')[1]?.split('## Expected Output')[0] ?? '';
for(const t of ['Asteria_Service_KPI_Reviewed.xlsx','Confirm that the workbook\'s filename appears','Complete Slide 2, “KPI snapshot”, using the attached Excel workbook.','Add up to three short insights','Check that Slides 1, 3, 4 and 5 remain unchanged','Review any proposed changes','Remove any incorrect chart first','Fallback: Excel references, slide editing or chart generation are unavailable','workbook-supported KPI figures','Exactly five slides remain']) if(!kpiSnapshot.includes(t)) errors.push('Exercise 4 KPI snapshot missing '+t);
if((presentationText.match(/^### Practice /gm)||[]).length!==2) errors.push('Exercise 4 must have exactly two focused Practices');
if(/Speaker Notes|Trace every claim|source trail|Agent Mode|timestamp|workbook range|Communication_Checklist/.test(presentationText)) errors.push('Exercise 4 retains removed evidence paperwork or direct Teams branching');
if(/^\s*(Goal|Context|Source|Expected output):/m.test(presentationText)) errors.push('Exercise 4 prompts must use natural requests');
if(read(presentation).includes('Verified KPI evidence, with space for the checked dashboard chart')) errors.push('Exercise 4 still expects KPI evidence inside the Action Plan');
requireText('en/before-you-begin.md','Start all three core Exercise 3 Practices');
for(const t of ['Exercise 3 Scenario 3 adds two optional Practices','fresh private Copilot Chat conversation','recording and retained transcript are accessible']) requireText('en/before-you-begin.md',t);
requireText('en/wrap-up.md','unsent follow-up email draft visible in Copilot Chat');
requireText('en/exercises/04-evidence-to-executive-story.md','Asteria_Action_Plan.docx');
const demo='en/exercises/05-explore-ai-agents.md';
for(const t of ['Meeting Action Plan Coach','instructor\'s tenant','recording','out-of-scope','do not create an agent']) requireText(demo,t);
if(/Researcher|Analyst/.test(read(demo))) errors.push('Session 5 retains superseded demonstrations');
const home=read('en/index.md');
const blocks=[['09:00','10:30'],['10:45','12:00'],['13:00','13:45'],['13:45','14:30'],['14:45','15:15'],['15:15','15:30'],['15:30','16:00']];
const minutes=t=>Number(t.slice(0,2))*60+Number(t.slice(3));
if(blocks.reduce((n,[a,b])=>n+minutes(b)-minutes(a),0)!==330) errors.push('Wrong learning minutes');
for(const [a,b] of [...blocks,['10:30','10:45'],['12:00','13:00'],['14:30','14:45']]) if(!home.includes(a+'–'+b)) errors.push('Missing timetable '+a);
if(/Consolidation and guided refinement/.test(home)) errors.push('Removed agenda block remains');
for(const slug of slugs) requireText('th/exercises/'+slug+'.md',"/en/exercises/"+slug);
const files=fs.readdirSync(path.join(docs,'public/files'));
if(files.filter(x=>/\.(docx|xlsx|vtt|pptx)$/.test(x)).length!==11||!files.includes('Asteria_Copilot_Premium_Practice_Files.zip')||!files.includes('Asteria_Grounded_Evidence_Brief.docx')||!files.includes('Asteria_Service_KPI_Reviewed_backup.xlsx')||!files.includes('Asteria_Presentation_Template.pptx')) errors.push('Wrong practice package membership: expected eight sources, two backups and one template');
for(const p of [brief,'en/exercises/02-kpi-to-decision-brief.md','en/files.md','en/before-you-begin.md']) requireText(p,'/files/Asteria_Grounded_Evidence_Brief.docx');
requireText(brief,'Prepared backup');
for(const p of [kpi,'en/files.md','en/before-you-begin.md']) requireText(p,'/files/Asteria_Service_KPI_Reviewed_backup.xlsx');
requireText(kpi,'Fallback: Your reviewed Excel workbook is not ready');
requireText('en/files.md','eleven files: eight source files, two prepared backups and one presentation template');
for(const p of [kpi,'en/files.md','en/before-you-begin.md']) requireText(p,'/files/Asteria_Presentation_Template.pptx');
if(errors.length){console.error(errors.join('\n'));process.exit(1);}
console.log('Validation passed: English learner site, 4 core exercises, 1 demonstration, legacy redirects, 330 minutes and 12 downloads.');
