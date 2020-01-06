import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import http from './network/request'
import Vue2Editor from "vue2-editor";
import "./assets/style.css"

Vue.use(Vue2Editor);
Vue.prototype.$request = http
Vue.config.productionTip = false

Vue.mixin({//全局混入
  computed: {
    uploadUrl() {//上传地址
      return this.$request.defaults.baseURL + '/upload'
    }
  },
  methods: {
    getAuthHeaders() {//上传请求头
      return {
        Authorization: `Bearer ${localStorage.token || ''}`
      }
    }

  }

})
//要写在new Vue 之前
//全局自定义指令获取焦点
//Vue.directive('指令名',{insered(el){自定义指令的具体功能}})
// 定义指令名时不加v-   在视图层v-指令名 使用自定义指令
//自定义指令获取焦点 
Vue.directive('focus', {
  inserted(el) {
    //inserted 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
    // window.console.log(el)
    //el指的是该自定义指令的调用者（dom元素）
    el.focus()
    //无效  原因未知 
  }
})

Vue.prototype.$bus = new Vue();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
