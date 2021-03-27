<template>
  <div>
    <div :key="item.cid" v-for="item in list">
      <a :href="`/post/${item.cid}`">{{ item.title }}</a>
    </div>
  </div>
</template>

<script>
import axios from "@/plugins/axios";

export default {
  validate({ params }) {
    // 必须是number类型
    return /^\d+$/.test(params.page);
  },
  async asyncData({ params }) {
    let data = await axios.get("/post/list", {
      params: params.page
    });
    console.log(data);
    return { list: data.records };
  },
  data() {
    return {
      list: []
    };
  }
};
</script>

<style></style>
