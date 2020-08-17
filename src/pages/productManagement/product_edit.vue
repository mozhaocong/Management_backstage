<template>
  <el-form ref="form" label-width="80px">
    <el-form-item label="产品编号">
      <el-input v-model="formData.goodsCode" disabled></el-input>
    </el-form-item>
    <el-form-item label="产品名称">
      <el-input v-model="formData.goodsName"></el-input>
    </el-form-item>
    <el-form-item label="原价格">
      <el-input v-model="formData.originalPrice"></el-input>
    </el-form-item>
    <el-form-item label="现价">
      <el-input v-model="formData.price"></el-input>
    </el-form-item>
    <el-form-item label="所属店铺">
      <el-input v-model="formData.shop" disabled></el-input>
    </el-form-item>
    <el-form-item label="加入时间">
      <el-input v-model="formData.time" disabled></el-input>
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