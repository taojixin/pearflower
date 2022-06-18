<template>
    <div class="box">
        <functionBox/>
        <functionBox/>
        <functionBox/>
    </div>
</template>

<script>

import functionBox from '@/components/homeCompnents/FunctionBox.vue'
export default {
    name:'SelectBox',
    components:{
        functionBox
    }
}
</script>

<style>
.box{
    width: 996px;
    height: 300px;
    margin: 0 auto;
    padding: 30px 0;
    /* background-color: pink; */
}
</style>