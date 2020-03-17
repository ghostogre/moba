<template>
  <div>
    <canvas ref="activity"></canvas>
  </div>
</template>

<script>
export default {
  name: 'Activity',
  data () {
    return {
      ctx: null,
      imgArr: []
    }
  },
  methods: {
    // 加载图片
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
            arr.splice(i, i, {
              img: image, // 加载完的图片
              // 离屏缓存
              offScreenCanvas: this.createOffScreenCanvas(image)
            }) // 替换数组中的图片链接为图片地址
            if (count === len) {
              this.preloaded = true
              resolve()
            }
          }
          image.src = arr[i]
        }
      })
    },
    // 离屏canvas
    createOffScreenCanvas (image) {
      const ctx = this.ctx
      ctx.width = 30
      ctx.height = 30
      ctx.drawImage(
        image,
        0,
        0,
        ctx.width,
        ctx.height
      )
      return ctx
    },
    // 初始化canvas
    initCanvas () {
      const canvas = this.$refs.activity
      if (canvas.getContext) {
        this.ctx = canvas.getContext('2d')
        this.loadImg(this.imgArr)
      }
    }
  }
}
</script>