import { defineNuxtPlugin } from '#app'
import VMdPreview from '@kangc/v-md-editor/lib/preview.js';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import hljs from 'highlight.js';


export default defineNuxtPlugin((nuxtApp) => {
  VMdPreview.use(githubTheme, {
    Hljs: hljs,
  });
  nuxtApp.vueApp.use(VMdPreview)
})
