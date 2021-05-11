<template>
  <div class="container">
    <div> 欢迎来到，指尖魔法屋</div>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      article: "",
    };
  },
  created() {
    this.navigatePage();
  },
  methods: {
    navigatePage() {
      this.$router.replace('page/1');
    },
  },
});
</script>

<style></style>
