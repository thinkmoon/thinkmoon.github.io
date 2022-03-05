<template>
  <div class="page-content">
    <div class="blog-posts">
      <div v-for="item in postList" :key="item.cid" class="content-box">
        <div class="posts-default-img">
          <a :href="`/post/${item.cid}`" :title="item.title">
            <div class="overlay"/>
            <el-image v-if="item.thumb" :src="item.thumb" fit="cover" lazy></el-image>
          </a>
        </div>
        <div class="posts-default-box">
          <div class="posts-default-title">
            <div
                v-if="item.tag"
                class="post-entry-categories"
            >
              <el-tag
                  v-for="tagItem in item.tag.split(',')"
                  :key="tagItem"
                  rel="tag"
                  class="post-tag"
              >{{ tagItem }}
              </el-tag>
            </div>
            <NuxtLink :to="`/post/${item.cid}`" :underline="false" class="post-title">{{
                item.title
              }}
            </NuxtLink>
          </div>
          <div class="posts-default-content">
            <div class="posts-text">
              {{ item.desc }}
            </div>
            <div class="posts-default-info">
              <div class="post-author">
                <img
                    style="border-radius:50% "
                    src="https://blog.cdn.thinkmoon.cn/%E5%81%B7%E6%98%9F%E4%B9%9D%E6%9C%88%E5%A4%A9%E5%A4%B4%E5%83%8F.jpeg"
                    height="16"
                    width="16"
                >
                <el-link
                    href="https://thinkmoon.github.io"
                    target="_blank"
                >醉月思
                </el-link>
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
  </div>
</template>

<script lang="ts" setup>
import Post from '~/api/Post';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
let pageData = {
  total: 0,
  current: 0,
};
let pageIndex = route.params.pageIndex;
pageData.current = Number(pageIndex);
const { data } = await useAsyncData('res', () => Post.getList({ current: pageIndex }));

let postList = data.value.records;
pageData.total = data.value.total;
const changePage = (page) => {
  router.replace(`/page/${page}`);
};
</script>

<style lang="less" scoped>
.page-content {
  margin: auto;
  width: 60%;

  .blog-posts {
    width: 70%;
  }

  .content-box {
    margin: 20px 0;
    padding: 20px;
    background: #fff;

    .el-image {
      height: 256px;
      width: 100%;
    }

    .post-title {
      font-size: 24px;
      color: #000;

      &:hover {
        color: var(--el-link-default-active-color);
      }
    }

    .posts-text {
      color: #606266;
      font-size: 14px;
    }

    .post-tag {
      margin: 4px 6px;
    }
  }
}

.el-pagination {
  text-align: center;
}

.posts-default-info {
  margin-top: 6px;
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
