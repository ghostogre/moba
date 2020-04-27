<template>
  <main class="slot-wrapper text-center flex-column ai-center">
    <h3>点击开始，查看你的本命英雄</h3>
    <section class="slot-machine">
      <slot-machine
        :data="heroes"
        imgLabel="avatar"
        :matchIndex="matchIndex"
        @start="requestResult"
        bg="//game.gtimg.cn/images/yxzj/cp/a20161115tyf/flash_bg.jpg"
        ></slot-machine>
    </section>
  </main>
</template>

<script>
import SlotMachine from './components/Slot'
export default {
  name: 'slots',
  components: {
    SlotMachine
  },
  data () {
    return {
      heroes: [],
      matchIndex: -1
    }
  },
  created() {
    this.getHeroes()
  },
  methods: {
    async getHeroes () {
      const res = await this.$http.get('/heroes/list')
      this.heroes = res.data ? res.data[0].heroList: []
    },
    requestResult () {
      setTimeout(() => {
        // 伪随机
        const index = Math.floor((this.heroes.length - 1) * Math.random())
        this.matchIndex = index
      }, 3000)
    }
  }
}
</script>

<style lang="scss">
  .slot-machine {
    width: 80%;
  }
</style>
