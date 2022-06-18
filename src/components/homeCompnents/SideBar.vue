<template>
  <!-- 侧边栏 -->
    <div class="sidebar">
        <div><a>手机APP</a></div>
        <div><a>个人中心</a></div>
        <div><a>人工客服</a></div>
        <div><a>购物车</a></div>
    </div>
</template>

<script>
export default {
    name:'SideBar'
}
</script>

<style>
/* 侧边栏 */
.sidebar{
    width: 60px;
    height: 240px;
    line-height: 100px;
    position: fixed;
    right: 2px;
    top: 300px;
    text-align: center;
    font-size: 12px;
}
.sidebar div{
    width: 60px;
    height: 60px;
    border: 1px solid rgb(24, 23, 23);
}
.sidebar div:nth-child(1){
    background: url(../../assets/phone1.png) no-repeat center 10px;
    background-size: 30px;
}
.sidebar div:nth-child(2){
    background: url(../../assets/person.png) no-repeat center 15px;
    background-size: 25px;
}
.sidebar div:nth-child(3){
    background: url(../../assets/kefu.png) no-repeat center 10px;
    background-size: 28px;
}
.sidebar div:nth-child(4){
    background: url(../../assets/cart1.png) no-repeat center 10px;
    background-size: 30px;
}
</style>