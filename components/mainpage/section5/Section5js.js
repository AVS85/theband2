import BtnArrow from '../../elements/buttonArrow/ButtonArrow.vue'
import BtnMain from '../../elements/buttonMain/ButtonMain.vue'
import ProgressBar from '../../progressBar/ProgressBar.vue'
import Popup from '../../popup/Popup.vue'
import Zoomer from '../../zoomer/Zoomer.vue'
import { mapGetters } from 'vuex'
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
	components: {
		Swiper,	SwiperSlide, BtnArrow, BtnMain, ProgressBar, Popup, Zoomer
	},
	data() {
		return {
			isShowZoom: false,
			clickedIndex: 0,
			progress: 0,
			activeIndex: 0,
			progressBarActiveIndex: 0,
			swOptions_portfolio_popup: {
        slidesPerView: 1,
        spaceBetween: 30,

				navigation: {
          nextEl: ".swButton_popup.next",
          prevEl: ".swButton_popup.prev",
        },
			},

			swOptions_portfolio: {
        // loop: true,
        // slidesPerView: 'auto',
        slidesPerView: 1,
        spaceBetween: 30,
        // autoplay: {
        //   delay: 3500,
        //   disableOnInteraction: false,
        // },
				breakpoints: {   
					576: { slidesPerView: 2, spaceBetween: 20 },
					768: { slidesPerView: 3, spaceBetween: 30 },
          // 992: { slidesPerView: 4, spaceBetween: 30 }
        },
        // navigation: {
        //   nextEl: ".swSlideR-portfolio",
        //   prevEl: ".swSlideL-portfolio",
        // },
				// pagination: {
				// 	el: '.swPagination-portfolio'
				// },
				watchSlidesProgress : false,
				on: {
					click: () => {
						this.isShowZoom = true
						this.clickedIndex = this.$refs.swPortfolio.$swiper.clickedIndex || 0
						// console.log(this.$refs.swPortfolio.$swiper);
						// console.log({...this.$refs});
						// console.log(this.$refs.swPortfolio.$swiper);
					},
					slideChange: () => {
						let progress = this.$refs.swPortfolio.$swiper.progress
						if ( typeof progress === 'number' ){ 
							progress = Math.floor(progress*100);
							(progress < 0) ? progress = 0 : '';
							(progress > 100) ? progress = 100 : '';
							this.progressBarChange(progress)
							// this.progress = Math.abs(progress)
						}
					},

				}

      },
			projectsItems: []
		}
	},
	updated() {
		// console.log('updated');
	},
	computed: {
		// ...mapGetters(
		// 	{ projectsItems: "getProjects", }
		// ),
		progressBarItemsCount(){ return this.projectsItems.length || 0 },
		activeProject(){
			return this.projectsItems[this.activeIndex] || []
		},
		swiper() {
			return this.$refs.swPortfolio.$swiper;
		}
	},
	async mounted() {
		await this.$axios(`${this.$config.baseURL}/api_portfolio.json`)
		.then( res => this.projectsItems = res.data )
		.catch( egorka => console.log('loading projects...', egorka) )
		// console.log(this.projectsItems);
	},
	// watch: {
	// 	progress(){
	// 		console.log('listing....');
	// 	}
	// },
	methods: {
		async progressBarChange(progress){
			// console.log('sdsdsd');
			this.progress = Math.abs(progress)
		},
		scrollToContactForm(){
			fbq('track', 'Contact'); //pixel
			this.$scrollTo('#contacts')
		},
		prevSlide(){
			this.$refs.swPortfolio.$swiper.slidePrev()
		},
		nextSlide(){
			this.$refs.swPortfolio.$swiper.slideNext()
		},
		// openContactForm(){
		// 	this.$router.push('/#contacts')
		// },
		openReadmore(item){
			// console.log(item);
			// this.$store.commit('setPopupProjects', item)
			// this.$store.commit('togglePopupProjects', true)
		}
	}
}
