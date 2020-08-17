<template>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :page-size="10"
    layout="prev, pager, next, jumper"
    :total="pagination.total"
  ></el-pagination>
</template>

<script>
export default {
  props: ["pagination"],
  data() {
    return {
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>

<style lang="scss">
.el-pagination {
  float: right;
  margin-top: 20px;
}
</style>
