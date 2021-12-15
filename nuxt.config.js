export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: false,
  head: {
    title: 'mf_technologies',
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
      { rel: 'icon', type:'image/png', href: '/favicon.png' },
      { rel:"stylesheet", href:"https://use.fontawesome.com/releases/v5.15.4/css/all.css",integrity:"sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm", crossOrigin:"anonymous"},
    ]
  },
  transition: {
    name: "scale",
    mode: "out-in",
    css: false,

    beforeEnter(el) {
      this.$gsap.set(el, {
        opacity: 0,
        scale: 0,
      });
    },

    enter(el, done) {
      this.$gsap.to(el, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.inOut",
        onComplete :(() =>{
          this.$gsap.timeline()
            .to('.animationLi',{
              autoAlpha:1,
              x:0,
              stagger: {each:0.4}
            })
        })
      });
    },

    leave(el, done) {
      this.$gsap.to(el, {
        opacity: 0,
        scale: 0,
        duration: 1,
        ease: "power2.inOut",
        onComplete: done,
      });
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '../assets/css/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
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
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
