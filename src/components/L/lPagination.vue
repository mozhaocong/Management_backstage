<template>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page.sync="currentPage"
    :page-size="100"
    layout="prev, pager, next, jumper"
    :total="1000"
  ></el-pagination>
</template>

<script>
export default {
  props: ["btns"],
  data() {
    return {
      currentPage: 1,
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
