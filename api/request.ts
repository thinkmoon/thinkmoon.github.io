import axios, { AxiosRequestConfig } from "axios";

axios.defaults.baseURL = "https://service.thinkmoon.cn/api";

function request(options: AxiosRequestConfig) {
  return new Promise(resolve => {
    axios(options).then(res => {
      if (res?.data?.code === 200) {
        resolve(res.data?.data)
      }
    }).catch(err => {
      console.error('请求出错',err)
    })
  });
}

export default request;
