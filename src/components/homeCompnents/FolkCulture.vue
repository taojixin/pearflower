<template>
    <div class="culture">
        <div class="title"><span>|||| |</span>风俗文化<span>FOLK CULTURE</span></div>
        <ul>
            <li>梨花节</li>
            <li>风2</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'FolkCulture'
}
</script>

<style>
.culture{
    width: 100%;
    height: 500px;
    background-color: rgba(225, 241, 205, 0.646);
    text-align: center;
}
.culture .title{
    width: 100%;
    height: 130px;
    line-height: 120px;
    text-align: center;
    /* background-color: #fef1c5; */
}
.culture .title span{
    display: inline-block;
    width: 130px;
    height: 70px;
    line-height: 120px;
    color: chocolate;
    /* background-color: #fff; */
}
.culture .title span:nth-child(2){
    position: relative;
    top: 30px;
    right: 100px;
    font-style: oblique;
}
.culture li{
    width: 40%;
    height: 350px;
    background-color: #fff;
    float: left;
    margin: 0 5%;
}
</style>