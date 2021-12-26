<template>
  <div class="container">
    <div class="article-content">
      <h1 class="article-title">
        {{ article.title }}
      </h1>
      <div id="write" v-html="content"/>
    </div>
  </div>
</template>

<script>
import Post from '../../api/Post';
import { marked } from 'marked';

export default {
  data() {
    return {
      article: {},
    };
  },
  computed: {
    content() {
      return marked(this.article.text || '',{breaks: true});
    },
  },
  created() {
    Post.getDetail({cid: this.$route.params.cid}).then(res => {
      this.article = res;
      if(process.client){
        this.$nextTick(()=>{
          hljs.highlightAll();
        })
      }
    });
  },
};
</script>

<style>

</style>
