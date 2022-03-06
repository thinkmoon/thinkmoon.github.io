import { defineNuxtConfig } from 'nuxt3';

export default defineNuxtConfig({

  meta: {
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'thinkmoon,醉月思,指尖魔法屋' },
      { name: 'description', content: 'web前端开发工程师，面向高保真编程，总结与记录是两个极其优秀的学习习惯。对知识和技术保持敬畏之心！' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
        async: true,
        'data-ad-client': 'ca-pub-3208634444966567'
      }
    ]
  },
  css: [
    'assets/css/index.less',
  ],
  buildModules: [
    '@pinia/nuxt',
  ],
});
