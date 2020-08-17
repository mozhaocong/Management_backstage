<template>
  <el-dialog
    :modal="true"
    :modal-append-to-body="true"
    append-to-body
    :title="dialogObj.title"
    :width="dialogObj.width"
    :height="dialogObj.height"
    :close-on-click-modal="false"
    :before-close="handleDialogClose"
    :show-close="true"
    :visible.sync="dialogObj.isShow"
    v-if="dialogObj.isShow"
    :close-on-press-escape="true"
  >
    <slot></slot>
    <div
      class="dialog-footer"
      v-if="dialogObj.events!='' && dialogObj.events != undefined && dialogObj.btn!=false"
    >
      <el-button
        size="small"
        v-for="(item,index) in dialogObj.events"
        :type="item.type"
        :key="index"
        @click="btnEvent(item.action)"
        :disabled="item.disabled == null ? false : !item.disabled"
      >{{item.lable}}</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  props: ["dialogObj"],
  data() {
    return {};
  },
  methods: {
    btnEvent(action) {
      this.$emit(action);
    },
    handleDialogClose() {
      this.$emit("handleDialogClose");
      this.dialogObj.isShow = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.dialog-footer {
  text-align: center;
}
</style>
