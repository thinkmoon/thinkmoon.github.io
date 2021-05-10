<template>
  <div class="page-content">
    <div class="blog-posts">
      <div class="content-box" :key="item.cid" v-for="item in pageData.records">
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
            <div class="post-entry-categories" v-if="item.tag">
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
    <el-pagination
      layout="prev, pager, next"
      :current-page="pageData.current"
      :total="pageData.total"
      @current-change="changePage">
    </el-pagination>
  </div>
</template>

<script lang="ts">
import axios from "@/plugins/axios";

export default {
  validate({params: any}) {
    // 必须是number类型
    return /^\d+$/.test(params.page);
  },
  async asyncData({params}) {
    console.log("page load", params);
    let data = await axios.get("/post/list", {
      params: {
        current: params.page
      }
    });
    console.log(data)
    return {pageData: data};
  },
  data() {
    return {
      pageData: {
        total: 0,
        current: 0
      }
    };
  },
  methods: {
    changePage(page) {
      this.$router.replace(`/page/${page}`)
    }
  }
};
</script>

<style lang="less" scoped>
.el-pagination {
  text-align: center;
}
</style>
