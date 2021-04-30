<template>
  <div class="container">
    <div class="article-content">
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
      article: {

      }
    };
  },
  async asyncData({ params }) {
    let data = await axios.get(`/post/${params.cid}`);
    console.log(data)
    return { article: data };
  }
};
</script>

<style >

</style>
