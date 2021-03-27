<template>
  <div class="container">
    <div v-html="article"></div>
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
  data() {
    return {
      article: ""
    };
  },
  async asyncData({ params }) {
    let data = await axios.get(`/post/${params.cid}`);
    let text = data.text.replace("<!--markdown-->", "");
    return { article: marked(text) };
  }
};
</script>

<style></style>
