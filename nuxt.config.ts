import { defineNuxtConfig } from 'nuxt3';
import IconsResolver from 'unplugin-icons/resolver';
import Components from 'unplugin-vue-components/vite';

const lifecycle = process.env.npm_lifecycle_event;
export default defineNuxtConfig({

  meta: {
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: "description",
        name: "description",
        content: "ElementPlus + Nuxt3",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
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
});
