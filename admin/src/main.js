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

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
