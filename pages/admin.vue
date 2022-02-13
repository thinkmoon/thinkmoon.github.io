<template>
  <el-container class="app-container">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']" router>
        <el-menu-item-group>
          <template #title>文章</template>
          <el-menu-item index="/admin/post-list">文章列表</el-menu-item>
        </el-menu-item-group>
      </el-menu>
    </el-aside>

    <el-container>

      <el-header>
        指尖魔法屋
      </el-header>
      <el-scrollbar>

        <el-main>
          <NuxtChild/>
        </el-main>
      </el-scrollbar>

    </el-container>

  </el-container>
</template>

<script lang="ts">

</script>
<style lang="less" scoped>
.app-container {
  .el-header {
    background-color: #b3c0d1;
  }
}
</style>
