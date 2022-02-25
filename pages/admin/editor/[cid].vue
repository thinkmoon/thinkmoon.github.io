<template>
  <div class="editor-container">
    <v-md-editor v-model="data.text" height="560px" @save="saveArticle"></v-md-editor>
  </div>
</template>
<script lang="ts" setup>
import Post from '~/api/Post';
import { useRoute } from 'vue-router';

const route = useRoute();
const { data } = await useAsyncData('article', () => Post.getDetail({ cid: route.params.cid }));
const str = 'aaa'
console.log(data)
</script>
<style lang="less">

.editor-container {
  display: flex;

  .left, .right {
    flex: 1;
    text-align: left;
  }

  .left textarea {
    height: 560px;
  }

  #write {
    min-height: 560px;
    box-sizing: border-box;
  }
}
</style>

