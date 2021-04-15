import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueKonva from 'vue-konva'
import vueApexCharts from 'vue-apexcharts'
import Vue2TouchEvents from 'vue2-touch-events'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')

Vue.use(Vue2TouchEvents)
Vue.use(VueKonva)
Vue.use(vueApexCharts)
Vue.component('apexchart', vueApexCharts)
