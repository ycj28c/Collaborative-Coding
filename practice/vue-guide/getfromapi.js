
Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})

new Vue({
  el: '#blog-post-demo',
  data: {
    posts: []
  },
  created: function () {
    // Alias the component instance as `vm`, so that we  
    // can access it inside the promise function
    var vm = this
    // Fetch our array of posts from an API
	//IE11 也不支持这个fetch？
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        vm.posts = data
      })
  }
})