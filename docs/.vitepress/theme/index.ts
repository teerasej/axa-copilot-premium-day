import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import { useData, withBase } from 'vitepress'
import './custom.css'
import ExerciseHeaderImage from './components/ExerciseHeaderImage.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    const { page } = useData()
    return h(DefaultTheme.Layout, null, {
      'home-hero-actions-after': () => page.value.relativePath === 'en/index.md'
        ? h('div', { class: 'training-download-row' }, [
            h('a', {
              class: 'training-download-button',
              href: withBase('/files/AXA-Copilot-Premium-Training-v2.pdf'),
              download: 'AXA-Copilot-Premium-Training-v2.pdf'
            }, 'Download training slides (PDF)')
          ])
        : null
    })
  },
  enhanceApp({ app }) {
    app.component('ExerciseHeaderImage', ExerciseHeaderImage)
  }
}
