<template>
  <div class="fromOv" @click="close">
    <div @click.stop="stop" class="fromOv_div erflowscroll">
      <component
        class="formMian"
        :FormData="FormData"
        v-if="$options.components[formItem]"
        v-bind="$attrs"
        v-on="$listeners"
        :is="formItem">
      </component>
    </div>
  </div>
</template>

<script>
  export default {
    inheritAttrs: false,  // 收prosp没定义的属性，多余的属性在$attrs里
    components:{
    },
    props: {
      FormData: {
        type: Object
      }
    },
    data () {
      return {
        formItem: '',
      }
    },
    created() {
      this.init()
    },
    methods: {
      init() {
        try {
          let name = `${this.FormData.formName}`
          window.ImVue.component(name, require(`@/page/template/form/${this.FormData.formName}`).default)
          this.formItem = name
        } catch (e) {}
      },
      stop() {
        // 默认阻止点击事件
      },
      close() {
        this.$emit('close')
      }
    },
  }
</script>

<style>
  @import '../../assets/css/form.css';
</style>
<style scoped lang="scss">
  .fromOv{
    z-index: 999;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    background: rgba(0, 0, 0, 0.4);
    justify-content: center;
    align-items: center;
    .fromOv_div {
      background: #fff;
      max-height: 90%;
      overflow-y: scroll;
    }

  }
  /deep/ .formMian{
    width: 800px;
    height: 100%;
    margin: 25px auto 25px;
    background: #ffffff;
    box-sizing: border-box;
    padding: 0 15px;
    font-family: SourceHanSansSC-regular;
    color: rgba(16, 16, 16, 1);
    .formTitle{
      font-size: 28px;
      text-align: center;
      margin: 25px 0 35px;
    }
    table {width: 100%; text-align: center;margin-bottom: 15px}
  }
</style>