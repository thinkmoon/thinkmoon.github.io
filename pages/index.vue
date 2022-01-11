<template>
  <div class="container">
    <v-md-preview text="# 欢迎来到，指尖魔法屋"> 欢迎来到，指尖魔法屋</v-md-preview>
  </div>
</template>

<script>


export default {
  data() {
    return {
      article: '',
    };
  },
  created() {
    this.navigatePage();
  },
  methods: {
    navigatePage() {
      this.$router.replace('/page/1');
    },
  },
};
</script>

<style></style>
