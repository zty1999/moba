import axios from 'axios'
import Vue from 'vue'
import router from '../router'

  //创建axios的实例
  const http = axios.create({
    // baseURL: 'http://localhost:3000/admin/api',
    //改成不含主机名的绝对地址
    baseURL: process.env.VUE_APP_API_URL || "/admin/api",//环境变量
    timeout: 5000,
    headers:{ 'content-type' : 'application/json'}
  
  })

  http.interceptors.request.use(function(config) {
    if(localStorage.token) {
      config.headers.Authorization = 'Bearer ' + (localStorage.token || '') 
    //'Bearer '  引号内是bearer加空格是行业规范
    }
    
    return config;
  }),err => {
    return Promise.reject(err)
  }



  //响应拦截  通用的错误处理函数
  http.interceptors.response.use(res => {
    // console.log(res);
    return res
  }, err => {
    if (err.response.data.message) {
      Vue.prototype.$message({
        type:'error',
        message: err.response.data.message
      })
      window.console.log(err.response)
      if(err.response.status === 401) {//如果状态码为401，跳回登录页
        router.push('/login')
      }
    }
    
    return Promise.reject(err)
  })

  export default http

 







