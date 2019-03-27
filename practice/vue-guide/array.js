var example1 = new Vue({
  el: '#example-1',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})

example1.items.push({ message: 'Baz' })

/*
变异方法 (mutation method)，顾名思义，会改变被这些方法调用的原始数组。相比之下，也有非变异 (non-mutating method) 方法，例如：filter(), concat() 和 slice() 。这些不会改变原始数组，但总是返回一个新数组。当使用非变异方法时，可以用新数组替换旧数组
*/
example1.items = example1.items.filter(function (item) {
  return item.message.match(/Baz/)
})

/*
由于 JavaScript 的限制，Vue 不能检测以下变动的数组：

当你利用索引直接设置一个项时，例如：vm.items[indexOfItem] = newValue
当你修改数组的长度时，例如：vm.items.length = newLength
*/
var vm = new Vue({
  data: {
    items: ['a', 'b', 'c']
  }
})
vm.items[0] = 'x' // 不是响应性的，能用，但是vue不知道？
vm.items.length = 3 // 不是响应性的，能用，但是vue不知道？

// Vue.set
//Vue.set(vm.items, indexOfItem, newValue)
Vue.set(vm.items, 1, 'y')
console.log(vm.items) //["x", "y", "c"]
// Array.prototype.splice
//vm.items.splice(indexOfItem, 1, newValue)
vm.items.splice(0, 1, 'z')
console.log(vm.items) //["z", "y", "c"]

//你也可以使用 vm.$set 实例方法，该方法是全局方法 Vue.set 的一个别名：
vm.$set(vm.items, 1, 'p')
//为了解决第二类问题，你可以使用 splice：
vm.items.splice(2)
console.log(vm.items) //["z", "p"]