<template>
<section class="container ind_portfolio">
	<div class="row justify-content-between align-items-center">
		<div class="col">
			<h2 class="section_title">Какие задачи решаем.<br>Примеры реализованных проектов</h2>
		</div>
		<div class="d-none d-md-block col-auto">
			<div class="swiperbtn">
				<span>Узнать больше</span>
				<button class="btn-slide btn-slide-grey"></button>
				<button class="btn-slide btn-slide-r btn-slide-grey"></button>
			</div>
		</div>

		<div class="w-100"></div>

		<div class="col-12">
			<swiper ref="swPortfolio" :options="swPortfolioOptions">
				<swiper-slide>
					<div class="slide_wr">
						<div class="slide_num">01</div>
						<div class="slide_title text1">Ростелеком</div>
						<div class="slide_subtitle text2">Защита проекта</div>
						<div class="slide_img" style="background-image: url(/projects/01.jpg)"></div>
						<button class="slide_btn">Подробнее</button>
					</div>
				</swiper-slide>
				<swiper-slide>
					<div class="slide_wr">
						<div class="slide_num">02</div>
						<div class="slide_title text1">Ростелеком</div>
						<div class="slide_subtitle text2">Защита проекта</div>
						<div class="slide_img" style="background-image: url(/projects/01.jpg)"></div>
						<button class="slide_btn">Подробнее</button>
					</div>
				</swiper-slide>
				<swiper-slide>
					<div class="slide_wr">
						<div class="slide_num">03</div>
						<div class="slide_title text1">Ростелеком</div>
						<div class="slide_subtitle text2">Защита проекта</div>
						<div class="slide_img" style="background-image: url(/projects/01.jpg)"></div>
						<button class="slide_btn">Подробнее</button>
					</div>
				</swiper-slide>
				<swiper-slide>
					<div class="slide_wr">
						<div class="slide_num">04</div>
						<div class="slide_title text1">Ростелеком</div>
						<div class="slide_subtitle text2">Защита проекта</div>
						<div class="slide_img" style="background-image: url(/projects/01.jpg)"></div>
						<button class="slide_btn">Подробнее</button>
					</div>
				</swiper-slide>
				
			</swiper>
		</div>
	</div>
</section>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
export default {
	components: {
		Swiper,	SwiperSlide
	},
	data() {
		return {
			swPortfolioOptions: {
        // loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        // autoplay: {
        //   delay: 3500,
        //   disableOnInteraction: false,
        // },
				breakpoints: {   
					0: { slidesPerView: 1, spaceBetween: 0 },
					400: { slidesPerView: 2, spaceBetween: 5 },
					768: { slidesPerView: 3, spaceBetween: 10 },
          992: { slidesPerView: 4, spaceBetween: 20 }
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
		}
	},
	computed: {
		swiper() {
			return this.$refs.swPortfolio.$swiper;
		}
	},
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
	.slide_wr
		// position: relative
		// display: flex
		flex-direction: column
		justify-content: space-between
		align-items: flex-start
		border: 1px solid transparent
		border-radius: 5px
		background-color: $grey_lite1
		
		padding: 12px 28px 20px 0 
		min-height: 300px
		width: 100%
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