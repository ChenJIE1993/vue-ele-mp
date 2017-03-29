// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FontAwesome from "./assets/Font-Awesome/css/font-awesome.css"
import VueResource from "vue-resource"
import jquery from "jquery"
import VueSwiper from "vue-swiper"
import AwesomeSwiper from 'vue-awesome-swiper'
import {formatDistance,formatPrice,formatOrder_num,formatImg} from "./untils/filters"


Vue.prototype.$ = jquery
Vue.use(VueResource);
Vue.use(AwesomeSwiper);
Vue.filter("formatDistance",formatDistance)
Vue.filter("formatPrice",formatPrice)
Vue.filter("formatOrder_num",formatOrder_num)
Vue.filter("formatImg",formatImg)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
