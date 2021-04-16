import Vue from 'vue'
// import VueGallery from 'vue-gallery'

// Vue.component('VGallery', VueGallery)

import VueSmoothScroll from 'vue2-smooth-scroll'
 
Vue.use(VueSmoothScroll, {
  duration: 1500,
  updateHistory: false,
})