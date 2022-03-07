<template>
  <NuxtPage/>
  <footer>
    <span>网站持续搭建中，感谢关注</span>
    <div>
      <el-link href="http://beian.miit.gov.cn/" type="primary">粤ICP备17055617号</el-link>
    </div>
  </footer>
</template>
<script lang="ts" setup>
const config = useRuntimeConfig();
useMeta({
  title: config.TITLE,
})
</script>
<style lang="less">
html {
  background: #f6f6f6;
}
body {
  margin: 0;
}
footer {
  text-align: center;
  background: #303133;
  color: #909399;
  height: 100px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  justify-content: center;
}
</style>
