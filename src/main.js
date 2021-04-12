import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import vueApexCharts from 'vue-apexcharts'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  vueApexCharts,
  render: (h) => h(App),
}).$mount('#app')
