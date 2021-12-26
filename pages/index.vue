<template>
  <div class="container">
    <div> 欢迎来到，指尖魔法屋</div>
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
    setTimeout(() => {
      this.navigatePage();
    }, 3000);
  },
  methods: {
    navigatePage() {
      this.$router.replace('/page/1');
    },
  },
}
</script>

<style></style>
