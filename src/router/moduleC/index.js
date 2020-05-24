import Vue from 'vue'
import Router from 'vue-router'
import { moduleChildren } from "./children";

const container = () => import('@/views')
const error = () => import('@/components/error')

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'container',
      component: container,
      redirect: '/moduleC/home',
      children: [...moduleChildren]
    },{
      path: '*',
      name: 'error',
      component: error
    }
  ]
})

export default router
