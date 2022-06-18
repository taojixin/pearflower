<template>
    <div>
        <!-- <HomeTop/>
        <HomeNav/> -->
        <Header></Header>
        <!-- <Slider/> -->
        <SelectBox/>
        <HotFarms/>
        <FolkCulture/>
        <BottomBar/>
        <SideBar/>
    </div>
</template>

<script>
import Header from '../components/Header'
// import Slider from '@/components/Slider.vue'
import HotFarms from '@/components/homeCompnents/HotFarms.vue'
import SelectBox from '@/components/homeCompnents/SelectBox.vue'
import FolkCulture from '@/components/homeCompnents/FolkCulture.vue'
import BottomBar from '@/components/homeCompnents/BottomBar.vue'
import SideBar from '@/components/homeCompnents/SideBar.vue'

export default {
    components:{
        Header,
        // Slider,
        HotFarms,
        SelectBox,
        FolkCulture,
        BottomBar,
        SideBar
    },
    name:'Home_cps'
}
</script>

<style>

</style>