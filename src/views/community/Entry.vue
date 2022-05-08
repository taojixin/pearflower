<template>
  <div class="entry">
    <!-- 文章作者及时间 -->
    <div class="meta-container">
      <span class="username-entry">{{ message.name }}</span>
      <span class="time-entry"
        ><i class="iconfont icon-shijian"></i>{{ message.data }}</span
      >
    </div>
    <!-- 标题 -->
    <a href="#">{{message.title}}</a>
    <!-- 部分内容 -->
    <p>{{ message.content }}</p>
    <!-- 点赞信息 -->
    <div class="givelike">
      <i class="iconfont icon-yanjing browse"></i>
      <span class="count browse-span">{{ message.browse }}</span>
      <i class="iconfont icon-dianzan good"></i>
      <span class="count good-span">{{ message.good }}</span>
      <i class="iconfont icon-pinglun1 comment"></i>
      <span class="count comment-span">{{ message.comments }}</span>
    </div>
    <!-- 图片信息 -->
    <!-- <img class="article-picture" src="../../assets/images/head.jpg" /> -->
    <img class="article-picture" :src="message.imagesurl" />
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: Object
    },
  }
};
</script>

<style lang="less">
@bgColorHover: rgb(232, 238, 193);
.entry {
  position: relative;
  width: 100%;
  height: 140px;
  border-top: 1px solid grey;
  margin: 10px;
  padding: 5px;
  transition: background-color 0.4s;
  &:hover {
    background-color: @bgColorHover;
    cursor: pointer;
  }
  // 文章作者及时间
  .meta-container {
    width: 160px;
    justify-content: center;
    margin-top: 3px;
    font-size: 12px;
    color: rgb(155, 169, 25);
    .time-entry {
      i {
        display: inline-block;
        vertical-align: top;
        margin-right: 3px;
      }
      padding-left: 20px;
    }
  }

  // 公共样式
  a,
  p,
  .article-picture,
  .givelike {
    position: absolute;
  }
  a {
    top: 25px;
    font-size: 18px;
    font-weight: bold;
    color: rgb(94, 80, 80);
  }
  // 部分内容
  p {
    top: 40px;
    font-size: 14px;
    color: grey;
    text-indent: 2em;
    width: 80%;
    // 超出部分显示...
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; // 显示两行
    overflow: hidden;
  }
  // 浏览、点赞等信息
  .givelike {
    top: 100px;
    i,
    span {
      position: absolute;
      font-size: 20px;
    }
    span {
      font-size: 12px;
      top: 8px;
      color: rgb(186, 197, 117);
    }
    i {
      top: 6px;
      color: rgb(144, 159, 43);
      &:hover {
        color: rgb(84, 93, 30);
      }
    }
    .browse {
      font-size: 23px;
      left: 10px;
    }
    .browse-span {
      left: 34px;
    }
    .good {
      left: 80px;
    }
    .good-span {
      left: 100px;
    }
    .comment {
      left: 140px;
    }
    .comment-span {
      left: 160px;
    }
  }

  // 配图
  .article-picture {
    width: 100px;
    height: 100px;
    right: 30px;
  }
}
</style>