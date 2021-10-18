<template>
<div class="mainpage">

	<Section1 />

	<BaseSection title="Какие задачи решаем">
		<Section2 id="about"/>
	</BaseSection>
	<BaseSection title="Какие задачи решаем">
		<Section3 id="services"/>
	</BaseSection>

	<Section4 />
	<Section5 />
	<Section6 />
	<Section7 id="contacts"/>

</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Swiper, SwiperSlide } from "vue-awesome-swiper";


import BaseSection from '/components/mainpage/BaseSection.vue'
import Section1 from '/components/mainpage/section1/Section1.vue'

import Section2 from '/components/mainpage/section2/Section2.vue'
import Section3 from '/components/mainpage/Section3.vue'
import Section4 from '/components/mainpage/Section4.vue'
import Section5 from '/components/mainpage/Section5.vue'
import Section6 from '/components/mainpage/Section6.vue'
import Section7 from '/components/mainpage/Section7.vue'

export default {
	async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
		await store.dispatch('loadServices');
		await store.dispatch('loadProjects')
	},
	data() {
		return {
			sw1Options: {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 50,
				// direction: 'vertical',
				// breakpoints: {   
				// 	0: { slidesPerView: 1, spaceBetween: 0 },
				// 	400: { slidesPerView: 2, spaceBetween: 5 },
				// 	768: { slidesPerView: 3, spaceBetween: 10 },
        //   992: { slidesPerView: 4, spaceBetween: 20 }
        // },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
				pagination: {
					el: '.swPagination-block1'
				},
      },
		}
	},
	components: {
		BaseSection,
		Section1,
		Section2,
		Section3,
		Section4,
		Section5,
		Section6,
		Section7,
		Swiper,	SwiperSlide,
	},
	computed: {
		...mapGetters({
			servicesItems: "getServices", 
		}),
		swiper() {
			// return this.$refs.swServices.$swiper;
		}
	},

	mounted(){
		fbq('track', 'PageView'); //Посещение каждого отдельного URL
	},
	
	methods: {
		clickBtnOrder(){
			fbq('track', 'Contact'); //pixel
			// this.$router.push('/#contacts')
			this.$scrollTo('#contacts')
		},
		openReadmore(item){
			console.log(item);
			this.$store.commit('setPopupServices', item)
			this.$store.commit('togglePopupServices', true)
		}
	},

	head() {
		return {
			title: "TheBand",
			link: [{ rel: "canonical", href: `https://theband.design${this.$route.path}` }],
			meta: [
				{	hid: "description",	name: "description", content: "TheBand"	},
				{	hid: "keywords", name: "keywords", content: "TheBand" },
				// { property: "og:title", content: this.content?.meta?.opengraph?.title },
				// {
				// property: "og:description",
				// content: this.content?.meta?.opengraph?.description,
				// },
				// { property: "og:image", content: this.content?.meta?.opengraph?.image },
				// { property: "og:type", content: this.content?.meta?.opengraph?.type },
				// { property: "og:url", content: this.content?.meta?.opengraph?.url },
			],
		};
	},
}
</script>

<style lang="sass">

.mainpage

	// section.mpSection
	// 	border: 1px solid grey
	// 	font-family: 'textMedium'
	// 	padding-top: 60px
	// 	padding-bottom: 60px
	// 	header
	// 		font-family: 'headerBold'
	// 		font-size: 32px
	// 		line-height: 40px
	// 		margin-bottom: 60px
	// 	section.content_wrapper
	// 		border: 1px solid grey


// .section1
// 	.sideA
// 		p
// 			margin: 20px 0
// 		button
// 			margin: 40px 0 0 0
// 	.sideB
// 		display: flex !important
// 		flex-wrap: nowrap
// 		// border: 1px solid grey
// 		@media (max-width: 998px)
// 			display: none !important
// 		.swPagination-block1
// 			display: flex
// 			flex-direction: column
// 			padding-left: 20px
// 			align-items: flex-end
// 			.swiper-pagination-bullet
// 				margin: 7px 0
// 				width: 30px
// 				border: 0
// 				// min-height: 4px	
// 				// max-height: 4px
// 				// height: 4px
// 			.swiper-pagination-bullet-active
// 				background: rgba($grey_dark1, .75)
// 				width: 40px
// 				// transition: .25s
// 				transition: 0s !important

// 	.slide_wr
// 		// border: 1px solid red
// 		border-radius: 5px
// 		position: relative
// 		display: flex
// 		flex-direction: column
// 		justify-content: space-between
// 		align-items: flex-start
// 		background-color: $grey_lite2
// 		padding: 30px 14px
// 		min-height: 300px
// 		width: calc(100% - 10px)
// 		box-shadow: 0px 59px 59px -50px rgba(213, 222, 232, .51)
// 		margin-bottom: 60px
// 		user-select: none
// 		cursor: grab
// 		&:active
// 			cursor: grabbing
// 		.slide_icon
// 			// border: 1px solid grey
// 			background-position: center
// 			background-repeat: no-repeat
// 			background-size: contain
// 			height: 46px
// 			width: 46px
// 			margin-bottom: 45px
// 		.slide_title
// 			// border: 1px solid grey
// 			font-weight: bold
// 			flex: 1
// 		.slide_btn
// 			border: 0
// 			position: relative
// 			font-size: 12px
// 			color: $elem
// 			background: transparent
// 			&::after
// 				content: ''
// 				position: absolute
// 				// border: 1px solid red
// 				background-image: url('/icons/arrow-sm.svg')
// 				background-size: contain
// 				height: 10px
// 				min-width: 14px
// 				top: calc(50% - 5px)
// 				margin-left: 10px
</style>
