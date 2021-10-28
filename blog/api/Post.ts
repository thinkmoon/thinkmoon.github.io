import request from "~/api/request";

export default class Post {
  static getList(params){
    return request({
      methods:'get',
      url: '/post/list',
      params
    })
  }
}