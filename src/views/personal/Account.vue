<template>
  <div class="account">
    <div class="character">
      <img src="" alt="">
      <span class="one">您好！XXX</span>
      <span class="two">账户余额：<b>￥0.00</b>&nbsp;&nbsp;&nbsp;&nbsp;会员级别：<b>白金会员</b></span>
      <span class="three">我的积分：<b>0</b> 分&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;优&nbsp; 惠&nbsp; 价：<b>0</b> 张</span>
      <div class="left">带处理订单(0)</div>
      <div class="center">待评价订单(0)</div>
      <div class="await">待支付订单(0)</div>
    </div>
    <hr>
    <el-tabs type="card">
    <el-tab-pane label="最近浏览记录" value="first">暂无最近浏览记录</el-tab-pane>
    <el-tab-pane label="购买记录" name="second">购买记录</el-tab-pane>
    <el-tab-pane label="收藏夹" name="third">收藏夹</el-tab-pane>
    <el-tab-pane label="本周热销" name="fourth">本周热销</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.el-tabs__item.is-active {
    color: green!important;
}
.el-tabs__item:hover {
    color: green!important;
    cursor: pointer;
}
.character {
  height: 200px;
  // background-color: pink;
  // border: 1px solid black;
  position: relative;

  img,.one,.two,.three,.left,.center,.await {
    position: absolute;
  }

  img {
    width: 100px;
    height: 100px;
    background-color: #fff;
    top: 50px;
    left: 50px;
  }
  .one {
    top: 40px;
    left: 200px;
  }
  .two {
    top: 70px;
    left: 200px;
  }
  .three {
    top: 100px;
    left: 200px;
  }
  .left, .center, .await {
    width: 80px;
    height: 30px;
    line-height: 30px;
    font-size: 10px;
    background-color: rgb(233, 227, 227);
    border: 1px solid black;
    top: 140px;
    text-align: center;
  }
  .left {
    left: 200px;
  }
  .center {
    left: 300px;
  }
  .await {
    left: 400px;
  }

  
}
</style>