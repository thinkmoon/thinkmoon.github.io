<template>
  <div class="container">
    <div
        v-loading="!article.title"
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
import axios from "@/plugins/axios";
import {marked} from "@/plugins/marked";
import Vue from 'vue';

export default Vue.extend({
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
      return marked(this.article.text.replace("<!--markdown-->", ""), {breaks: true});
    },
  },
  created() {
    if (process.browser) {
      this.$nextTick(() => {
        hljs.highlightAll();
      });
    }
  },
});
</script>

<style>

</style>