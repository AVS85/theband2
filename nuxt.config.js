
export default {
  // publicRuntimeConfig: {
  //   baseURL: (process.env.NODE_ENV == 'production') ? 'http://localhost' : 'http://dev.jmart.ru',
  // },
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
		'swiper/css/swiper.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
		{ src: '~/plugins/vue2-smooth-scroll.js', ssr: false },
  ],

  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    sass: [
      '@/assets/*.sass'
    ]
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    'bootstrap-vue/nuxt', // Doc: https://bootstrap-vue.js.org
    '@nuxtjs/axios',      // Doc: https://axios.nuxtjs.org/usage
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
	router: {
		router: {
			scrollBehavior: async (to, from, savedPosition) => {
				if (savedPosition) {
					return savedPosition
				}
	
				const findEl = async (hash, x) => {
					return document.querySelector(hash) ||
						new Promise((resolve, reject) => {
							if (x > 50) {
								return resolve()
							}
							setTimeout(() => { resolve(findEl(hash, ++x || 1)) }, 100)
						})
				}
	
				if (to.hash) {
					let el = await findEl(to.hash)
					if ('scrollBehavior' in document.documentElement.style) {
						return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
					} else {
						return window.scrollTo(0, el.offsetTop)
					}
				}
	
				return { x: 0, y: 0 }
			}
		},
    extendRoutes(routes, resolve) {
      routes.push(
        // {
        //   path: '*/detail*',
        //   component: resolve(__dirname, 'pages/catalog/card.vue')
        // },
        {
          path: '/blog/*',
          component: resolve(__dirname, 'pages/blog/index.vue')
        },
        // {
        //   path: '/catalog2/*',
        //   component: resolve(__dirname, 'pages/catalog/index.vue')
        // },
        // {
        //   path: '*',
        //   component: resolve(__dirname, 'pages/404.vue')
        // }
      )
    }
  },
  build: {
  },

}
