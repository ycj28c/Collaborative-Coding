<template lang="html">
  <div class="container">
    <home-header></home-header>   <!--  展示引入的header组件， 使用 <HomeHeader></HomeHeader>也可以，这个是PascalCase命名 -->
    <div class="content">
      <table class="cont-ul">
        <thead>
        <tr>
          <th>#</th>
          <th class="title-header">Title</th>
          <th>Difficulty</th>
        </tr>
        </thead>
        <tbody>
          <!-- list组件展示区，并用v-for来将数据遍历，:xx="xxx" 是用来给子组件传递数据的，:就是vbind -->
          <list v-for="problem in problems" :pid="problem.id" :title="problem.title" :difficulty="problem.difficulty"></list>
        </tbody>
      </table>
    </div>
    <common-footer></common-footer>  <!--  展示引入的footer组件，就是插入'../components/commonFooter'-->
  </div>
</template>
<script>
import HomeHeader from '../components/HomeHeader'   /* 本页面中用到了HomeHeader组件，所以就需要在这里引入一下 */
import CommonFooter from '../components/commonFooter'
import List from '../components/list'
export default {
  data () {
      return {
          items: [],   /* 定义一个空数组数据items */
          problems: []
      }
  },
  components: {
    HomeHeader, //相当于Vue.component('HomeHeader', {}) 把../components/HomeHeader整个当做component
    CommonFooter,
    List
  },
  created () {   /* 这个是vue的钩子函数，当new Vue()实例创建完毕后执行的函数 */
      // this.$http.get('/api/goods').then((data) => {   /* 调用vue的ajax来请求数据，promise语法，并用es6的箭头函数 */
      //   this.items = data.body.data;
      //   console.log(data.body.data);
      // })
      var vm = this
      this.$axios.get('/api/goods').then(function (response) {
        console.log(response.data.data);
        vm.items = response.data.data;
        //this.items = response.data.data就编译不过? 这里的this是function里头的this，不一样
      })
      .catch(function (error) {
        console.log(error);
      });
      //引入problems json data
      this.$axios.get('/api/problems').then(function (response) {
        console.log(response.data.data);
        vm.problems = response.data.data;
        //this.items = response.data.data就编译不过? 这里的this是function里头的this，不一样
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
</script>

<style lang="css" scoped>
  .container {
    width: 100%;
    margin: 0 auto;
  }
  .content {
    margin-bottom: 1.8rem;
  }
  .cont-ul {
    width: 100%;
    padding-top: 0.5rem;
    background-color: #ccc;
  }
  .cont-ul::after {
    content: '';
    display: block;
    clear: both;
    width: 0;
    height: 0;
  }
  .title-header {
    text-align: left;
    padding-left: 3rem;
  }
</style>
