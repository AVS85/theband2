
export default {
  publicRuntimeConfig: {
    wpBaseURL: 'http://wp-theband.na4u.ru/',
    baseURL: (process.env.NODE_ENV == 'production') ? 'https://theband.design' : 'http://192.168.1.12:3333',
    // baseURL: (process.env.NODE_ENV == 'production') ? 'http://theband2.na4u.ru' : 'http://192.168.1.12:3333',
  },
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
	** Nuxt target
	** See https://nuxtjs.org/api/configuration-target
	 */
 	mode: 'spa',
	//  ssr: 'false',
 	// mode: 'universal',
  target: 'static',
  // target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'facebook-domain-verification', content: 'xeh5farsssvbk7tqqljdygkhn9ll9s' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
		script: [
			{ src: "https://www.google.com/recaptcha/api.js?render=6LfK2NEaAAAAAP2vR6unr-w3QNOowHYAQ7yjy-jy" },
			{ src: "/js/recaptcha.js" },
			{ src: "/js/fb-pixel.js" },
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
		// { src: '@/plugins/vue-awesome-swiper', mode: 'client' }
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
		['nuxt-mail', {
      message: {
        to: 'seo.resait@yandex.ru',
      },
      smtp: {
        host: "http://mail.getcode.xyz",
        port: 465,
				secure: true, // true for 465, false for other ports
        // port: 587,
				auth: {
					login: 'test@getcode.xyz',
					pass: 'tEst2021test'
				}
      },
    }],
		
    ['vue-scrollto/nuxt', { duration: 300 }]
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
		baseURL: 'http://wp-theband.na4u.ru/wp-json/wp'
	},
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
	// server: {
  //   host: '127.0.5.75',
  //   port: '53797'
  // }

}
