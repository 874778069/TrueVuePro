// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
import {Button} from 'mint-ui'
import './mock/mockServer.js'
import VueLazyload from "vue-lazyload"
import loading from "./pages/keyContent/img/timg.gif"

Vue.config.productionTip = false
Vue.component(Button.name, Button) // <mt-button/>
Vue.store = store

Vue.use(VueLazyload,{
  loading
})

Vue.directive('focus', {
  // 当绑定元素插入到 DOM 中。

  inserted: function (el) {
    // 聚焦元素
    el.focus()
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,//每个组件都有一个$router属性
  store, //每个组件都有一个$store属性
  components: {App},
  template: '<App/>'
})
