<template>
<section class="index_section6">
	<swiper ref="swPartners" :options="swPartnersOptions">
		<swiper-slide>
			<div class="slide_wr" style="background-image: url(/clients/dpd.png)"></div>
		</swiper-slide>
		<swiper-slide>
			<div class="slide_wr" style="background-image: url(/clients/gazprom.png)"></div>
		</swiper-slide>
		<swiper-slide>
			<div class="slide_wr" style="background-image: url(/clients/greenflow.png)"></div>
		</swiper-slide>
		<swiper-slide>
			<div class="slide_wr" style="background-image: url(/clients/prolegal.png)"></div>
		</swiper-slide>
		<swiper-slide>
			<div class="slide_wr" style="background-image: url(/clients/skalar.png)"></div>
		</swiper-slide>
		<swiper-slide>
			<div class="slide_wr" style="background-image: url(/clients/ozon.png)"></div>
		</swiper-slide>
		<swiper-slide>
			<div class="slide_wr" style="background-image: url(/clients/megafon.png)"></div>
		</swiper-slide>
		<swiper-slide>
			<div class="slide_wr" style="background-image: url(/clients/pkt.png)"></div>
		</swiper-slide>
		<swiper-slide>
			<div class="slide_wr" style="background-image: url(/clients/pochtabank.png)"></div>
		</swiper-slide>
		<swiper-slide>
			<div class="slide_wr" style="background-image: url(/clients/qonversion.png)"></div>
		</swiper-slide>
		<swiper-slide>
			<div class="slide_wr" style="background-image: url(/clients/rostelecom.png)"></div>
		</swiper-slide>
		<swiper-slide>
			<div class="slide_wr" style="background-image: url(/clients/shoko.png)"></div>
		</swiper-slide>
		<swiper-slide>
			<div class="slide_wr" style="background-image: url(/clients/skolkovo.jpg)"></div>
		</swiper-slide>
		<swiper-slide>
			<div class="slide_wr" style="background-image: url(/clients/wework.png)"></div>
		</swiper-slide>
	</swiper>
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
			swPartnersOptions: {
				allowTouchMove: false,
				slidesPerView: 1,
        spaceBetween: 5,
        loop: true,
				speed: 11200,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
					reverseDirection: false,
        },
				breakpoints: {   
					0: { slidesPerView: 1, spaceBetween: 5 },
					400: { slidesPerView: 3, spaceBetween: 20 },
					768: { slidesPerView: 4, spaceBetween: 20 },
          992: { slidesPerView: 5, spaceBetween: 20 }
        },
      },
		}
	},
	computed: {
		swiper() {
			return this.$refs.swPartners.$swiper;
		}
	},
}
</script>

<style lang="sass">
.index_section6
	padding-top: 120px
	padding-bottom: 120px
	.swiper-wrapper 
		transition-timing-function: linear !important
	.swiper-slide
		background-color: $grey_lite1
		.slide_wr
			border: 14px solid $grey_lite1
			height: 70px
			background-position: center center
			background-repeat: no-repeat
			background-size: contain
			filter: grayscale(1)
			opacity: .5
</style>