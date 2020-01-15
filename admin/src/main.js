import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import http from './utils/http'
import './assets/css/common.css'

Vue.config.productionTip = false

Vue.prototype.$http = http

// 混入
Vue.mixin({
  computed: {
    uploadUrl: () => (this.$http.defaults.baseURL + '/upload')
  },
  methods: {
    // 获取请求头
    getAuthHeaders () {
      // eslint-disable-next-line no-console
      return {
        Authorization: localStorage.token && `Bearer ${localStorage.token}`
      }
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
