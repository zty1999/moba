import axios from 'axios';


  const http = axios.create({
    // baseURL: 'http://localhost:3000/web/api',
    baseURL: process.env.VUE_APP_API_URL || "/web/api",//环境变量
    timeout: 5000,
    headers:{ 'content-type' : 'application/json'}
  
  });


  export default http

 







