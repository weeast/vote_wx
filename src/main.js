// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'mint-ui/lib/style.css'
import axios from 'axios'
import WxHelper from './wxHelper/index'

Vue.prototype.axios = axios
Vue.prototype.wxHelper = new WxHelper()

require('es6-promise').polyfill()

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
