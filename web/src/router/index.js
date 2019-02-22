import Vue from 'vue' //每个js都要加载vue
import VueRouter from 'vue-router'
/*
import Home from '../pages/home'
*/
import Detail from '../pages/goodsDetail'

//如果组件里头有install，那么需要.use，否则不需要
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    //resolve => require这是异步加载组件，当你访问 / ，才会加载 home.vue。resolve 就是 promise 的 resolve 回调，组件加载成功后调用
    //https://segmentfault.com/q/1010000017913060
    //不过这种写法已经过时了，推荐使用 import('../pages/home.vue')
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
//一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。如果你希望外部能够读取模块内部的某个变量，就必须使用export关键字输出该变量。
export default new VueRouter({
  routes
})
