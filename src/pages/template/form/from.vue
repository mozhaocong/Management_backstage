<template>
  <div class="form4">
    <mFromList  :itemList="itemList"/>
    <mTable ref="mTable" class="_table _div" :tableList="tableList"/>
    <mTable ref="mTableB" class="_table _div" :tableList="tableListB"/>
  </div>
</template>

<script>
  export default {
    props: {
      FormData: Object
    },
    data () {
      return {
        enclosures: [],
        itemList: [],
        itemListB: [],
        tableList: [],
        tableListB: [],
      }
    },
    created() {
      this.init()
    },
    methods: {
      setTableList() {
        let data= [
          {Items: 'tableList-1', Requirement: '517 Min', Actural: '' , key:[{Actural: 'tableList-2',type: "text"}] },
          {Items: 'tableList-2', Requirement: '517 Min', Actural: '' , key:[{Actural: 'tableList-3',type: "text"}] },
          {Items: 'tableList-3', Requirement: '517 Min', Actural: '' , key:[{Actural: 'tableList-4',type: "text"}] },
          {Items: 'tableList-1', Requirement: '517 Min', Actural: '' , key:[{Actural: 'tableList-5',type: "text"}] },
        ]
        this.tableList =data
      },
      setTableListB() {
        let data= [
          {Items: 'tableListB-1', Requirement: '/', Actural: '/' },
          {Items: 'tableListB-2', Requirement: '/', Actural: '/' },
          {Items: 'tableListB-3', Requirement: '/', Actural: '/'},
          {Items: 'tableListB-4', Requirement: '/', Actural: '/' },
        ]
        this.tableListB =data
      },
      setItemList() {
        this.itemList = [
          {list: [
              {name:'itemList-1', value: '', key: 'itemList-1', type:'', placeholder:'表必填'},
            ]},
          {list: [
              {name:'itemList-2',value: '', key: 'itemList-2', projectKey:'itemList-2', type:'', placeholder:'表必填'},
              {name:'itemList-3',value: '', key: 'itemList-2', projectKey:'itemList-3', type:'', placeholder:'表必填'},
            ]},
          {list: [
              {name:'itemList-4',value: '', key: 'itemList-2', projectKey:'itemList-4', type:'', placeholder:'表必填'},
              {name:'itemList-5',value: '', key: 'itemList-4', projectKey:'itemList-5', type:'', placeholder:'表必填'},
              {name:'itemList-6',value: '', key: 'itemList-6', projectKey:'itemList-6', type:'', placeholder:'表必填'},
            ]},
          {list: [
              {name:'itemList-7',value: '', key: 'itemList-7', projectKey:'itemList-7', type:'', placeholder:'表必填'},
            ]},
          {list: [
              {name:'itemList-8',value: '', key: 'itemList-8', projectKey:'itemList-8', type:'', placeholder:'表必填'},
            ]},
          {list: [
              {name:'itemList-9',value: '', key: 'itemList-9', projectKey:'itemList-9', type:'', placeholder:'表必填'},
            ]},
        ]
        return
        // if(this.FormData.data) {
        //   this.projectForSetArray(this.FormData.data, this.itemList)
        // }
      },
      init() {
        this.setItemList()
        this.setTableList()
        this.setTableListB()
        // let res = {}
        // this.dataForSetArray(res, this.itemList)
        // this.dataForSetObj(res, this.itemObj)
        // this.dataForSetTableList(res, this.tableList)
        // this.dataForSetArray(this.itemObj, this.itemListB)
      },
      determine() {
        let ObjA = this.ArraySetObj(this.itemListB)
        let ObjB = this.TableListForSetObj(this.$refs.mTable.tableData, this.tableList)
        this.ObjForSetObj(ObjA, this.itemObj)
        this.ObjForSetObj(ObjB, this.itemObj)
      }
    },
  }
</script>
<style scoped lang="scss">
  .nullItem{
    width: 100%;
    border: 1px #eeeeee solid;
    text-align: center;
  }
  .form4{
    width: 900px;
  }
  .itemA{
    display: flex;
    .blockA{
      border:1px #000 solid;
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: center;
    }
  }
  .itemB{
    width: 100%;
    display: flex;
    align-items: baseline;
    .blockA{
      width: 50%;
      display: flex;
      flex-wrap: wrap;
      ._div{
        width: 100%;

      }
    }
  }
  /deep/ ._table {
    table{margin: 0 !important;}
  }
</style>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
