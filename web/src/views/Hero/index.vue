<template>
  <div class="page-hero" v-if="model">
    <div class="topbar bg-black py-2 px-3 flex-row ai-center">
      <img src="../../assets/logo.png" height="30" alt="">
      <div class="px-2 flex-1">
        <div class="text-white">王者荣耀</div>
        <span class="ml-2 text-white">攻略站</span>
      </div>
      <router-link class="text-white" to="/" tag="div">更多英雄 &gt;</router-link>
    </div>
    <div class="top" :style="{backgroundImage: `url(${model.banner})`}">
      <div class="info text-white p-3 flex-column h-100 jc-end">
        <div class="fs-sm">{{model.title}}</div>
        <h2 class="my-2">{{model.name}}</h2>
        <div class="fs-sm">{{model.categories.map(v => v.name).join('/')}}</div>
        <div class="flex-row jc-between ai-center">
          <div class="scores flex-row ai-center pt-2" v-if="model.scores">
            <span>难度</span>
            <span class="badge bg-primary">{{model.scores.diffcult}}</span>
            <span>技能</span>
            <span class="badge bg-blue-1">{{model.scores.skills}}</span>
            <span>攻击</span>
            <span class="badge bg-danger">{{model.scores.attack}}</span>
            <span>生存</span>
            <span class="badge bg-dark">{{model.scores.survive}}</span>
          </div>
          <router-link tag="span" class="text-grey fs-sm" to="/">皮肤: 2 &gt;</router-link>
        </div>
      </div>
    </div>
    <!-- end of top -->
    <div>
      <div class="px-3 bg-white">
        <div class="nav flex-row py-2 jc-around border-bottom pt-3 pb-2">
          <div class="nav-item active">
            <div class="nav-link">英雄初识</div>
          </div>
          <div class="nav-item">
            <div class="nav-link">进阶攻略</div>
          </div>
        </div>
      </div>
      <swiper>
        <swiper-slide>
          <div>
            <div>
              <div class="p-3 bg-white border-bottom">
                <div class="flex-row">
                  <router-link tag="button" to="/" class="btn btn-lg flex-1">
                    <i class="iconfont icon-video"></i>
                    英雄介绍视频
                  </router-link>
                  <router-link tag="button" to="/" class="btn btn-lg flex-1 ml-2">
                    <i class="iconfont icon-image"></i>
                    一图说英雄
                  </router-link>
                </div>

                <!-- skills -->
                <div class="skills bg-white mt-4">
                  <div class="flex-row jc-around">
                    <img
                      v-for="(item, i) in model.skills"
                      :key="item.name"
                      class="icon"
                      :class="{ 'active': currentSkillIndex === i }"
                      @click="currentSkillIndex = i"
                      v-lazy="item.icon"
                      alt="">
                  </div>
                  <div v-if="currentSkill">
                    <div class="flex-row py-4">
                      <h3 class="m-0">{{currentSkill.name}}</h3>
                      <span class="text-grey-1 ml-4">
                        冷却值：{{currentSkill.delay}} 消耗：{{currentSkill.cost}}
                      </span>
                    </div>
                    <p>{{currentSkill.description}}</p>
                    <div class="border-bottom"></div>
                    <p class="text-grey-1 fs-sm">小提示：{{currentSkill.tips}}</p>
                  </div>
                </div>
              </div>
              <m-card plain icon="menu" title="出装推荐" class="hero-items">
                <div class="fs-xl">顺风出装</div>
                <div class="flex-row jc-around text-center mt-3">
                  <div v-for="item in model.items1" :key="item.name" >
                    <img class="icon" v-lazy="item.icon" :key="item.icon" alt="">
                    <div class="fs-xs">{{item.name}}</div>
                  </div>
                </div>
                <div class="border-bottom mt-3"></div>
                <div class="fs-xl mt-3">逆风出装</div>
                <div class="flex-row jc-around text-center mt-3">
                  <div v-for="item in model.items2" :key="item.name" >
                    <img class="icon" v-lazy="item.icon" :key="item.icon" alt="">
                    <div class="fs-xs">{{item.name}}</div>
                  </div>
                </div>
              </m-card>
              <m-card plain icon="menu" title="使用技巧">
                <p class="m-0">{{model.usageTips}}</p>
              </m-card>
              <m-card plain icon="menu" title="对抗技巧">
                <p class="m-0">{{model.battleTips}}</p>
              </m-card>
              <m-card plain icon="menu" title="团战思路">
                <p class="m-0">{{model.teamTips}}</p>
              </m-card>
              <m-card plain icon="menu" title="英雄关系">
                <dl>
                  <dt class="fs-xl">最佳搭档</dt>
                  <dd v-for="item in model.partners" :key="item._id" class="flex-row pt-3">
                    <img v-lazy="item.hero.avatar" :key="item._id" height="50" alt="">
                    <p class="flex-1 my-0 ml-3">{{item.description}}</p>
                  </dd>
                </dl>
              </m-card>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div></div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      required: true
    }
  },
  data () {
    return {
      model: null,
      currentSkillIndex: 0
    }
  },
  computed: {
    currentSkill () {
      if (this.model) {
        return this.model.skills[this.currentSkillIndex]
      }
      return null
    }
  },
  created() {
    if (this.id) {
      this.fetch()
    }
  },
  methods: {
    async fetch () {
      const res = await this.$http.get(`/heroes/${this.id}`)
      this.model = res.data
    } 
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/variables.scss';
.page-hero {
  .top {
    height: 50vw;
    background: #fff no-repeat top center;
    background-size: auto 100%;
  }
  .info {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    .scores {
      .badge {
        margin: 0 0.25rem;
        display: inline-block;
        width: 1rem;
        height: 1rem;
        text-align: center;
        line-height: .9rem;
        border-radius: 50%;
        font-size: .75rem;
        border: 1px solid rgba($color: #fff, $alpha: .2);
      }
    }
  }

  .skills {
    img.icon {
      width: 5.385rem /* 70/13 */;
      height: 5.385rem /* 70/13 */;
      border: .231rem /* 3/13 */ solid map-get($map: $colors, $key: 'white');
      &.active {
        border-color: map-get($map: $colors, $key: 'primary');
      }
      border-radius: 50%;
    }
  }

  .hero-items {
    img.icon {
      width: 45px;
      height: 45px;
      border-radius: 50%;
    }
  }
}
</style>
