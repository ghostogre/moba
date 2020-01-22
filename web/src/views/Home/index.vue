<template>
  <div>
    <swiper :options="swiperOtions">
      <swiper-slide>
        <img class="w-100" src="../../assets/images/a1b8a8d2b528dd795684243451abadee.jpeg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../../assets/images/fa6ee0151aa1724cb6f90959c55f218e.jpeg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../../assets/images/51d934c4f56b17de4f0e4c9c5125d539.jpeg" alt="">
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 pb-1" slot="pagination"></div>
    </swiper>
    <!-- end of swiper -->
    <div class="nav-icons bg-white mt-3 text-center pt-3 text-grey-1">
      <ul class="flex-row flex-wrap ai-center">
        <li class="nav-item mb-3" v-for="item in guides" :key="item.iconName">
          <i :class="['sprite', 'sprite-' + item.iconName]"></i>
          <div class="py-2">{{item.title}}</div>
        </li>
      </ul>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-around mr-1"></i>
        <span>收起</span>
      </div>
    </div>
    <!-- end of icons -->

    <m-list-card title="新闻资讯" icon="menu" :categories="newsCats">
      <template #items="{ category }">
        <ul>
          <router-link
            v-for="(item, i) in category.newsList"
            :key="i"
            class="py-2 fs-lg flex-row"
            tag="li"
            :to="{ name: 'articles', params: {id: item._id} }">
            <span class="text-info">[{{item.categoryName}}]</span>
            <span class="px-2">|</span>
            <span class="flex-1 text-dark-1 text-ellipsis pr-2">{{item.title}}</span>
            <span class="text-dark fs-sm">{{item.createdAt | date}}</span>
          </router-link>
        </ul>
      </template>
    </m-list-card>

    <m-list-card title="英雄列表" icon="hero" :categories="heroCats">
      <template #items="{ category }">
        <ul class="flex-row flex-wrap" style="margin: 0 -0.5rem;">
          <router-link
            tag="li"
            v-for="(item, i) in category.heroList" :key="i"
            :to="{ name: 'hero', params: { id: item._id } }"
            style="width: 20%;"
            class="p-2 text-center">
            <img :src="item.avatar" class="w-100" alt="">
            <div>{{item.name}}</div>
          </router-link>
        </ul>
      </template>
    </m-list-card>
    <!-- <m-card title="精彩视频" icon="video"></m-card>
    <m-card title="图文攻略" icon="article"></m-card> -->
  </div>
</template>

<script>
import moment from 'moment' // dayjs
export default {
  data () {
    return {
      swiperOtions: {
        pagination: {
          el: '.swiper-pagination'
        }
      },
      // 导航
      guides: [
        {
          title: '爆料站',
          iconName: 'news'
        },
        {
          title: '故事站',
          iconName: 'story'
        },
        {
          title: '周边商场',
          iconName: 'store'
        },
        {
          title: '体验服',
          iconName: 'beta'
        },
        {
          title: '新人专区',
          iconName: 'xrzq'
        },
        {
          title: '荣耀·传承',
          iconName: 'whz'
        },
        {
          title: '模拟战资料库',
          iconName: 'trz'
        },
        {
          title: '王者营地',
          iconName: 'wzyd'
        },
        {
          title: '公众号',
          iconName: 'wx'
        },
        {
          title: '版本介绍',
          iconName: 'version'
        }
      ],
      newsCats: [],
      heroCats: []
    }
  },
  methods: {
    async fetchNewsList () {
      const res = await this.$http.get('/news/list')
      this.newsCats = res.data
    },
    async fetchHeroList () {
      const res = await this.$http.get('/heroes/list')
      this.heroCats = res.data
    }
  },
  created() {
    this.fetchNewsList()
    this.fetchHeroList()
  },
  filters: {
    date(val) {
      return moment(val).format('MM/DD')
    }
  }
}
</script>

<style lang="scss">
  @import '../../assets/css/variables';
  .pagination-home {
    .swiper-pagination-bullet {
      opacity: 1;
      border-radius: .153846rem /* 2/13 */;
      background: map-get($map: $colors, $key: 'white');
      &.swiper-pagination-bullet-active {
        background: map-get($map: $colors, $key: 'info');
      }
    }
  }

  .nav-icons {
    border-top: 1px solid $border-color;
    border-bottom: 1px solid $border-color;
    .nav-item {
      width: 25%;
      border-left: 1px solid $border-color;
      &:nth-child(4n + 1) {
        border-color: transparent;
      }
    }
  }

  .sprite-version {
    background: url(../../assets/images/version-icon.png) no-repeat 0 0;
    background-size: 1.538462rem /* 20/13 */;
    width: 1.615385rem /* 21/13 */;
    height: 1.846154rem /* 24/13 */;
  }

</style>
