<template>
<div class="mainpage">

	<Section1 />

	<div class="scrollmark" id="about" />
	<BaseSection title="Какие задачи решаем">
		<Section2 />
	</BaseSection>

	<BaseSection title="Услуги">
		<Section3 />
	</BaseSection>

	<BaseSection title="Главная ценность нашей работы в проработке ваших идей с учетом цели и бизнес-специфики">
		<Section4 />
	</BaseSection>

	<div class="scrollmark" id="portfolio" />
	<BaseSection title="Портфолио" rootBgColor="#F3F6F9">
		<Section5 />
	</BaseSection>
	
	<Section6 />

	<div class="scrollmark" id="contacts" />
	<BaseSection title="Раскажите о вашем проекте:">
		<Section7 />
	</BaseSection>

</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Swiper, SwiperSlide } from "vue-awesome-swiper";


import BaseSection from '/components/mainpage/BaseSection.vue'
import Section1 from '/components/mainpage/section1/Section1.vue'

import Section2 from '/components/mainpage/section2/Section2.vue'
import Section3 from '/components/mainpage/section3/Section3.vue'
import Section4 from '/components/mainpage/section4/Section4.vue'
import Section5 from '/components/mainpage/section5/Section5.vue'
import Section6 from '/components/mainpage/section6/Section6.vue'
import Section7 from '/components/mainpage/section7/Section7.vue'

// import Section44 from '/components/mainpage/Section4.vue'



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
		// Section44,
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
