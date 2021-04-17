export const state = () => ({
	services: [], //items услуг
	popupIsShow: true, // 
	popupContent: []
})

export const actions = {
	async nuxtServerInit ( {$axios, commit, dispatch, params} ) {
	// const URL = `${this.$config.baseURL}/api-ms/catalog/menu`
	// console.log(`mainmenu ${URL}`)
	},

	async loadServices( {commit} ){
		await this.$axios('/api_services.json')
		.then(res => {
			commit('setServices', res.data)
		})
	},

}

export const mutations = {
	setServices: (state, items) => state.services = items,
	togglePopup: (state, bool) =>  state.popupIsShow = bool,
	setPopupContent: (state, item) =>  state.popupContent = item,

}

export const getters = {
	getServices: state =>  state.services,
	getPopupIsShow: state =>  state.popupIsShow,
	getPopupContent: state =>  state.popupContent,
}
