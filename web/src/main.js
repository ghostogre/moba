import Vue from 'vue'
import App from './App.vue'
// import '../prerender/public-path'
import './assets/css/style.scss'
import 'normalize.css'
import router from './router'
import http from './utils/http'
import './assets/font/iconfont.css'
import store from './store'

// 只要页面中使用了Lazyload不管是什么页面都会引起预渲染的失败
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
  store,
  router,
  render: h => h(App),
  mounted() {
    // 预编译
    // document.dispatchEvent(new Event('render-event'))
    this.$store.commit('APP/SET_SCROLL_HEIGHT', document.documentElement.scrollHeight || document.body.scrollHeight)
    this.$store.commit('APP/SET_SCROLL_WIDTH', document.documentElement.scrollWidth || document.body.scrollWidth)
  }
}).$mount('#app')
