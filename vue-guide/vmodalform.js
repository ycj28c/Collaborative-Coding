var example1 = new Vue({
  el: '#example-1',
  data: {
    message: 'haah',
	checked: 'anyvalue' //初始单选框的值
  }
})

new Vue({
  el: '#example-3',
  data: {
    checkedNames: []
  }
})

new Vue({
  el: '#example-4',
  data: {
    picked: ''
  }
})

new Vue({
  el: '#example-5',
  data: {
    selected: ''
  }
})

new Vue({
  el: '#example-6',
  data: {
    selected: []
  }
})

new Vue({
  el: '#example-7',
  data: {
    selected: 'A',
    options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ]
  }
})