<template>
  <NuxtPage/>
  <Footer></Footer>
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

</style>
