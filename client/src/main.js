import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './firebase'
import VueFire from 'vuefire'
import '@/assets/css/bulma.min.css'

Vue.use(VueFire)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
