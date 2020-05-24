import Vue from 'vue'
import Vuex from 'vuex'
import { storeDetail } from "./children";
import { storeDetail as rootStore } from '../rootChildren'


Vue.use(Vuex)

const store = new Vuex.Store({
  namespaced: true,
  ...rootStore,
  modules:{
    moduleB: storeDetail
  }
})
export default store
