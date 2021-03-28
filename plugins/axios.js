import axios from 'axios' //引用axios
import Vue from 'vue';
// create an axios instance
const service = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 50000, // request timeout,
})

// request interceptor
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data //res is my own data
    return res.data
  },
  error => {
    return Promise.reject(error)
  }
)
Vue.prototype.$axios = service
export default service;