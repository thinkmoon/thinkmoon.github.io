<template>
  <el-container class="app-container">
    <el-aside width="200px">
      <el-menu router :default-active="defaultActive">
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

<script lang="ts" setup>

let defaultActive = '/admin/post-list';
</script>
<style lang="less" scoped>
.app-container {
  .el-header {
    background-color: #b3c0d1;
  }
}
</style>
