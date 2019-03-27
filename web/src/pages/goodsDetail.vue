<template lang="html">
  <div class="detail">
      <detail-header></detail-header>
      <!--用以下可以获取router传递过来的值
      <h3>{{ this.$route.params.pid }}</h3>
      -->
      <p class="site-title">{{problem1.title}}</p>
      <!--为了能读取json显示换行，json里面必须使用\n，而css样式必须是white-space"pre-->
      <p style="white-space: pre;" class="site-cont">{{problem1.descriptor}}</p>
      <iframe name="embed_readwrite" src="http://localhost:9001" width=80% height=400></iframe>
      <!--textarea class="code-area" placeholder="Enter Code Here"></textarea-->
      <div style="height:100px"></div><!--footer empty space-->
      <common-footer></common-footer>
  </div>
</template>

<script>
import DetailHeader from '../components/DetailHeader'
import CommonFooter from '../components/commonFooter'
//使用import命令的时候，用户需要知道所要加载的变量名或函数名，否则无法加载。
//但是，用户肯定希望快速上手，未必愿意阅读文档，去了解模块有哪些属性和方法。
//为了给用户提供方便，让他们不用阅读文档就能加载模块，就要用到export default命令，为模块指定默认输出
//模仿es6的语法啊
export default {
  data () {
    return {
      problem1:[] //这个必须有，如果下面读取了变量，这不是return吗，为啥呢？
    }
  },
  components: {
    DetailHeader,
    CommonFooter
  },
  created () {   /* 这个是vue的钩子函数，当new Vue()实例创建完毕后执行的函数 */
      //读取json的例子https://www.jianshu.com/p/eff4eb93c902
      var vm = this
      var pid = this.$route.params.pid
      //引入problems json data
      this.$axios.get('/api/problems/'+pid).then(function (response) {
        console.log(response.data.data);
        vm.problem1 = response.data.data;
        //this.items = response.data.data就编译不过? 这里的this是function里头的this，不一样
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
</script>

<style lang="css">
  .detail {
    padding: 0.25rem;
    font-size: 12px;
  }
  .detail > img {
    display: block;
    width: 80%;
    margin:  0 auto 0.5rem;
  }
  .detail > p {
    font-size: 1.1rem;
    line-height: 1.5rem;
    text-align: left;
    padding-bottom: 0.5rem;
  }
  .detail > p.site-title {
    color: #ff8000;
  }
  .detail > p.site-cont {
    color: #666;
    font-size: 0.9rem;
  }
  .detail > textarea.code-area {
    border:0;
    border-radius:5px;
    background-color:rgba(241,241,241,.98);
    width: 600px;
    height: 400px;
    padding: 10px;
    resize: none;
  }
</style>
