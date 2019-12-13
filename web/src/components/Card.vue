<template>
  <div class="card bg-white px-3 mt-3">
			<div class="card-header d-flex ai-center py-3 my-3 ">
				<i class="iconfont mr-2" :class="`${icon}`"></i>
				<span class="fs-lg flex-grow-1">{{title}}</span>
				<i class="iconfont icon-menu2 fs-xxl"></i>
			</div>
      <div class="card-body">
				<slot></slot>
			</div>
	</div>
</template>
<script>
export default {
  props: {
    title: {type:String, require: true},
    icon: {type:String, require: true}
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/style.scss";
.card {
  border-bottom: 1px solid $border-color;
  .card-header {
    border-bottom: 1px solid $border-color;
  }
}
</style>
