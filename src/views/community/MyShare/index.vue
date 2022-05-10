<template>
  <div class="myshare">
    <Header></Header>
    <!-- 背景颜色 -->
    <div class="box-all">
      <!-- header以外的内容区域 -->
      <div class="content-share s">
        <!-- 内容的左边区域 -->
        <div class="left-myshare">
          <!-- 头像区域 -->
          <div class="head-myshare">
            <img src="@/assets/images/head.jpg" alt="">
            <span>风花雪月</span>
          </div>
          <!-- 数量统计,照片,分享,日志 -->
          <ul class="sort-content-share">
            <li>
              <span class="count">422</span>
              <span class="word">照片</span>
            </li>
            <li>
              <span class="count">12</span>
              <span class="word">分享</span>
            </li>
            <li>
              <span class="count">0</span>
              <span class="word">日志</span>
            </li>
          </ul>
        </div>
        <div class="right-myshare">
          <Essay></Essay>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Essay from '@/components/community/Essay.vue'
export default {
  components: {
    Header,
    Essay
  },
};
</script>

<style lang="less">
.s {
  margin: 0 auto;
  width: 60%;
}
.box-all {
  background-color: rgb(243, 243, 229);

}
// 主要内容区域
.content-share {
  // height: 600px;
  display: flex;
  padding-top: 20px;
  // 左侧区域
  .left-myshare {
    flex: 1;
    height: 100px;
    // 头像区域
    .head-myshare {
      height: 100px;
      position: relative;
      margin-bottom: 20px;
      img {
        position: absolute;
        top: 10px;
        left: 30px;
        width: 80px;
        height: 80px;
        border-radius: 10px;
        box-shadow: 2px 2px 3px 3px #ebeb9c;
      }
      span {
        position: absolute;
        top: 10px;
        left: 120px;
        font-size: 14px;
        color: rgb(97, 125, 153);
        text-shadow: 2px 2px  3px #c7c712;
      }
    }
    // 数量统计,照片,分享,日志
    .sort-content-share {
      display: flex;
      width: 100%;
      height: 80px;
      margin-top: 10px;
      background-color: white;
      margin: 0;
      li {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-right: 1px solid rgb(231, 231, 231);
        &:hover {
          cursor: pointer;
          .word {
            color: #97bc61;
          }
        }
        &:last-child {
          border: none;
        }
        .count {
          margin-bottom: 5px;
          font-size: 20px;
        }
        .word {
          font-size: 16px;
          color: gray;
        }
      }
    }
  }
  // 右侧区域
  .right-myshare {
    flex: 3;
    padding: 10px;
    margin-left: 20px;
  }
}
</style>