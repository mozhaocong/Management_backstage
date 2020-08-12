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
        this.$emit("queryData", this.formInline);
      },
      reset() {
        let that = this;
        Object.keys(this.formInline).forEach(key => {
          that.formInline[key] = "";
        });
        this.$emit("queryData", this.formInline);
      },


    },
    watch: {
      emptyFrom() {
        this.formInline = this.emptyFrom;
      }
    }
  }

</script>

<style lang="scss">
  .fromBiao {
    position: relative;
    margin-top:20px;

    .demo-form-inline {
      text-align: left;
      // padding: 15px 20px 0;
      padding: 15px 180px 0 20px;
      background: #fafafa;
      border: 1px solid #ddd;

      .el-form-item {
        width: auto;
        margin-left: 15px;

        .el-form-item__label {
          // width: 92px;
          color: #333;
          width: 120px !important;
        }

        .el-input__inner {
          color: #333;
        }

        .el-form-item__content {
          // width: calc(100% - 92px) !important;
          width: 185px;

          .el-select,
          .el-input,
          .el-date-editor,
          .el-cascader {
            width: 100%;
          }
        }
      }

      .el-date-editor{
        .el-range-input{
          width: 58%;
        }
         .el-range__close-icon{
           margin-right: -7px;
         }
      }
      .itemBtn {
        position: absolute;
        top: 18px;
        right: 20px;
      }
    }
  }
  
</style>
