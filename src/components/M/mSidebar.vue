<template>
  <div class="MSidebar">
    <div v-if="!isBack" >
      <div class="item" v-for="(item, index) in items" :key="index">
        <div  class='name' @click="itemBtn(item)" :class="{onSelect: !item.open && item.value === SelectItem}">
          {{item.name}}
          <i v-if="!item.open && item.childList" class="el-icon-arrow-down"></i>
          <i v-if="item.open && item.childList" class="el-icon-arrow-up"></i>
        </div>
        <div v-if="item.open">
          <div :class="{onSelect: item.open && child.value === SelectChild}"  @click="itemBtnB(item,child)" v-for="(child, indexB) in item.childList" :key="indexB">
            <div class='name'>{{child.name}}</div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div  class="item" v-for="(itemA, indexA) in itemsA" :key="indexA">
        <div  class='name' @click="itemBtn(itemA)" :class="{onSelect: !itemA.open && itemA.value === SelectItem}">
          {{itemA.name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MSidebar',
    data () {
      return {
        items: [
          {name: '首页', value: 'workbench'},
          {name: '项目管理', value: 'project'},
          {name: '零件列表', value: 'Material'},
          {name: '表单列表', value: 'systemTemplate'},
          {name: '账号列表', value: 'userList'}
        ],
        itemsA: [
          {name: '首页', value: 'workbench'},
          {name: '返回', value: 'back'},
        ],
        SelectItem: 'workbench',
        SelectChild: '',
        isBack: false
      }
    },
    created() {
      // console.log(this.$route)
      this.setItems(this.$route.name)
    },
    methods: {
      itemBtn(item) {
        if (item.childList) {
          item.open = !item.open
          return
        }
        this.SelectItem = item.value
        this.goTo({name: item.value})
      },
      itemBtnB(item, child) {
        this.SelectItem = item.value
        this.SelectChild = child.value
        this.goTo({name: child.value})
      },
      setItems(data) {
        let onSelect = true
        this.items.forEach(res => {
          if (res.value === data) {
            this.SelectItem = data
            onSelect = false
          }
        })
        this.isBack = onSelect
      }
    },
    watch:{
      $route(to,from){
        // console.log('to',to)
        this.setItems(to.name)
        // if(to)
      }
    }
  }
</script>
<style scoped lang="scss" >
  .onSelect{
    background: #13ce66;
  }
  .MSidebar{
    width: 370px;
    height: 100%;
    background: #fff;

    .item{
      border-bottom: 1px #666666 solid;
      min-height: 49px;
      line-height: 49px;
      width: 100%;
    }
    .name{
      width: 100%;
      box-sizing: border-box;
      padding: 0 15px;
    }
  }
</style>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                