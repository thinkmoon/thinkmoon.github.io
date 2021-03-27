<template>
  <div class="container">
    <div v-html="article"></div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      article: ""
    };
  },
  async asyncData({ $axios }) {
    // let res = await $axios.$request({
    //   method: "get",
    //   url: "/api/getPostBycid?cid=932"
    // });
    // return { text: res.data[0].text.substring(15) }
  },
  created(){
    this.$router.push('page/1')
  }
};
</script>

<style></style>
