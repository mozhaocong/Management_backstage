<template>
  <div class="title">
    <div class="itemA">
      <i class="img"></i>
      电商管理后台
    </div>
    <div></div>
    <div class="itemC">
      <div class="block"></div>
      <div>2019年11月27日 14:36:09</div>
      <div class="block"></div>
      <el-dropdown trigger="click" @command="handleCommand">
        <div class="el-dropdown-link">
          {{user}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item   command="LogOut">登出</el-dropdown-item>
          <el-dropdown-item   command="ChangePassword">修改密码</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        user: ''
      }
    },
    created() {
      this.user = '模板'
    },
    methods: {
      handleCommand(e) {
        this[e]()
      },
      LogOut() {
        window.localStorage.clear()
        this.goTo({name: 'login'})
      },
      ChangePassword() {
        console.log('ChangePassword')
      }
    },
  }
</script>
<style scoped lang="scss">
  /deep/.title{
    background: #fff;
    display: flex;
    justify-content: space-between;
    height: 65px;
    align-items: center;
    box-sizing: border-box;
    /*padding: 0 30px;*/
    img {height: 30px}
    .el-dropdown-link {
      cursor: pointer;
      color: #409EFF;
    }
    .el-dropdown{
      font-size: 24px;
    }
  }
  .itemA{
    width: 240px;
    background: #002140;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color: #ffffff;
    .img{width: 30px;height: 30px;background: #eeeeee}
  }
  .itemC{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    .block{
      width: 1px;
      height: 29px;
      margin: 0 15px;
      background: #BBBBBB;
    }
  }
</style>
