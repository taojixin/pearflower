<template>
  <div class="community clearfix">
    <Header name="top"></Header>
    <div class="communication-community w clearfix">
      <!-- 左侧 -->
      <div class="left-community">
        <div class="head-protrait">
          <img src="../../assets/images/head.jpg" alt="" />
        </div>
        <div class="username">
          <i class="iconfont icon-yonghu"></i>
          <span>风花雪月</span>
        </div>
        <div class="usergrade">
          <i class="iconfont icon-dengji"></i>
          <span>0</span>
        </div>
        <!-- 我的分享 -->
        <div class="myshare my" @click="jump('/writing')">
          <i class="iconfont icon-tiwen1"></i>
          <span>分享</span>
        </div>
        <!-- 我的收藏 -->
        <div class="mycollection my" @click="jump('/myshare')">
          <i class="iconfont icon-shoucang"></i>
          <span>我的分享</span>
        </div>
        <!-- 浏览记录 -->
        <!-- <div class="mybrowsing my">
          <i class="iconfont icon-shuliangtongji"></i>
          <span>浏览记录</span>
        </div> -->
      </div>

      <!-- 右侧 -->
      <div class="right-community">
        <h4>交流社区</h4>
        <Entry @click="readEssay('/othershare')" v-for="item in entries" :key="item.id" :message="item"></Entry>
      </div>
    </div>
    <div class="backtotop">
      <a class="iconfont icon-dingbu backtotop" href="#top"></a>
    </div>
  </div>
</template>

<script>
import Header from "../../components/Header";
import Entry from "../../components/community/Entry.vue";
import {getEntries} from '../../api/index'
export default {
  created() {
    this.getEntries();
  },
  data() {
    return {
      entries: [],
    };
  },
  methods: {
    // 获取条目
    async getEntries() {
      const data = await getEntries()
      this.entries = data.data.entries
    },
    // 跳转
    jump(path) {
      this.$router.push(path)
    },
    // 
    readEssay(path) {
      this.$router.push(path)
    }
  },

  components: {
    Header,
    Entry,
  },
};
</script>

<style lang="less">
@bgColorLeft: rgb(215, 219, 180);
@bgColorRight: rgb(244, 245, 235);
// 清除浮动
.clearfix::after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.clearfix {
  // 兼容低版本浏览器
  *zoom: 1;
}
// 内容部分
.communication-community {
  border: 1px solid pink;
  // 左侧
  .left-community {
    position: fixed;
    float: left;
    width: 200px;
    height: 400px;
    border-radius: 10px;
    background-color: @bgColorLeft;
    // 公共样式
    .head-protrait,
    .username,
    .usergrade,
    .myshare,
    .mycollection,
    .mybrowsing {
      position: absolute;
    }
    // 头像区域
    .head-protrait {
      top: 10px;
      left: 10px;
      height: 80px;
      width: 80px;
      box-shadow: 2px 2px 1px greenyellow;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .username,
    .usergrade {
      top: 20px;
      left: 100px;
      i {
        font-size: 25px;
        color: grey;
        margin-right: 5px;
        vertical-align: middle; // 字体图标与用户名对齐
      }
      span {
        font-size: 12px;
        font-weight: bold;
        color: rgb(89, 79, 79);
      }
    }
    .usergrade {
      top: 55px;
      span {
        color: grey;
      }
    }
    // 我的 公共样式
    .my {
      width: 150px;
      padding: 3px;
      left: 25px;
      border-bottom: 1px solid grey;
      i {
        font-size: 30px;
        vertical-align: middle;
        margin-right: 10px;
        color: rgb(88, 83, 83);
      }
      span {
        color: grey;
        letter-spacing: 5px;
      }
      &:hover {
        background-color: rgb(237, 241, 197);
        border-radius: 5px;
        cursor: pointer;
      }
    }
    .myshare {
      top: 150px;
    }
    .mycollection {
      top: 220px;
    }
    .mybrowsing {
      top: 290px;
    }
  }
  // 右侧
  .right-community {
    float: right;
    padding: 20px;
    width: 980px;
    background-color: @bgColorRight;
    h4 {
      color: rgb(218, 232, 91);
    }
  }
}
.backtotop {
  position: fixed;
  bottom: 100px;
  right: 100px;
  width: 50px;
  height: 50px;
  background-color: rgb(232, 238, 193);
  text-align: center;
  line-height: 50px;
  transition: all 0.3s;
  a {
    font-size: 40px;
    &:hover {
      cursor: pointer;
      background-color: rgb(221, 232, 149);
    }
  }
}
</style>