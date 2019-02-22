// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App' //引入App.vue
import router from './router' //这里引入的是router目录，会默认识别里面的index.js文件（不能是其他名字）
import VueAxios from 'vue-axios'
import axios from 'axios'

//通过use方法加载axios插件
Vue.use(VueAxios, axios)

// 必须安装vue resource，否则会报get错误
// import VueResource from 'vue-resource'
// Vue.use(VueResource)
// 因为官方已经不推荐使用vue resource了，所以将之替换为axios

//Vue.config 是一个对象，包含 Vue 的全局配置, productionTip设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false

Vue.prototype.$axios = axios //替换vue原型的$axios，以后直接使用$axios就可以调用axios的方法

//Vue的开局方法，https://www.mmxiaowu.com/article/584a3957fc007e72b0f576d9
//这种写法就也是完全把 App 当成一个组件使用, 不过模板直接写在了template选项里，这种写法需要在 webpack 配置别名
new Vue({
  el: '#app', //这里绑定的是index.html中的id为app的div元素
  router,
  template: '<App/>', //不要问为什么，这么写就对了
  components: { App } //使用App.vue如同组件
})

//不加filter也出错?? 因为在list.vue用到了filter
Vue.filter('dCurrency', function(value) {
  return '￥'+value
})
Vue.filter('dTofixed', function(value) {
  var isNum = parseFloat(value);
  if( !isNum ){
      alert("请输入数字")
      return "请输入数字";
  } else {
      var value = Math.round(isNum*100)/100;
      var item = value.toString().split(".");
      if(item.length == 1){
          value = value.toString()+".00";
          return value;
      }
      if(item.length > 1){
          if(item[1].length < 2){
              value = value.toString()+"0";
          }
          return value;
      }
  }
})
