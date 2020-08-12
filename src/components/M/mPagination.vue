<template>
  <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="pageSizeList"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>
<script>
  export default {
    props:{
      currentPage: {
        type: Number,
        default: 1
      },
      total: {
        type: Number,
        default: 10
      },
      pageSize:{
        type: Number,
        default: 10
      },
      pageSizeList: {
        type: Array,
        default() {
          return  [
            10, 20, 50, 100
          ]
        }
      }
    },
    methods: {
      handleSizeChange(val) {
        // console.log(`每页 ${val} 条`);
        this.$emit('SizeChange', val)
      },
      handleCurrentChange(val) {
        this.$emit('CurrentChange', val)
        // console.log(`当前页: ${val}`);
      }
    },
    data() {
      return {
      };
    }
  }
</script>
