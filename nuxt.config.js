import axios from './plugins/axios'
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '指尖魔法屋',
    htmlAttrs: {
      lang: 'zh-CN'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no' },
      { hid: 'description', name: 'description', content: '指尖魔法屋' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet',  href: 'https://cdn.bootcdn.net/ajax/libs/highlight.js/11.0.0-alpha0/styles/github.min.css' }
    ],
    script: [
      { src: 'https://cdn.bootcdn.net/ajax/libs/highlight.js/11.0.0-alpha0/highlight.min.js' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~assets/style.css',
    '~assets/index.css',
    '~assets/max-767.css',
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
              current
            }
          });
          pageNum = data.pages;
          current = data.current;
          let list = data.records;
          routes.push(`/page/${current}`)
          routes = routes.concat(list.map(item => {
            return '/post/' + item.cid
          }))
        }
        console.log(routes)
        resolve(routes)
      })
    }
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
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  }
}
