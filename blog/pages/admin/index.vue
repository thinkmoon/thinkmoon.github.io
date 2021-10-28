<template>
  <el-container class="app-container">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']">
        <el-sub-menu index="1">
          <template #title><i class="el-icon-message"></i>内容</template>
          <el-menu-item-group>
            <template #title>文章</template>
            <el-menu-item index="1-1">文章列表</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </el-aside>

    <el-container>

      <el-header>
        指尖魔法屋
      </el-header>
      <el-scrollbar>

        <el-main>
          <el-table :data="tableData" height="560" stripe>
            <el-table-column prop="title" label="标题" width="140">
            </el-table-column>
            <el-table-column prop="name" label="摘要" width="120">
            </el-table-column>
            <el-table-column prop="createTime" label="创建时间"></el-table-column>
            <el-table-column prop="updateTime" label="更新时间"></el-table-column>
            <el-table-column prop="operation" label="操作"></el-table-column>
          </el-table>
          <el-pagination
              v-model:currentPage="currentPage4"
              :page-sizes="[100, 200, 300, 400]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="400"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
          >
          </el-pagination>
        </el-main>
      </el-scrollbar>

    </el-container>

  </el-container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Post from '@/api/Post';
export default defineComponent({
  setup() {
    const item = {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    }

    const tableData = ref(Array(10).fill(item))

    return {
      tableData,
    }
  },
  created() {
    Post.getList({

    }).then(res => {
      console.log(res);
      this.tableData = res.records;
    });
  }
})
</script>
<style lang="less">
@import "assets/css/index.less";
</style>
<style lang="less" scoped>
.app-container {
  height: 100vh;

  .el-header {
    background-color: #b3c0d1;
  }
}
</style>
