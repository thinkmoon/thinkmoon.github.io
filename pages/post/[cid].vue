<template>
  <div class="container">
    <div class="article-content">
      <v-md-preview :text="content"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Post from '~/api/Post';
import { useRoute } from 'vue-router';

const route = useRoute();
const { data } = await useAsyncData('article', () => Post.getDetail({ cid: route.params.cid }));
const content = computed(() => `# ${data.value.title} \r\n ${data.value.text}`);
</script>

<style lang="less" scoped>
.article-content {
  width: 70%;
  margin: auto;
  background: #fff;
}
</style>
