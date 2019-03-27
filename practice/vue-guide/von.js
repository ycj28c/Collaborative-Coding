var app = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
		//这个就是常见的javascript语言
      this.message = this.message.split('').reverse().join('')
    }
  }
})