// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/css/reset.css'
// 解决移动端1像素边框问题
import './assets/css/border.css'
import './assets/css/iconfont.css'
import 'swiper/dist/css/swiper.css'
//解决移动端点击300ms的延迟
import fastClick from 'fastclick'
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper),
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
