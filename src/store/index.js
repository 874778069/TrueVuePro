import Vue from "vue"
import Vuex from "vuex"
import {
  reqMsite,
  reqCategory,
  reqShiWuArr,
  reqNewData,
  reqDaRen,
  reqHome,
  reqLoginOut,
  reqUserData,
  reqSearchInit,
  reqSearchArr,
  reqKeyContent
} from "./../api/index";


Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    msite : {},
    category:[],
    shiWuArr : [],
    newData : [],
    daRen : [],
    homes:[],
    user:{},
    searchInit:{},
    searchArr : [],
    keyContent:{}
  },


  mutations:{
    changeMsite(state,msite){
      state.msite = msite
    },
    changeCate(state,category){
      state.category = category
    },
    changeArr(state,arr){
      state.shiWuArr = arr
    },
    changeNewData(state,arr){
      state.newData = arr
    },
    changeDaRen(state,arr){
      state.daRen = arr
    },
    changeHome(state,arr){
      state.homes = arr
    },
    changeUser(state,{user,cb}){
      state.user = user;
      cb && cb()
    },
    changeOut(state){
      state.user = {};
    },
    changeSearchInit(state,obj){
      state.searchInit = obj
    },
    changeSearchArr(state,arr){
      state.searchArr = arr
    },
    changeKeyContent(state,obj){
      state.keyContent = obj
    },
    changeKongArr(state){
      state.searchArr = []
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
    async reqSA({commit}){
      const result = await reqShiWuArr();
      if(result.code == 0){
        commit("changeArr",result.data)
      }
    },
    async reqN({commit}){
      const result = await reqNewData();
      if(result.code == 0){
        commit("changeNewData",result.data)
      }
    },
    async reqD({commit}){
      const result = await reqDaRen();
      if(result.code == 0){
        commit("changeDaRen",result.data)
      }
    },
    async reqH({commit}){
      const result = await reqHome();
      if(result.code == 0){
        commit("changeHome",result.data)
      }
    },
    async reqLO({commit}){
      const result = await reqLoginOut();
      if(result.code == 0){
        commit("changeOut")
      }
    },
    async reqUD({commit}){
      const result = await reqUserData();
      if(result.code == 0){
        commit("changeUser",{user : result.data})
      }
    },
    async reqSI({commit}){
      const result = await reqSearchInit();
      if(result.code == 200){
        commit("changeSearchInit",result.data)
      }
    },
    async reqSArr({commit},key){
      const result = await reqSearchArr(key);
      if(result.code == 200){
        commit("changeSearchArr",result.data)
      }
    },
    async reqKC({commit},keyword){
      const result = await reqKeyContent(keyword);
      if(result.code == 200){
        commit("changeKeyContent",result.data)
      }
    }
  }
})
