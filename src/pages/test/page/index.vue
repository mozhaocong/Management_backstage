<template>
  <div class="testDiv">
    <div v-if="isCurPage('index')" class="ListItem" v-for="(item, index) in list">
      {{item.name}}测试：
      <el-button class="button" @click="gotoTest(item.value)">去测试</el-button>
    </div>
    <mForm v-if="FormData && isCurPage('mForm')" Title="表单选择" :FormData="FormData" @close="goTo({name: 'back'})" @determine="determine" />
    <mPopup v-if="FormData && isCurPage('mPopup')" :FormData="FormData" @close="goTo({name: 'back'})"  @cancel="cancel"/>
    <mEchart v-if="FormData && isCurPage('echart')" @cancel="cancel"/>
  </div>
</template>

<script>
  import PageCtrl from '@/components/common/PageControl'
  export default {
    mixins: [PageCtrl],
    data () {
      return {
        list: [],
        FormData: {}
      }
    },
    created() {
      this.list = [
        {name:'mForm 和 mFromList', value: 'mForm'},
        {name:'mPopup', value: 'mPopup'},
        {name:'echart', value: 'echart'},
      ]
      // 用PageCtrl要设置好初始值
      this.go('index')
    },
    methods: {
      goAfter(type, data) {
        // 配合PageCtrl用的
        // switch (type) {
        //   case 'index':
        //     this.init()
        //     break
        // }
      },
      determine(data) {},
      cancel() {
        this.goTo({name: 'back'})
      },
      gotoTest(data) {
        this.FormData = {
          formName: `from`,
          status: 1,
        }
        this.go(data)
      }
    }
  }
</script>
<style scoped lang="scss">
  .testDiv{
    padding: 30px;
    box-sizing: border-box;
    .ListItem{
      width: 100%;
      display: flex;
      align-items: center;
      
    }
  }
</style>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
