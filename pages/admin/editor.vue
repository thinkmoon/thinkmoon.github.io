<template>
  <div class="editor-container">
    <v-md-editor v-model="data.text" height="560px" @save="saveArticle"></v-md-editor>
  </div>
</template>
<script lang="ts" setup>
import Post from '~/api/Post';
import { useRoute } from 'vue-router';

const route = useRoute();
let data = '';
if(route.query.cid){
  const resopnse = await useAsyncData('article', () => Post.getDetail({ cid: route.query.cid }));
  data = ref(resopnse.data);
}
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

