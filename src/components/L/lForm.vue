<template>
  <div>
    <el-form :inline="true" v-model="formInline" class="demo-form-inline">
      <el-form-item v-for="(item,index) in formData" :label="item.label" :key="index">
        <!--input框-->
        <el-input size="medium" v-model="formInline[item.name]" :placeholder="item.label" v-if="item.type==1" @keyup.enter.native="onSubmit">
        </el-input>
        <!--下拉-->
        <el-select size="medium" filterable clearable v-model="formInline[item.name]" :placeholder="item.label"
          v-else-if="item.type==2">
          <el-option v-for="(j,index2) in item.selects" :label="j.label" :value="j.value" :key="index2"></el-option>
        </el-select>
        <!--日期-->
        <el-date-picker size="medium" v-model="formInline[item.name]" type="date" v-else-if="item.type==3"
          :placeholder="item.label" value-format="yyyy-MM-dd">
        </el-date-picker>

        <el-date-picker size="medium" v-model="formInline[item.name]" v-else-if="item.type==4" type="daterange"
          range-separator="至" start-placeholder="开始" end-placeholder="结束" value-format="yyyy-MM-dd"></el-date-picker>

        <!-- 级联选项 -->
        <el-cascader size="medium" v-model="formInline[item.name]" :options="item.selects" v-else-if="item.type==5" :props="{ checkStrictly: true }" clearable></el-cascader>
      </el-form-item>

      <span class="itemBtn">
        <el-button type="primary" size="small" @click="onSubmit">查询</el-button>
        <el-button type="reset" size="small" @click="reset">重置</el-button>
      </span>
    </el-form>
  </div>
</template>

<script>
export default {
  props: ["formData","formSelect"],
  data() {
    return {
      formInline: {},
    }
  },
  mounted() {
    if(this.formSelect){
      this.formInline = this.formSelect;
    }else{
      this.formInline = {};
    }
  },
  methods: {
    onSubmit() {
      alert("查询");
      return;
      this.$emit("queryData", this.formInline);
    },
    reset() {
      alert("重置");
      return;
      let that = this;
      Object.keys(this.formInline).forEach(key => {
        that.formInline[key] = "";
      });
      this.$emit("queryData", this.formInline);
    },
  }
}

</script>

<style lang="scss">
.demo-form-inline{
  background: #fafafa;
  border: 1px solid #ddd;
  margin: 20px 0;
  padding: 20px 20px 0;
  box-sizing: border-box;
  position: relative;
  .el-form-item__label{
    width: 120px;
  }
  .el-input{
    width: 180px;
  }
  .itemBtn{
    position: absolute;
    top: 25px;
    right: 30px;
  }
}
</style>
