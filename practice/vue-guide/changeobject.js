var vm = new Vue({
  el: '#app',
  data: {
    a: 1,
	userProfile: {
	  name: 'Anika'
	}
  }
})
// `vm.a` 现在是响应式的

vm.b = 2
// `vm.b` 不是响应式的

//对于已经创建的实例，Vue 不能动态添加根级别的响应式属性。但是，可以使用 Vue.set(object, key, value) 方法向嵌套对象添加响应式属性。
Vue.set(vm.userProfile, 'age', 27)
//你还可以使用 vm.$set 实例方法，它只是全局 Vue.set 的别名：
vm.$set(vm.userProfile, 'age2', 28)