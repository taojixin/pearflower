<template>
    <!-- 农场1板块 -->
    <div class="farm1">
        <!-- 农场1图片 -->
        <div class="fimg1"></div>
        <!-- 农场1简介 -->
        <div class="fcontent1">
            <h3>{{farmName}}</h3>
            <p>{{farmInfo}}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name:'farmBox',
    props:{
        farmName:String,
        farmInfo:String
    }
}
</script>

<style>
.farm1{
    width: 100%;
    height: 500px;
    border: 1px solid black;
    margin-top: 30px;
    border-radius: 10px;
}
.farm1 .fimg1{
    float: left;
    width: 400px;
    height: 450px;
    /* border: 1px solid black; */
    background: url(../../assets/lihua1.jpg) no-repeat center center;
    background-size:  100% 100%;
    margin: 25px 0px 20px 30px;
}
.farm1 .fcontent1{
    float: left;
    width: 750px;
    height: 400px;
    margin-top: 50px;
    background-color: #fef1c5;
}
.farm1 .fcontent1 h3{
    margin: 30px 100px;

}
.farm1 .fcontent1 p{
    margin: 30px 100px;
}

</style>