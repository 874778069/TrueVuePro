import Vue from 'vue'
import Router from 'vue-router'

// import msite from "./../pages/Msite/msite.vue";
// import order from "./../pages/Order/order.vue";
// import profile from "./../pages/Profile/profile.vue";
// import search from "./../pages/Search/search.vue";
const msite = ()=> import("./../pages/Msite/msite.vue");
const order = ()=> import("./../pages/order/order.vue");
const profile = ()=> import("./../pages/profile/profile.vue");
const classify = ()=> import("./../pages/Classify/Classify.vue");
const shiwu = ()=> import("./../pages/shiwu/ShiWu.vue");

import notFound from "./../pages/notFound/notFound.vue"

import recommend from "./../pages/shiwu/recommend/recommend.vue"
import daren from "./../pages/shiwu/daren/daren.vue"
import New from "./../pages/shiwu/new/new.vue"
import shaidan from "./../pages/shiwu/shaidan/shaidan.vue"
import home from "./../pages/shiwu/home/home.vue"
import search from "./../pages/search/search.vue"

import shop from "./../pages/shop/shop.vue"
import pro from "./../pages/pro/pro.vue"
import login from "./../pages/Login/Login.vue"


Vue.use(Router);

export default new Router({
  linkExactActiveClass:"active",
  routes: [
    {path:"/msite",component:msite, meta: {isShow: true}},
    {
      path:"/profile",
      component:profile,
      meta: {isShow: true},
      beforeEnter:(to,from,next) => {
        if(JSON.stringify(Vue.store.state.user)!=="{}"){
          next()
        }else{
          next("/login")
        }
      }
    },
    {path:"/classify",component:classify, meta: {isShow: true}},
    {
      path:"/shiwu",component:shiwu,
      meta: {isShow: true},
      children:[
        {path:"recommend",component:recommend,meta: {isShow: true}},
        {path:"daren",component:daren,meta: {isShow: true}},
        {path:"new",component:New,meta: {isShow: true}},
        {path:"shaidan",component:shaidan,meta: {isShow: true}},
        {path:"home",component:home,meta: {isShow: true}},
        {path:"",redirect: "/shiwu/recommend"}
      ]
    },
    {path:"/order",component:order, meta: {isShow: true},
      beforeEnter:(to, from,next) =>{
        var size = (window.innerWidth || document.documentElement.clientWidth) / 1000 * 100;
        document.documentElement.style.fontSize = size + "px";
        document.body.style.fontSize = 24 + "px";
        next()
      }},
    {path:"/login",component:login,
      beforeEnter:(to, from,next) =>{
        var size = (window.innerWidth || document.documentElement.clientWidth) / 1000 * 100;
        document.documentElement.style.fontSize = size + "px";
        document.body.style.fontSize = 24 + "px";
        next()
      }},
    {path:"/shop",component:shop},
    {path:"/pro",component:pro},
    {path:"/search",component:search},
    {path:"/",redirect:"/msite"},
    {path:"/*",component:notFound},
  ]
})
