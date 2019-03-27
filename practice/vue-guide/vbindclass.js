var vm = new Vue({
  el: '#app',
  data: {
    isActive: true,
    hasError: false,
	error: null,
	activeClass: 'active',
    errorClass: 'text-danger',
	classObject: {
      active: true,
      'text-danger': false
    }
  },
  computed: {
    classComputed: function () {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  }
})