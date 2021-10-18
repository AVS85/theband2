<template>
	<section class="wrapper">

		<aside class="issuesToSolve">
			<div
			class="item"
			:class="{active: i==activeIndex}"
			v-for="(item, i) in alltTypeList" :key="i"
			@click="activeIndex = i"
			>{{item.title}}</div>
		</aside>


		<article>
			<div class="top__panel">

				<header>{{activeItem.title}}</header>

				<div class="gallery">


					<swiper ref="swServices" :options="swServicesOptions">
						<swiper-slide v-for="(item, i) in alltTypeList" :key="i">
							<div class="slide_wr">
								{{i}}
							</div>
						</swiper-slide>
					</swiper>


				</div>

				<div class="buttons">
					<BtnArrow icon="prev" />
					<BtnArrow	icon="next" />
				</div>

			</div>

			<div class="bottom__panel">
				<div class="title">Проект в цифрах:</div>
				<div class="details">
					<div class="detail icon1">
						<!-- <div class="icon icon1" /> -->
							<span>26 слайдов</span>
					</div>
					<div class="detail icon2">
						<!-- <div class="icon icon2" /> -->
							<span>12 дней</span> на реализацию
					</div>
					<div class="detail icon3">
						<!-- <div class="icon icon3" /> -->
							<span>9 человек</span> в команде проекта
					</div>
				</div>
			</div>
		</article>

	</section>
</template>



<style lang="sass" scoped>
.wrapper
	display: flex
	article
		// border: 1px solid red
		width: 100%
		.top__panel
			position: relative
			border-radius: 5px
			background-color: $grey_lite1
			padding: 56px 40px
			header 
				// border: 1px solid red
				font-size: 20px
				line-height: 24px
				z-index: 0
				margin-right: 75px //обнулить на мобилке
			.buttons
				position: absolute
				right: 40px
				top: 56px
				display: flex
				z-index: 1
				div
					margin-left: 20px

			.gallery
				border: 1px solid red
				.swiper-slide
					display: flex
					justify-content: center
					border: 1px solid red



		.bottom__panel	
			background-color: $grey_lite1
			border-radius: 5px
			margin-top: 30px
			padding: 56px 40px
			.title
				font-size: 20px
				line-height: 24px
				margin-bottom: 24px
			.details
				// border: 1px solid red
				display: flex
				flex-wrap: wrap
				.detail
					// border: 1px solid red
					// display: flex
					flex: 1
					margin: 12px 0
					font-size: 20px
					line-height: 24px
					font-family: 'textRegular'
					padding: 0 25px
					span
						font-weight: bold
					&::before
						position: absolute
						content: ''
						height: 18px
						width: 18px
						background-repeat: no-repeat
						background-size: contain
						margin-left: -25px
					&.icon1::before
						background-image: url(./imgs/1.svg)
					&.icon2::before
						background-image: url(./imgs/2.svg)
					&.icon3::before
						background-image: url(./imgs/3.svg)
					// .icon4
					// 	background-image: url(./imgs/4.svg)
					// .icon5
					// 	background-image: url(./imgs/5.svg)


	aside
		// display: none
		max-width: 350px
		width: 100%
		margin-right: 30px
		.item
			// border: 1px solid $blue_acc
			position: relative
			display: flex
			align-items: center
			border-radius: 5px
			font-size: 20px
			font-family: 'textMedium'
			line-height: 24px
			min-height: 56px
			padding: 16px 40px 16px 8px
			transition: .3s
			cursor: pointer
			&:hover
				background-color: $grey_lite1
			&.active
				background-color: $blue_acc
				&::before
					// border: 1px solid $blue_acc
					content: ''
					background-image: url(./imgs/arrow.svg)
					background-repeat: no-repeat
					background-size: contain
					position: absolute
					height: 16px
					width: 16px
					right: 0
					margin: 12px
					transform: rotate(0)
					opacity: 1
					
			&::before
				// border: 1px solid $blue_acc
				content: ''
				background-image: url(./imgs/arrow.svg)
				background-repeat: no-repeat
				background-size: contain
				position: absolute
				height: 16px
				width: 16px
				right: 0
				margin: 12px
				transform: rotate(180deg)
				opacity: .5





</style>



<script>
import BtnArrow from '../../elements/buttonArrow/ButtonArrow.vue'
import { Swiper, SwiperSlide } from "vue-awesome-swiper"

export default {
	components: { 
		BtnArrow,
		Swiper,	SwiperSlide
	},
	data() {
		return {
			activeIndex: 0,
			alltTypeList:[
				{ title: 'Защита стратегии'},
				{ title: 'Бизнес-план'},
				{ title: 'Выступление на конференции'},
				{ title: 'Презентация продукта'},
				{ title: 'Подготовка ТОП команд к выступлению'},
				{ title: 'Питч дек для стартапа'},
				{ title: 'Защита проекта'},
				{ title: 'Презентация компании'},
				{ title: 'Защита бюджета'},
				{ title: 'Дашборд'},
			],
			swServicesOptions: {
        // loop: true,
        slidesPerView: 2,
        spaceBetween: 30,
        // autoplay: {
        //   delay: 3500,
        //   disableOnInteraction: false,
        // },
				breakpoints: {   
					576: { slidesPerView: 2, spaceBetween: 20 },
					768: { slidesPerView: 3, spaceBetween: 30 },
          992: { slidesPerView: 4, spaceBetween: 30 }
        },
        navigation: {
          nextEl: ".swSlideR-services",
          prevEl: ".swSlideL-services",
        },
				pagination: {
					el: '.swPagination-services'
				},
      },
		}
	},
	computed: {
		activeItem(){
			return this.alltTypeList[this.activeIndex]
		},
		// swiper() {
		// 	return this.$refs.swServices.$swiper;
		// }
	}
	
}
</script>