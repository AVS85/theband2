import { mapGetters } from 'vuex'
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import ProgressBar from '../../progressBar/ProgressBar.vue'
import BtnArrow from '../../elements/buttonArrow/ButtonArrow.vue'


export default {
	components: {
		Swiper,	SwiperSlide, ProgressBar, BtnArrow
	},
	data() {
		return {
			servicesList: [
				{
					title: 'Упаковать смысл	и структуру',
					subtitle: 'Для тех, у кого есть сомнения в том, получается донести идею и достичь цели',
					descHhtml: '<ul><li>Вместе определяем цель задачи;</li><li>Уточняем ЦА или ЛПР, формат и тайминг;</li><li>Погружаемся в бизнес-специфику.</li><li>Формируем структуру презентации под цель: детальный план в Word, раскадровка в по слайдам в Power Point с предложением по контенту и референсами того, как это может выглядеть</li><ul>',
					price: 38000,
					iconClass: 'icon1',
				},
				{
					title: 'Оформить дизайн',
					subtitle: 'Для тех, у кого есть сомнения в том, получается донести идею и достичь цели',
					descHhtml: '<ul><li>Вместе определяем цель задачи;</li><li>Уточняем ЦА или ЛПР, формат и тайминг;</li><li>Погружаемся в бизнес-специфику.</li><li>Формируем структуру презентации под цель: детальный план в Word, раскадровка в по слайдам в Power Point с предложением по контенту и референсами того, как это может выглядеть</li><ul>',
					price: '20000',
					iconClass: 'icon2',
				},
				{
					title: 'Визуализировать данные',
					subtitle: 'Для тех, у кого есть сомнения в том, получается донести идею и достичь цели',
					descHhtml: '<ul><li>Вместе определяем цель задачи;</li><li>Уточняем ЦА или ЛПР, формат и тайминг;</li><li>Погружаемся в бизнес-специфику.</li><li>Формируем структуру презентации под цель: детальный план в Word, раскадровка в по слайдам в Power Point с предложением по контенту и референсами того, как это может выглядеть</li><ul>',
					price: '120000',
					iconClass: 'icon3',
				},
				{
					title: 'Научить сотрудников',
					subtitle: 'Для тех, у кого есть сомнения в том, получается донести идею и достичь цели',
					descHhtml: '<ul><li>Вместе определяем цель задачи;</li><li>Уточняем ЦА или ЛПР, формат и тайминг;</li><li>Погружаемся в бизнес-специфику.</li><li>Формируем структуру презентации под цель: детальный план в Word, раскадровка в по слайдам в Power Point с предложением по контенту и референсами того, как это может выглядеть</li><ul>',
					price: '38000',
					iconClass: 'icon4',
				},
				
			],

			progress: 0,
			swOptions: {
        // loop: true,
        // slidesPerView: 'auto',
        slidesPerView: 1,
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
        //   nextEl: ".swSlideR-portfolio",
        //   prevEl: ".swSlideL-portfolio",
        // },
				// pagination: {
				// 	el: '.swPagination-portfolio'
				// },
				watchSlidesProgress : false,
				on: {
					slideChange: () => {
						let progress = this.$refs.swServices.$swiper.progress
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
 
	},

	mounted(){	},

	methods: {
		scrollToContactForm(){
			fbq('track', 'Contact'); //pixel
			this.$scrollTo('#contacts')
		},
		prevSlide(){
			this.$refs.swServices.$swiper.slidePrev()
		},
		nextSlide(){
			this.$refs.swServices.$swiper.slideNext()
		},
	}
}