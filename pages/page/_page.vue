<template>
  <div class="blog-posts">
    <div class="content-box" :key="item.cid" v-for="item in list">
      <div class="posts-default-img">
        <a :href="`/post/${item.cid}`" :title="item.title">
          <div class="overlay"></div>
          <img
            class="lazy thumbnail"
            :src='item.thumb'
            :alt="item.title"
            style="display: inline;"
          />
        </a>
      </div>
      <div class="posts-default-box">
        <div class="posts-default-title">
          <div class="post-entry-categories">
            <a
              v-for="tagItem in item.tag.split(',')"
              :key="tagItem"
              rel="tag"
              >{{ tagItem }}</a
            >
          </div>
          <h2>
            <a :href="`/post/${item.cid}`" :title="item.title">{{
              item.title
            }}</a>
          </h2>
        </div>
        <div class="posts-default-content">
          <div class="posts-text">
            {{ item.desc }}
          </div>
          <div class="posts-default-info">
            <ul>
              <li class="post-author">
                <div class="avatar">
                  <img
                    alt=""
                    src="https://www.thinkmoon.cn/usr/uploads/2018/12/55979974.jpg"
                    class="avatar avatar-96 photo"
                    height="96"
                    width="96"
                  />
                </div>
                <a href="https://xposed.appkg.com/author/xposed" target="_blank"
                  >醉月思</a
                >
              </li>
              <li class="ico-cat">
                <i class="icon-list-2"></i>
                <a>{{ item.category }}</a>
              </li>
              <li class="ico-time"><i class="icon-clock-1"></i> 2019-11-08</li>
              <li class="ico-eye"><i class="icon-eye-4"></i> 138,666</li>
              <li class="ico-like"><i class="icon-heart"></i> 114</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/plugins/axios";

export default {
  validate({ params }) {
    // 必须是number类型
    return /^\d+$/.test(params.page);
  },
  async asyncData({ params }) {
    console.log("page load");
    let data = await axios.get("/post/list", {
      params: params.page
    });
    return { list: data.records };
  },
  data() {
    return {
      list: []
    };
  }
};
</script>

<style lang="less" scoped>
@media screen and (max-width: 767px) {
  .blog-posts {
    width: 100%;
    padding-left: 5px;
    padding-right: 5px;
    .content-box {
      .posts-default-img {
        margin: 0;
        max-height: 150px;
        a {
          position: relative;
          display: block;
          img {
            max-width: 100%;
            height: auto;
            vertical-align: middle;
            border: 0;
          }
        }
      }
      padding: 12px 10px;
    }
  }
}
</style>
