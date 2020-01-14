<template>
  <div>
    <h1>{{id ? '编辑': '新建'}}文章</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="所属分类">
        <el-select v-model="model.categories" multiple>
          <el-option
            v-for="item in categories"
            :key="item._id"
            :label="item.name"
            :value="item._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="详情">
        <vue-editor
          v-model="model.content"
          useCustomImageHandler
          @image-added="handleImageAdded"></vue-editor>
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
export default {
  props: {
    id: {} // 路由解耦，不需要this.params.这种写法
  },
  name: 'ArticleEdit',
  components: {
    VueEditor
  },
  data () {
    return {
      model: {
        title: '',
        content: '',
        categories: []
      },
      categories: []
    }
  },
  created () {
    this.fetchCategories()
    this.id && this.fetch()
  },
  methods: {
    async save () {
      if (this.id) {
        await this.$http.put(`/rest/articles/${this.id}`, this.model)
      } else {
        await this.$http.post('/rest/articles', this.model)
      }
      this.$router.push('/articles/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    async fetch () {
      const res = await this.$http.get(`/rest/articles/${this.id}`)
      this.model = res.data
    },
    handleUploadSuccess (res) {
      this.model.icon = res.url
    },
    // 获取上级类别列表
    async fetchCategories() {
      const res = await this.$http.get('/rest/categories')
      if (res.status == 200) {
        this.categories = res.data || []
      }
    },
    // 富文本图片上传
    async handleImageAdded (file, Editor, cursorLocation, resetUploader) {
      const formData = new FormData()
      formData.append('file', file) // 服务端接受的字段也是file

      const res = await this.$http.post('/upload', formData)
      Editor.insertEmbed(cursorLocation, 'image', res.data.url)
      resetUploader()
    }
  }
}
</script>
