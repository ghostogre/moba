<template>
  <div class="skeleton">
    <div class="topbar"></div>
    <div class="swiper"></div>
  </div>
</template>

<script>
export default {
  name: 'skeleton' // 骨架屏
}
</script>

<style lang="css">
  .topbar {
    height: 50px;
    background-color: #999999;
  }
  .swiper {
    height: 100px;
    background-color: #f9f9f9;
  }
</style>
