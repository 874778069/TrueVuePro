import Vue from "vue"
import Vuex from "vuex"
import {reqMsite,reqCategory} from "./../api/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    msite : {},
    category:[]
  },


  mutations:{
    changeMsite(state,msite){
      state.msite = msite
    },
    changeCate(state,category){
      state.category = category
    }
  },

  actions:{
    async reqM({commit},cb){
      const result = await reqMsite();
      if(result.code == 0){
        commit("changeMsite",result.data)
        cb && cb()
      }
    },


    async reqC({commit}){
      const result = await reqCategory();
      if(result.code == 0){
        commit("changeCate",result.data)
      }
    },
  }
})
