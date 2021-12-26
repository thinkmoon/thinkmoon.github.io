<template>
  <div class="page-content">
    <div class="blog-posts">
      <div v-for="item in postList" :key="item.cid" class="content-box">
        <div class="posts-default-img">
          <a :href="`/post/${item.cid}`" :title="item.title">
            <div class="overlay"/>
            <img class="lazy thumbnail" v-if="item.thumb" :src="item.thumb" :alt="item.title" style="display: inline;">
          </a>
        </div>
        <div class="posts-default-box">
          <div class="posts-default-title">
            <div
                v-if="item.tag"
                class="post-entry-categories"
            >
              <a
                  v-for="tagItem in item.tag.split(',')"
                  :key="tagItem"
                  rel="tag"
              >{{ tagItem }}</a>
            </div>
            <h2>
              <a
                  :href="`/post/${item.cid}`"
                  :title="item.title"
              >{{ item.title }}</a>
            </h2>
          </div>
          <div class="posts-default-content">
            <div class="posts-text">
              {{ item.desc }}
            </div>
            <div class="posts-default-info">
              <div class="post-author">
                <img
                    style="border-radius:50% "
                    src="https://www.thinkmoon.cn/usr/uploads/2018/12/55979974.jpg"
                    height="16"
                    width="16"
                >
                <a
                    href="https://thinkmoon.github.io"
                    target="_blank"
                >醉月思</a>
              </div>
              <div class="ico-cat">
                <i class="el-icon-folder-opened"/>
                <a>{{ item.category }}</a>
              </div>
              <div class="ico-time">
                <i class="el-icon-time"/>
                <a> {{ '2019-11-08' }} </a>
              </div>
              <div class="ico-eye">
                <i class="el-icon-view"/> 138,666
              </div>
              <div class="ico-like">
                <i class="el-icon-star-off"/> 114
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-pagination layout="prev, pager, next"
                   v-model:currentPage="pageData.current"
                   :page-size="10" :total="pageData.total"
                   @current-change="changePage">
    </el-pagination>
    网站持续搭建中，感谢关注
    <a href="http://beian.miit.gov.cn/">粤ICP备17055617号</a>
  </div>
</template>

<script lang="ts">
import Post from '~/api/Post';

export default {
  data() {
    return {
      pageData: {
        total: 0,
        current: 0,
      },
      postList:[],
    };
  },
  created() {
    let pageIndex = this.$route.params.pageIndex;
    if(!/\d+/.test(pageIndex)){
      return;
    }
    this.pageData.current = Number(pageIndex);
    Post.getList({
      current: pageIndex
    }).then((res:any) => {
      this.postList = res.records;
      this.pageData.total = res.total;
    })
  },
  methods: {
    changePage(page) {
      this.$router.replace(`/page/${page}`);
    },
  },
};
</script>

<style lang="less" scoped>
.el-pagination {
  text-align: center;
}

.posts-default-info {
  display: flex;
  align-content: center;
  align-items: center;

  div {
    margin: 0 2px;
  }

  a {
    line-height: 14px;
  }
}
</style>
