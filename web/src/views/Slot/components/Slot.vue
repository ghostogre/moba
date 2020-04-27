<template>
  <div class="slot" :style="{ backgroundImage: `url(${bg})` }">
    <div class="slot-list clearfix px-3 py-2">
      <div ref="slotWrapper" class="slot-listWrapper flex-row">
        <ul class="slot-list__line flex-1 mr-1" :style="{transform: `translateY(-${y1}px)`}">
          <li class="slot-item bg-light text-center py-1" v-for="(item, index) in scrollList" :key="item._id + index"
            ><img :src="item[imgLabel]" alt=""></li>
        </ul>
        <ul class="slot-list__line flex-1 mr-1" :style="{transform: `translateY(-${y2}px)`}">
          <li class="slot-item bg-light text-center py-1" v-for="(item, index) in scrollList" :key="item._id + index"
            ><img :src="item[imgLabel]" alt=""></li>
        </ul>
        <ul class="slot-list__line flex-1 mr-1" :style="{transform: `translateY(-${y3}px)`}">
          <li class="slot-item bg-light text-center py-1" v-for="(item, index) in scrollList" :key="item._id + index"
            ><img :src="item[imgLabel]" alt=""></li>
        </ul>
      </div>
    </div>
    <button class="btn start-btn text-white bg-primary" @click="begin">{{btnText}}</button>
  </div>
</template>

<script>
export default {
  name: 'slotMachine',
  props: {
    bg: {
      type: String
    },
    btnText: {
      type: String,
      default: '点击开始'
    },
    data: {
      type: Array,
      default () {
        return []
      }
    },
    // 图片字段
    imgLabel: {
      type: String,
      default: 'img'
    },
    // 三个滚动之间的延迟
    duration: {
      type: Number,
      default: 200
    },
    // 匹配结果的方法
    matchResult: {
      type: Function,
      default: () => {}
    }
  },
  data () {
    return {
      y1: 0,
      y2: 0,
      y3: 0,
      playDefaultCircle: 6, // 默认滚动圈数
      height: 0,
      resultIndex: -1,
      speed: 0.1,
      slowSpeed: 0.05,
      isRunning: false
    }
  },
  computed: {
    scrollList () {
      if (this.data.length >= 2) {
        return [...this.data, this.data[0]]
      } else if (this.data.length === 1) {
        return [this.data[0], this.data[0], this.data[0]]
      } else {
        return []
      }
    },
    scrollEndDistance () {
      if (this.resultIndex !== -1) {
        return this.resultIndex * this.height 
      }
      return this.scrollList.length * this.height
    }
  },
  mounted () {
    this.height = this.$refs.slotWrapper.offsetHeight
  },
  methods: {
    // 点击开始
    begin () {
      if (this.isRunning) {
        return
      }
      this.isRunning = true
      this.resultIndex = -1
      this.$emit('start')
      this.running()
    },
    // 开始滚动
    running () {
      this.scroll('y1') // 立即开始
      let timer2 = setTimeout(() => {
        this.scroll('y2')
        clearTimeout(timer2)
      }, this.duration)
      let timer3 = setTimeout(() => {
        this.scroll('y3')
        clearTimeout(timer3)
      }, this.duration * 1.5)
    },
    // 获取结果的index
    getResultIndex () {
      this.data.some((item, index) => {
        if (this.matchResult(item)) {
          this.resultIndex = index
          return true
        }
        return false
      })
    },
    // 滚动
    scroll (key) {
      let circleNumber = 0
      let lastComplete = true // 最后一圈是否跑完了
      let g = this.speed * this.height
      let slow = this.slowSpeed * this.height
      const func = () => {
        if ((circleNumber < this.playDefaultCircle) || (this.resultIndex === -1)) { // 保证返回之前和约定次数之前都会在滚动
          const next = this[key] + g
          if (next > (this.data.length * this.height)) { // 无限滚动的效果
            circleNumber++
            this[key] = next - (this.data.length * this.height)
          } else {
            this[key] = next
          }
          window.requestAnimationFrame(func)
        } else {
          // 保证让他多滚动一圈
          if (lastComplete) {
            this[key] += slow
            if (this[key] > (this.data.length * this.height)) { // 无限滚动的效果
              lastComplete = false
              this[key] = this[key] - (this.data.length * this.height)
            }
            window.requestAnimationFrame(func)
          } else if ((this[key] + slow) < this.scrollEndDistance) {
            this[key] += slow
            window.requestAnimationFrame(func)
          } else {
            this[key] = this.scrollEndDistance
            this.isRunning = false
          }
        }
      }
      window.requestAnimationFrame(func)
    }
  },
  watch: {
    matchResult (newVal) {
      if (newVal) {
        this.getResultIndex()
      }
    }
  }
}
</script>

<style lang="scss">
  .slot {
    width: 100%;
    height: 23.076923rem /* 300/13 */;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    &-list {
      width: 80%;
      height: 6.153846rem /* 80/13 */;
      position: absolute;
      top: 6.153846rem /* 80/13 */;
      left: 50%;
      transform: translateX(-50%);
      box-sizing: border-box;
      border: 1px solid white;
      border-radius: .461538rem /* 6/13 */;
      &__line {
        float: left;
        height: 100%;
        box-sizing: border-box;
      }
    }

    &-listWrapper {
      overflow: hidden;
      width: 100%;
      height: 100%;
      transition: all .05s ease-out;
    }

    &-item {
      width: 100%;
      height: 100%;
      img {
        height: 100%;
      }
    }

    .start-btn {
      width: 50%;
      height: 3.461538rem /* 45/13 */;
      position: absolute;
      bottom: 1.538462rem /* 20/13 */;
      left: 0;
      right: 0;
      margin: 0 auto;
    }
  }
</style>
