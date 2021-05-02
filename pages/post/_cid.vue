<template>
  <div class="container">
    <div class="article-content" v-loading="!article.title">
      <h1 class="article-title">{{ article.title }}</h1>
      <div v-html="content"></div>
    </div>
  </div>
</template>

<script>
import axios from "@/plugins/axios";
import { marked } from "@/plugins/marked";
export default {
  validate({ params }) {
    // 必须是number类型
    return /^\d+$/.test(params.cid);
  },
  head() {
    return {
      title: this.article.title,
    }
  },
  computed:{
    content() {
      return marked(this.article.text.replace("<!--markdown-->", ""), {breaks: true})
    }
  },
  data() {
    return {
      params:{},
      article: {
        text:''
      }
    };
  },
  async asyncData({ params }) {
    return { params: params };
  },
  created() {
    axios.get(`/post/${this.params.cid}`).then(res => {
      this.article = res;
      this.$nextTick(() => {
        if (window){
          window?.hljs.highlightAll();
        }
      })
    });
  }
};
</script>

<style >

</style>
