import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//  import()动态引入方式探究，根据传参动态引入？

import { moduleChildren as moduleA }  from './moduleA/children'
import { moduleChildren as moduleB }  from './moduleB/children'
import { moduleChildren as moduleC }  from './moduleC/children'

const combinationRouter = {
        moduleA,
        moduleB,
        moduleC
}
const combinationRouterArr = []

const container = () => import('@/views')
const error = () => import('@/components/error')

//  获取启动参数
let moduleName = process.env.ENTRY_NAME;
let moduleNameType = process.env.ENTRY_NAME_TYPE;

let moduleNameArr = moduleNameType === 'string' ? moduleName.split(',') :  Object.keys(combinationRouter)
    moduleNameArr.map(item => {
         combinationRouterArr.push(...combinationRouter[item])
    })


export default new Router({
  routes: [
    {
      path: '/',
      name: 'container',
      component: container,
      redirect: '/moduleA/home',
      children: combinationRouterArr
    },{
      path: '*',
      name: 'error',
      component: error
    }
  ]
})
