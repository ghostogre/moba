<template>
  <div
    :style="{
      backgroundSize: 'cover',
      backgroundImage: `url(${bgImg})`,
      height: `${scrollHeight}px`,
      width: `${scrollWidth}px`
    }">
    <!-- 背景图不会变化 -->
    <canvas
      class="canvas w-100"
      ref="activity"
      @touchstart="listenClick"
      :width="scrollWidth"
      :height="scrollHeight">
      <h5>当前浏览器版本不支持！</h5>
    </canvas>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
const offScreenCoin = [40, 50, 60] // 三种大小的金币
// let offScreenBg = null
export default {
  name: 'Activity',
  data () {
    return {
      ctx: null,
      bgImg: require('@/assets/images/bg.webp'),
      // 加载图片列表,base4图片需要使用Image加载
      imgs: [
        require('@/assets/images/coin.webp'),
        require('@/assets/images/plusone.webp')
      ],
      // 金币对象列表
      coinArr: [],
      // 动画针
      moveCoinAnimation: null,
      // 添加金币的定时器
      addCoinTimer: null,
      // 点击冒泡列表
      bubbleArr: [],
      preloaded: false, // 是否开始动画前的倒计时
      bubbleCanvas: null, // 气泡缓存
      coinCanvas: [] // 金币缓存
    }
  },
  computed: {
    ...mapGetters({
      'scrollHeight': 'APP/scrollHeight',
      'scrollWidth': 'APP/scrollWidth'
    })
  },
  mounted () {
    this.initCanvas()
    document.addEventListener('visibilitychange', this.visibility)
  },
  beforeDestroy () {
    document.removeEventListener('visibilitychange', this.visibility)
  },
  methods: {
    visibility () { // h5事件，监听页面是否可见
      let isHidden = document.hidden;
      if (isHidden) {
        //失去焦点
        clearInterval(this.addCoinTimer)
      } else {
        //未失去焦点
        this.createCoin()
      }
    },
    // 加载cdn图片
    loadImg (arr) {
      return new Promise(resolve => {
        let count = 0
        const len = arr.length
        for (let i = 0; i < len; i++) {
          // 创建图片对象
          const image = new Image()
          // 成功的回调
          image.onload = () => {
            count++
            arr.splice(i, 1, image) // 替换数组中的图片链接为图片地址
            if (count === len) {
              this.preloaded = true
              resolve()
            }
          }
          image.src = arr[i] // 必须放在最后否则会报错
        }
      })
    },

    // 离屏canvas
    // 不同的canvas元素过多的情况下最好不要使用离屏，不然太多缓存区还不如不使用离屏
    createOffScreenCanvas (image, width, height) {
      const offScreenCanvas = document.createElement('canvas') // new OffscreenCanvas(width, height)
      const ctx = offScreenCanvas.getContext('2d')
      offScreenCanvas.width = width
      offScreenCanvas.height = height
      ctx.drawImage(
        image,
        0,
        0,
        width,
        height
      )
      return offScreenCanvas
    },
    // 初始化canvas
    initCanvas () {
      const canvas = this.$refs.activity
      if (canvas.getContext) {
        this.ctx = canvas.getContext('2d')
        this.loadImg(this.imgs).then(() => {
          // 这里缓存是因为图片有缩放
          this.bubbleCanvas = this.createOffScreenCanvas(this.imgs[1], offScreenCoin[0], offScreenCoin[0])
          for (let i = 0, len = offScreenCoin.length; i < len; i++) {
            this.coinCanvas.push({
              size: offScreenCoin[i],
              offScreenCanvas: this.createOffScreenCanvas(this.imgs[0], offScreenCoin[i], offScreenCoin[i])
            })
          }
          this.start()
        })
      }
    },
    // 金币绘制
    drawCoins () {
      this.coinArr = this.coinArr.filter(coin => coin.y < this.scrollHeight) // 去除已经离开可视区域的金币
      this.coinArr.forEach((coin, index) => {
        const newCoin = {
          ...coin,
          y: coin.y + coin.speed
        }
        this.coinArr.splice(index, 1, newCoin)
        this.ctx.drawImage(
          coin.img,
          coin.x,
          coin.y
        )
      })
    },
    // 移动金币
    moveCoins () {
      // 切换TAB页面之后，主进程停止,但是 setInterval 还在执行,任务不停的加入执行栈, 返回tab时就会执行
      // 每一帧都要先清空
      window.cancelAnimationFrame(this.moveCoinAnimation)
      this.ctx.clearRect(0, 0, this.scrollWidth, this.scrollHeight)
      // 绘制金币
      this.drawCoins()
      // 不断的绘制形成动画
      this.moveCoinAnimation = window.requestAnimationFrame(this.moveCoins)
    },
    // 增加金币
    createCoin () {
      // 随机生成1-3个金币
      const sum = Math.floor((Math.random() * 10) % 3 + 1)
      const arr = []
      let x = 10 // 10保证不贴边
      // let rmax = Math.floor((this.scrollWidth - 20) / sum)
      for (let i = 0; i < sum; i++) {
        const {size, offScreenCanvas} = this.randomSize() // 随机的宽度
        x += this.calcPosition(x, size, sum - i - 1)
        let speed = Math.random * 20
        // 创建新的金币对象
        const newCoin = {
          x,
          y: -size,
          size,
          img: offScreenCanvas,
          speed: speed > 5 ? speed: 5 // 保证速度不会过慢
        }
        x += size
        arr.push(newCoin)
      }
      this.coinArr = [...this.coinArr, ...arr] // 一次性的加入数组不要一个一个push
      // 每隔一段时间添加一次
      this.addCoinTimer = setTimeout(() => {
        this.createCoin()
      }, 600)
    },
    // 计算位置
    calcPosition (start, size, other) {
      const maxSize = offScreenCoin[offScreenCoin.length - 1] + 10 // +10 防止金币紧贴
      return Math.floor((this.scrollWidth - size - start - maxSize * other) * Math.random())
    },
    // 随机获取宽度的离屏canvas
    randomSize () {
      return this.coinCanvas[Math.floor(Math.random() * 10 % 3)]
    },
    // 开始
    start () {
      this.createCoin() // 不断增加金币
      this.moveCoins()
      this.drawBubble()
    },
    // 判断是否位于某个金币中
    isIntersect (x, y, coin) {
      const dx = x - coin.x
      const dy = y - coin.y
      const withinX = dx > 0 && dx < coin.size
      const withinY = dy > 0 && dy < coin.size
      return withinX && withinY
    },
    // 手指点击符文
    listenClick (e) {
      const {clientX, clientY} = e.touches[0]
      // 点击中的金币
      const clickedCoins = []
      this.coinArr.forEach((coin, index) => {
        // 判断点击位置是否在金币内
        if (this.isIntersect(clientX, clientY, coin)) {
          clickedCoins.push({
            x: clientX,
            y: clientY,
            index // 记录索引
          })
        }
      })
      // 点击了重叠的金币，只要最后一个，一般来说重叠的后来的会在上面
      if (clickedCoins.length > 0) {
        this.count += 1
        const len = clickedCoins.length
        const bubble = {
          x: clickedCoins[len - 1].x,
          y: clickedCoins[len - 1].y,
          opacity: 1
        }
        this.bubbleArr.push(bubble)
        // 移除最后一个金币
        this.coinArr.splice(clickedCoins[len - 1].index, 1)
      }
    },
    // 绘制气泡
    drawBubble () {
      this.bubbleArr = this.bubbleArr.filter(bubble => bubble.opacity > 0) // 过滤消失的气泡
      this.bubbleArr.forEach((bubble, index) => {
        if (bubble.opacity > 0) {
          this.ctx.save()
          this.ctx.globalAlpha = bubble.opacity
          this.ctx.drawImage(this.bubbleCanvas, bubble.x, bubble.y)
          this.bubbleArr.splice(index, 1, {
            ...bubble,
            opacity: bubble.opacity - 0.02
          })
          this.ctx.restore()
        }
      })
      this.drawBubbleAnimation = window.requestAnimationFrame(this.drawBubble)
    }
  }
}
</script>

<style lang="scss">
  .canvas {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
</style>