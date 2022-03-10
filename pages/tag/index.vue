<template>
  <div class="page-content">
    <Title>标签 - {{ config.TITLE }}</Title>

    <el-tag type="info" v-for="tag in data" :key="tag.tid" class="taglist">
			<el-link type="info" :href="'/tag/'+tag.tid">{{tag.name}}({{tag.count}})</el-link>
		</el-tag>
  </div>
</template>

<script lang="ts" setup>
import TagApi from '~/api/TagApi';
const config = useRuntimeConfig();
const { data } = await useAsyncData('tag', () => TagApi.getTag());

</script>

<style scoped>
.taglist {
	margin: 10px;
}
</style>
