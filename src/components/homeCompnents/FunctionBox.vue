<template>
    <div class="box">
        <div></div>
        <span>鸳溪旅游导图</span>
    </div>
</template>

<script>
export default {
    name:'functionBox',

}
</script>

<style scoped>
.box{
    width: 318px;
    height: 240px;
    float: left;
    background-color: rgb(217, 214, 214);
    margin-right: 10px;
    position: relative;
    text-align: center;
}
.box div{
    width: 318px;
    height: 220px;
    background: url(../../assets/map.png) no-repeat center center;
    background-size: 100% 100%;
}
.box span{
    display: inline-block;
    width: 100%;
    height: 20px;
    line-height: 20px;
    text-align: center;
    position: absolute;
    bottom: 0;
}
</style>