<template>
  <el-form ref="form" label-width="80px">
    <el-form-item label="订单编号">
      <el-input v-model="formData.orderNo" disabled></el-input>
    </el-form-item>
    <el-form-item label="店铺名称">
      <el-input v-model="formData.shopName" disabled></el-input>
    </el-form-item>
    <el-form-item label="原价">
      <el-input v-model="formData.price" disabled></el-input>
    </el-form-item>
    <el-form-item label="支付金额">
      <el-input v-model="formData.payPrice" disabled></el-input>
    </el-form-item>
    <el-form-item label="填写配送单号">
      <el-input v-model="formData.deliveryId"></el-input>
    </el-form-item>
    <el-form-item label="填写快递公司">
      <el-input v-model="formData.deliveryName"></el-input>
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

<style lang="scss" scoped>
>>> .el-form-item__label{
  width: 110px !important;
}
>>> .el-form-item__content{
  margin-left: 110px !important;
}
</style>