import Vue from 'vue'
import Router from 'vue-router'
import Hot from "../pages/Hot"
import My from "../pages/My"
import Order from "../pages/Order"
import Discover from "../pages/Discover"
import RecommendMain from "../pages/RecommendMain"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hot',
      component: Hot
    },
    {
      path:'/discover',
      name:'discover',
      component:Discover
    },
    {
      path:'/my',
      name:'my',
      component:My
    },
    {
      path:'/order',
      name:'order',
      component:Order
    },
    {
      path:'/recommendmain/:shopid/:shopname',
      name:'recommendmain',
      component:RecommendMain
    }
  ]
})
