<template>
  <div class="content">
    <div class="leftContent">
      <lLeftTree v-if="treeData" :treeData="treeData" :defaultProps="defaultProps" @leftTreePick="leftTreePick"/>
    </div>
    <div class="rightContent">
      <div class="form">
        <lForm :formData="formData" @queryData="queryData"></lForm>
        <lButton :btns="btns" @add="add" @dels="dels" />
        <lTable ref="table" :tableData="tableData" :tableHeader="tableHeader" :tables="tableObj" 
          @changeState="changeState" @edit="edit" @del="del" />
        <lPagination :pagination="pagination" />
      </div>
    </div>

    <lDialog :dialogObj="dialogObj" @cancelEvent="cancelEvent" @sureEvent="sureEvent">
      <productEdit ref="productEdit" :formData="editData"/>
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
    productEdit: () => import("./product_edit"),
  },
  data() {
    return {
      //树状图
      treeData: [],
      defaultProps: {
        label: "categoryName",
        children: "children",
      },
      //表格参数
      formData: [
        { label: "产品名称", type: 1, name: "ayear", },
        { label: "添加时间", type: 3, name: "cityid"},
      ],
      btns: [{ label: "添加商品", action: "add" }, 
             { label: "批量删除", action: "dels" }],
      tableHeader: [{ type: 'selection', width: '50' }, { prop: 'goodsCode', label: '产品编号', width: '180' }, { prop: 'goodsName', label: '产品名称', width: 'auto' },
                    { prop: 'originalPrice', label: '原价格', width: '80' }, { prop: 'price', label: '现价', width: '80' }, { prop: 'shop', label: '所属店铺', width: '150' },
                    { prop: 'time', label: '加入时间', width: '150' }, { prop: 'state', label: '状态', width: '80' }],
      tableData: [],
      tableObj: { operate: true, operateWidth: "220", 
                  "events": [{ type: "primary", label: '禁用', action: "changeState" },
                             { type: "primary", label: '编辑', action: "edit" },
                             { type: "primary", label: '删除', action: "del" }]},
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
    this.getGoodsCategoryList();
  },
  methods: {
    getTableList() {
      let data = this.selectInfo;
      this.$https.get("/goods/getPage", data).then((res) => {
        console.log(res)
        this.tableData = res.data.data.records;
        this.pagination.total = res.data.data.total;
      })
    },
    getGoodsCategoryList() {
      this.$https.get("/goods/goodsCategory/getList").then((res) => {
        this.treeData = res.data.data;
      })
    },
    //leftTree
    leftTreePick(val) {
      if(val.leave == 1) {
        this.selectInfo.categoryFirstCode = val.id;
      } else if(val.level == 2) {
        this.selectInfo.categorySecondCode = val.id;
      }
      this.getTableList();
    },
    //form
    queryData(val) {
      console.log(val)
    },
    //buttom
    add() {
      console.log("添加")
      this.editData = {};
      this.dialogObj.title = "新增";
      this.dialogObj.isShow = true;
    },
    dels(rows) {
      let selectData = this.$refs.table.getSelectData();
      console.log(selectData)
    },
    //table
    changeState(val) {
      console.log(val,"=======changeState")
    },
    edit(val) {
      this.editData = val;
      this.dialogObj.title = "编辑";
      this.dialogObj.isShow = true;
    },
    del(val) {
      this.dialogObj.isShow = false;
    },
    cancelEvent() {
      this.dialogObj.isShow = false;
    },
    sureEvent() {
      let data = this.$refs.productEdit.sendData();
      this.$https.post("/goods/editAll", data).then((res) => {
        this.treeData = res.data.data;
        alert(res.data.message)
        this.dialogObj.isShow = false;
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
  width: calc(100% - 201px);
  height: 100%;
  float: left;
}
</style>