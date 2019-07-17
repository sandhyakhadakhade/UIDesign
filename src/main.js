import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import "vue-material-design-icons/styles.css"
import MenuIcon from "vue-material-design-icons/Menu.vue"
 
Vue.component("menu-icon", MenuIcon)

import VueCharts from 'vue-chartjs'
// import { Bar, Line } from 'vue-chartjs'

Vue.config.productionTip = false
import Vuetify from 'vuetify'

Vue.use(Vuetify)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
