<template>
  <div class="resetpassword">
    <h2>重置密码</h2>
    <el-tabs type="card">
      <el-tab-pane label="设置密码" value="first">
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
        <button class="send">发送验证码</button>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.resetpassword {
  // padding: 20px;
}
</style>