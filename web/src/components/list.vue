<template lang="html">

  <tr class="problem-list">
      <!--div class="problem-list-pic">
          <img :src="img" alt="">
      </div-->
      <td class="problem-list-desc">
        <router-link to="/detail/1"  class="problem-list-link">  <!--  这个是用来跳转页面的，可以理解为a标签 -->
          <p class="problem-list-pid">{{ pid }}</p>
        </router-link>
      </td>
      <td class="problem-list-desc">
        <router-link to="/detail"  class="problem-list-link">  <!--  这个是用来跳转页面的，可以理解为a标签 -->
          <p class="problem-list-title">{{ title }}</p>  <!-- 这里用到了过滤器货币形式和保留两位小数 -->
        </router-link>
      </td>
      <td class="problem-list-desc">
        <router-link to="/detail"  class="problem-list-link">  <!--  这个是用来跳转页面的，可以理解为a标签 -->
          <p class="problem-list-difficulty">{{ difficulty }}</p>  <!-- 这里用到了过滤器货币形式和保留两位小数 -->
        </router-link>
      </td>
  </tr>
</template>

<script>
export default {
  props: ['pid', 'title', 'difficulty']   /*  props是子组件获取父组件数据用的, 取得的似乎是vbind的key */
}
</script>

<style lang="css" scoped>
  .problem-list {
    width: 100%;
    /*float: left;*/
    box-sizing: border-box;
    margin-bottom: 0.2rem;
  }
  .problem-list:nth-of-type(odd) {
    /*border-right: 0.15rem solid #ccc;*/
  }
  .problem-list:nth-of-type(even) {
    /*border-left: 0.15rem solid #ccc;*/
  }
  .problem-list-link {
    display: block;
    padding: 0.5rem 0;
    /*margin: 0 0.3rem;*/
    text-align: center;
    background-color: #fff;
  }
  .problem-list:nth-of-type(even) .problem-list-link{
  /*  margin-left: 0;*/
  }
  .problem-list:nth-of-type(odd) .problem-list-link{
  /*  margin-right: 0;*/
      background-color: #f9f9f9;
  }
  .problem-list-desc {
    /*width: 33%;
    float: left;
    padding: 0 0.5rem;*/
  }
  .problem-list-desc:after {
    display: block;
    content: '';
    clear: both;
  }
  .problem-list-pid{
    min-width: 3rem;
  }
  .problem-list-title {
    text-align: left;
    padding-left: 3rem;
  }
  /*.problem-list-pid,.problem-list-title,.problem-list-difficulty {
    width: 50%;
    height: 1.2rem;
    line-height: 1.2rem;
    font-size: 0.8rem;
    color: #333;
    float: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }*/
</style>
