<template>
  <div class="login-container">
    <el-card header="请先登录" class="login-card">
      <el-form @submit.native.prevent="login">
        <!-- native 表示监听el-form里的原生表单事件 prevent表示阻止表单的默认提交，不要跳转页面 -->
        <el-form-item label="用户名">
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="model.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit" >登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  data() {
    return {
      model: {},
    }
  },
  methods: {
    async login() {
      const res = await this.$request.post('login',this.model)
      localStorage.token = res.data.token
      this.$router.push('/')
      this.$message({
        type: 'sucess',
        message: '登录成功'
      })
      // this.$bus.$emit('login',this.model);
      window.console.log(this.model,res)
    }
  }
}
</script>

<style  >
.login-card {
  width: 25rem;
  margin: 6rem auto;
}
/* 将返回的token写入浏览器的存储，浏览器关闭后再打开仍然保存
      sessionStorage.token = res.data.token//sessionStorage浏览器关闭后不再存储 */
</style>
