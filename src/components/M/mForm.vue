<template>
  <div class="fromOv" @click="close">
    <div @click.stop="stop" style="height: 100%">
      <div class="itemA" style="width: 100%">
        <div class="font_L">
          {{TitleA || Title}}
        </div>
      </div>
      <div @click.stop="stop" class="fromOv_div erflowscroll">
        <component
          class="formMian"
          ref="formMian"
          :FormData="FormData"
          v-if="$options.components[formItem]"
          v-bind="$attrs"
          v-on="$listeners"
          :is="formItem">
        </component>
      </div>
      <div class="fromBtn">
        <el-button
          v-if="FormData.status === 1 "
          size="medium"
          @click="handleEdit">保存</el-button>
        <el-button
          size="medium"
          @click="close">取消</el-button>
      </div>
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
      },
      Title: {
        type: String,
        default: '编辑'
        // default: this.FormData.status === 1 ? '编辑' : '查看'
      },
    },
    data () {
      return {
        formItem: '',
        TitleA: ''
      }
    },
    created() {
      if( this.FormData.status === 2) {
        this.TitleA = '查看'
      }
      this.init()
    },
    methods: {
      handleEdit() {
        if (this.$refs.formMian.determine) {
          this.$refs.formMian.determine()
        }
      },
      init() {
        try {
          let name = `${this.FormData.formName}`
          window.ImVue.component(name, require(`@/pages/template/form/${this.FormData.formName}`).default)
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
<style scoped lang="scss">
  .itemA{
    width: 100%;
    background: #fff;
    height: 70px;
    margin-top: 50px;
    border-bottom: 1px #000 solid;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    align-items: center;
    padding: 0 15px;
  }
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
      height: calc(100% - 270px);
      overflow-y: scroll;
    }

  }
  /deep/ .formMian{
    width: 800px;
    height: calc(100% - 70px);
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

  .fromBtn{
    display: flex;
    align-items: center;
    height: 70px;
    background: #fff;
    border-top: 1px #eeeeee solid;
    justify-content: flex-end;
    box-sizing: border-box;
    padding: 0 15px;
  }

</style>
