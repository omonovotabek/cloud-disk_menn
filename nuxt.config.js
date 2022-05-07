export default {
  head: {
    title: 'cloud-disk',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  server: {
    port: process.env.PORT,
    host: "localhost",
  },

  env: {
    baseUrl: process.env.BASE_URL,
  },

  css: [
  ],

  plugins: [
    '@/plugins/bootstrap-vue-icons',
    '@/plugins/vee-validate',
    '@/plugins/axios'
  ],

  bootstrapVue: {
   icons: true,
  },

  components: true,

  buildModules: [
  ],


  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
  ],

  axios: {
    baseURL: 'http://localhost:5000',
  },

  build: {
    transpile: ["vee-validate/dist/rules"],
  }
}
