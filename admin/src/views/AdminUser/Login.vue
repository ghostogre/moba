<template>
  <div class="login-container">
    <el-card header="请先登录" class="login-card">
      <el-form @submit.native.prevent="login">
        <el-form-item label="用户名">
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="model.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      model: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async login () {
      const res = await this.$http.post('/login', this.model)
      if (res.data.token) {
        localStorage.token = res.data.token
        this.$message({
          type: 'success',
          message: '登录成功'
        })
        setTimeout(() => {
          this.$router.push('/')
        }, 500)
      }
    }
  }
}
</script>

<style lang="css">
  .login-card {
    width: 25rem;
    margin: 5rem auto;
  }
</style>
