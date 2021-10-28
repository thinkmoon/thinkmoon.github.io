import axios, { AxiosRequestConfig } from "axios";

axios.defaults.baseURL = "http://127.0.0.1:9447/api";

function request(options: AxiosRequestConfig) {
  return new Promise(resolve => {
    axios(options).then(res => {
      if (res?.data?.code === 200) {
        resolve(res.data?.data)
      }
    })
  });
}

export default request;