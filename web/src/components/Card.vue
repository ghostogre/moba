<template>
  <div class="card p-3 bg-white mt-3">
    <div class="card-header flex-row ai-center pb-3">
      <i :class="`sprite sprite-${icon}`"></i>
      <div class="fs-xl flex-1 px-2">{{title}}</div>
      <i class="sprite sprite-more"></i>
    </div>
    <div class="card-body pt-3">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
      required: true
    },
    icon: {
      type: String,
      default: '',
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/css/variables.scss';
  .card {
    &-header {
      border-bottom: 1px solid $border-color;
    }
  }
</style>
