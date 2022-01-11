<template>
  <div class="editor-container" height="560px">
    <el-scrollbar class="left">
      <el-input v-model="input" rows="26" type="textarea"></el-input>
    </el-scrollbar>
    <el-scrollbar class="right" height="560px">
      <div id="write" v-html="compiledMarkdown"></div>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import _ from 'lodash';
import { marked } from 'marked';

export default defineComponent({
  data() {
    return {
      input: '# hello 1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n1\r\n'
    }
  },
  computed: {
    compiledMarkdown() {
      return marked(this.input, { breaks: true});
    }
  },
  created() {
    this.$nextTick(() => {
      var l=document.querySelector('.left .el-textarea textarea')
      var r=document.querySelector('.right .el-scrollbar__wrap')
      l.addEventListener('scroll',function(e){
        console.log(e)
        r.scrollTop = l.scrollTop
      })
    })
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

