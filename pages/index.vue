<template>
  <div class="container">
    <div>博客整改中 <el-button @click="navigatePage">点击跳转nuxt.thinkmoon.cn</el-button> </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      article: ""
    };
  },
  methods: {
    navigatePage(){
      this.$router.replace('page/1')
    }
  }
}
</script>

<style></style>
