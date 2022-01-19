<template>
  <el-table :data="tableData" height="560" stripe>
    <el-table-column prop="title" label="标题" width="140">
    </el-table-column>
    <el-table-column prop="desc" label="摘要" width="200">
    </el-table-column>
    <el-table-column prop="created" label="创建时间"></el-table-column>
    <el-table-column prop="updateTime" label="更新时间"></el-table-column>
    <el-table-column prop="operation" label="操作">
      <template #default="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
      v-model:currentPage="pagination.index"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pagination.size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pagination.total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
  >
  </el-pagination>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Post from '~/api/Post';

export default defineComponent({
  data() {
    return {
      tableData: [],
      pagination: {
        total: 0,
        index: 0,
        size: 10
      }
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      Post.getList({
        current: this.pagination.index,
        size: this.pagination.size,
      }).then(res => {
        this.tableData = res.records;
        this.pagination.index = res.current;
        this.pagination.total = res.total;
      });
    },
    handleSizeChange(val) {
      this.pagination.size = val;
      this.loadData();
    },
    handleCurrentChange(val) {
      this.pagination.index = val;
      this.loadData();
    },
    handleEdit(index, row) {
      this.$router.push({
        path: '/admin/editor',
        query: {
          cid: row.cid
        }
      });
    }
  }
});
</script>
<style lang="less" scoped>
</style>
