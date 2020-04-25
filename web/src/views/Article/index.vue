<template>
  <div class="page-article" v-if="model">
    <div class="flex-row py-3 px-2 border-bottom">
      <div class="iconfont icon-back text-blue"></div>
      <strong class="flex-1 text-blue">{{model.title}}</strong>
      <div class="text-grey fs-sm">{{model.createdAt | formatDate}}</div>
    </div>
    <div v-html="model.content" class="px-3 article-body fs-lg"></div>
    <div class="px-3 py-3 border-top">
      <div class="flex-row ai-center">
        <i class="iconfont icon-article"></i>
        <strong class="text-blue ml-2 fs-lg">相关资讯</strong>
      </div>
      <div class="pt-2">
        <router-link v-for="item in model.related" :key="item._id" tag="div"
          class="py-2 mt-2"
          :to="{ name: 'articles', params: { id: item._id } }">
          {{item.title}}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  props: {
    id: {
      required: true
    }
  },
  data () {
    return {
      model: null
    }
  },
  created() {
    this.fetchArticle()
  },
  methods: {
    async fetchArticle () {
      const res = await this.$http.get(`/articles/${this.id}`)
      this.model = res.data
    }
  },
  watch: {
    id: 'fetchArticle'
  },
  filters: {
    formatDate (val) {
      return moment(val).format('YYYY-MM-DD')
    }
  }
}
</script>

<style lang="scss">
  .page-article {
    .icon-back {
      font-size: 1.692308rem /* 22/13 */;
    }
    .article-body {
      img {
        max-width: 100%;
        height: auto;
      }
      iframe {
        width: 100%;
        height: auto;
      }
    }
  }

</style>
