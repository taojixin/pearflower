<template>
  <div class="address">
    <h2>收获地址</h2>
    <div class="addaddress">
      <span>添加新地址</span>
    </div>
    <div class="myaddress" v-for="item in address" :key="item.name">
      <div class="box-left">默认</div>
      <div class="address-left">
        <h3>{{item.name}}</h3>
        <p>{{item.site}}</p>
        <p>手机：{{item.phone}}</p>
      </div>
      <div class="address-right">
        <span class="edit">编辑</span>
        <span class="modify">修改</span>
        <span class="delete">删除</span>
        <span class="default">设为默认</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      address: [
        {
          name: '张三',
          phone: '185*****104',
          site: '四川省 成都市 武侯区 玉林街道 65号'
        }
      ]
    }
  }
};
</script>

<style lang="less">
.addaddress {
  width: 100%;
  height: 100px;
  border: 1px dotted gray;
  color: gray;
  text-align: center;
  line-height: 100px;
  font-size: 20px;
  &:hover {
    cursor: pointer;
    span {
      border-bottom: 1px solid gray;
    }
  }
}
.myaddress {
  margin-top: 15px;
  height: 150px;
  border: 2px solid rgb(196, 191, 191);
  position: relative;
  .box-left,.address-left,.address-right {
    position: absolute;
  }
  .box-left {
    left: 0;
    width: 80px;
    height: 148px;
    text-align: center;
    line-height: 150px;
    background-color: rgb(220, 231, 203);
  }
  .address-left {
    top: 0;
    left: 90px;
    color: rgb(109, 106, 106);
  }
  .address-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-left: 1px solid gray;
    height: 148px;
    width: 100px;
    right: 0;
    top: 0;
    span {
      flex: 1;
      margin: 5px;
      color: green;
      font-size: 12px;
      &:hover {
        cursor: pointer;
        border-bottom: 1px solid green;
      }
    }
    
  }
}
</style>