<template>
  <div>
    <Nuxt />
  </div>
</template>

<style lang='less'>
body {
  background: #eee;
  .content-box {
    background: #fff;
  }
}
.hljs {
  white-space: pre-wrap;
  min-width: 800px;
}
pre, code {
  overflow: auto;
}
/*滚动条整体部分,必须要设置*/
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  background-color: #eee;
}

/*滚动条的轨道*/
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, .3);
  background-color: #eee;
}

/*滚动条的滑块按钮*/
::-webkit-scrollbar-thumb {
  border-radius: 6px;
  background-color: #aaa;
}
</style>
