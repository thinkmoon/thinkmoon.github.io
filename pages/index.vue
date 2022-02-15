<template>
  <div class="container">
    <v-md-preview text="# 欢迎来到，指尖魔法屋">
    </v-md-preview>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware(...rest) {
    return navigateTo('/page/1');
  }
})
</script>

<style></style>
