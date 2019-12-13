<template>
      <m-card :icon="icon" :title="title">
      <div class="nav jc-between pb-3">
        <div class="nav-item" :class="{active:active === i}" 
          v-for="(category,i) in categories" :key="i"
          @click="$refs.list.swiper.slideTo(i)">
          <div class="nav-link">{{category.name}}</div>
        </div>
      </div>
      <swiper ref="list" :options="{autoHeight: true}" @slide-change="() => active = $refs.list.swiper.realIndex">
        <!-- authHeight swiper组件中的高度自适应属性
          @slide-change="() => active = $refs.list.swiper.realIndex"  swiper组件的事件 表示把当前swiper组件真实的index索引值赋值给active -->
        <swiper-slide 
        v-for="(category,i) in categories" :key="i">
          <slot name="items" :category="category"></slot>
        </swiper-slide>
      </swiper>
    </m-card>
</template>
<script>
export default {
  props: {
    title: {type:String, require: true},
    icon: {type:String, require: true},
    categories: {type:Array, require: true}
  },
  data() {
    return {
      active: 0,
    }
  }
}
</script>
<style lang="scss" scoped>
</style>