<template>
  <div class="center">
    <Header></Header>
    <div class="center w">
      <!-- 左侧部分 -->
      <div class="left">
        <!-- 面包屑导航 -->
        <div class="breadcrumbs">
          <a href="#">首页</a>
          &nbsp;
          >
          &nbsp;
          <a href="#">个人中心</a>
        </div>
        <div class="side-nav">
          <!-- 账户中心 -->
          <div class="account">
            <h4>账户中心</h4>
            <ul>
              <li v-for="item in account" :key="item.path"  @click="jump(item.path)">{{item.text}}</li>
            </ul>
          </div>
          <!-- 交易管理 -->
          <div class="management">
            <h4>交易管理</h4>
            <ul>
              <li v-for="item in management" :key="item.path"  @click="jump(item.path)">{{item.text}}</li>
            </ul>
          </div>
          <!-- 设置 -->
          <div class="change">
            <h4>设置</h4>
            <ul>
              <li v-for="item in change" :key="item.path"  @click="jump(item.path)">{{item.text}}</li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 右侧部分 -->
      <div class="right">
        <!-- 右侧的占位符 -->
        <router-view></router-view>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import {reqAccount} from '../../api/index'
import Header from '../../components/Header'
export default {
  created() {
    this.getAccount()
  },
  data() {
    return {
      account: [
        // { text: '我的账户', path: 'account'},
        // { text: '我的会员', path: 'vip'},
        // { text: '支付密码', path: 'paypassword'},
        // { text: '重置密码', path: 'resetpassword'}
      ],
      management: [
        { text: '我的订单', path: 'order'},
        { text: '物流信息', path: 'logistics'},
        { text: '收藏列表', path: 'collection'},
        { text: '购买记录', path: 'record'},
      ],
      change: [
        // { text: '个人信息', path: 'information'},
        { text: '收货地址', path: 'address'},
      ]
    }
  },
  methods: {
    jump(path) {
      this.$router.push(`/${path}`)
    },
    async getAccount() {
      const {data} = await reqAccount()
      this.account = data.account
    }
  },
  components: {
    Header
  }
};
</script>

<style lang="less">
* {
  box-sizing: border-box;
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
    user-select: none;
  }
  h4 {
    margin: 0;
    user-select: none;
  }
  ul {
    margin: 0;
    padding: 0;
  }
}
.w {
  width: 1200px;
  margin: 0 auto;
}
// .header {
//   height: 100px;
//   background-color: rgb(187, 223, 113);
// }

.center {
  position: relative;
  height: 630px;
  // background-color: rgb(230, 222, 222);

  .left {
    width: 200px;
    height: 630px;
    position: absolute;
    left: 0;
    top: 0;
    box-sizing: border-box;
    border: 1px solid rgb(182, 175, 175);

    li:hover {
      background-color: greenyellow;
      transition: all .5s;
      cursor: pointer;
    }

    .breadcrumbs {
      height: 30px;
      line-height: 30px;
      font-size: 14px;
      padding-left: 5px;
    }

    .side-nav {
      height: 600px;
      background-color: #fff;

      // 公共部分
      h4 {
          text-align: center;
          padding-top: 15px;
          a {
            color: black;
          }
        }
        ul {
          display: flex;
          flex-direction: column;
          justify-content: content;
          margin-top: 15px;
          li {
            padding-left: 50px;
            height: 35px;
            line-height: 35px;
            color: rgb(91, 88, 88);
          }
        }

      .account {
        height: 200px;
      }

      .management {
        height: 200px;
      }

      .change {
        height: 150px;
      }
    }
  }

  .right {
    width: 1000px;
    height: 630px;
    position: absolute;
    right: 0;
    top: 0;
    border-top: 1px solid black;
    padding: 20px;
  }
}

.footer {
  height: 100px;
  background-color: yellowgreen;
}
</style>