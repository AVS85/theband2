export const state = () => ({
	services: [], //items услуг
	popupIsShow: false, // 
	popupContent: [],
	blogArticle: {}
})

export const actions = {
	async nuxtServerInit ( {$axios, commit, dispatch, params} ) {
	// const URL = `${this.$config.baseURL}/api-ms/catalog/menu`
	// console.log(`mainmenu ${URL}`)
	},

	async loadServices( {commit} ){
		await this.$axios(`${this.$config.baseURL}/api_services.json`)
		.then(res => {
			commit('setServices', res.data)
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
	setBlogArticle: (state, obj) => state.blogArticle = obj,
	setServices: (state, items) => state.services = items,
	togglePopup: (state, bool) =>  state.popupIsShow = bool,
	setPopupContent: (state, item) =>  state.popupContent = item,
}

export const getters = {
	getBlogArticle: state =>  state.blogArticle,
	getServices: state =>  state.services,
	getPopupIsShow: state =>  state.popupIsShow,
	getPopupContent: state =>  state.popupContent,
}
