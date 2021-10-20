<template>
<section class="wrapper">
	<div class="row">
		<div class="col-12">
			<swiper ref="swPortfolio" :options="swOptions_portfolio">
				<swiper-slide  
				v-for="(item, i) in projectsItems" :key="i">
					<div class="slide_img"
					:style="`background-image: url('${item.imgs[0].img_link}')`">
					</div>
				</swiper-slide>
			</swiper>
		</div>
	</div>
	<div class="row">
		<div class="col">
			<div class="control">
				<div class="buttons">
					<BtnArrow icon="prev" />
					<BtnArrow	icon="next" />
				</div>
				<div class="progressbar"></div>
			</div>
		</div>
	</div>
</section>
</template>

<script>
import BtnArrow from '../../elements/buttonArrow/ButtonArrow.vue'
import { mapGetters } from 'vuex'
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
export default {
	components: {
		Swiper,	SwiperSlide, BtnArrow
	},
	data() {
		return {
			swOptions_portfolio: {
        loop: true,
        slidesPerView: 'auto',
        // slidesPerView: 2,
        spaceBetween: 30,
        // autoplay: {
        //   delay: 3500,
        //   disableOnInteraction: false,
        // },
				// breakpoints: {   
				// 	501: { slidesPerView: 2, spaceBetween: 20 },
				// 	768: { slidesPerView: 3, spaceBetween: 30 },
        //   992: { slidesPerView: 4, spaceBetween: 30 }
        // },
        // navigation: {
        //   nextEl: ".swSlideR-portfolio",
        //   prevEl: ".swSlideL-portfolio",
        // },
				// pagination: {
				// 	el: '.swPagination-portfolio'
				// },
      },
		}
	},
	computed: {
		...mapGetters(
			{ projectsItems: "getProjects", }
		),
		swiper() {
			return this.$refs.swPortfolio.$swiper;
		}
	},
	methods: {
		// openContactForm(){
		// 	this.$router.push('/#contacts')
		// },
		openReadmore(item){
			console.log(item);
			this.$store.commit('setPopupProjects', item)
			this.$store.commit('togglePopupProjects', true)
		}
	}
}
</script>

<style lang="sass" scoped>
		
.swiper-slide
	// border: 1px solid red
	border-radius: 5px
	display: flex
	// height: 277px
	width: 35%
	transition: .25s
	aspect-ratio: 1.6 / 1
	// &-active
		// height: 277px
		// width: 445px
	.slide_img
		display: flex
		align-items: flex-end
		background-position: center
		background-repeat: no-repeat
		background-size: cover
		width: 100%
		// width: 100%
			
.control
	display: flex
	align-items: center
	margin-top: 40px
	.buttons
		// border: 1px solid red
		display: flex
		margin-right: 64px
		::v-deep button
			// border: 1px solid red !important
			margin-right: 16px
	.progressbar
		border: 1px solid red
		width: 100%	
		height: 2px




</style>