<template>
  <div class="content">
    <div class="leftContent">
      <div class="treeTitle">产品类型列表</div>
      <lLeftTree v-if="treeData" :treeData="treeData" :defaultProps="defaultProps" @leftTreePick="leftTreePick"/>
    </div>
    <div class="rightContent">
      <div class="btnBox">
        <el-button
          size="small"
          @click="btnEvent(item.action)"
          v-for="(item,index) in btns"
          type="success"
          :key="index"
        >{{item.label}}</el-button>
      </div>

      <el-form label-width="80px">
        <el-form-item label="分类名称">
          <el-input v-model="formData.categoryName" placeholder="输入分类名称"></el-input>
        </el-form-item>
        <el-form-item label="排序">
          <el-input v-model="formData.sort" placeholder="数值越大排列越靠前"></el-input>
        </el-form-item>
        <el-form-item label="父类名称">
          <el-select size="medium" clearable v-model="formData.parentId">
            <el-option v-for="item in treeData" :label="item.categoryName" :value="item.id" :key="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注">
          <el-input type="textarea" :autosize="{ minRows: 2, minRows: 4}" maxlength="100" v-model="formData.desc" show-word-limit placeholder="说点什么..."></el-input>
        </el-form-item>
        <el-button size="small" type="primary" @click="addOrUpdate">提交</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    lLeftTree: () => import("@/components/L/lLeftTree"),
  },
  data() {
    return {
      treeData: [],
      defaultProps: {
        label: "categoryName",
        children: "children",
      },
      btns: [{ label: "新增子类型", action: "add" }, 
             { label: "禁用该类型", action: "disable" },
             { label: "删除该类型", action: "del" }],
      formData: {},
    };
  },
  created() {
    this.getGoodsCategoryList();
  },
  methods: {
    getGoodsCategoryList() {
      this.$https.get("/goods/goodsCategory/getList").then((res) => {
        this.treeData = res.data.data;
      })
    },
    leftTreePick(val) {
      this.formData = val;
    },
    btnEvent(val) {
      console.log(val)
      switch(val) {
        case 'add':
          this.formData.level = 2;
          this.addOrUpdate();
          break;
        case 'disable':
          this.formData.state = 2;
          this.addOrUpdate();
          break;
        case 'del':
          alert("暂不支持删除")
          // this.addOrUpdate();
          break;
      }
    },
    addOrUpdate() {
      this.$https.post("/goods/goodsCategory/addOrUpdate", this.formData).then((res) => {
        console.log(res)
        alert(res.data.message)
        this.getGoodsCategoryList();
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.treeTitle{
  background-color: #61A7CF;
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  box-sizing: border-box;
  color: #ffffff;
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
  .btnBox {
    padding-left: 250px;
    box-sizing: border-box;
    margin-top: 80px;
    .el-button {
      margin-right: 10px;
    }
  }
  .el-form {
    width: 500px;
    margin-left: 170px;
    margin-top: 50px;
    .el-button--primary {
      margin-left: 80px;
      width: 80px;
    } 
  }
}
</style>