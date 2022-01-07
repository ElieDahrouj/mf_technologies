export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: true,
  head: {
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'google-site-verification', content: '0mjAkLf9448kBvvO9lwiIYBRzNi6-iITnR64eZyjLoM' },
      {
        name: 'msapplication-TileColor',
        content: '#ffffff',
      },
      {
        name: 'theme-color',
        content: '#ffffff',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'MF Technologies',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/icon_mf_technologies.png',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:'MF-Technologies est un acteur de la transformation digitale et numérique basée à Paris travaillant avec une équipe d\'ingénieurs et de techniciens de haut niveau'
      }
    ],
    link: [
      { rel: 'icon', type:'image/png', href: '/favicon.ico' },
      { rel:"stylesheet", href:"https://use.fontawesome.com/releases/v5.15.4/css/all.css",integrity:"sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm", crossOrigin:"anonymous"},
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://mf-technologies.herokuapp.com/',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: '#581bdf',
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest',
      },
    ]
  },

  transition: {
    name: 'page',
    mode: 'out-in',
    css: false,

    beforeEnter(el) {
      this.$gsap.set(el, {
        opacity: 0
      })
    },

    enter(el, done) {
      this.$gsap.to(el, {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: done
      })
    },

    leave(el, done) {
      this.$gsap.to(el, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: done
      })
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/jsonld.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    'nuxt-gsap-module',
  ],

  gsap: {
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true
    },
    extraEases: {
      expoScaleEase: true
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
  ],

  sitemap: {
    hostname:'https://mf-technologies.herokuapp.com',
    gzip: true,
    routes:[
      '/contact',
      '/MF_Technologies'
    ]
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
