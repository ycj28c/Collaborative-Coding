var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar',
	wrongName: 'FB ooar'
  }, 
  watch: {
	//每当firstName变化，调用
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
	//每当lastName变化，调用
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  },
  //使用computed也能实现，计算版本更好
  computed: {
    fullName2: function () {
      return this.firstName + ' ' + this.lastName
    },
	fullName3: {
		// getter
		get: function () {
		  return this.firstName + ' ' + this.lastName
		},
		// setter 计算属性默认只有 getter ，不过在需要时你也可以提供一个 setter ：
		set: function (newValue) {
		  this.wrongName = newValue
		}
	}
  }
})
/*
因为fullName3的setter，现在再运行 vm.fullName = 'John Doe' 时，setter 会被调用，vm.firstName 和 vm.lastName 也会相应地被更新。
*/
vm.fullName3 = 'John Doe'