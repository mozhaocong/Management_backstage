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
          '现价': '现价' ,
          '所属店铺': '原价格' ,
          '加入时间': '原价格' ,
          '状态': '原价格' ,
          '操作': [] ,
          key:[
            {'产品编号': 'dataA',},
            {'产品名称': 'dataB',type: "div"},
            {'原价格': 'dataC',type: "div"},
            {'现价': 'dataD',type: "div"},
            {'所属店铺': 'dataE',type: "div"},
            {'加入时间': 'dataF',type: "div"},
            {'状态': 'dataG',type: "div"},
            {'操作': 'dataH',type: "Button", typeData: {}},
            ]
        }

        let objA = {
          dataA: '产品编号',
          dataB: '产品名称',
          dataC: '原价格',
          dataD: '现价',
          dataE: '所属店铺',
          dataF: '加入时间',
          dataG: '状态',
          dataH: '操作',
          tableKey: [
            {dataA: 'test', type: 'test'},
            {dataH: [], type: 'button'}
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
          dataH: [
            {name: 1},
            {name: 2},
            {name: 3}
          ],
        }
        this.ObjForSetTableObj(data, obj)
        console.log('obj', obj)
        let img = 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg'
        this.tableList.push(obj, obj, obj)
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
