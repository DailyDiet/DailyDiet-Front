export default {
	mode: 'spa',
	/*
	 ** Headers of the page
	 */
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{
				hid: 'description',
				name: 'description',
				content: process.env.npm_package_description || '',
			},
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/logo.jpg' },
			{
				rel: 'stylesheet',
				href:
					'https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap',
			},
		],
	},
	/*
	 ** Customize the progress-bar color
	 */
	loading: { color: '#ff773d' },
	/*
	 ** Global CSS
	 */
	css: ['~/assets/styles/main.scss'],
	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [
		'~/plugins/axios',
		'~/plugins/smooth-scroll',

		'~/plugins/mixins/is-mobile',
		'~/plugins/mixins/toast',
	],
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: [],
	/*
	 ** Nuxt.js modules
	 */
	modules: [
		// Doc: https://bootstrap-vue.js.org
		'bootstrap-vue/nuxt',
		'@nuxtjs/axios',
		'@nuxtjs/auth',
	],

	axios: {
		baseURL: 'https://dailydiet-api.herokuapp.com/',
	},
	/*
	 ** Build configuration
	 */
	build: {
		/*
		 ** You can extend webpack config here
		 */
		extend(config, ctx) {
			// Run ESLint on save
			if (ctx.isDev && ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/,
				});
			}
		},
	},

	auth: {
		strategies: {
			local: {
				endpoints: {
					login: {
						url: '/users/signin',
						method: 'post',
						propertyName: 'token',
					},
					logout: {
						url: '/users/signout',
						method: 'PATCH',
					},
					user: false,
				},
			},
		},
	},

	env: {
		apiBaseUrl: 'https://dailydiet-api.herokuapp.com/',
	},

	bootstrapVue: {
		icons: true,
	},
};
