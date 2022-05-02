<template>
  <div class="order">
    <h2>我的订单</h2>
    <!-- <el-tabs type="card"> -->
      <!-- <el-tab-pane label="所有订单" value="first"> -->
        <div class="myorder">
          <el-table :data="message" stripe style="width: 100%">
            <el-table-column
              prop="orderNum"
              label="订单编号"
              width="180"
            ></el-table-column>
            <el-table-column
              prop="orderName"
              label="订单商品"
              width="140"
            ></el-table-column>
            <el-table-column
              prop="consignee"
              label="收货人"
              width="100"
            ></el-table-column>
            <el-table-column
              prop="address"
              label="地址"
              width="180"
            ></el-table-column>
            <el-table-column
              prop="date"
              label="下单日期"
              width="180"
            ></el-table-column>
            <el-table-column
              prop="state"
              label="状态"
              width="80"
            ></el-table-column>
            <el-table-column label="操作" width="80">
              <span class="handle">查看详情</span>
            </el-table-column>
          </el-table>
        </div>
      <!-- </el-tab-pane> -->
    <!-- </el-tabs> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: [
        {
          orderNum: "2605019545601261351",
          orderName: "雪花梨赵县新鲜梨",
          consignee: "张三",
          address: "四川省 成都市 武侯区 玉林街道 65号",
          date: "2022.5.2 14:00",
          state: '完成'
        },
        {
          orderNum: "2605019545601261351",
          orderName: "雪花梨赵县新鲜梨",
          consignee: "张三",
          address: "四川省 成都市 武侯区 玉林街道 65号",
          date: "2022.5.2 14:00",
          state: '待收货'
        },
        {
          orderNum: "2605019545601261351",
          orderName: "雪花梨赵县新鲜梨",
          consignee: "张三",
          address: "四川省 成都市 武侯区 玉林街道 65号",
          date: "2022.5.2 14:00",
          state: '完成'
        },
        {
          orderNum: "2605019545601261351",
          orderName: "雪花梨赵县新鲜梨",
          consignee: "张三",
          address: "四川省 成都市 武侯区 玉林街道 65号",
          date: "2022.5.2 14:00",
          state: '待付款'
        },
        {
          orderNum: "2605019545601261351",
          orderName: "雪花梨赵县新鲜梨",
          consignee: "张三",
          address: "四川省 成都市 武侯区 玉林街道 65号",
          date: "2022.5.2 14:00",
          state: '已取消'
        }
      ],
    };
  },
};
</script>

<style lang="less">
.myorder {
  .handle {
    &:hover {
      cursor: pointer;
    }
    color: green;
  }
}
</style>