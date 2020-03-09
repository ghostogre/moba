<template>
  <m-card :title="title" icon="menu">
    <ul class="nav flex-row jc-between">
      <li
        v-for="(category, index) in categories"
        :key="index" class="nav-item"
        :class="{'active': activeIndex === index}"
        @click="$refs.list.swiper.slideTo(index)">
        <div class="nav-link">{{category.name}}</div>
      </li>
    </ul>
    <div class="pt-3" style="box-sizing: border-box;">
      <swiper
        ref="list"
        :options="{ autoHeight: true }"
        @slide-change="() => activeIndex = $refs.list.swiper.realIndex">
        <swiper-slide v-for="(category, i) in categories" :key="i">
          <slot name="items" :category="category"></slot>
        </swiper-slide>
      </swiper>
    </div>
  </m-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    categories: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      activeIndex: 0
    }
  }
}
</script>
