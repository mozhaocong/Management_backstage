<template>
  <el-form ref="form" label-width="80px">
    <el-form-item label="店铺名称">
      <el-input v-model="formData.shopName"></el-input>
    </el-form-item>
    <el-form-item label="店铺类型">
      <el-input v-model="formData.shopStatus"></el-input>
    </el-form-item>
    <el-form-item label="地址">
      <el-input v-model="formData.area"></el-input>
    </el-form-item>
    <el-form-item label="添加时间">
      <el-input v-model="formData.createTime"></el-input>
    </el-form-item>
    <el-form-item label="开店时间">
      <el-input v-model="formData.createTime" disabled></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: ["formData"],
  data() {
    return {
    };
  },
  created() {
  },
  methods: {
    sendData() {
      return this.formData;
    }
  },
};
</script>