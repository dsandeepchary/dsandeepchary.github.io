import Vue from 'vue'
import VueParticles from 'vue-particles'
Vue.use(VueParticles)

import App from './App.vue'


Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
