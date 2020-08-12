<template>
  <div class="content">
    <mTable ref="mTable" class="_table" :tableList="tableList"/>
    <div @click="basbas">transactionInformation</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tableList: []
      }
    },
    created() {
      this.init()
    },
    methods: {
      init() {
        let obj =  {
          '产品编号': 'tableList-1',
          '产品名称': '517 Min',
          '原价格': '原价格' ,
          '现价': '原价格' ,
          '所属店铺': '原价格' ,
          '加入时间': '原价格' ,
          '状态': '原价格' ,
          '操作': '原价格' ,
          key:[
            {'产品编号': 'dataA',},
            {'产品名称': 'dataB',type: "div"},
            {'原价格': 'dataC',type: "div"},
            {'现价': 'dataD',type: "div"},
            {'所属店铺': 'dataE',type: "div"},
            {'加入时间': 'dataF',type: "div"},
            {'状态': 'dataG',type: "div"},
            {'操作': 'dataH',type: "div", typeData: {}},
            ]
        }

        let data = {
          dataA:'123',
          dataB:'456',
          dataC:'10$',
          dataD:'3$',
          dataE:'阿巴斯',
          dataF:'1994',
          dataG:'1',
          dataH:'1',
        }
        this.ObjForSetTableObj(data, obj)
        console.log(obj)
        let img = 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg'
        this.tableList.push(obj, obj, obj)
        // this.ObjForSetTableList(data,  this.tableList)
      },
      basbas() {
       console.log('tableData', this.$refs.mTable.tableData)
        let ObjB = this.TableListForSetObj(this.$refs.mTable.tableData, this.tableList)
        console.log('ObjB', ObjB)
      }
    },
  }
</script>
<style scoped lang="scss">
  ._table{
    width: 100%;
  }
.content{
  display: flex;
  width: 100%;
  height: 100%;
}
</style>
