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
        total: 10,
        setObj: {}
      }
    },
    created() {
      this.init()
      this.initGetPage()
    },
    methods: {
      initGetPage() {
        let data = {
          userCode: '13226150',
          orderNo: '',
          shopCode: '',
          status: '',
          pageSize: '10',
          page: '1',
          startTime: '',
          endTime: ''
        }
        this.mAPI.transactionInformation.getPage(data).then(({data}) => {
          let records = data.data.records
          this.setTableList(records)
        })
      },
      setTableList (records) {
        this.tableList = []
        records.forEach(res => {
          res.goodsImg = res.orderDetailList[0].goodsImg
          res.receiver = res.orderAddress.receiver
          res.dataH = [
            {value: 'disable', method:(data) => {this.testdata('disable',data)}},
            {value: 'edit'},
            {value: 'delete'},
          ]
          let setObjA = JSON.parse(JSON.stringify(this.setObj))
          this.ObjForSetTableObj(setObjA, res)
          this.tableList.push(setObjA)
        })
        
      },
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
        this.setObj = {
          orderNo: '产品编号',
          shopName: '产品名称',
          goodsImg: '产品图',
          payPrice: '原价格',
          price: '现价',
          dataE: '所属店铺',
          createTime: '加入时间',
          receiver: '用户名',
          dataH: '操作',
          tableKey: [
            {name:'dataH', value:[], type: 'button'},
            {name:'goodsImg', value:'', type: 'img'},
          ]
        }
        // let data = [
        //   {
        //     dataA:'123',
        //     dataC:'10$',
        //     dataD:'3$',
        //     dataE:'阿巴斯',
        //     dataF:'1994',
        //     dataG:'1',
        //     dataH: [
        //       {value: 'disable', method:(data) => {this.testdata('disable',data)}},
        //       {value: 'edit'},
        //       {value: 'delete'},
        //     ],
        //   },
        // ]
        // data.forEach(res => {
        //   let setObjA = JSON.parse(JSON.stringify(setObj))
        //   this.ObjForSetTableObj(setObjA, res)
        //   this.tableList.push(setObjA)
        // })
        
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
