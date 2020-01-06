<template>
  <div class="home-page">
    <!-- 轮播图 -->
    <home-swiper></home-swiper>

    <!-- 导航菜单 -->
    <div class="nav-icons bg-white  text-center pt-3 mb-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3 pt-3"  v-for="item in navMenu" :key="item.text">
          <a class="nav-item-link" :href="item.url">
            <i :class="item.iconClass" ></i>
            <div >{{item.text}}</div>
          </a>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mx-1"></i>
        <span>收起</span>
      </div>
    </div>

    <!-- 新闻资讯 分类列表 -->
    <m-list-card icon="icon-cc-menu-circle" title="新闻资讯" :categories="newsCats">
      <template #items="{category}">
        <!-- 这里的category是m-list-card组件里定义的循环变量
        #items指定要写的内容，取里面绑定的category-->
        <router-link tag="div" :to="`/articles/${news._id}`" 
          class="py-2 fs-lg d-flex" 
          v-for="(news,i) in category.newsList" :key="i">
          <span class="text-info">[{{news.categoryName}}]</span>
          <span class="px-2">|</span>
          <span class="flex-1 text-dark-1 text-ellipsis pr-2">{{news.title}}</span>
          <span class="text-grey-1 fs=sm">{{news.createdAt | date}}</span>
        </router-link>
      </template>
    </m-list-card>
    <!-- 英雄列表 -->
    <m-list-card icon="icon-card-hero" title="英雄列表" :categories="heroCats">
      <template #items="{category}">
        <!-- 这里的category是m-list-card组件里定义的循环变量
        #items指定要写的内容，取里面绑定的category-->
        <div class="hero-items d-flex flex-wrap">
          <router-link tag="div" :to="`/heroes/${hero._id}`" class="p-2 text-center hero-item" v-for="(hero,i) in category.heroList" :key="i">
            <img :src="hero.avatar" class="w-100"/>
            <div class="">{{hero.name}}</div>
          </router-link>
        </div>
      </template>
    </m-list-card>
    <!-- 视频 -->
		<m-list-card icon="icon-card-hero" title="精彩视频" :categories="heroCats">
    </m-list-card>
  </div>
</template>

<script>
import HomeSwiper from "@/components/HomeSwiper";
import dayjs from "dayjs";
export default {
  components: {
    HomeSwiper
  },
  filters: {
    date(val) {
      return dayjs(val).format("MM/DD");
      //											月份/日期
    }
  },
  data() {
    return {
      navMenu: [
        {iconClass: 'sprite sprite-news',text: '爆料站',url: 'https://pvp.qq.com/m/m201706/coming/index.htm'},
        {iconClass: 'sprite sprite-story',text: '故事站',url: 'https://pvp.qq.com/m/m201706/coming/index.htm'},
        {iconClass: 'sprite sprite-mall',text: '周边商城',url: 'https://pvp.qq.com/m/m201706/coming/index.htm'},
        {iconClass: 'sprite sprite-dnf',text: '体验服',url: 'https://pvp.qq.com/m/m201706/coming/index.htm'},
        {iconClass: 'sprite sprite-novice',text: '新人专区',url: 'https://pvp.qq.com/m/m201706/coming/index.htm'},
        {iconClass: 'sprite sprite-inherit',text: '荣耀·传承',url: 'https://pvp.qq.com/m/m201706/coming/index.htm'},
        {iconClass: 'sprite sprite-sciamachy',text: '模拟站资料库',url: 'https://pvp.qq.com/m/m201706/coming/index.htm'},
        {iconClass: 'sprite sprite-campsite',text: '王者营地',url: 'https://pvp.qq.com/m/m201706/coming/index.htm'},
        {iconClass: 'sprite sprite-official-account',text: '公众号',url: 'https://pvp.qq.com/m/m201706/coming/index.htm'},
        {iconClass: 'sprite sprite-version',text: '版本介绍',url: 'https://pvp.qq.com/m/m201706/coming/index.htm'},
        {iconClass: 'sprite sprite-djhj',text: '对局环境',url: 'https://pvp.qq.com/m/m201706/coming/index.htm'},
        {iconClass: 'sprite sprite-wxwzt',text: '无限王者团',url: 'https://pvp.qq.com/m/m201706/coming/index.htm'},
        {iconClass: 'sprite sprite-cyhdy',text: '创意互动营',url: 'https://pvp.qq.com/m/m201706/coming/index.htm'}
      ],

      newsCats: [],
      heroCats: []
    };
  },
  computed: {},
  created() {
    this.fetchNewsCats();
    this.fetchHeroCats();
  },
  mounted() {},

  methods: {
    async fetchNewsCats() {
      const res = await this.$request.get("news/list");
      this.newsCats = res.data;
      window.console.log(res.data);
    },
    async fetchHeroCats() {
      const res = await this.$request.get("heroes/list");
      this.heroCats = res.data;
      window.console.log(res.data);
    },
    // MenuClick() {
    // }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/style.scss";
.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-right: 1px solid $border-color;
    &:nth-child(4n) {
      //第几个不加右边框
      border-right: none;
    }
    .nav-item-link {
      display: block;

    }
  }
}
.hero-items  {
	margin: 0 -0.5rem;
	.hero-item {
		width: 20%;
		img {
			border-radius: 10px;
		}
	}
}
</style>