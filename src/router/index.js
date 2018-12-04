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

import login from "./../pages/Login/Login.vue"


Vue.use(Router);

export default new Router({

  routes: [
    {path:"/msite",component:msite},
    {path:"/profile",component:profile},
    {path:"/classify",component:classify},
    {path:"/shiwu",component:shiwu},
    {path:"/order",component:order},
    {path:"/login",component:login},

  ]
})
