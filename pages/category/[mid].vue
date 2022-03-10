<template>
	<div class="page-content">
		<div v-for="article in data.records" :key="article.cid">
			{{article.title}}
		</div>
		<el-pagination layout="prev, pager, next, slot"
      v-model:currentPage="pageData.current"
      :page-size="10" :total="pageData.total"
      @current-change="changePage">
    </el-pagination>

	</div>
</template>

<script lang="ts" setup>
import PostApi from '~/api/PostApi';
const config = useRuntimeConfig();
import { useRoute } from 'vue-router';
const route = useRoute();
const router = useRouter();
let pageData = {
  total: 0,
  current: 0,
};
let pageIndex = route.params.pageIndex;
let mid = route.params.mid;
pageData.current = Number(pageIndex);
const { data } = await useAsyncData('article', () => PostApi.getList({ mid:mid }));
let postList = data.value.records;
pageData.total = data.value.total;
const changePage = (page) => {
	console.log(page,mid)
  router.replace(`/category/${mid}/${page}`);
};
</script>

<style scoped>

</style>