<template>
  <div class="content">
    <div class="form">
    <lButton :btns="btns" @allOrder="allOrder" @todayOrder="todayOrder" @monthOrder="monthOrder"/>
    <lTable ref="table" :tableData="tableData" :tableHeader="tableHeader"/>
    <lPagination :pagination="pagination" />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    lButton: () => import("@/components/L/lButton"),
    lTable: () => import("@/components/L/lTable"),
    lPagination: () => import("@/components/L/lPagination"),
    lDialog: () => import("@/components/L/lDialog"),
  },
  data() {
    return {
      //表格参数
      btns: [{ label: "全部订单", action: "allOrder" }, 
             { label: "当天订单", action: "todayOrder" },
             { label: "当月订单", action: "monthOrder" }],
      tableHeader: [{ type: 'selection', width: '50' }, { prop: 'shopName', label: 'ID', width: 'auto' }, { prop: 'shopStatus', label: '成交金额(元)', width: '100' },
                    { prop: 'area', label: '成交时间', width: 'auto' }, { prop: 'createTime', label: '状态', width: 'auto' }],
      tableData: [],
      //过滤条件
      selectInfo: {
        pageSize: '10',
        page: '1',
      },
      //分页
      pagination: {
        page: 1,
      },
      //弹出框
      dialogObj: {
        "isShow": false,
        "width": "40%",
        "btn": true,
        "events": [{
          "lable": "取消",
          "action": "cancelEvent"
        }, {
          "lable": "保存",
          "action": "sureEvent",
          "type": "primary"
        }]
      },
      editData: {},
    };
  },
  created() {
    this.getTableList();
  },
  methods: {
    getTableList() {
      let data = this.selectInfo;
      this.$https.get("/shop/getPageList", data).then((res) => {
        console.log(res)
        this.tableData = res.data.data.records;
        this.pagination.total = res.data.data.total;
      })
    },
    //leftTree
    leftTreePick(val) {
      if(val.leave == 1) {
        this.selectInfo.categoryFirstCode = val.id;
      } else if(val.leave == 2) {
        this.selectInfo.categorySecondCode = val.id;
      }
      this.getTableList();
    },
    //form
    queryData(val) {
      console.log(val)
    },
    //buttom
    allOrder() {
      console.log(123)
    },
    todayOrder(rows) {
        console.log(123)
    },
    monthOrder() {
        console.log(123)
    },
  }
};
</script>

<style lang="scss" scoped>
.content{
  height: 100%;
  background-color: #ffffff;
}
.leftContent {
  width: 200px;
  height: 100%;
  float: left;
  border-right: 1px solid #f5f5f5;
}
.rightContent {
  width: calc(100% - 201px);
  height: 100%;
  float: left;
}
</style>