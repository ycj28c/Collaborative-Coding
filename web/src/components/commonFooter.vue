<template lang="html">
  <div class="footer">
    <ul class="footer-cont">
        <li>Copyright © 2019 Ralph Yang</li>
        <li>Help Center  |  Terms  |  Privacy </li>
    </ul>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="css">
  .footer {
    height: 1.8rem;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    border-top: 2px solid #ccc;
    background-color: #fff;
  }
  .footer-cont li {
    float: left;
    width: 50%;
    height: 1.8rem;
    line-height: 1.8rem;
    /*font-size: 1.4rem;*/
    font-weight: 300;
    color: grey;
    text-align: center;
  }
  .footer-cont li:active {
    background-color: #ccc;
  }
  .footer-cont:after {
    content: '';
    display: block;
    clear: both;
    width: 0;
    height: 0;
  }
</style>
