var vm = new Vue({
  el: '#app',
  data: {
    ok : true,
	type: 'D',
	loginType: 'username'
  },
  methods: {
    toggleLoginType: function () {
      this.loginType = this.loginType === 'username' ? 'email' : 'username'
    }
  }
})