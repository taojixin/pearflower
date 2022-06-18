<template>
    <div class="farms">
        <div class="title"><span>||||</span>热门农场<span>HOT FARM</span></div>
        <FarmBox farmName="宝民家庭农场" farmInfo="成立于2017-04-18，经营者:王光杰<br/>
                统一社会信用代码:92510824MA65PA0Y43<br/>
                地理位置:苍溪县鸳溪镇民中村一组" />
        <FarmBox farmName="宝民家庭农场" farmInfo="成立于2017-04-18，经营者:王光杰<br/>
                统一社会信用代码:92510824MA65PA0Y43<br/>
                地理位置:苍溪县鸳溪镇民中村一组" />
    </div>
    
</template>

<script>
import FarmBox from '@/components/homeCompnents/FarmBox.vue'
export default {
    name:'HotFarms',
    components:{
        FarmBox
    }
}
</script>

<style scoped>
.farms{
width: 1226px;
height: 1200px;
margin: 0 auto;
/* background-color: #fee8bf; */
/* border-radius: 5px; */
}
.farms .title{
    width: 100%;
    height: 70px;
    line-height: 120px;
    text-align: center;
    /* background-color: #fef1c5; */
}
.farms .title span{
    display: inline-block;
    width: 130px;
    height: 70px;
    line-height: 120px;
    color: chocolate;
    /* background-color: #fff; */
}
.farms .title span:nth-child(2){
    position: relative;
    top: 30px;
    right: 100px;
    font-style: oblique;
}
</style>