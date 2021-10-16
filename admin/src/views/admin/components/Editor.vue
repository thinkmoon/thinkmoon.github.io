<template>
  <el-tabs type="border-card" tabPosition="left">
    <el-tab-pane label="编辑">
      <el-input v-model="input" rows="26" type="textarea"></el-input>
    </el-tab-pane>
    <el-tab-pane label="预览">
      <div id="write" class="right" v-html="compiledMarkdown"></div>
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts">
import {ref, defineComponent} from 'vue'
import _ from 'lodash';
import marked from 'marked';

export default defineComponent({
  data() {
    return {
      input: '# hello'
    }
  },
  computed: {
    compiledMarkdown() {
      return marked(this.input, {sanitize: true});
    }
  },
  methods: {
    update: _.debounce(function (e) {
      this.input = e.target.value;
      this.$nextTick(() => {
        hljs.highlightAll();
      });
    }, 300)
  }
})
</script>
<style lang="less">
@import '@/assets/css/han.css';
@import '@/assets/css/atom-one-dark.min.css';
.editor-container {
  display: flex;
  .left,.right{
    flex: 1;
    text-align: left;
    padding: 12px;
  }
}
</style>

