<template>
  <el-container style="height: 100vh">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu router   default-active="$route.path">
        <!-- //添加router后点击会跳转到index指定的路 :default-openeds="['3']" :default-openeds默认展开的  unique-opened每次只展开一个   -->
        <el-menu-item index="/">
            <i class="el-icon-s-home"></i>首页
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-menu"></i>内容管理
          </template>
            <el-submenu index="1-1">
              <template slot="title">物品管理</template>
              <el-menu-item index="/goods/create">新建物品</el-menu-item>
              <el-menu-item index="/goods/list">物品列表</el-menu-item>
            </el-submenu>
          <el-submenu index="1.2">
            <template slot="title">英雄管理</template>
            <el-menu-item index="/heroes/create">新建英雄</el-menu-item>
            <el-menu-item index="/heroes/list">英雄列表</el-menu-item>
          </el-submenu>
          <el-submenu index="1.3">
            <template slot="title">文章管理</template>
            <el-menu-item index="/articles/create">新建文章</el-menu-item>
            <el-menu-item index="/articles/list">文章列表</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-bangzhu"></i>运营管理
          </template>
          <el-submenu index="2.1">
            <template slot="title">广告位管理</template>
            <el-menu-item index="/ads/create">新建广告位</el-menu-item>
            <el-menu-item index="/ads/list">广告位列表</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-s-operation"></i>系统管理
          </template>
          <el-submenu index="3.1">
            <template slot="title">分类</template>
            <el-menu-item index="/category/create">新建分类</el-menu-item>
            <el-menu-item index="/category/list">分类列表</el-menu-item>
          </el-submenu>
          <el-submenu index="3.2">
            <template slot="title">管理员</template>
            <el-menu-item index="/admin_users/create">新建管理员</el-menu-item>
            <el-menu-item index="/admin_users/list">管理员列表</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown >
          <span class="el-dropdown-link">{{name}}</span>
          <el-dropdown-menu  slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item >退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main>
        <router-view :key="$route.path">
          <!-- :key以路由区分界面解决编辑页面跳转到新建页面后数据仍保留的bug -->
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<style lang="scss">
.el-container {
  padding: 0;
}
.el-header {
  background-color:  rgb(238, 241, 246);
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
.el-dropdown-link {
    cursor: pointer;
    font-size: 20px;
    /* color: #409EFF; */
  }
  // .exit {
  //   background-color:  rgb(238, 241, 246);
  //   border: none;
  //   font-size: 30px;
  //   padding-top: 0;
  //   padding-bottom: 0;
  //   line-height: 60px;
  //   color: #eee;
  //   &:hover {
  //     background-color: #b3c0d1;
  //     border: none;
  //     color: #3f3b3b;
  //     border-radius: 0;
  //   }
  // }
</style>

<script>
export default {
  data() {
    return {
      name: 'admin'
      // tableData: Array(20).fill(item)
    };
  },
  created() {
    
    
  },
  mounted() {
    // this.$bus.$on('login', (model) => {

    //    this.name.setData = model.username
    //   window.console.log(model.username)
    //   window.console.log(this.name)
    // })
  },
  // beforeDestroy() {
  //     this.$bus.$off('login');
  // },
  methods: {
  
  }
};
</script>