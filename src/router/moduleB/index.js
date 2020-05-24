import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import { moduleChildren } from "./children";

const container = () => import('@/views')
const error = () => import('@/components/error')


const router = new Router({
  routes: [
    {
      path: '/',
      name: 'container',
      component: container,
      redirect: '/moduleB/home',
      children: [...moduleChildren]
    },{
      path: '*',
      name: 'error',
      component: error
    }
  ]
})
export default router
