<template>
  <div class="container">
    <div class="article-content">
      <v-md-preview :text="content" />
    </div>
  </div>
</template>

<script setup>
import Post from '../../api/Post';
import { useRoute } from 'vue-router';
const route = useRoute();
console.log(route)
const { data } = await useAsyncData('article', () => Post.getDetail({cid: route.params.cid}))

const content = computed(() => `# ${data.value.title} \r\n ${data.value.text}`)
console.log('data:', data)
</script>
<!--<script>-->
<!--export default {-->
<!--  // data(){-->
<!--  //   return {-->
<!--  //     text:'',-->
<!--  //     article: '',-->
<!--  //   }-->
<!--  // },-->
<!--  computed:{-->
<!--    content(){-->
<!--      return `#${this.article} \r\n ${this.text}`;-->
<!--    }-->
<!--  },-->
<!--  created(){-->
<!--    console.log(this.data)-->
<!--  }-->
<!--}-->
<!--</script>-->

<style>

</style>
