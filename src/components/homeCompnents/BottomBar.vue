<template>
    <div class="footer">
        <div class="content">
            <div><h3>咨询热线</h3>666-163257</div>
            <div><h3>快速链接</h3>公司简介<br>合作伙伴<br>工作机会<br>友情链接</div>
            <div><h3>关于我们</h3>公司招聘<br>商务合作<br>联系客服<br>快速咨询</div>
        </div>
        <div class="bottom">COPYRIGHT 02013-现在川ICP号-61CP证书：川B2-666666</div>
    </div>
</template>

<script>
export default {
    name:'BottomBar'
}
</script>

<style>
.footer{
    height: 250px;
    background-color: gray;
    margin-top: 10px;
    position: relative;
    color: #fff;
}
.footer .content div{
    width: 100px;
    float: left;
    padding: 50px;
    text-align: center;
}
.footer .content div:first-child{
    padding-left: 500px;
}
.footer .content div:last-child{
    padding-right: 500px;
}
.footer .bottom{
    display:inline-block;
    width: 100%;
    height: 30px;
    line-height: 30px;
    color: #fff;
    text-align: center;
    /* position:absolute; */
    /* bottom: 10px; */
    /* left: 500px; */
    background-color: rgb(38, 36, 36);
}
</style>