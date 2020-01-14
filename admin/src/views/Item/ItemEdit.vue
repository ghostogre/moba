<template>
  <div>
    <h1>{{id ? '编辑': '新建'}}物品</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <!-- <el-form-item label="上级物品">
        <el-select v-model="model.parent">
          <el-option
            v-for="item in parents"
            :key="item._id"
            :label="item.name"
            :value="item._id"></el-option>
        </el-select>
      </el-form-item> -->
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="图标">
        <el-upload
          class="avatar-uploader"
          :action="$http.defaults.baseURL + '/upload'"
          :show-file-list="false"
          :on-success="handleUploadSuccess">
          <img v-if="model.icon" :src="model.icon" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
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
  name: 'ItemEdit',
  data () {
    return {
      model: {
        name: '',
        icon: ''
      },
      // parents: []
    }
  },
  created () {
    // this.fetchParents()
    this.id && this.fetch()
  },
  methods: {
    async save () {
      if (this.model.name === '') {
        this.$message({
          type: 'warning',
          message: '请输入名称'
        })
        return
      }
      if (this.id) {
        await this.$http.put(`/rest/items/${this.id}`, this.model)
      } else {
        await this.$http.post('/rest/items', this.model)
      }
      this.$router.push('/items/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    async fetch () {
      const res = await this.$http.get(`/rest/items/${this.id}`)
      this.model = res.data
    },
    handleUploadSuccess (res) {
      this.model.icon = res.url
    }
    // 获取上级类别列表
    // async fetchParents() {
    //   const res = await this.$http.get('/rest/items')
    //   if (res.status == 200) {
    //     this.parents = res.data || []
    //   }
    // }
  }
}
</script>

<style lang="css">
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
