import Vue from 'vue'
import VueRouter from 'vue-router'
/*
import Home from '../pages/home'
*/
import Detail from '../pages/goodsDetail'


Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: resolve => require(['../pages/home'],resolve),
    meta: {
      title:'home'
    }
  },
  {
    path: '/detail',
    component: Detail
  }
]
export default new VueRouter({
  routes
})
