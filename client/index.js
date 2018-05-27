import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import '../client/assets/styles/global.styl'
import createRouter from './config/router'
import createStore from './store/store'

Vue.use(Vuex)
Vue.use(VueRouter)

const router = createRouter()
const store = createStore()
// 动态添加棋版
store.registerModule('c', {
  state: {
    text: 3
  }
})
new Vue({
  render: (h) => h(App),
  router,
  store
}).$mount('#root')
// import './test/model.js'
