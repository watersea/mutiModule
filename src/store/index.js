import Vue from 'vue'
import Vuex from 'vuex'

// 导入模块路由
import { storeDetail as rootStore} from './rootChildren'
import { storeDetail as moduleA} from './moduleA/children'
import { storeDetail as moduleB} from './moduleB/children'
import { storeDetail as moduleC} from './moduleC/children'


Vue.use(Vuex)

const combinationStore = {
  moduleA,
  moduleB,
  moduleC
}

const combinationStoreObj = {}

//  获取启动参数
let moduleName = process.env.ENTRY_NAME;
let moduleNameType = process.env.ENTRY_NAME_TYPE;

let moduleNameArr = moduleNameType === 'string' ? moduleName.split(',') :  Object.keys(combinationStore)
    moduleNameArr.map(item => {
      combinationStoreObj[item] = combinationStore[item]
    })

console.log(combinationStoreObj)


const store = new Vuex.Store({
  ...rootStore,
  modules: {
    ...combinationStoreObj
  }
  }
)
export default store
