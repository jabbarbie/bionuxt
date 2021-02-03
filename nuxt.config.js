export default {
  // Target: https://go.nuxtjs.dev/config-target
  // target: 'server',
  target: 'static',
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Probio System',
    htmlAttrs: {
      lang: 'id'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'robots', content : 'noindex'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.png' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/component.scss',
    '@/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/composition-api',
    '@nuxtjs/fontawesome'
  ],

  fontawesome: {
    component: 'fa',
    icons: {
      solid: true,
      brands: true
    }
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources',
    
    ['nuxt-mq', {
        defaultBreakpoint: 'sm',
        breakpoints: {
          sm: 450,
          md: 1250,
          lg: Infinity
        }
      }
    ]

  ],

  // Tambahan untuk handle middlerware
  router: {
    // base: '/dists/',
    middleware: ['mobile']
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // Import css secara global, sehingga bisa digunakan oleh component 
  styleResources: {
    scss: [
        '@/assets/scss/variable.scss'
    ]
  },

  

}
