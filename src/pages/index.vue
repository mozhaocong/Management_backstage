<template>
  <div class="login">
    <div>
      <el-button class="button" @click="gotoTest">去测试页面</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
      }
    },
    created() {
      
    },
    methods: {
      gotoTest() {
        this.goTo({name: 'test'})
      }
    },
  }
</script>
<style scoped lang="scss">
  .login{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

  }
</style>