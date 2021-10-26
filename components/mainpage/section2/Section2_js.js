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
			projectsList: [],
			selected: null,
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
			options: [
				{ value: null, text: 'Please select an option' },
				{ value: 'a', text: 'This is First option' },
				{ value: 'b', text: 'Selected Option' },
				{ value: { C: '3PO' }, text: 'This is an option with object value' },
				{ value: 'd', text: 'This one is disabled', disabled: true }
			],


			swOptions: {
        // loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        // autoplay: {
        //   delay: 3500,
        //   disableOnInteraction: false,
        // },
				breakpoints: {   
					576: { slidesPerView: 2, spaceBetween: 20 },
					// 768: { slidesPerView: 3, spaceBetween: 30 },
          // 992: { slidesPerView: 4, spaceBetween: 30 }
        },
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
		activeProject(){
			return this.projectsList[this.activeIndex] || []
		},
		// activeImages(){
		// 	return this.activeProject?.imgs
		// },
	},
	methods: {
		prevSlide(){
			this.$refs.swTasks.$swiper.slidePrev()
		},
		nextSlide(){
			this.$refs.swTasks.$swiper.slideNext()
		},
	},
	async mounted() {
		await this.$axios(`${this.$config.baseURL}/api_task.json`)
		.then( res => this.projectsList = res.data )
		.catch( egorka => console.log('loading projects...', egorka) )
		console.log(this.projectsList);
	},
	
}