import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
Vue.use(Router)

export default new Router({
  mode: 'history',
  //添加路由映射
  routes: [
    {
      //路由重定向
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      name:'Home',
      component: Home
      
    },
    {
      path:'/city',
      name: 'City',
      component: City
    }
  ],
})
