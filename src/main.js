import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import { request } from './network/request.js'
new Vue({
  created() {
    request({
      url: "/home/multidata",
    }).then(res => {
      console.log(res)
    })
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
