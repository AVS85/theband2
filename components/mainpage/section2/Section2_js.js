import BtnArrow from '../../elements/buttonArrow/ButtonArrow.vue'
import { Swiper, SwiperSlide } from "vue-awesome-swiper"
import 'swiper/css/swiper.css'

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
				// breakpoints: {   
				// 	576: { slidesPerView: 2, spaceBetween: 20 },
				// 	768: { slidesPerView: 3, spaceBetween: 30 },
        //   992: { slidesPerView: 4, spaceBetween: 30 }
        // },
        // navigation: {
        //   nextEl: ".swSlideR-services",
        //   prevEl: ".swSlideL-services",
        // },
				// pagination: {
				// 	el: '.swPagination-services'
				// },
      },
		}
	},
	computed: {
		activeItem(){
			return this.alltTypeList[this.activeIndex]
		},
		swiper() {
			return this.$refs.swServices.$swiper;
		}
	}
	
}