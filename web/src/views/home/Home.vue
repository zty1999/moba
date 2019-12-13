<template>
  <div>
    <home-swiper></home-swiper>
    <div class="nav-icons bg-white mt-3 text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-items mb-3" v-for="n in 10" :key="n">
          <i class="sprite sprite-news mt-2"></i>
          <div class="pt-1 fs-sm">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mx-1"></i>
        <span>收起</span>
      </div>
    </div>
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
  // watch: {
  //   // id() {

  //   // }
  // },
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
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/style.scss";
.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-items {
    width: 25%;
    border-right: 1px solid $border-color;
    &:nth-child(4n) {
      //第几个不加右边框
      border-right: none;
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