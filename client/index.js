import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'
import '../client/assets/styles/global.styl'
import createRouter from './config/router'

Vue.use(VueRouter)
const router = createRouter()

new Vue({
  render: (h) => h(App),
  router
}).$mount('#root')
// import './test/model.js'
