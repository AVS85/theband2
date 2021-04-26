export const state = () => ({
	services: [], //items услуг
	projects: [], //items проекты
	blogArticle: {},

	popupServices: [],
	isPopupServices: [],

	popupProjects: [],
	isPopupProject: false,
})

export const actions = {
	async nuxtServerInit ( {$axios, commit, dispatch, params} ) {	},

	async loadServices( {commit} ){
		await this.$axios(`${this.$config.baseURL}/api_services.json`)
		.then(res => {
			commit('setServices', res.data)
		}).catch( err => console.log('err ', err) )
	},
	async loadProjects( {commit} ){
		await this.$axios(`${this.$config.baseURL}/api_projects.json`)
		.then(res => {
			commit('setProjects', res.data)
			console.log(res.data);
		}).catch( err => console.log('err ', err) )
	},

	async loadBlogArticleByID( {commit}, id ){
		const URL = `/v2/posts/${id}`

		let posts = await this.$axios(URL)
		.then( async res => {
			await commit('setBlogArticle', res.data)
			this.$router.push(`/blog/${res.data.link.replace( this.$config.wpBaseURL, '' )}`)
		})
		.catch( err => console.log('err ', err) )

	},



}

export const mutations = {
	setServices: (state, items) => state.services = items,
	setProjects: (state, items) => state.projects = items,
	
	setBlogArticle: (state, obj) => state.blogArticle = obj,
	togglePopup: (state, bool) =>  state.popupIsShow = bool,
	setPpupServices: (state, item) =>  state.popupServices = item,
}

export const getters = {
	getBlogArticle: state =>  state.blogArticle,

	getServices: state =>  state.services,
	getProjects: state =>  state.projects,

	getPopupIsShow: state =>  state.popupIsShow,
	getPopupServices: state =>  state.popupServices,
}
