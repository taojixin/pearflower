<template>
  <div class="collection">
    <h2>收藏列表</h2>
    <div class="mycollection">
      <!-- 列名 -->
      <div class="collection-alltit">
        <input ref="selectAllRef" @click="selectAll()" type="checkbox" />
        <span>全选</span>
        <span>商品</span>
        <span>单价</span>
        <span>购买数</span>
        <span>小计</span>
        <span>操作</span>
      </div>
      <!-- 收藏商品列表 -->
      <ul class="list-collection">
        <li v-for="item in listMessage" :key="item.count">
          <input @click="selectOne()" ref="listRef" type="checkbox" />
          <img src="" alt="" />
          <p class="title">{{ item.title }}</p>
          <span
            >￥<span class="price">{{ item.unitPrice }}</span></span
          >
          <div class="count-collection">
            <input type="number" :value="item.count" />
          </div>
          <span
            >￥<span class="price">{{ item.totalPrice }}</span></span
          >
          <div class="operations-collection">删除</div>
        </li>
      </ul>
      <!-- 结算 -->
      <div class="settlement-collection">
        <span class="price-name"
          >运费:<span class="some-price">￥{{ settlement.freight }}</span
          >元</span
        >
        <span class="price-name"
          >商品金额:<span class="some-price">￥{{ settlement.goodsPrice }}</span
          >元</span
        >
        <span class="price-name"
          >会员优惠金额:<span class="some-price"
            >￥{{ settlement.deduction }}</span
          >元</span
        >
        <span class="price-name"
          >优惠券抵扣金额:<span class="some-price"
            >￥{{ settlement.coupons }}</span
          >元</span
        >
        <span class="price-name"
          >总金额:<span class="some-price">￥{{ settlement.totalPrice }}</span
          >元</span
        >
        <button class="pay">支付</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 收藏列表
      listMessage: [
        {
          title: "整箱泰国椰青整箱泰国椰青整箱",
          unitPrice: 99.99,
          count: 1,
          totalPrice: 99.99,
        },
        {
          title: "整箱泰国椰青整箱泰国椰青整箱",
          unitPrice: 99.99,
          count: 2,
          totalPrice: 99.99,
        },
        {
          title: "整箱泰国椰青整箱泰国椰青整箱",
          unitPrice: 99.99,
          count: 3,
          totalPrice: 99.99,
        },
        {
          title: "整箱泰国椰青整箱泰国椰青整箱",
          unitPrice: 99.99,
          count: 4,
          totalPrice: 99.99,
        },
        {
          title: "整箱泰国椰青整箱泰国椰青整箱",
          unitPrice: 99.99,
          count: 5,
          totalPrice: 99.99,
        },
      ],
      // 结算
      settlement: {
        freight: 0.0, // 运费
        goodsPrice: 557.7, // 商品金额
        deduction: 50.1, // 抵扣金额
        coupons: 0.0, // 优惠券抵扣金额
        totalPrice: 507.0, // 应付金额
      },
    };
  },
  methods: {
    // 全选
    selectAll() {
      const listNum = this.$refs.listRef;
      if (this.$refs.selectAllRef.checked === false) {
        for (let i = 0; i < listNum.length; i++) {
          this.$refs.listRef[i].checked = false;
        }
      } else {
        for (let i = 0; i < listNum.length; i++) {
          this.$refs.listRef[i].checked = true;
        }
      }
    },
    // 单选
    selectOne() {
      let isTrue = false;
      for (let i = 0; i < this.$refs.listRef.length; i++) {
        if (this.$refs.listRef[i].checked === false) {
          isTrue = false;
          break;
        }
        isTrue = true;
      }
      if (isTrue === true) {
        this.$refs.selectAllRef.checked = true;
      } else {
        this.$refs.selectAllRef.checked = false;
      }
    },
  },
};
</script>

<style lang="less">
.mycollection {
  // border: 1px solid black;
  height: 100%;
  // 列名
  .collection-alltit {
    position: relative;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #dee3c6;
    color: rgb(96, 92, 92);
    input,
    span {
      position: absolute;
      font-size: 14px;
    }
    input:first-child {
      left: 20px;
      top: 50%;
      transform: translateY(-50%);
    }
    span:nth-child(2) {
      left: 50px;
    }
    span:nth-child(3) {
      left: 150px;
    }
    span:nth-child(4) {
      right: 400px;
    }
    span:nth-child(5) {
      right: 260px;
    }
    span:nth-child(6) {
      right: 150px;
    }
    span:nth-child(7) {
      right: 50px;
    }
  }
  // 收藏列表
  .list-collection {
    border-bottom: 1px solid pink;
    li {
      &:hover {
        cursor: pointer;
      }
      position: relative;
      height: 100px;
      margin: 20px 0;
      input,
      img,
      p,
      span,
      div {
        position: absolute;
        color: rgb(112, 116, 118);
        top: 50%;
        transform: translateY(-50%);
      }
      input {
        left: 20px;
      }
      img {
        left: 50px;
        width: 60px;
        height: 60px;
        border: 1px solid pink;
      }
      p {
        left: 150px;
        margin: 0;
        top: 20px;
        width: 330px;
        // 单行超出显示小数点
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        transform: translateY(0);
      }
      span:nth-child(4) {
        right: 420px;
      }
      div:nth-child(5) {
        right: 320px;
        input {
          width: 60px;
        }
      }
      span:nth-child(6) {
        right: 170px;
      }
      div:last-child {
        right: 0;
      }
      span {
        .price {
          color: red;
          font-size: 20px;
          top: 9px;
        }
      }
    }
  }
  // 结算
  .settlement-collection {
    height: 130px;
    margin-top: 10px;
    position: relative;
    .price-name {
      position: absolute;
      &:nth-child(1) {
        right: 575px;
      }
      &:nth-child(2) {
        right: 400px;
      }
      &:nth-child(3) {
        right: 200px;
      }
      &:nth-child(4) {
        right: 10px;
      }
      &:nth-child(5) {
        right: 10px;
        top: 30px;
      }
      .some-price {
        color: red;
      }
    }
    .pay {
      position: absolute;
      right: 10px;
      bottom: 10px;
      width: 100px;
      height: 50px;
      border: none;
      background-color: rgb(233, 90, 90);
      border-radius: 10px;
      transition: all 0.3s;
      &:hover {
        cursor: pointer;
        background-color: red;
      }
    }
  }
}
</style>