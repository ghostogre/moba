<template>
  <div class="slot" :style="{ backgroundImage: `url(${bg})` }">
    <div class="slot-list py-1 px-3 flex-row">
      <ul class="slot-list__line flex-1 mr-1">
        <li class="slot-item"><img src="" alt=""></li>
      </ul>
      <ul class="slot-list__line flex-1 mr-1">
        <li class="slot-item"><img src="" alt=""></li>
      </ul>
      <ul class="slot-list__line flex-1">
        <li class="slot-item"><img src="" alt=""></li>
      </ul>
    </div>
    <a class="btn bg-primary" href="javascript:;">{{btnText}}</a>
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
      width: 90%;
      border-radius: .384615rem /* 5/13 */;
      border: 1px solid white;
      height: 4.615385rem /* 60/13 */;
      position: absolute;
      top: 6.153846rem /* 80/13 */;
      left: 50%;
      transform: translateX(-50%);
      overflow: hidden;
      box-sizing: border-box;
      &__line {
        float: left;
        height: 100%;
        box-sizing: border-box;
      }
    }

    &-item {
      height: 100%;
    }
  }
</style>
