<template>
<section class="container ind_portfolio">
	<div class="row justify-content-between align-items-center">
		<div class="col">
			<h2 class="section_title">Какие задачи решаем.<br>Примеры реализованных проектов</h2>
		</div>
		<div class="d-none d-md-block col-auto">
			<div class="swiperbtn">
				<span>Больше проектов</span>
				<button class="btn-slide 						 btn-slide-grey swSlideL-portfolio"></button>
				<button class="btn-slide btn-slide-r btn-slide-grey swSlideR-portfolio"></button>
			</div>
		</div>

		<div class="w-100"></div>

		<div class="col-12">
			<swiper ref="swPortfolio" :options="swOptions_portfolio">
				<swiper-slide  v-for="(item, i) in projectsItems" :key="i">
					<div class="slide_wr">
						<div class="slide_num">{{item.num}}</div>
						<div class="slide_title text1">{{item.title}}</div>
						<div class="slide_subtitle text2">{{ (item.tags) ? item.tags.join(', ') : null  }}</div>
						<div class="slide_img"
						:style="`background-image: url('${item.imgs[0].img_link}')`"></div>
						<button 
						class="slide_btn"
						@click="openReadmore(item)">Подробнее</button>
					</div>
				</swiper-slide>
			
				<div class="d-sm-none swPagination-portfolio" slot="pagination"></div>
			</swiper>
		</div>
	</div>
</section>
</template>

<script>
import { mapGetters } from 'vuex'
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
export default {
	components: {
		Swiper,	SwiperSlide
	},
	data() {
		return {
			swOptions_portfolio: {
        // loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        // autoplay: {
        //   delay: 3500,
        //   disableOnInteraction: false,
        // },
				breakpoints: {   
					501: { slidesPerView: 2, spaceBetween: 20 },
					768: { slidesPerView: 3, spaceBetween: 30 },
          992: { slidesPerView: 4, spaceBetween: 30 }
        },
        navigation: {
          nextEl: ".swSlideR-portfolio",
          prevEl: ".swSlideL-portfolio",
        },
				pagination: {
					el: '.swPagination-portfolio'
				},
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

<style lang="sass">
.swiperbtn
	display: flex
	align-items: center
	color: $grey_dark2
	font-size: 12px
	margin-bottom: 40px
	button
		margin-left: 10px
		
.ind_portfolio
	.ind_portfolio-btn
		display: flex
		justify-content: flex-end
		margin-top: 30px
	.swiper-wrapper
		margin-bottom: 60px
		.swiper-slide
			// border: 1px solid red
			display: flex
			// justify-content: center
			height: auto
			.slide_wr
				flex-direction: column
				justify-content: space-between
				align-items: flex-start
				border: 1px solid transparent
				// border: 1px solid red
				background-color: $grey_lite1
				border-radius: 5px
				padding: 12px 28px 20px 0 
				min-height: 300px
				width: 100%
				box-shadow: 0px 59px 59px -50px rgba(213, 222, 232, .51)
				cursor: grab
				&:active
					cursor: grabbing
				@media (max-width: 575px)
					width: 85%
				.slide_num
					font-size: 80px
					line-height: 80px
					font-family: "main-bold"
					color: $grey_lite2
					margin-left: 12px
				.slide_title
					// border: 1px solid grey
					font-weight: bold
					flex: 1
					margin-left: 12px
				.slide_subtitle
					// border: 1px solid grey
					flex: 1
					margin-left: 12px
				.slide_img
					// border: 1px solid grey
					background-position: center
					background-repeat: no-repeat
					background-size: cover
					height: 140px
					width: 100%
					margin: 45px 0 20px 0
				.slide_btn
					border: 0
					position: relative
					font-size: 12px
					color: $elem
					background: transparent
					margin-left: 12px
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