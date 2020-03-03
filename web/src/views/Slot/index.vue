<template>
  <main class="slot-wrapper text-center flex-column ai-center">
    <h3>点击开始，查看你的本命英雄</h3>
    <section class="slot-machine">
      <slot-machine
        :data="heroes"
        imgLabel="avatar"
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
      heroes: []
    }
  },
  created() {
    this.getHeroes()
  },
  methods: {
    async getHeroes () {
      const res = await this.$http.get('/heroes/list')
      this.heroes = res.data ? res.data[0].heroList: []
    }
  }
}
</script>

<style lang="scss">
  .slot-machine {
    width: 80%;
  }
</style>
