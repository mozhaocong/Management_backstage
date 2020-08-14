<template>
  <div class="content">
    <div class="leftContent">
      <lLeftTree />
    </div>
    <div class="rightContent">
      <div class="form">
        <lForm :formData="formData"></lForm>
        <lButton :btns="btns" @add="btns" />
        <lTable :tableData="tableData" :tableHeader="tableHeader" />
        <lPagination  />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    lLeftTree: () => import("@/components/L/lLeftTree"),
    lForm: () => import("@/components/L/lForm"),
    lButton: () => import("@/components/L/lButton"),
    lTable: () => import("@/components/L/lTable"),
    lPagination: () => import("@/components/L/lPagination")
  },
  data() {
    return {
      //表格参数
      formData: [
        { label: "年度", type: 1, name: "ayear", },
        { label: "地市", type: 2, name: "cityid", selects: [{ label: "是", value: 1, }, { label: "否", value: 0, }], },
        { label: "博物馆", type: 1, name: "mname", },
        { label: "是否导入考据", type: 2, name: "isimport", selects: [{ label: "是", value: 1, }, { label: "否", value: 0, }]},
        { label: "是否导入考据", type: 2, name: "isimport", selects: [{ label: "是", value: 1, }, { label: "否", value: 0, }]},
        { label: "是否导入数据", type: 2, name: "isimport", selects: [{ label: "是", value: 1, }, { label: "否", value: 0, }]},
      ],
      btns: [{ label: "生成年度数据", action: "create" }, 
             { label: "新增", action: "add" }],
      tableHeader: [{ type: 'selection', width: '40' }, { label: '序号', type: 'index', width: '60' }, { prop: 'shopName', label: '店名', width: '220' }, 
                    { prop: 'orderNo', label: '订单号', width: 'auto' }, { prop: 'payType', label: '支付类型', width: '200' }, { prop: 'remark', label: '备注', width: 'auto' }],
      tableData: [],
      tableObj: { operate: true, operateWidth: "400", 
                  "events": [{ type: "primary", label: '明细', action: "showDetail" },
                             { type: "primary", label: '删除', action: "del" },
                             { type: "primary", label: '清除', action: "clearDetail" },
                             { type: "primary", label: '导入', action: "importData" },
                             { type: "primary", label: '导出', action: "exportData" }]},
      //过滤条件
      
    };
  },
  created() {
    this.getTableList();
  },
  methods: {
    getTableList() {
      let data = {
        // userCode: '13226150',
        pageSize: '10',
        page: '1',
      }
      this.$https.get("/order/order/getPage", data).then((res) => {
        console.log(res)
        this.tableData = res.data.data.records;
      })
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
  width: calc(100% - 200px);
  height: 100%;
  float: left;
}
</style>