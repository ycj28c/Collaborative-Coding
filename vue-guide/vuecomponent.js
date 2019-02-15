
// 定义一个名为 button-counter 的新组件
Vue.component('button-counter', {
	//取而代之的是，一个组件的 data 选项必须是一个函数。
	//这样是不行的（这样count就变成全局了，点击任何一个组件count都会增加）：
	//data: {
	// count: 0
	//}
	//
  data: function () {
	return {
	  count: 0
	}
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

//
//Prop 是你可以在组件上注册的一些自定义特性。当一个值传递给一个 prop //特性的时候，它就变成了那个组件实例的一个属性。为了给博文组件传递一个标题，我们可以用一个 //props 选项将其包含在该组件可接受的 prop 列表中
//
Vue.component('blog-post', {
  props: ['title'], //这里能或者blog-post这个template的title属性，将之转换为变量
  template: '<h3>{{ title }}</h3>'
})

//必须要new一下Vue？
new Vue({ 
	el: '#components-demo',
	data: {
		posts: [
		  { id: 1, title: 'My journey with Vue' },
		  { id: 2, title: 'Blogging with Vue' },
		  { id: 3, title: 'Why Vue is so fun' }
		]
	}
})
