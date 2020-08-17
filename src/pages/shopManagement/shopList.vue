<template>
  <div class="content">
    <div class="form">
    <lForm :formData="formData" @queryData="queryData"></lForm>
    <lButton :btns="btns" @add="add" @dels="dels" />
    <lTable ref="table" :tableData="tableData" :tableHeader="tableHeader" :tables="tableObj" 
        @changeState="changeState" @edit="edit"/>
    <lPagination :pagination="pagination" />
    </div>

    <lDialog :dialogObj="dialogObj" @cancelEvent="cancelEvent" @sureEvent="sureEvent">
        <shopEdit ref="shopEdit" :formData="editData"/>
    </lDialog>
  </div>
</template>

<script>
export default {
  components: {
    lForm: () => import("@/components/L/lForm"),
    lButton: () => import("@/components/L/lButton"),
    lTable: () => import("@/components/L/lTable"),
    lPagination: () => import("@/components/L/lPagination"),
    lDialog: () => import("@/components/L/lDialog"),
    shopEdit: () => import("./shop_edit"),
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
        { label: "关键字搜索", type: 1, name: "ayear", },
        { label: "添加时间", type: 3, name: "cityid"},
      ],
      btns: [{ label: "添加商品", action: "add" }, 
             { label: "批量删除", action: "dels" }],
      tableHeader: [{ type: 'selection', width: '50' }, { prop: 'shopName', label: '店铺名称', width: 'auto' }, { prop: 'shopStatus', label: '店铺类型', width: '100' },
                    { prop: 'area', label: '地址', width: 'auto' }, { prop: 'createTime', label: '添加时间', width: 'auto' }, { prop: 'createTime', label: '开店时间', width: 'auto' }],
      tableData: [],
      tableObj: { operate: true, operateWidth: "220", 
                  "events": [{ type: "primary", label: '禁用', action: "changeState" },
                             { type: "primary", label: '编辑', action: "edit" }]},
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
    cancelEvent() {
      this.dialogObj.isShow = false;
    },
    sureEvent() {
      let data = this.$refs.shopEdit.sendData();
      if(this.dialogObj.title == "新增") {
        this.$https.post("/shop/add", data).then((res) => {
          this.treeData = res.data.data;
          alert(res.data.message)
          this.dialogObj.isShow = false;
        })
      }else if(this.dialogObj.title == "编辑") {
        this.$https.post("/shop/edit", data).then((res) => {
          this.treeData = res.data.data;
          alert(res.data.message)
          this.dialogObj.isShow = false;
        })
      }
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