<template>
  <div class="home">
    <MTitle />
    <div class="container">
      <leftMenu class="leftMenu" />
      <!-- <MSidebar class=" left_item"/> -->
      <div class="routerView">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  components: {
    MTitle: () => import("../components/M/mTitle"), //头部
    MSidebar: () => import("../components/M/mSidebar"), //侧方导航
    leftMenu: () => import("../components/L/lLeftMenu"), //侧方导航
  },
  created() {},
  methods: {},
};
</script>
<style scoped lang="scss">
.home {
  height: 100%;
  width: 100%;
  background: #f0f0f2;
  .left_item {
    height: 100%;
    width: 150px;
  }
}
.container {
  width: 100%;
  height: calc(100% - 55px);
  background-color: #f5f5f5;
  position: relative;
  display: flex;
  .leftMenu {
    width: 240px;
    background-color: #ffffff;
  }
  .routerView {
    height: 100%;
    width: calc(100% - 240px);
    padding: 30px;
    box-sizing: border-box;
  }
}
</style>
