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
					subtitle: 'Для тех, кто хочет не только красивые слайды, но и собрать структуру и логичную историю для достижения цели',
					descHhtml: '<ul><li>Формулируем цель презентации</li><li>Определяем ЦА или ЛПР, формат и тайминг</li><li>Погружаемся в бизнес-специфику задачи</li><li>Формируем структуру презентации под цель: детальный план в Word или раскадровка слайдов в Power Point с предложением по контенту и референсами того, как это может выглядеть</li><ul>',
					price: 35000,
					subprice: null,
					iconClass: 'icon1',
				},
				{
					title: 'Оформить дизайн',
					subtitle: 'Оформим презентацию в вашем фирменном стиле или разработаем визуальный концепт под  задачу с нуля',
					descHhtml: '<ul><li>Формулируем цель презентации</li><li>Разрабатываем дизайн-концепт - цвета, шрифты, визуальные образы – с учетом аудитории, формата презентации и бизнес-специфики</li><li>Оформляем дизайн презентации в выбранной стилистике в согласованный срок</li><ul>',
					price: 3000,
					subprice: 'за слайд',
					iconClass: 'icon2',
				},
				{
					title: 'Визуализировать данные',
					subtitle: 'Визуализируем цифры, схемы, диаграммы для дашбордов, регулярных и годовых отчетов и других задач',
					descHhtml: '<ul><li>Формулируем цель презентации</li><li>Разрабатываем дизайн-концепт отображения данных с учетом аудитории, формата презентации и бизнес-специфики</li><li>Визуализируем данные в согласованном дизайне, соблюдая бизнес-этикет и сохраняя конфиденциальность информации</li><ul>',
					price: 3200,
					subprice: 'за слайд',
					iconClass: 'icon3',
				},
				{
					title: 'Обучить сотрудников',
					subtitle: 'Модульный мастер-класс для обучения менеджеров и сотрудников компании работе с презентациями – смысл и дизайн для достижения цели',
					descHhtml: '<ul><li>Вместе с вами определяем, какие компетенции сотрудников важно усилить – работа со структурой и смыслом, дизайн презентаций или работа с визуализацией данных (цифры, графики, таблицы)</li><li>Комплектуем мастер-класс выбранными модулями</li><li>Максимум практических задач - все знания переводим сразу в навык </li><ul>',
					price: '50000',
					subprice: 'или 10 000 ₽ за человека',
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