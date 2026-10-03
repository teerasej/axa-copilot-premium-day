import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

const siteBase = '/axa-copilot-premium-day/'

const exerciseLinksEn = [
  { text: '1. Ground the brief', link: '/en/exercises/01-ground-the-brief' },
  { text: '2. Excel to executive dashboard', link: '/en/exercises/02-kpi-to-decision-brief' },
  { text: '3. Recap to Action Plan', link: '/en/exercises/03-meeting-to-follow-up' },
  { text: '4. Action Plan to executive deck', link: '/en/exercises/04-evidence-to-executive-story' },
  { text: '5. Custom Agent demonstration', link: '/en/exercises/05-explore-ai-agents' }
]

export default withMermaid(defineConfig({
  lang: 'en-GB',
  title: 'AXA Microsoft 365 Copilot Premium Workshop',
  description: 'Participant exercises for a cross-app Microsoft 365 Copilot workshop',
  base: siteBase,
  cleanUrls: true,
  lastUpdated: false,
  ignoreDeadLinks: [/^\/files\/.*\.(?:docx|xlsx)$/, /^\/files\/Asteria_Presentation_Template\.pptx$/],
  locales: {
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

  },
  head: [
    ['meta', { name: 'theme-color', content: '#12335b' }],
    ['meta', { name: 'color-scheme', content: 'light dark' }]
  ],
  themeConfig: {
    siteTitle: 'Copilot Premium Workshop',
    nav: [{ text: 'Home', link: '/en/' }],
    outline: { level: [2, 3], label: 'On this page' },
    search: { provider: 'local' },
    docFooter: { prev: 'Previous', next: 'Next' },
    returnToTopLabel: 'Return to top',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Theme'
  },
  markdown: {
    theme: { light: 'github-light', dark: 'github-dark' },
    config(md) {
      const renderLink = md.renderer.rules.link_open
      md.renderer.rules.link_open = (tokens, index, options, env, renderer) => {
        const href = tokens[index].attrGet('href') || ''
        if (href.startsWith('/') && /\/files\/[^?#]+\.(?:docx|xlsx|vtt|zip|pptx)(?:[?#]|$)/i.test(href)) {
          // File links must bypass client-side page routing.
          tokens[index].attrSet('download', '')
          if (href.startsWith('/files/')) {
            tokens[index].attrSet('href', siteBase.slice(0, -1) + href)
          }
        }
        return renderLink
          ? renderLink(tokens, index, options, env, renderer)
          : renderer.renderToken(tokens, index, options)
      }
    }
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
