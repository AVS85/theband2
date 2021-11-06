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
					descHhtml: '<ul><li>Вместе определяем цель презентации</li><li>Уточняем ЦА или ЛПР, формат и тайминг</li><li>Погружаемся в бизнес-специфику задачи</li><li>Формируем структуру презентации под цель: детальный план в Word или раскадровка слайдов в Power Point с предложением по контенту и референсами того, как это может выглядеть</li><ul>',
					price: 30000,
					subprice: 'или 1 500 ₽ слайд',
					iconClass: 'icon1',
				},
				{
					title: 'Оформить дизайн',
					subtitle: 'Оформим презентацию в вашем фирменном стиле или разработаем визуальный концепт под вашу задачу с нуля',
					descHhtml: '<ul><li>Вместе определяем цель презентации</li><li>Уточняем аудиторию и формат презентации, бизнес-специфику, чтобы подобрать визуальный концепт, решающий вашу задачу наилучшим образом</li><li>Разрабатываем и согласовываем дизайн- концепт: цвета, шрифты, визуальные образы и др.</li><li>Оформляем дизайн презентации в выбранной стилистике в согласованный срок</li><ul>',
					price: 2200,
					subprice: 'за слайд',
					iconClass: 'icon2',
				},
				{
					title: 'Визуализировать данные',
					subtitle: 'Беремся за сложные задачи визуализации цифр, схем, диаграмм – дашборды, регулярные и годовые отчеты',
					descHhtml: '<ul><li>Определяем цель презентации</li><li>Уточняем аудиторию, формат, бизнес-специфику, чтобы подобрать лучшее визуальное решение для отражения ваших данных</li><li>Разрабатываем и согласовываем дизайн-концепт: цвета, шрифты, визуальные образы и др.</li><li>Визуализируем данные в согласованном дизайне, соблюдая бизнес-этикет и сохраняя конфиденциальность информации</li><ul>',
					price: 2800,
					subprice: 'за слайд',
					iconClass: 'icon3',
				},
				{
					title: 'Обучить сотрудников',
					subtitle: 'Модульный мастер-класс для обучения менеджеров и сотрудников компании работе с презентациями – смысл и дизайн для достижения цели',
					descHhtml: '<ul><li>Вместе с вами определяем проблематику – в чем именно важно усилить компетенции сотрудников – работа со структурой и смыслом, дизайн презентаций или работа с визуализацией данных (цифры, графики, таблицы)</li><li>Комплектуем мастер-класс выбранными модулями</li><li>Максимум практических задач - все знания переводим сразу в навык </li><ul>',
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