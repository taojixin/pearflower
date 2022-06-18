<template>
  <!-- 轮播图展示区 -->
        <div class="slideshow">
            <div id="wrap">
                <!-- 图片列表 -->
                <div class="img-list">
                  <img src="images/lunbo1.jpg" />
                  <img src="images/lunbo2.jpg" />
                  <img src="images/lunbo3.jpg" />
                  <img src="images/tu1.webp" />
                  <img src="https://s1.ax1x.com/2020/09/26/0irQ0g.jpg" />
                </div>
                
                <!-- 小箭头 -->
                <div class="arrow">
                  <a href="javascript:;" class="left">《</a>
                  <a href="javascript:;" class="right">》</a>
                </div>
          
                <!-- 小圆点 -->
                <ul class="circle-list">
                  <li class="circle active" data-n="0"></li>
                  <li class="circle" data-n="1"></li>
                  <li class="circle" data-n="2"></li>
                  <li class="circle" data-n="3"></li>
                  <li class="circle" data-n="4"></li>
                </ul>
          </div>
        </div>
</template>

<script>
export default {
    name:'SliderShow'
}
</script>

<style scoped>
.slideshow{
    width: 976px;
    height: 450px;
    float: right;
    /* background-color: rgb(228, 119, 119); */
}

#wrap {
    overflow: hidden;
    position: relative;
    width: 976px;
    height: 450px;
}

#wrap .img-list {
    display: flex;
    position: relative;
    left: 0px;
    width: 976px;
    height: 450px;
    transition: 0.5s ease;
}

#wrap .img-list img {
    width: 976px;
    height: 450px;
    cursor: pointer;
}

#wrap a {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    display: block;
    width: 30px;
    height: 50px;
    background-color: rgba(0, 0, 0, 0.4);
    color: white;
    user-select: none;
    font-size: 30px;
    text-align: center;
    line-height: 50px;
    text-decoration: none;
}

#wrap a.left {
    left: 0;
}

#wrap a.right {
    right: 0;
}

.circle-list {
    display: flex;
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 140px;
    height: 20px;
    z-index: 8;
}
.circle-list > .circle {
    margin: 0 5px;
    width: 10px;
    height: 10px;
    background-color: #ecf0f1;
    border-radius: 50%;
}

.circle-list > .circle.active {
    background-color: #bccfb5;
}
</style>