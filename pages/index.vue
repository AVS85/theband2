<template>
<div>

	<section class="container section1">
		<div class="row">
			<div class="col-md-5 sideA">
				<h1>Аналитичекое бюро</h1>
				<p>Помогаем бизнесу достигать целей, фокусируясь на смысле. Ясно и убедительно расскажем вашу идею с помощью логики, цифр и визуальных коммуникаций</p>
				<button class="btn_main btn_main-first" @click="clickBtnOrder">Обсудить проект</button>
			</div>
			<div class="d-none d-md-block col-md-5 col-lg-3 offset-md-2 offset-lg-3 sideB">
				<swiper ref="swServices" :options="sw1Options">
					<swiper-slide v-for="(item, i) in servicesItems" :key="i">
						<div class="slide_wr">
							<div class="slide_icon"
							:style="`background-image: url('${item.icon}')`"></div>
							<div class="slide_title">{{item.header}}</div>
							<button 
							class="slide_btn"
							@click="openReadmore(item)">Подробнее</button>
						</div>
					</swiper-slide>
				</swiper>
			</div>
		</div>
	</section>

	<Section2 id="about"/>
	<Section3 id="services"/>
	<Section4 />
	<Section5 />
	<Section6 />
	<Section7 id="contacts"/>

</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

import Section2 from '/components/index/Section2.vue'
import Section3 from '/components/index/Section3.vue'
import Section4 from '/components/index/Section4.vue'
import Section5 from '/components/index/Section5.vue'
import Section6 from '/components/index/Section6.vue'
import Section7 from '/components/index/Section7.vue'

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
        spaceBetween: 30,
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
      },
		}
	},
	components: {
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
	
	methods: {
		clickBtnOrder(){
			this.$router.push('/#contacts')
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
section
	// border: 1px solid grey
	padding-top: 105px
	padding-bottom: 105px
	@media (max-width: 998px)
		padding-top: 75px
		padding-bottom: 75px
	.section_title
		margin-bottom: 40px
	.section_subtitle
		margin-top: -20px
.section1
	.sideA
		p
			margin: 20px 0
		button
			margin: 40px 0 0 0
	.sideB
		// border: 1px solid grey
	.slide_wr
		// border: 1px solid red
		border-radius: 5px
		position: relative
		display: flex
		flex-direction: column
		justify-content: space-between
		align-items: flex-start
		background-color: $grey_lite2
		padding: 30px 14px
		min-height: 300px
		width: 100%
		box-shadow: 0px 59px 59px -50px rgba(213, 222, 232, .51)
		margin-bottom: 60px
		user-select: none
		cursor: grab
		&:active
			cursor: grabbing
		.slide_icon
			// border: 1px solid grey
			background-position: center
			background-repeat: no-repeat
			background-size: contain
			height: 46px
			width: 46px
			margin-bottom: 45px
		.slide_title
			// border: 1px solid grey
			font-weight: bold
			flex: 1
		.slide_btn
			border: 0
			position: relative
			font-size: 12px
			color: $elem
			background: transparent
			&::after
				content: ''
				position: absolute
				// border: 1px solid red
				background-image: url('/icons/arrow-sm.svg')
				background-size: contain
				height: 10px
				min-width: 14px
				top: calc(50% - 5px)
				margin-left: 10px
</style>
