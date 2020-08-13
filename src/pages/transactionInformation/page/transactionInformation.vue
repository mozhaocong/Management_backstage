<template>
  <div class="content">
    <mTable ref="mTable" class="_table" :tableList="tableList"/>
    <mPagination :total="total"  :currentPage='page' :pageSize="pageSize" @SizeChange="SizeChange" @CurrentChange="CurrentChange" />
    <div @click="basbas">transactionInformation</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tableList: [],
        page: 1,
        pageSize: 10,
        total: 10
      }
    },
    created() {
      this.init()
    },
    methods: {
      testdata(a, b) {
        // b.row.dataG = 2

        this.tableList[b.$index].tableKey.forEach(res => {
          if(res.name ==='dataG') {
            res.value = 2
          }
        })

      },
      SizeChange(data) {
        this.page = 1
        this.pageSize = data
        this.init()
      },
      CurrentChange(data) {
        console.log(data)
        this.page = data
        this.init()
      },
      init() {
        let setObj = {
          dataA: '产品编号',
          dataB: '产品名称',
          dataC: '原价格',
          dataD: '现价',
          dataE: '所属店铺',
          dataF: '加入时间',
          dataG: '状态',
          dataH: '操作',
          tableKey: [
            {name:'dataA', value:'test'},
            {name:'dataH', value:[], type: 'button'},
            {name:'dataB', value:'', type: 'img'},
            {name:'dataD', value:'', type: 'input'}
          ]
        }
        let data = [
          {
            dataA:'123',
            dataB:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597343174235&di=f2f3b77ea7ee7994bfac73063ccf2ba4&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fbaike%2Fpic%2Fitem%2Ff703738da977391243bca26cfe198618367ae221.jpg',
            dataC:'10$',
            dataD:'3$',
            dataE:'阿巴斯',
            dataF:'1994',
            dataG:'1',
            dataH: [
              {value: 'disable', method:(data) => {this.testdata('disable',data)}},
              {value: 'edit'},
              {value: 'delete'},
            ],
          },
          {
            dataA:'123',
            dataC:'10$',
            dataD:'3$',
            dataE:'阿巴斯',
            dataF:'1994',
            dataG:'1',
            dataH: [
              {value: 'disable', method:(data) => {this.testdata('disable',data)}},
              {value: 'edit'},
              {value: 'delete'},
            ],
          },
        ]
        data.forEach(res => {
          let setObjA = JSON.parse(JSON.stringify(setObj))
          this.ObjForSetTableObj(setObjA, res)
          this.tableList.push(setObjA)
        })

      },
      basbas() {
        console.log('tableData', this.$refs.mTable.tableData)
        // let ObjB = this.TableListForSetObj(this.$refs.mTable.tableData, this.tableList)
        // console.log('ObjB', ObjB)
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
    width: 800PX;
    height: 100%;
    flex-direction: column;
  }
</style>
