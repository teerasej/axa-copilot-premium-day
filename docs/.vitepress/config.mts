import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

const exerciseLinksEn = [
  { text: '1. Ground the brief', link: '/en/exercises/01-ground-the-brief' },
  { text: '2. Transparent KPI analysis', link: '/en/exercises/02-kpi-to-decision-brief' },
  { text: '3. Communication to follow-up', link: '/en/exercises/03-meeting-to-follow-up' },
  { text: '4. Meeting to executive deck', link: '/en/exercises/04-evidence-to-executive-story' }
]

const exerciseLinksTh = [
  { text: '1. สร้าง Brief จากหลักฐาน', link: '/th/exercises/01-ground-the-brief' },
  { text: '2. วิเคราะห์ KPI อย่างโปร่งใส', link: '/th/exercises/02-kpi-to-decision-brief' },
  { text: '3. จาก Communication สู่ Follow-up', link: '/th/exercises/03-meeting-to-follow-up' },
  { text: '4. จาก Meeting สู่ Executive Deck', link: '/th/exercises/04-evidence-to-executive-story' }
]

export default withMermaid(defineConfig({
  lang: 'en-GB',
  title: 'AXA Microsoft 365 Copilot Premium Workshop',
  description: 'Bilingual participant exercises for a cross-app Microsoft 365 Copilot workshop',
  base: '/axa-copilot-premium-day/',
  cleanUrls: true,
  lastUpdated: false,
  ignoreDeadLinks: [/^\/files\/.*\.(?:docx|xlsx)$/],
  locales: {
    root: {
      label: 'Choose language',
      lang: 'en-GB',
      link: '/'
    },
    en: {
      label: 'English',
      lang: 'en-GB',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Before you begin', link: '/en/before-you-begin' },
          { text: 'Files', link: '/en/files' }
        ],
        sidebar: [
          {
            text: 'Start here',
            items: [
              { text: 'Home and timetable', link: '/en/' },
              { text: 'Before you begin', link: '/en/before-you-begin' },
              { text: 'Practice files', link: '/en/files' }
            ]
          },
          { text: 'Exercises', items: exerciseLinksEn },
          { text: 'Finish', items: [{ text: 'Wrap-up and transfer', link: '/en/wrap-up' }] }
        ],
        outline: { level: [2, 3], label: 'On this page' },
        docFooter: { prev: 'Previous', next: 'Next' },
        returnToTopLabel: 'Return to top',
        sidebarMenuLabel: 'Menu',
        darkModeSwitchLabel: 'Theme'
      }
    },
    th: {
      label: 'ไทย',
      lang: 'th-TH',
      link: '/th/',
      themeConfig: {
        nav: [
          { text: 'หน้าหลัก', link: '/th/' },
          { text: 'ก่อนเริ่ม', link: '/th/before-you-begin' },
          { text: 'ไฟล์ฝึก', link: '/th/files' }
        ],
        sidebar: [
          {
            text: 'เริ่มต้นที่นี่',
            items: [
              { text: 'หน้าหลักและกำหนดการ', link: '/th/' },
              { text: 'เตรียมตัวก่อนเริ่ม', link: '/th/before-you-begin' },
              { text: 'ไฟล์สำหรับฝึก', link: '/th/files' }
            ]
          },
          { text: 'แบบฝึกหัด', items: exerciseLinksTh },
          { text: 'สรุป', items: [{ text: 'ทบทวนและนำไปใช้', link: '/th/wrap-up' }] }
        ],
        outline: { level: [2, 3], label: 'เนื้อหาในหน้านี้' },
        docFooter: { prev: 'ก่อนหน้า', next: 'ถัดไป' },
        returnToTopLabel: 'กลับด้านบน',
        sidebarMenuLabel: 'เมนู',
        darkModeSwitchLabel: 'ธีม'
      }
    }
  },
  head: [
    ['meta', { name: 'theme-color', content: '#12335b' }],
    ['meta', { name: 'color-scheme', content: 'light dark' }]
  ],
  themeConfig: {
    siteTitle: 'Copilot Premium Workshop',
    nav: [{ text: 'English / ไทย', link: '/en/' }],
    outline: { level: [2, 3], label: 'On this page' },
    search: { provider: 'local' },
    docFooter: { prev: 'Previous', next: 'Next' },
    returnToTopLabel: 'Return to top',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Theme'
  },
  markdown: {
    theme: { light: 'github-light', dark: 'github-dark' }
  },
  mermaid: {
    theme: 'base',
    themeVariables: {
      primaryColor: '#eaf2fb',
      primaryTextColor: '#12335b',
      primaryBorderColor: '#3973ad',
      lineColor: '#3973ad',
      secondaryColor: '#fbecef',
      tertiaryColor: '#f7f9fc'
    }
  }
}))
