<template>
  <div class="content">
    <div class="leftContent">
      <lLeftTree />
    </div>
    <div class="rightContent">
      <div class="form">
        <lForm :formData="formData"></lForm>
        <lButton :btns="btns" @add="btns" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    lForm: () => import("@/components/L/lForm"),
    lButton: () => import("@/components/L/lButton"),
    lLeftTree: () => import("@/components/L/lLeftTree"),
  },
  data() {
    return {
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
    };
  },
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