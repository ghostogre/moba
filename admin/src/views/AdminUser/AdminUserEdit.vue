<template>
  <div>
    <h1>{{id ? '编辑': '新建'}}管理员</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="用户名">
        <el-input v-model="model.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="model.password" type="password"></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {} // 路由解耦，不需要this.params.这种写法
  },
  name: 'AdminUserEdit',
  data () {
    return {
      model: {
        name: ''
      },
      parents: []
    }
  },
  created () {
    this.fetchParents()
    this.id && this.fetch()
  },
  methods: {
    async save () {
      if (this.id) {
        await this.$http.put(`/rest/admin_users/${this.id}`, this.model)
      } else {
        await this.$http.post('/rest/admin_users', this.model)
      }
      this.$router.push('/admin_users/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    async fetch () {
      const res = await this.$http.get(`/rest/admin_users/${this.id}`)
      this.model = res.data
    },
    // 获取上级类别列表
    async fetchParents() {
      const res = await this.$http.get('/rest/admin_users')
      if (res.status == 200) {
        this.parents = res.data || []
      }
    }
  }
}
</script>
