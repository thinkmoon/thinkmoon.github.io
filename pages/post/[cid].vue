<template>
  <div class="container">
    <div
        class="article-content"
    >
      <h1 class="article-title">
        {{ article.title }}
      </h1>
      <div v-html="content" />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  validate({params}) {
    // 必须是number类型
    return /^\d+$/.test(params.cid);
  },
  async asyncData({params}) {
    let res = await axios.get(`/post/${params.cid}`);
    return {article: res};
  },
  data() {
    return {
      article: {
        text: '',
        title: '',
      },
    };
  },
  head() {
    return {
      title: this.article.title,
    };
  },
  computed: {
    content() {
      return this.article.text;
    },
  },
  created() {
    if (process.browser) {
      this.$nextTick(() => {
        hljs.highlightAll();
      });
    }
  },
};
</script>

<style>

</style>
