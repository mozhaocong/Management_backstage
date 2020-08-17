<template>
  <el-row>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      v-for="(item,index) in leftMenu"
      :key="index"
    >
      <el-submenu :index="index + ''">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{item.title}}</span>
        </template>
        <el-menu-item-group v-for="(items,indexs) in item.children" :key="indexs">
          <el-menu-item :index="indexs + ''" @click="toPage(items)">{{items.name}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      leftMenu: [
        { title: "产品管理", children: [{ name: "产品类表", path: "product"}, { name: "分类管理", path: "classification"}]},
        { title: "图片管理", children: [{ name: "广告管理", path: "advertisement"}]},
        { title: "交易管理", children: [
          // { name: "交易信息", path: "transactionInformation"}
        // , { name: "交易订单", path: "tradingOrder"} ,
         { name: "订单管理", path: "orderManagement"}]},
        // { title: "会员管理", children: [{ name: "会员列表", path: "membershipList"}]},
        { title: "店铺管理", children: [{ name: "店铺列表", path: "shopList"}]},
      ],
    };
  },
  created(){

  },
  methods: {
    toPage(items) {
      console.log(items)
      this.$router.push({
        path: items.path
      })
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="scss" scoped>
>>> .el-menu-item-group__title {
  display: none !important;
}
</style>