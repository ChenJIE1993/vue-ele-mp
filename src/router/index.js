import Vue from 'vue'
import Router from 'vue-router'
import Hot from "../pages/Hot"
import My from "../pages/My"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hot',
      component: Hot
    },
    {
      path:'/my',
      name:'my',
      component:My
    }
  ]
})
