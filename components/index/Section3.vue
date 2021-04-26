<template>
<section class="container ind_services">
	<div class="row justify-content-between align-items-center">
		<div class="col">
			<h2 class="section_title">Наши услуги</h2>
		</div>
		<div class="d-none d-md-block col-auto">
			<div class="swiperbtn">
				<span>Узнать больше</span>
				<button class="btn-slide 						 btn-slide-grey swSlideL-services"></button>
				<button class="btn-slide btn-slide-r btn-slide-grey swSlideR-services"></button>
			</div>
		</div>

		<div class="w-100"></div>

		<div class="col-12">
			<swiper ref="swServices" :options="swServicesOptions">
				<swiper-slide v-for="(item, i) in servicesItems" :key="i">
					<div class="slide_wr">
						<div class="slide_icon"
						:style="`background-image: url('${item.icon}')`"></div>
						<div class="slide_title">{{item.title}}</div>
						<button 
						class="slide_btn"
						@click="openReadmore(item)">Подробнее</button>
					</div>
				</swiper-slide>
				<div class="d-sm-none swPagination-services" slot="pagination"></div>
			</swiper>
		</div>
	</div>

	<div class="row justify-content-center">
		<div class="col-auto col-md-12 ind_services-btn">
			<button class="btn_main btn_main-optional">Заказать проект</button>
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
			// servicesItems: [],
			swServicesOptions: {
        // loop: true,
        slidesPerView: 1,
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
		...mapGetters(
			{ servicesItems: "getServices", }
		),
		swiper() {
			return this.$refs.swServices.$swiper;
		}
	},

	mounted(){	},

	methods: {
		slide(){
			console.log(this.$refs.swServices.$swiper)
		},
		openReadmore(item){
			console.log(item);
			this.$store.commit('setPopupServices', item)
			this.$store.commit('togglePopup', true)
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
		
.ind_services
	.ind_services-btn
		display: flex
		justify-content: flex-end
		margin-top: 30px
	.swiper-slide
		display: flex
		justify-content: center
	.slide_wr
		position: relative
		display: flex
		flex-direction: column
		justify-content: space-between
		align-items: flex-start
		background-color: $grey_lite2
		// border: 1px solid grey
		border-radius: 5px
		padding: 30px 14px
		min-height: 300px
		width: 100%
		box-shadow: 0px 59px 59px -50px rgba(213, 222, 232, .51)
		margin-bottom: 60px
		user-select: none
		cursor: grab
		&:active
			cursor: grabbing
			
		@media (max-width: 575px)
			width: 85%
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