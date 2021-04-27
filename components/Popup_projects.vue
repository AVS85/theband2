<template>
	<div class="popup_wrapper-projects" v-if="isShow">
		<div class="container popup_container">
			<div class="popup_btn-close" @click="close"></div>
			
			<div class="row">
				<div class="col-12"><h2>{{content.title}}</h2></div>
				<div class="col">
					<div class="tags">
						<button
						v-for="(item, i) in content.tags" :key="i"
						:class="`tag tag-c${i+1}`">{{item}}</button>

					</div>
				</div>
			</div>

			<div class="row row_task">
				<div class="col-12 title">Задача</div>
				<div class="col desc">{{content.desc}}</div>
			</div>

			<div class="row row-slider">
				<div class="col">
					<swiper ref="swServices" :options="swOptions">
						<swiper-slide v-for="(item, i) in content.imgs" :key="i">
							<div class="slide_wr"><img :src="item.img_link" alt=""></div>
							<div class="slide_wr-subtitle">{{i+1}}. {{item.title}}</div>
						</swiper-slide>
					</swiper>
				</div>
			</div>

			<div class="row row_info">
				<div class="col-12 title">Проект в цифрах:</div>
				<div class="col-md-3 col-lg info"	v-for="(item, j) in content.info" :key="j">
					<div class="info-icon" :style="`background-image: url('${item.icon}')`" />
					<div class="info-desc">{{item.desc}}</div>
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
					768: { slidesPerView: 4, spaceBetween: 30 },
          992: { slidesPerView: 4, spaceBetween: 30 }
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
		}
	},

	computed: {
		...mapGetters({ 
			isShow:  "getIsPopupProjects", 
			content: "getPopupProjects",
		}),
	},

	methods: {
		close(){
			this.$store.commit('togglePopupProjects', false)
		}
	},

}
</script>
<style lang="sass">
.popup_wrapper-projects
	// border: 1px solid red
	background: rgba(208, 219, 230, 0.9)
	// background-color: rgba(#fff, .91)
	position: fixed
	top: 0
	left: 0
	right: 0
	bottom: 0
	z-index: 999
	display: flex
	align-items: center
	.popup_container
		background-color: rgba(#fff, 1)
		position: relative
		// border: 1px solid red
		border-radius: 10px
		padding: 50px 35px
		filter: blur(0)
		z-index: 1001
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
	.tags
		display: flex
		margin-bottom: 32px
		.tag
			border: 0
			border-radius: 5px
			background-color: $green_acc
			padding: 8px 25px 
			color: #fff
			font-size: 15px
			line-height: 15px
			margin-right: 10px
			text-transform: lowercase
			&-c1
				background-color: $green_acc
			&-c2
				background-color: $blue
			&-c3
				background-color: $orange
			&-c4
				background-color: $purple
			&-c5
				background-color: $yellow
	.row_task
		.title
			font-size: 20px
			font-weight: bold
			line-height: 20px
			margin-bottom: 10px
		// .desc

	.row-slider
		margin-top: 45px
		margin-bottom: 45px

		.slide_wr
			// border: 1px solid red
			img
				width: 100%
				margin-bottom: 10px
			
	.slide_wr-subtitle
		font-size: 12px
		line-height: 12px

	.row_info
		.title
			font-size: 20px
			font-weight: bold
			line-height: 20px
			margin-bottom: 20px
		.info
			display: flex
			.info-icon
				margin-right: 10px
				background-size: contain
				height: 18px
				width: 18px
			.info-desc
				// border: 1px solid red
				font-size: 15px
				line-height: 20px

</style>