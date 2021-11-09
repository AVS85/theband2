import BtnArrow from '../../elements/buttonArrow/ButtonArrow.vue'
import ProgressBar from '../../progressBar/ProgressBar.vue'

import { Swiper, SwiperSlide } from "vue-awesome-swiper"
import 'swiper/css/swiper.css'

export default {
	components: { 
		BtnArrow, ProgressBar,
		Swiper,	SwiperSlide
	},
	data() {
		return {
			projectsList: [],
			selected: null,
			activeIndex: 0,
			isShowDropDownList: false,
			progress: 0,
			progressItemsCount: 0,
			progressBarActiveIndex: 0,
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
			// options: [
			// 	{ value: null, text: 'Please select an option' },
			// 	{ value: 'a', text: 'This is First option' },
			// 	{ value: 'b', text: 'Selected Option' },
			// 	{ value: { C: '3PO' }, text: 'This is an option with object value' },
			// 	{ value: 'd', text: 'This one is disabled', disabled: true }
			// ],

			observer: true,
			observeSlideChildren: true,

			swOptions: {
        // loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        // autoplay: {
        //   delay: 3500,
        //   disableOnInteraction: false,
        // },
				breakpoints: {   
					992: { slidesPerView: 2, spaceBetween: 20 },
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
				on: {
					// init: () => {
					// 	this.progressItemsCount = this.$refs.swTasks.$swiper?.snapGrid.length || 0
					// }, 
					// resize: () => {
					// 	// this.progressItemsCount = this.$refs.swTasks.$swiper?.snapGrid.length || 0
					// }, 
					// observerUpdate: () => {
					// 	console.log('observerUpdate');
					// 	// this.progressItemsCount = this.$refs.swTasks.$swiper?.snapGrid.length || 0
					// }, 
					slideChange: () => {
						console.log(this.$refs.swTasks.$swiper);
						this.progressBarActiveIndex = this.$refs.swTasks.$swiper.activeIndex
						// this.progressItemsCount = this.$refs.swTasks.$swiper.snapGrid.length
						let progress = this.$refs.swTasks.$swiper.progress
						if ( typeof progress === 'number' ){ 
							progress = Math.floor(progress*100);
							(progress < 0) ? progress = 0 : '';
							(progress > 100) ? progress = 100 : '';
							this.progress = Math.abs(progress)
						}
					},

				}
      },
		}
	},
	computed: {
		progressBarItemsCount(){ return this.activeProject.imgs?.length || 0 },
		activeProject(){
			return this.projectsList[this.activeIndex] || []
		},
		// activeImages(){
		// 	return this.activeProject?.imgs
		// },
	},
	methods: {
		onClickAsideItem(i){
			this.activeIndex = i
			this.$refs.swTasks.$swiper.update()
			this.$refs.swTasks.$swiper.slideTo(0, 1000)
		},
		onClickDropDownListItem(i){
			this.activeIndex = i
			this.$refs.swTasks.$swiper.update()
			this.$refs.swTasks.$swiper.slideTo(0, 1000)
			setTimeout( () => {this.isShowDropDownList = !this.isShowDropDownList}, 250 )
			
		},
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