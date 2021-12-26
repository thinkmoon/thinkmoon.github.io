import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  css: [
    'assets/css/style.css',
    'assets/css/han.css',
    'assets/index.less',
    'assets/max-767.less',
    'assets/min-1230.less',
    'assets/css/index.less',
    'assets/css/atom-one-dark.min.css'
  ],
  meta:{
    script: [
      {src: '//cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.3.1/build/highlight.min.js'}
    ]
  }
})
