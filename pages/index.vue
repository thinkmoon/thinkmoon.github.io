<template>
  <div class="container">
    <v-md-preview text="# 欢迎来到，指尖魔法屋">
    </v-md-preview>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

useRouter().replace('/page/1');
</script>

<style></style>
