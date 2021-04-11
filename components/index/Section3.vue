<template>
<section class="container ind_services">
	<div class="row justify-content-between align-items-center">
		<div class="col">
			<h2 class="section_title">Наши услуги</h2>
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
			<swiper ref="swServices" :options="swServicesOptions">
				<swiper-slide>
					<div class="slide_wr">
						<div class="slide_icon"
						style="background-image: url(/icons/services1.svg)"></div>
						<div class="slide_title">Разработка структуры презентации</div>
						<button class="slide_btn">Подробнее</button>
					</div>
				</swiper-slide>
				<swiper-slide>
					<div class="slide_wr">
						<div class="slide_icon"
						style="background-image: url(/icons/services2.svg)"></div>
						<div class="slide_title">Цифры: анализ рынка, конкурентные бенчмарки, финансовые модели</div>
						<button class="slide_btn">Подробнее</button>
					</div>
				</swiper-slide>
				<swiper-slide>
					<div class="slide_wr">
						<div class="slide_icon"
						style="background-image: url(/icons/services3.svg)"></div>
						<div class="slide_title">Дизайн презентаций</div>
						<button class="slide_btn">Подробнее</button>
					</div>
				</swiper-slide>
				<swiper-slide>
					<div class="slide_wr">
						<div class="slide_icon"
						style="background-image: url(/icons/services4.svg)"></div>
						<div class="slide_title">Тест-драйв вашей идеи: UX тест, обратная связь экспертов </div>
						<button class="slide_btn">Подробнее</button>
					</div>
				</swiper-slide>
			</swiper>
		</div>

		<div class="w-100"></div>

		<div class="col-12 ind_services-btn">
			<button class="btn_main btn_main-optional">Заказать проект</button>
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
			swServicesOptions: {
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
			return this.$refs.swServices.$swiper;
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
		
.ind_services
	.ind_services-btn
		display: flex
		justify-content: flex-end
		margin-top: 30px
	.slide_wr
		// border: 1px solid red
		position: relative
		display: flex
		flex-direction: column
		justify-content: space-between
		align-items: flex-start
		background-color: $grey_lite1
		padding: 30px 14px
		min-height: 300px
		width: 100%
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