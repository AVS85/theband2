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
		nextSlide(){
			console.log('next', this.$refs.swPortfolio.$swiper);
		},
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
