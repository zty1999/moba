<template>
  <div class="page-heroes" v-if="model">
    <header class="topbar bg-black">
      <div class="d-flex ai-center text-white py-2 px-3">
        <img src="../assets/logo.png" alt height="30" />
        <div class="px-3 flex-1">
          <span class>王者荣耀</span>
          <span class="ml-2">攻略站</span>
        </div>
        <router-link tag="div" to="/" class="fs-md">更多英雄 &gt;</router-link>
        <!-- &gt;转义符号，显示出来是>  &lt;显示为< -->
      </div>
    </header>
    <main tag="div" class="main">
      <div class="top" :style="{'background-image': `url(${model.banner})`}">
        <div class="info d-flex flex-column jc-end p-3 h-100 text-white">
          <div class="fs-sm">{{model.title}}</div>
          <h2 class="my-2">{{model.name}}</h2>
          <div class="fs-sm">{{model.categories.map(v => v.name).join('/')}}</div>
          <div class="d-flex jc-between pt-2">
            <div class="scores d-flex ai-center" v-if="model.scores">
              <span>难度</span>
              <span class="badge bg-brown">{{model.scores.difficult}}</span>
              <span>技能</span>
              <span class="badge bg-blue-1">{{model.scores.skills}}</span>
              <span>攻击</span>
              <span class="badge bg-danger">{{model.scores.attack}}</span>
              <span>生存</span>
              <span class="badge bg-dark-2">{{model.scores.survive}}</span>
            </div>
            <router-link to="/" tag="span" class="text-grey fs-sm">皮肤：2 &gt;</router-link>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  props: {
    id: { required: true }
  },
  data() {
    return {
      model: null
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      const res = await this.$request.get(`heroes/${this.id}`);
      this.model = res.data;
      window.console.log(this.model);
    }
  }
};
</script>
<style lang="scss">
.page-heroes {
  .main {
    .top {
      height: 50vw;
      background: #fff no-repeat top center;
      background-size: auto 100%;
      .info {
        background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
        .scores {
          .badge {
            margin: 0 0.25rem;
            display: inline-block;
            width: 1rem;
            height: 1rem;
            line-height: 0.9rem;
            text-align: center;
            border-radius: 50%;
            border:1px solid rgba(255,255,255,0.2);
            font-size: 0.6rem;
          }
        }
      }
    }
  }
}
</style>