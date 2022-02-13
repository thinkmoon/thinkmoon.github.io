<template>
  <div class="editor-container">
    <v-md-editor v-model="text" height="560px" @save="saveArticle"></v-md-editor>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import _ from 'lodash';
import Post from '~/api/Post';

export default defineComponent({
  data() {
    return {
			text:'',
    };
  },
  computed: {
    compiledMarkdown() {
      return '';
    }
  },
  created() {
    Post.getDetail({ cid: this.$route.query.cid }).then((res: any) => {
			this.text = res.text
			console.log(res)
		})
  },
  methods: {
   saveArticle() {
		 
	 }
  }
});
</script>
<style lang="less">

.editor-container {
  display: flex;

  .left, .right {
    flex: 1;
    text-align: left;
  }

  .left textarea {
    height: 560px;
  }

  #write {
    min-height: 560px;
    box-sizing: border-box;
  }
}
</style>

