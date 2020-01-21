<template>
  <div class="card p-3 bg-white mt-3">
    <div class="card-header flex-row ai-center"
      :class="{'border-bottom': !plain, 'pb-3': !plain}">
      <i :class="`sprite sprite-${icon}`"></i>
      <strong class="fs-xl flex-1 px-2">{{title}}</strong>
      <i v-if="!plain" class="sprite sprite-more"></i>
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
    },
    plain: {
      type: Boolean,
      default: false
    }
  }
}
</script>
