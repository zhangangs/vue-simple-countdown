import Vue from 'vue'
import App from './App.vue'

import simpleCountdown from './install.js'
Vue.use(simpleCountdown)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
