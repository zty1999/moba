<template>
  <div class="page-article" v-if="model">
    <header class="d-flex py-3 px-2 text-blue border-bottom">
      <div class="iconfont icon-back"></div>
      <strong class="flex-1 pl-2 fs-md">{{model.title}}</strong>
      <div class="text-grey fs-xs">{{model.updatedAt | date}}</div>
    </header>
    <main v-html="model.body" class="article-content px-3 fs-lg"></main>
    <footer class="px-3 border-top">
      <div class="d-flex ai-center py-3">
        <i class="iconfont icon-xiangguan"></i>
        <div class="text-blue fs-lg ml-1">相关资讯</div>
      </div>
      <div class="pb-3">
        <router-link tag="div" :to="`/articles/${item._id}`" 
          v-for="item in model.related" :key="item._id"
          class="pt-2">
          {{item.title}}
        </router-link>
      </div>
    </footer>
  </div>
</template>
<script>
import dayjs from "dayjs";

export default {
  filters: {
    date(val) {
      return dayjs(val).format("YY/MM/DD");
      //											月份/日期
    }
  },
  props: {
    id: { required: true }
  },
  created() {
    this.fetch();
  },
  data() {
    return {
      model: null
    };
  },
  watch: {
    id() {
      this.fetch()
    }//一旦id发生变化，重新请求fetch()
    // id: 'fetch'//简写

  },
  methods: {
    async fetch() {
      const res = await this.$request.get(`articles/${this.id}`);
      this.model = res.data;
      
      window.console.log(this.model);
    }
  }
};
</script>
<style lang="scss" >
@import "@/assets/css/style.scss";
.page-article {
  .article-content {
    img {
      max-width: 100%;
      height: auto;
    }
    iframe {
      width: 100%;
      height: auto;
    }
  }
}
</style>