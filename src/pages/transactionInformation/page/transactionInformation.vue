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
        let objA = {
          dataA: '产品编号',
          dataB: '产品名称',
          dataC: '原价格',
          dataD: '现价',
          dataE: '所属店铺',
          dataF: '加入时间',
          dataG: '状态',
          dataH: '操作',
          tableKye: [
            {dataA: 'test', M_TableType: 'test'},
            {dataH: [], M_TableType: 'button',  M_TableData: {}}
          ]
        }
        let objAA = {
          dataA: '产品编号',
          dataB: '产品名称',
          dataC: '原价格',
          dataD: '现价',
          dataE: '所属店铺',
          dataF: '加入时间',
          dataG: '状态',
          dataH: '操作',
          tableKye: [
            {M_K_name:'dataA', value:'test', M_TableType: 'test'},
            {M_K_name:'dataH', value:[], M_TableType: 'button',  M_TableData: {}}
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
          data2:'1',
          dataH: [
            {name: 1},
            {name: 2},
            {name: 3}
          ],
        }
  
        let dataforA = function (setObj, obj) {
          let JSONData = JSON.parse(JSON.stringify(setObj))
          setObj.tableKye.forEach(res => {
            if(setObj[res.M_K_name] && obj[res.M_K_name]) {
              res.value = obj[res.M_K_name]
              delete JSONData[res.M_K_name]
            }
          })
          delete JSONData.tableKye
          for(let i in JSONData) {
            let data = {
              M_K_name: i,
              value: obj[i] || ''
            }
            setObj.tableKye.push(data)
          }
          console.log(setObj)
        }
        dataforA(objAA, data)
        this.tableList.push(objAA)
        return
        
        
        let datafor = function (setObj, obj) {
          if(!setObj.tableKye) {
            setObj.tableKye = []
          }
          for (let i in obj){
              setObjfor(i, obj, setObj)
          }
        }
        let setObjfor = function (i, obj, setObj) {
          let isPull = false
          setObj.tableKye.forEach((res) => {
            if(res[i]) {
              res[i] = obj[i]
              isPull = true
            }
          })
          if(!isPull && setObj[i]) {
            let data = {}
            data[i] = obj[i]
            setObj.tableKye.push(data)
          }
        }
  
        datafor(objA, data)
        // console.log(objA)
        this.tableList.push(objA)
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
