<template>
  <div class="essay">
    <!-- 第一层头像区域 -->
    <div class="first-floor">
      <img src="@/assets/images/head.jpg" alt="" />
      <span class="username-essay">{{ content.username }}</span>
      <span class="date-essay">{{ date }}</span>
      <i class="iconfont icon-xiangxia2 arrow-down-essay"></i>

      <!-- 鼠标经过显示 -->
      <!-- <div class="hidden-box">
        <div class="small-square"></div>
      </div> -->
    </div>
    <!-- 第二层内容区域 -->
    <div class="second-floor">
      <p>{{ content.essay }}</p>
    </div>
    <!-- 第三层点赞转发区域 -->
    <div class="third-floor">
      <span class="browse-third">浏览{{ content.browseCount }}次</span>
      <div class="good-box">
        <i class="iconfont icon-dianzan"></i>
        <i class="iconfont icon-pinglun1"></i>
        <i class="iconfont icon-fenxiang"></i>
      </div>
    </div>
    <hr />
    <!-- 第四层，评论 -->
    <div class="fourth-floor">
      <input class="input-fourth" type="text" placeholder="评论" />
      <i class="iconfont icon-zhaoxiangji"></i>
    </div>
    <!-- 第五层，评论区域 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: {
        username: "风花雪月",
        date: "2022.5.10 22:45",
        essay:
          "风雨之后，我在一个清晨走上街道，发现一切都已改变。我不是说那些折断在地的树枝和散落于泥泞路面的黄叶，而是说某些深层的，难以说清的东西已经改变，就像晨曦之中此刻随处可见的成群蜗牛，潮湿的土壤中说不清楚的气味，不新鲜的空气等．这些都是一切已永远改变了的明证。我站在一个泥坑前，盯着它看。水坑底是软软的泥浆，仿佛在等待某种征兆、某种呼唤，再远一点的地方，苜蓿叶上似有水滴，它的四周有慢慢泛黄的草地，折断的蕨类植物和绿色的草本植物。在我的右方，沿着我漫步、思索的峭壁之底，一只海鸥在缓缓盘旋--它的处境看上去比以往更为危险，却表现得愈发坚定勇敢。当然，所有这些事情——这种清楚的感知，这种不知从何而来的狂风骤然带来的寒流，这被暴风雨洗刷得如此洁净的天空，这种整个自然都呈现出的新色彩——也许只是一种欺骗性的幻象。但在漫步的时候，我确实感到，在暴风雨来临之前，鸟儿和小虫子，树木和石头，垃圾箱和倾斜的电线杆——所有这些都对生活失去了兴趣，失却了目标，忘记了为何身在此处。后来，当子夜消逝，黎明第一道曙光升起之前，暴风雨突至，重现了一切失却的意义，失却的热望。人们是否需要在深夜时分，在窗户的咔嗒声中、在狂风穿过门窗缝隙之际、在雷声里醒来，只是为了感受生活原本比我们想象的要深刻得多，世界的意义要丰富得多？我半睡半醒，从床上跳起来冲向窗户，一扇扇关上它，然后熄掉还亮着的桌灯，就像水手在暴风雨之夜醒来，本能地冲向他的船帆那样。做完这些后，我来到厨房，坐在那里喝了杯水——厨房的顶灯在呼啸的大风中摇晃。突然，一阵狂风袭来，仿佛摇撼了整个世界，紧接着停电了。一切陷入黑暗，厨房的瓷砖在我赤裸的脚下感觉那样冰冷。从坐着的地方，我可以透过窗户、透过摇摆的松树和白杨树，看见白色泡沫自越来越大的海浪中飞起。在雷鸣声中，闪电仿佛就要击中近处的海面。随后，在持续的闪电中，疾走的层云、翻卷的树梢、大地与天空，全都纠缠在一起。我站在厨房窗前，看着外面的世界，手里握着一个空杯子，感到十分满足清晨时分，我四处游荡，恰似侦察员围绕凶案、暴乱等暴力事件搜索证据，想看清楚周围究竟发生了什么。我对自己说：这是动乱景象，风雨来袭时的景象啊！要记得我们都生活在同一个世界，再后来，我看到折断的树枝和横倒在地的自行车，不禁又想：当风雨来袭的时候，我们不仅明白我们生活在一个世界上，而且还会感到．我们经历着同样的生活。一只小麻雀掉进了泥泞中——我不知道为什么——就要死了，我充满好奇，却无动于衷地描摹着它。大雨倾盆，打湿了我的本子和素描。",
        browseCount: 78,
      },
    };
  },
};
</script>

<style lang="less">
.essay {
  background-color: #fff;
  box-sizing: border-box;
  padding: 20px;
  min-width: 600px;
  // 第一层图片区域
  .first-floor {
    position: relative;
    height: 60px;
    img {
      position: absolute;
      width: 60px;
      height: 60px;
      border-radius: 60px;
    }
    span {
      position: absolute;
      top: 10px;
      left: 70px;
      font-size: 14px;
      font-weight: bold;
    }
    .date-essay {
      top: 30px;
      font-size: 12px;
      color: #a37777;
      margin-top: 5px;
    }
    .arrow-down-essay {
      position: absolute;
      top: 5px;
      right: 10px;
      font-size: 20px;
      &:hover {
        color: #a3a36d;
        cursor: pointer;
      }
    }
    .hidden-box {
      position: absolute;
      top: 35px;
      right: 0;
      width: 150px;
      height: 80px;
      border: 1px solid black;
      .small-square {
        position: absolute;
        top: -6px;
        right: 14px;
        width: 10px;
        height: 10px;
        border-top: 1px solid black;
        border-left: 1px solid black;
        background-color: #fff;
        transform: rotate(45deg);
      }
    }
  }
  // 第二层内容区域
  .second-floor {
    p {
      font-size: 14px;
      letter-spacing: 1px;
      color: rgb(68, 67, 67);
    }
  }
  // 第三层点赞转发区域
  .third-floor {
    width: 100%;
    height: 30px;
    line-height: 30px;
    .browse-third {
      font-size: 14px;
      color: gray;
    }
    .good-box {
      float: right;
      i {
        font-size: 30px;
        margin: 0 20px;
        &:hover {
          cursor: pointer;
          color: #e1e18e;
        }
      }
    }
  }
  // 第四次
  .fourth-floor {
    position: relative;
    width: 100%;
    height: 40px;
    line-height: 40px;
    border: 2px solid #e7e7e7;
    .input-fourth {
      position: absolute;
      top: 0;
      left: 0;
      width: 80%;
      height: 37px;
      border: none;
      outline: none;
      font-size: 16px;
    }
    i {
      position: absolute;
      right: 10px;
      font-size: 35px;
    }
  }

  hr {
    color: #e7e7e7;
    border: none;
    border: 1px solid #e7e7e7;

    // border: 1px solid #e7e7e7;
  }
}
</style>