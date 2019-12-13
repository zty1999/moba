<template>
  <div class="main">
    <div class="topbar bg-black px-3 d-flex ai-center">
      <img src="@/assets/logo.png" alt="" height="30">
      <div class="px-3 flex-1">
        <h1 class="text-white fs-sm">王者荣耀</h1>
        <p class="text-grey-1 fs-xxs">团队成就更多</p>
      </div>
      <button type="button" class="btn bg-primary">立即下载</button>
    </div>   
    <nav class="nav nav-inverse jc-around  text-white bg-primary  pt-3 pb-2 fs-sm" >
      <div class="nav-item active">
        <router-link class="nav-link" tag='div' to='/'>首页</router-link>
      </div>
      <div class="nav-item">
        <router-link class="nav-link" tag='div' to='/strategy'>攻略中心</router-link>
      </div>
      <div class="nav-item">
        <router-link class="nav-link" tag='div' to='/match'>赛事中心</router-link>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>

export default {
  

}
</script>
<style lang="scss" scoped>
.topbar {
  position: sticky;//新属性兼容有问题
  top: 0;
  z-index: 999;
  height: 45px;
}
</style>