<template>
  <div class="main">
    <div class="topbar bg-black2 px-3 d-flex ai-center">
      <a href="/">
        <img src="@/assets/logo.png" alt height="30" />
      </a>
      <div class="px-3 flex-1 d-flex flex-column">
        <span class="text-white fs-sm">王者荣耀</span>
        <span class="text-grey-1 fs-xxs">团队成就更多</span>
      </div>
      <button type="button" class="btn bg-primary">立即下载</button>
    </div>
    <tab-control class="tab-control"  :tab="tab"  ></tab-control>
    <!--@tabClick="tabClick"  ref="tabControl"-->
    <router-view ></router-view>
    <!-- :key="$route.path" -->
  </div>
</template>
<script>
import TabControl from "@/components/TabControl";

export default {
  components: {
    TabControl
  },
  data() {
    return {
      //头部导航栏数据
      tab: [
        { title: "首页", path: "/" },
        { title: "攻略中心", path: "/strategy" },
        { title: "赛事中心", path: "/match" }
      ],

    };
  },
  mounted() {
  },
  methods: {
   
    //点击导航栏跳转路由
    // tabClick(index) {
    //   switch (index) {
    //     case 0:
    //       this.$router.push("/");
    //       break;
    //     case 1:
    //       this.$router.push("/strategy");
    //       break;
    //     case 2:
    //       this.$router.push("/match");
    //       break;
    //   }
    //   this.$refs.tabControl.currentIndex = index;
    // }
  }
};
</script>
<style lang="scss" scoped>
.topbar {
  position: sticky; //新属性兼容有问题
  top: 0;
  z-index: 999;
  height: 45px;
}
</style>