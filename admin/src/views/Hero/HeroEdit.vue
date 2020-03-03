<template>
  <div>
    <h1>{{id ? '编辑': '新建'}}英雄</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <!-- <el-form-item label="上级英雄">
        <el-select v-model="model.parent">
          <el-option
            v-for="item in parents"
            :key="item._id"
            :label="item.name"
            :value="item._id"></el-option>
        </el-select>
      </el-form-item> -->
      <el-tabs type="border-card" :value="'basic'">
        <el-tab-pane label="基本信息" name="basic">
          <el-form-item label="名称">
            <el-input v-model="model.name"></el-input>
          </el-form-item>
          <el-form-item label="头像">
            <el-upload
              class="avatar-uploader"
              :action="uploadUrl"
              :show-file-list="false"
              :headers="getAuthHeaders()"
              :on-success="res => {$set(model, 'avatar', res.url)}">
              <img v-if="model.avatar" :src="model.avatar" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="Banner">
            <el-upload
              class="avatar-uploader"
              :action="uploadUrl"
              :show-file-list="false"
              :headers="getAuthHeaders()"
              :on-success="res => {$set(model, 'banner', res.url)}">
              <img v-if="model.banner" :src="model.banner" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="称号">
            <el-input v-model="model.title"></el-input>
          </el-form-item>
          <el-form-item label="类型">
            <el-select v-model="model.categories" multiple>
              <el-option v-for="item of categories" :key="item._id"
                :label="item.name"
                :value="item._id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="难度">
            <!-- 多层级的数据要保证上一层存在 -->
            <el-rate :max="9" show-score style="margin-top: .6rem;" v-model="model.scores.diffcult"></el-rate>
          </el-form-item>
          <el-form-item label="技能">
            <!-- 多层级的数据要保证上一层存在 -->
            <el-rate :max="9" show-score style="margin-top: .6rem;" v-model="model.scores.skills"></el-rate>
          </el-form-item>
          <el-form-item label="攻击">
            <!-- 多层级的数据要保证上一层存在 -->
            <el-rate :max="9" show-score style="margin-top: .6rem;" v-model="model.scores.attack"></el-rate>
          </el-form-item>
          <el-form-item label="生存">
            <!-- 多层级的数据要保证上一层存在 -->
            <el-rate :max="9" show-score style="margin-top: .6rem;" v-model="model.scores.survive"></el-rate>
          </el-form-item>
          <el-form-item label="顺风出装">
            <el-select v-model="model.items1" multiple>
              <el-option v-for="item of items" :key="item._id"
                :label="item.name"
                :value="item._id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="逆风出装">
            <el-select v-model="model.items2" multiple>
              <el-option v-for="item of items" :key="item._id"
                :label="item.name"
                :value="item._id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="使用技巧">
            <el-input type="textarea" v-model="model.usageTips"></el-input>
          </el-form-item>
          <el-form-item label="对抗技巧">
            <el-input type="textarea" v-model="model.battleTips"></el-input>
          </el-form-item>
          <el-form-item label="团战思路">
            <el-input type="textarea" v-model="model.teamTips"></el-input>
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="技能" name="skills">
          <el-button type="primary" size="small" @click="model.skills.push({})"><i class="el-icon-plus"></i> 添加技能</el-button>
          <el-row type="flex" style="flex-wrap: wrap;">
            <el-col :md="12" v-for="(item, index) in model.skills" :key="index">
              <el-form-item label="名称">
                <el-input v-model="item.name"></el-input>
              </el-form-item>
              <el-form-item label="图标">
                <el-upload
                  class="avatar-uploader"
                  :action="uploadUrl"
                  :show-file-list="false"
                  :headers="getAuthHeaders()"
                  :on-success="res => { $set(item, 'icon', res.url) }">
                  <img v-if="item.icon" :src="item.icon" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
              <el-form-item label="冷却值">
                <el-input v-model="item.delay"></el-input>
              </el-form-item>
              <el-form-item label="消耗">
                <el-input v-model="item.cost"></el-input>
              </el-form-item>
              <el-form-item label="描述">
                <el-input type="textarea" v-model="item.description"></el-input>
              </el-form-item>
              <el-form-item label="小提示">
                <el-input type="textarea" v-model="item.tips"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button size="small" type="danger" @click="model.skills.splice(index, 1)">删除</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="最佳搭档" name="partners">
          <el-button type="primary" size="small" @click="model.partners.push({})"><i class="el-icon-plus"></i> 添加英雄</el-button>
          <el-row type="flex" style="flex-wrap: wrap;">
            <el-col :md="12" v-for="(item, index) in model.partners" :key="index">
              <el-form-item label="选择英雄">
                <el-select v-model="item.hero" filterable>
                  <el-option
                    v-for="hero in heroes"
                    :key="hero._id"
                    :label="hero.name"
                    :value="hero._id"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="描述">
                <el-input type="textarea" v-model="item.description"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button size="small" type="danger" @click="model.partners.splice(index, 1)">删除</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
      <el-form-item label="" style="margin-top: 1rem;">
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
  name: 'HeroEdit',
  data () {
    return {
      model: {
        name: '',
        avatar: '',
        title: '',
        banner: '',
        scores: {
          diffcult: 0
        },
        skills: [],
        partners: []
      },
      categories: [],
      items: [],
      heroes: []
    }
  },
  created () {
    this.fetchItems()
    this.fetchCategories()
    this.fetchHeroes()
    this.id && this.fetch()
  },
  methods: {
    async save () {
      // if (this.model.name === '') {
      //   this.$message({
      //     type: 'warning',
      //     message: '请输入名称'
      //   })
      //   return
      // }
      if (this.id) {
        await this.$http.put(`/rest/heroes/${this.id}`, this.model)
      } else {
        await this.$http.post('/rest/heroes', this.model)
      }
      this.$router.push('/heroes/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    async fetch () {
      const res = await this.$http.get(`/rest/heroes/${this.id}`)
      // 保证不存在的字段不会替换掉初始数据
      this.model = Object.assign({}, this.model, res.data)
    },
    async fetchCategories () {
      const res = await this.$http.get(`/rest/categories`)
      this.categories = res.data || []
    },
    async fetchItems () {
      const res = await this.$http.get(`/rest/items`)
      this.items = res.data || []
    },
    // 获取英雄列表
    async fetchHeroes() {
      const res = await this.$http.get('/rest/heroes')
      if (res.status == 200) {
        this.heroes = res.data || []
      }
    }
  }
}
</script>
