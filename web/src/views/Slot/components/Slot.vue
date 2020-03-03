<template>
  <div class="slot" :style="{ backgroundImage: `url(${bg})` }">
    <div class="slot-list clearfix px-3 py-2">
      <div class="slot-listWrapper flex-row">
        <ul v-for="i in 3" class="slot-list__line flex-1" :class="{'mr-1': i !== 3}" :key="i">
          <li class="slot-item bg-light text-center py-1" v-for="item in data" :key="item._id"
            ><img :src="item[imgLabel]" alt=""></li>
        </ul>
      </div>
    </div>
    <button class="btn start-btn text-white bg-primary" @click="$emit('start')">{{btnText}}</button>
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
