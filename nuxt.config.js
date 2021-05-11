import axios from './plugins/axios';

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '指尖魔法屋',
    htmlAttrs: {
      lang: 'zh-CN',
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no'},
      {hid: 'keywords', name: 'keywords', content: 'thinkmoon,醉月思,指尖魔法屋'},
      {hid: 'description', name: 'description', content: '总结与记录是两个极其优秀的学习习惯！'},
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: '/highlight/atom-one-dark.min.css'},
      {rel: 'stylesheet', href: '/style.css'},
    ],
    script: [
      {src: '/highlight/highlight.min.js'},
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~assets/index',
    '~assets/max-767',
    '~assets/min-1230',
  ],
  generate: {
    dir: 'docs',
    routes() {
      return new Promise(async resolve => {
        let routes = [];
        let current = 0;
        let pageNum = -1;
        while (current !== pageNum) {
          current++;
          let data = await axios.get('/post/list', {
            params: {
              current,
            },
          });
          pageNum = data.pages;
          current = data.current;
          let list = data.records;
          routes.push(`/page/${current}`);
          routes = routes.concat(list.map((item) => {
            return '/post/' + item.cid;
          }));
        }
        console.log(routes);
        resolve(routes);
      });
    },
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(less|css|vue)$/,
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
      },
    },
  },
};
