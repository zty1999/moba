<template>
  <div class="tab-control bg-primary text-white">
    <div
      class="tab-control-item"
      :class="{active: currentIndex == index}"
      v-for="(item,index) in tab"
      :key="index"
      @click="itemClick(index)"
    >
      <span>{{item.title}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabControl",
  props: {
    tab: {
      type: Array,
      default() {
        return [];
      }
    },
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  // mounted() {
  //   // this.currentIndex = sessionStorage.getItem("currentIndex"); //页面刷新后，选中状态不消失
  // },
  mounted(){
    // this.$router.push(this.tab[index].path);
          // this.currentIndex = this.$router.path
        },
created(){
// this.$router.path = this.currentIndex
        },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
this.$router.push(this.tab[index].path);
// window.console.log(path)
// this.$router.push({path:'/' + path})
      // sessionStorage.setItem("currentIndex", this.currentIndex); //选中状态存入sessionStorage
      // this.$emit("tabClick", index);

    }
  }
};
</script>
<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  z-index: 99;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item span {
  padding: 6px;
}
.active {
  color: #fff;
}
.active span {
  border-bottom: 2px solid #fff;
}
</style>