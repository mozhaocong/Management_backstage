<template>
  <div id="app" v-if="link">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    methods: {
      routeLogin(login) {  //判断是否登陆后去到的指定页面啊
        setTimeout(() => {
          this.$nextTick(() => {
            if(login) {
              if(this.$route.name === 'login') {
                this.goTo({name: 'workbench', type :'replace'})
              }
            } else {
              if(this.$route.name !== 'login') {
                this.goTo({name: 'login', type :'replace'})
              }
            }
          }, 100)
        })
      },
    },
    data() {
      return {
        link: true
      }
    },
    created() {
      window.__proto__.appVue = this // 抛出App.vue 的原型
    }
  }
</script>

<style>
  @import './assets/css/form.css';
  body,html,#app{
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }
  .project,.system{
    box-sizing: border-box;
    padding:0 20px;
    overflow: auto;
    height: 100%;
    width: 100%;
  }
  .overflowHidden{
    overflow: hidden !important;
  }
  .erflowscroll{
    overflow: auto;
  }
  .m15_f{
    margin-left: 15px;
  }
  .w100 {
    width: 100% !important;
  }
</style>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                