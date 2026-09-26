import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const docs = path.join(root, 'docs');
const errors = [];

const exerciseSlugs = [
  '01-ground-the-brief',
  '02-kpi-to-decision-brief',
  '03-meeting-to-follow-up',
  '04-evidence-to-executive-story',
];

const requiredLocalePages = ['index.md', 'before-you-begin.md', 'files.md', 'wrap-up.md'];
const requiredArtifacts = [
  'Asteria_Operational_Context.docx',
  'Asteria_Service_KPI_28days.xlsx',
  'Asteria_Executive_Review_Transcript.vtt',
  'Asteria_Decision_Brief_Starter.docx',
  'Asteria_Copilot_Premium_Practice_Files.zip',
];

function fail(message) {
  errors.push(message);
}

function read(relativePath) {
  const absolutePath = path.join(root, relativePath);
  if (!fs.existsSync(absolutePath)) {
    fail(`Missing ${relativePath}`);
    return '';
  }
  return fs.readFileSync(absolutePath, 'utf8');
}

for (const locale of ['en', 'th']) {
  for (const page of requiredLocalePages) {
    read(`docs/${locale}/${page}`);
  }

  for (const slug of exerciseSlugs) {
    const relativePath = `docs/${locale}/exercises/${slug}.md`;
    const content = read(relativePath);
    for (const heading of [
      '## Exercise Overview',
      '## Prerequisites',
      '## Scenario',
      '### Practice',
      '#### Steps',
      '#### Checkpoint',
      '## Expected Output',
    ]) {
      if (!content.includes(heading)) fail(`${relativePath} is missing ${heading}`);
    }
    const practices = [...content.matchAll(/^### Practice[^\n]*$/gm)].length;
    const targets = [...content.matchAll(/^\*\*Primary target:\*\*/gm)].length;
    const checkpoints = [...content.matchAll(/^#### Checkpoint$/gm)].length;
    if (practices !== targets || practices !== checkpoints) {
      fail(`${relativePath} has ${practices} Practices, ${targets} targets, and ${checkpoints} checkpoints`);
    }
    if (/\*\*(?:Duration|Time)\*\*|^#{1,4}\s+(?:Duration|Time)|ระยะเวลา(?:โดยประมาณ)?\s*[:：]|ใช้เวลา\s*\d+/im.test(content)) {
      fail(`${relativePath} contains an exercise duration label`);
    }
    if (/Agent Builder|Pre-Built Agents?|\bResearcher agent\b|\bAnalyst agent\b|\bFacilitator agent\b|Copilot Studio|Copilot Cowork|Copilot Notebooks?/i.test(content)) {
      fail(`${relativePath} instructs an unavailable capability`);
    }
  }
}

for (const artifact of requiredArtifacts) {
  const artifactPath = path.join(docs, 'public', 'files', artifact);
  if (!fs.existsSync(artifactPath)) fail(`Missing downloadable artifact ${artifact}`);
}

const allMarkdown = [];
function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const full = path.join(directory, entry.name);
    if (entry.isDirectory() && entry.name !== 'public') walk(full);
    if (entry.isFile() && entry.name.endsWith('.md')) allMarkdown.push(full);
  }
}
walk(docs);

for (const file of allMarkdown) {
  const content = fs.readFileSync(file, 'utf8');
  if (/Krungsri/i.test(content)) fail(`${path.relative(root, file)} contains a forbidden reference`);
  for (const match of content.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)) {
    const href = match[1].split('#')[0];
    if (!href || /^(https?:|mailto:)/.test(href)) continue;
    if (href.startsWith('/files/')) {
      if (!fs.existsSync(path.join(docs, 'public', href))) fail(`${path.relative(root, file)} has a broken download link ${href}`);
      continue;
    }
    const resolved = path.resolve(path.dirname(file), href);
    const candidates = [resolved, `${resolved}.md`, path.join(resolved, 'index.md')];
    if (!candidates.some((candidate) => fs.existsSync(candidate))) {
      fail(`${path.relative(root, file)} has a broken relative link ${href}`);
    }
  }
}

const enHome = read('docs/en/index.md');
const thHome = read('docs/th/index.md');
const requiredTimes = ['09:00–10:30', '10:30–10:45', '10:45–12:00', '12:00–13:00', '13:00–14:30', '14:30–14:45', '14:45–16:00'];
for (const time of requiredTimes) {
  if (!enHome.includes(time)) fail(`English timetable is missing ${time}`);
  if (!thHome.includes(time)) fail(`Thai timetable is missing ${time}`);
}

const learnerBlocks = [
  ['09:00', '10:30'],
  ['10:45', '12:00'],
  ['13:00', '14:30'],
  ['14:45', '16:00'],
];
const minutes = (time) => {
  const [hour, minute] = time.split(':').map(Number);
  return hour * 60 + minute;
};
const learnerMinutes = learnerBlocks.reduce((total, [start, end]) => total + minutes(end) - minutes(start), 0);
if (learnerMinutes !== 330) fail(`Timetable has ${learnerMinutes} learner minutes instead of 330`);

if (errors.length) {
  console.error(`Validation failed with ${errors.length} issue(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Validation passed: ${allMarkdown.length} Markdown pages, 2 locales, 4 mirrored exercises, 5 downloads.`);
