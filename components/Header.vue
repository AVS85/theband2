<template>
<header>
	<div class="container">

		<div class="row row_header">
			<div class="col-auto">
				<div class="logo">
					<nuxt-link to="/">
						<img src="/logo-theband.png" alt="logo">
					</nuxt-link>
				</div>
			</div>
			<div class="d-none d-lg-block col">
				<div class="menu">
					<ul>
						<li><a v-scroll-to="'#about'" href="#">О нас</a></li>
						<li><a v-scroll-to="'#services'" href="#">Услуги</a></li>
						<li><a v-scroll-to="'#contacts'" href="#">Контакты</a></li>
						<!-- <li><nuxt-link :to="{ path: '/blog'}">Блог</nuxt-link></li> -->
					</ul>
				</div>
			</div>
			<div class="d-none d-lg-block col-lg-auto">
				<!-- <a v-scroll-to="'#contacts'" href="#"> -->
					<button class="btn_main btn_main-second2" @click="openContactForm">Связаться</button>
				<!-- </a> -->
			</div>
		
			<div class="d-lg-none burger"
			:class="{ show: isShowMenu }"
			@click="isShowMenu = !isShowMenu"/>
		</div>

		<div class="d-lg-none row_mobilemenu" :class="{ show: isShowMenu }">
			<ul>
				<li @click="isShowMenu = !isShowMenu">
					<nuxt-link :to="{ path: '/', hash:'#about'}">О нас</nuxt-link>
				</li>
				<li @click="isShowMenu = !isShowMenu">
					<nuxt-link :to="{ path: '/', hash:'#services'}">Услуги</nuxt-link>
				</li>
				<li @click="isShowMenu = !isShowMenu">
					<nuxt-link :to="{ path: '/', hash:'#contacts'}">Контакты</nuxt-link>
				</li>
			</ul>
			<button class="btn_main btn_main-second2" @click="openContactForm">Связаться</button>
		</div>
	

	</div>
	<popup/>
	<popupProjects/>
</header>
</template>

<script>
import popup from '/components/Popup_services.vue'
import popupProjects from '/components/Popup_projects.vue'

export default {
	components: {
		popup,
		popupProjects
	},
	data() {
		return {
			isShowMenu: false,
			isShowPopup: false
		}
	},
	methods: {
		openContactForm(){
			fbq('track', 'Contact'); //pixel

			this.isShowMenu = false
			this.$scrollTo('#contacts')
			// this.$router.push('/#contacts')
		}
	},
}
</script>

<style lang="sass">

header
	position: relative
	display: flex
	align-items: center
	background-color: #fff
	box-shadow: 0px -1px 32px -10px #EAEEF2
	z-index: 99
	.row_mobilemenu
		// border: 1px solid $elem
		position: absolute
		display: flex
		align-items: center
		flex-direction: column
		background-color: #fff
		left: 0
		right: 0
		transition: .35s
		min-height: 100vh
		transform: translateY(-100vh)
		z-index: 98
		&.show
			text-transform: uppercase
			transform: translateY(0vh)
		ul
			margin: 0
			padding: 0
			margin: 34px 0
			li
				margin: 16px 0
				list-style: none
				text-align: center
	.row_header
		position: relative
		align-items: center
		justify-content: space-between
		background-color: #fff
		z-index: 99
		@media (max-width: 998px)
			justify-content: center

	.burger
		// border: 1px solid $elem
		position: absolute
		background-image: url(/icons/menu-burger.svg)
		background-repeat: no-repeat
		background-position: center
		background-size: contain
		// top: 37px
		right: 20px
		height: 30px
		width: 30px
		&.show
			background-image: url(/icons/menu-burger-close.svg)


	.logo
		display: flex
		align-items: center
		padding: 32px 16px 32px 0
		img
			width: 131px

	.menu
		// border: 1px solid red
		display: flex
		align-self: center
		ul
			// border: 1px solid grey
			display: flex
			margin: 0
			padding: 0
			li
				// border: 1px solid rede: none
				font-size: 18px
				line-height: 18px
				padding: 0 16px
				list-style: none
				a
					color: $text1
</style>
