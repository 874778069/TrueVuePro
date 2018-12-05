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

import shop from "./../pages/shop/shop.vue"
import pro from "./../pages/pro/pro.vue"
import login from "./../pages/Login/Login.vue"


Vue.use(Router);

export default new Router({

  routes: [
    {path:"/msite",component:msite, meta: {isShow: true}},
    {path:"/profile",component:profile, meta: {isShow: true}},
    {path:"/classify",component:classify, meta: {isShow: true}},
    {path:"/shiwu",component:shiwu, meta: {isShow: true}},
    {path:"/order",component:order, meta: {isShow: true}},
    {path:"/login",component:login},
    {path:"/shop",component:shop},
    {path:"/pro",component:pro},
    {path:"/",redirect:"/msite"},

  ]
})
