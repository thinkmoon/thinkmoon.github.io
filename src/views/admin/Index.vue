<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main><router-view></router-view></el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'Admin',
});
</script>

<style scoped>

</style>