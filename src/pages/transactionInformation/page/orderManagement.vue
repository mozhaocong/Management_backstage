<template>
  <div class="content">
    <div class="leftContent">
      <lLeftTree v-if="treeData" :treeData="treeData" :defaultProps="defaultProps" @leftTreePick="leftTreePick"/>
    </div>
    <div class="rightContent">
      <div class="form">
        <lForm :formData="formData" @queryData="queryData"></lForm>
        <lTable ref="table" :tableData="tableData" :tableHeader="tableHeader" :tables="tableObj" @look="look" @sendOrder="sendOrder" @refund="refund" />
        <lPagination :pagination="pagination" />
      </div>
    </div>

    <lDialog :dialogObj="dialogObj" @cancelEvent="cancelEvent" @sendEvent="sendEvent" @refundEvent="refundEvent">
      <orderManagementSendOrder ref="orderManagementSendOrder" :formData="editData" v-if="selectInfo.status == 1"/>
      <orderManagementRefund ref="orderManagementRefund" :formData="editData" v-else-if="selectInfo.status == 5"/>
      <orderManagementEdit ref="orderManagementEdit" :formData="editData" v-else/>
    </lDialog>
  </div>
</template>

<script>
export default {
  components: {
    lLeftTree: () => import("@/components/L/lLeftTree"),
    lForm: () => import("@/components/L/lForm"),
    lButton: () => import("@/components/L/lButton"),
    lTable: () => import("@/components/L/lTable"),
    lPagination: () => import("@/components/L/lPagination"),
    lDialog: () => import("@/components/L/lDialog"),
    orderManagementEdit: () => import("./orderManagement_edit"),
    orderManagementSendOrder: () => import("./orderManagement_sendOrder"),
    orderManagementRefund: () => import("./orderManagement_refund"),
  },
  data() {
    return {
      //树状图
      treeData: [{label: "待付款", type: 0}, {label: "待发货", type: 1}, {label: "待收货", type: 2}, {label: "待评价", type: 3}, {label: "已完成", type: 4}, {label: "退款", type: 5}],
      defaultProps: {
        label: "label",
        children: "children",
      },
      //表格参数
      formData: [
        { label: "店铺搜索", type: 1, name: "ayear", },
        { label: "添加时间", type: 3, name: "cityid"},
      ],
      tableHeader: [{ type: 'selection', width: '50' }, { prop: 'orderNo', label: '订单编号', width: '180' }, { prop: 'shopName', label: '店铺名称', width: 'auto' },
                    { prop: 'price', label: '原价', width: '80' }, { prop: 'payPrice', label: '支付金额', width: '80' }, { prop: 'status', label: '订单状态', width: '150' }],
      tableData: [],
      tableObj: { operate: true, operateWidth: "100", 
                  "events": [{ type: "primary", label: '查看', action: "look" }]},
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
      this.$https.get("/order/order/getPage", data).then((res) => {
        this.tableData = res.data.data.records;
        this.pagination.total = res.data.data.total;
      })
    },
    //leftTree
    leftTreePick(val) {
      switch(val.type){
        case 1:
          this.tableObj = { operate: true, operateWidth: "100", "events": [{ type: "primary", label: '发货', action: "sendOrder" }]};
          this.dialogObj = { "isShow": false, "width": "40%", "btn": true, "events": [{ "lable": "取消", "action": "cancelEvent" }, { "lable": "发货", "type": "success", "action": "sendEvent" }]};
          break;
        case 5:
          this.tableObj = { operate: true, operateWidth: "100", "events": [{ type: "primary", label: '退款', action: "refund" }]};
          this.dialogObj = { "isShow": false, "width": "40%", "btn": true, "events": [{ "lable": "取消", "action": "cancelEvent" }, { "lable": "退款", "type": "success", "action": "refundEvent" }]};
          break;
        default:
          this.tableObj = { operate: true, operateWidth: "100", "events": [{ type: "primary", label: '查看', action: "look" }]};
          this.dialogObj = { "isShow": false, "width": "40%", "btn": true, "events": [{ "lable": "取消", "action": "cancelEvent" }]};
          break;
      }
      this.selectInfo.status = val.type;
      this.selectInfo.page = 1;
      this.getTableList();
    },
    //form
    queryData(val) {
      console.log(val)
    },
    //table
    look(val) {
      this.editData = val;
      this.dialogObj.title = "查看";
      this.dialogObj.isShow = true;
    },
    sendOrder(val) {
      this.editData = val;
      this.dialogObj.title = "发货";
      this.dialogObj.isShow = true;
    },
    refund(val) {
      this.editData = val;
      this.dialogObj.title = "退款";
      this.dialogObj.isShow = true;
    },
    //table
    sendEvent() {
      let data = this.$refs.orderManagementSendOrder.sendData();
      this.$https.post("/order/order/sendDelivery", data).then((res) => {
        alert(res.data.message)
        this.getTableList();
      })
    },
    refundEvent() {
      let data = this.$refs.orderManagementRefund.sendData();
      this.$https.post("/order/order/orderRefund", data).then((res) => {
        alert(res.data.message)
        this.getTableList();
      })
    },
    cancelEvent() {
      this.dialogObj.isShow = false;
    }
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