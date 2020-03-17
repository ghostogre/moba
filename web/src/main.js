import Vue from 'vue'
import App from './App.vue'
// import '../prerender/public-path'
import './assets/css/style.scss'
import 'normalize.css'
import router from './router'
import http from './utils/http'
import './assets/font/iconfont.css'

import Lazyload from 'vue-lazyload'
Vue.use(Lazyload)

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

import Card from './components/Card.vue'
Vue.component('m-card', Card)

import ListCard from './components/ListCard.vue'
Vue.component('m-list-card', ListCard)

Vue.config.productionTip = false

Vue.prototype.$http = http

new Vue({
  router,
  render: h => h(App),
  mounted() {
    // 预编译
    document.dispatchEvent(new Event('render-event')) 
  }
}).$mount('#app')
