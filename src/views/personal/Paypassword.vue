<template>
  <div class="paypassword">
    <h2>支付密码</h2>
    <el-tabs type="card">
      <el-tab-pane label="设置支付密码" value="first">
        <div class="password setpassword">
          <div class="text">
            <span>* </span>输入验证码：
            <input type="text" />
          </div>
          <div class="text">
            <span>* </span>输入新密码：
            <input type="text" />
          </div>
          <div class="text">
            <span>* </span>确认新密码：
            <input type="text" />
          </div>
          <button>保存</button>
        </div>
      </el-tab-pane>
      <el-tab-pane label="修改支付密码" name="second">
        <div class="password changepassword">
          <div class="text">
            <span>* </span>输入旧密码：
            <input type="text" />
          </div>
          <div class="text">
            <span>* </span>输入新密码：
            <input type="text" />
          </div>
          <div class="text">
            <span>* </span>确认新密码：
            <input type="text" />
          </div>
          <button>保存</button>
        </div>
      </el-tab-pane>
      <el-tab-pane label="找回支付密码" name="third">
        <div class="password changepassword">
          <div class="text">
            <span>* </span>输入手机号：
            <input type="text" />
          </div>
          <div class="text">
            <span>* </span>输入验证码：
            <input type="text" />
          </div>
          <div class="text">
            <span>* </span>输入新密码：
            <input type="text" />
          </div>
          <div class="text">
            <span>* </span>确认新密码：
            <input type="text" />
          </div>
          <button class="last">保存</button>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.password {
  width: 100%;
  height: 100vh;
  position: relative;
  margin: 20px;
  color: green;
  .text {
    margin-bottom: 20px;
    span {
      color: red;
      text-align: center;
      vertical-align: middle; // 让*居中
    }
  }

  button {
    position: absolute;
    top: 150px;
    left: 120px;
    width: 80px;
    height: 40px;
    font-size: 16px;
    background-color: rgb(179, 244, 179);
    border: none;
  }
  .last {
    top: 170px;
  }
}
</style>