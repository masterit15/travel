import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueSplide from '@splidejs/vue-splide'
Vue.use( VueSplide );
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import '../sass/main.sass'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
