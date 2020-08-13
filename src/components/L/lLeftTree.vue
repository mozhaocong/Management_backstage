<template>
  <div class="leftTree">
    <el-tree :data="data" :props="defaultProps" accordion @node-click="handleNodeClick"></el-tree>
  </div>
</template>

<script>
export default {
  props: ["treeData"],
  data() {
    return {
      data: [{ label: "商品分类列表", children: [{ label: "蔬菜水果", children: [{ label: "蔬菜"}, { label: "水果"}]}]},
             { label: "商品分类列表1", children: [{ label: "蔬菜水果1", children: [{ label: "蔬菜1"}, { label: "水果1"}]}]}],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  mounted() {},
  methods: {
    handleNodeClick(val) {
      console.log(val);
    },
  },
};
</script>

<style lang="scss">
.el-tree {
  padding: 20px;
  box-sizing: border-box;
}
.el-tree-node__expand-icon {
  font-size: 14px;
}
.el-tree-node__label {
  font-size: 16px;
}
</style>
