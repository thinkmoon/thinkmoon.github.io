import { defineNuxtConfig } from 'nuxt3';

export default defineNuxtConfig({
  css: [
    'assets/css/index.less',
  ],
  meta: {
    script: [
      {
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
        async: true,
				defer: true,
        'data-ad-client': 'ca-pub-3208634444966567'
      }
    ]
  }
});
