<template>
  <div class="writing">
    <!-- <HeadOne></HeadOne> -->
    <Header></Header>
    <div class="content-writing q">
      <img src="../../../assets/images/head.jpg" class="myhead" />
      <div class="mywriting"><span>我的分享</span></div>
      <!-- 书写我的分享 -->
      <div class="write-writing">
        <input
          type="text"
          class="essay-title"
          placeholder="标题"
          v-model="essayTitle"
        />
        <textarea
          class="writing-textarea"
          v-model="essayContent"
          placeholder="内容"
        ></textarea>
        <span class="face"><i class="iconfont icon-biaoqing"></i></span>
        <span class="aite"><i class="iconfont icon-aite"></i></span>
        <span class="topic"><i class="iconfont icon-huati"></i></span>
        <span class="pic"><i class="iconfont icon-zhaoxiangji"></i></span>
      </div>
      <button class="push-writing" @click="pushWriting()">发表</button>
      <div class="back-community" @click="jump('/community')">返回社区</div>
    </div>
  </div>
</template>

<script>
import { reqWriting } from "@/api/index";
import { formatTime } from "@/utils/index";
import HeadOne from "@/components/Header/HeadOne.vue";
import Header from "@/components/Header/index.vue";
export default {
  components: {
    HeadOne,
    Header,
  },
  data() {
    return {
      // 文章标题
      essayTitle: "",
      // 文章内容
      essayContent: "",
    };
  },
  methods: {
    // 页面跳转
    jump(path) {
      this.$router.push(path);
    },
    // 提交文章
    async pushWriting() {
      const timeNow = formatTime();
      const essayMessage = {
        title: this.essayTitle,
        content: this.essayContent,
        time: timeNow,
        author: "风花雪月",
        authorId: 1,
      };
      if (this.essayTitle === "" || this.essayContent === "") {
        alert("标题内容不能为空！");
        return;
      } else {
        const data = await reqWriting(essayMessage);
        if (data.meta.code === 0) {
          alert("发布成功！");
        } else {
          alert("发布失败！");
        }
      }
    },
  },
};
</script>

<style lang="less">
.q {
  margin: 0 auto;
  width: 60%;
}
// 主体部分
.content-writing {
  height: 700px;
  padding: 10px;
  position: relative;
  // 头像
  .myhead {
    position: absolute;
    top: 50;
    left: -110px;
    width: 100px;
    height: 100px;
    border-radius: 10px;
    box-shadow: 2px 2px 5px 1px rgb(218, 232, 91);
  }
  // 我的分享
  .mywriting {
    margin: 0;
    padding: 10px 0 10px 20px;
    border-bottom: 1px solid rgb(230, 230, 230);
    color: rgb(218, 232, 91);
    margin-bottom: 10px;
    span {
      font-weight: bold;
      border-bottom: 2px solid rgb(218, 232, 91);
      &:hover {
        cursor: pointer;
      }
    }
  }
  // 标题
  .essay-title {
    width: 100%;
    border: none;
    outline: none;
    height: 50px;
    font-size: 30px;
    padding-left: 15px;
  }
  // 书写区域
  .write-writing {
    width: 80%;
    border: 2px solid rgb(230, 230, 230);
    padding-bottom: 10px;
    // 文本框
    .writing-textarea {
      width: 100%;
      height: 400px;
      font-size: 20px;
      padding: 10px;
      border: none;
      outline: none; // 去掉输入框获得焦点时的样式
      resize: none; // 固定文本框防止拖拽大小
      box-shadow: inset 0 0 3px 1px rgb(218, 232, 91);
      margin-bottom: 10px;
    }
    // 图标
    span {
      margin: 0 10px;
      color: rgb(147, 153, 99);
      i {
        font-size: 30px;
      }
      &:hover {
        cursor: pointer;
        color: rgb(218, 232, 91);
      }
    }
  }
  // 提交按钮
  .push-writing {
    position: absolute;
    bottom: 70px;
    left: 40%;
    transform: translateX(-50%);
    width: 100px;
    height: 50px;
    border: none;
    border-radius: 5px;
    letter-spacing: 5px;
    font-size: 20px;
    background-color: rgb(206, 218, 96);
    transition: all 0.3s;
    &:hover {
      background-color: rgb(147, 153, 99);
      cursor: pointer;
    }
  }
  // 返回社区
  .back-community {
    position: absolute;
    right: 0px;
    top: 60px;
    width: 100px;
    border-radius: 5px;
    background-color: rgb(206, 218, 96);
    text-align: center;
    transition: all 0.3s;
    &:hover {
      background-color: rgb(147, 153, 99);
      cursor: pointer;
    }
  }
}
</style>