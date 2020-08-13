<template>
  <div class="formBtn" ref="formBtn">
    <el-button
      size="small"
      @click="btnEvent(item.action)"
      v-for="(item,index) in btns"
      type="success"
      :key="index"
    >{{item.label}}</el-button>
  </div>
</template>

<script>
export default {
  props: ["btns"],
  methods: {
    btnEvent(action) {
      this.$emit(action);
    },
  },
};
</script>

<style lang="scss">
.formBtn {
  margin-top: 20px;
  text-align: left;
  box-sizing: border-box;
}
</style>
