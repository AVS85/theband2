<template>
	<div class="popup_wrapper-services " v-if="isShow" @scroll.prevent>
		<div class="container popup_container scrollbar" >
			<div class="popup_btn-close" @click="close"></div>
			
			<div class="row d-none d-md-block">
				<div class="col">
					<h2>{{content.header}}</h2>
					<span class="text2">{{content.desc}}</span>
				</div>
			</div>

			<div class="row-slider-control">
				<div class="col swiperbtn">
					<div class="btn-slide             btn-slide-grey swButton_services-prev"></div>
					<div class="btn-slide btn-slide-r btn-slide-grey swButton_services-next"></div>
				</div>
			</div>

			<div class="row row-slider">
				<div class="col">
					<swiper ref="swServices" :options="swOptions">
						<swiper-slide v-for="(el, i) in content.items" :key="i">
							<div class="slide_wr">
								<div class="slide_title">{{el.header}}</div>

								<div class="slide_desc" v-for="(el,i) in el.info" :key="i">
									<div class="slide_desc-label">{{el.title}}</div>
									<div class="slide_desc-text">{{el.desc}}</div>
									<div class="slide_desc-note">{{el.note}}</div>
								</div>

								<button class="btn_main btn_main-first"
								@click="clickBtnOrder">Заказать</button>
							</div>
						</swiper-slide>
					</swiper>
				</div>
			</div>

			<div class="row row_info" v-if="content.clients.length>0">
				<div class="col-12 info-title">Наши клиенты:</div>
				<div class="col-md-3 col-lg info"	
				v-for="(item, j) in content.clients" :key="j">
					<div class="info-label"
					:style="`background-color: ${item.color}`">
						{{item.text}}
					</div>
				</div>
			</div>

		</div>
	</div>
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
			swOptions: {
        // loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        // autoplay: {
        //   delay: 3500,
        //   disableOnInteraction: false,
        // },
				breakpoints: {   
					0: { slidesPerView: 1, spaceBetween: 0 },
					// 400: { slidesPerView: 2, spaceBetween: 5 },
					768: { slidesPerView: 2, spaceBetween: 40 },
          992: { slidesPerView: 3, spaceBetween: 40 }
        },
        navigation: {
          nextEl: ".swButton_services-next",
          prevEl: ".swButton_services-prev",
        },
      },
		}
	},

	computed: {
		...mapGetters({ 
			isShow:  "getIsPopupServices", 
			content: "getPopupServices",
		}),
	},

	methods: {
		close(){
			this.$store.commit('togglePopupServices', false)
		},
		clickBtnOrder(){
			this.close()
			this.$scrollTo('#contacts')
			// this.$router.push('/#contacts')
		}
	},

}
</script>
<style lang="sass">
.popup_wrapper-services
	// border: 1px solid red
	background: rgba(208, 219, 230, 0.9)
	position: fixed
	display: flex
	align-items: center
	top: 0
	left: 0
	z-index: 999
	min-height: 100vh
	max-height: 100vh
	width: 100%
	@media (max-width: 998px)
		align-items: stretch
	.popup_container
		background-color: rgba(#fff, 1)
		position: relative
		// border: 1px solid red
		border-radius: 10px
		padding: 50px 35px
		filter: blur(0)
		z-index: 1001
		// height: auto
		.popup_btn-close
			position: absolute
			// border: 1px solid red
			background-image: url('/icons/menu-burger-close.svg')
			background-repeat: no-repeat
			background-size: contain
			height: 18px
			width: 18px
			top: 40px
			right: 40px
			opacity: .75
			cursor: pointer
			transition: .25s
			&:hover
				opacity: 1
				transform: scale(1.2)

	.row-slider-control
		display: flex
		justify-content: flex-end
		// border: 1px solid red
		margin-top: 50px
		.swiperbtn
			// border: 1px solid red
			flex: 0
			display: flex
			align-items: center
			color: $grey_dark2
			font-size: 12px
			margin-top: 15px
			margin-bottom: 15px
			div
				margin-left: 10px

	.row-slider

		.slide_wr
			// border: 1px solid red
			padding: 24px 14px
			box-shadow: 0px 59px 59px -50px rgba(213, 222, 232, .51)
			margin-bottom: 60px
			cursor: pointer
			.slide_title
				border-bottom: 2px solid $grey_dark2
				font-size: 18px
				font-weight: bold
				line-height: 18px
				padding-bottom: 14px
			.slide_desc
				margin: 20px 0
				.slide_desc-label
					font-size: 12px
					line-height: 12px
					color: $grey_dark2
					padding-bottom: 5px
				.slide_desc-text
					font-size: 15px
					line-height: 20px
					// font-weight: bold
					&-cursiv
						font-style: italic
						font-size: 12px
						line-height: 12px
				.slide_desc-note
					margin-top: 5px
					font-style: italic
					font-size: 12px
					line-height: 12px

	.row_info
		.info-title
			margin: 0 0 17px 0

		.info-label
			border: 1px solid transparent
			border-radius: 7px
			color: #fff
			text-align: center
			margin: 3px 0
</style>