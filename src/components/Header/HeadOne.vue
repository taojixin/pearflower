<template>
  <div class="header">
    <!-- 顶部功能区 -->
    <div class="top">
      <div class="intop">
        <ul class="ulLeft">
          <li><a href="#">梨花带裕</a><span>|</span></li>
          <li><a href="#">资质证照</a><span>|</span></li>
          <li><a href="#">协议规则</a><span>|</span></li>
          <li><a href="#">下载APP</a><span>|</span></li>
          <li><a href="#">Select Location</a><span>|</span></li>
        </ul>
        <div class="cart"><a href="#">购物车（0）</a></div>
        <ul class="ulRight">
          <li><a href="#">登录</a><span>|</span></li>
          <li><a href="#">注册</a><span>|</span></li>
          <li><a href="#">消息通知</a><span>|</span></li>
          <li><a href="#">个人中心</a><span>|</span></li>
        </ul>
      </div>
    </div>
    <div class="lihua"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: #000;
}
.top {
  height: 40px;
  background-color: black;
  font-size: 12px;
  color: #b0b0b0;
}
.top .intop {
  width: 1226px;
  margin: 0 auto;
  /* background-color: aqua; */
}
.top .intop .ulLeft {
  float: left;
}
.top .intop .ulRight {
  float: right;
}
.top .intop ul li {
  float: left;
  height: 40px;
  line-height: 40px;
}

.top .intop ul span {
  display: inline-block;
  padding: 0 5px;
  color: #424242;
}
.top .intop a {
  color: #b0b0b0;
}
.top .intop a:hover {
  color: #fff;
}
.top .intop .cart {
  float: right;
  width: 100px;
  height: 40px;
  line-height: 40px;
  margin-left: 40px;
  background: url(images/cart.png) no-repeat right center;
  /* background-color: #fff; */
  background-size: 20px;
}
.top .intop .cart a:hover {
  background-color: #fff;
  color: rgb(243, 110, 21);
}
.lihua {
  width: 100%;
  height: 100px;
  background: url(images/lihua1.jpg) no-repeat center center;
  background-size: 100%;
}

.banner {
  width: 1226px;
  height: 100px;
  font-size: 16px;
  line-height: 100px;
  background-color: gray;
  margin: 0 auto;
  background: url(images/logo1.png) no-repeat left top;
  background-size: 100px;
}
.banner ul {
  margin-left: 200px;
}
.banner ul li {
  float: left;
  /* height: 100px;
    line-height: 100px; */
  padding: 0 10px;
}
.banner ul li a:hover {
  color: rgba(255, 135, 80, 0.877);
}
.banner form {
  float: right;
  margin-top: 25px;
}
.banner form #search {
  float: left;
  width: 140px;
  height: 40px;
  border-radius: 5px 0 0 5px;
  padding-left: 10px;
  border: 1px solid #424242;
}
.banner form button {
  float: left;
  width: 42px;
  height: 42px;
  border-radius: 0 5px 5px 0;
  border: 1px solid black;
  border-left: 0;
  background: url(images/search.png) no-repeat center;
  background-size: 25px;
}
</style>