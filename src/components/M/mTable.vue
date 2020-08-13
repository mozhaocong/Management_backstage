<template>
  <div class="mTable">
    <el-table
      :data="tableData"
      :span-method="objectSpanMethod"
      border
      style="width: 100%; margin-top: 20px"
    >
      <el-table-column
        :key="index"
        :label="item.name"
        v-for="(item, index) in itemList"
        :width="item.type === 'button'? 200 : ''"
      >
        <template slot-scope="scope">
          <div v-if="item.type === 'button'" style="display: flex;width: 200px">
            <div v-for="(item, index) in scope.row[item.value]" :key="index" >
              <mButton :type="item.value" @buttonClick="item.method && item.method(scope)" />
            </div>
          </div>
          <div v-else-if="item.type === 'img'">
            <div style="width: 50px" v-if="scope.row[item.value]">
              <img :src="scope.row[item.value]" alt="">
            </div>
            <div v-else>
              为空
            </div>
          </div>
          <div v-else-if="item.type === 'input'">
            <el-input class="mel-input" v-model="scope.row[item.value]" clearable></el-input>
          </div>
          <div v-else style="margin-left: 10px">{{ scope.row[item.value]}}</div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    props: {
      tableList: Array,
    },
    data() {
      return {
        itemList: [], // 表头数据
        tableData: [], // 表单数据
      };
    },
    created() {
      this.init();
    },
    methods: {
      init() {
        if (this.tableList.length === 0) {
          return;
        }
        let data = this.tableList;
        let dataA = JSON.parse(JSON.stringify(data));
        let dataB = {}
        let dataC = [] // 表头数据
        let dataD = [] // 表单数据
        dataA[0].tableKey.forEach(res => {
          dataB[res.name] = {
            ...res
          }
        })
        // console.log('dataB', dataB)
        // console.log('dataA[0]', dataA[0])
        for(let i in data[0]) { //表头设置方法
          if(i !== 'tableKey') {
            let obj = dataB[i]
            delete obj.value
            obj.value = obj.name
            obj.name = data[0][i]
            dataC.push(obj)
          }
        }
        data.forEach(res => {
          let obj = {}
          res.tableKey.forEach(resb => {
            obj[resb.name] = resb.value
          })
          dataD.push(obj)
        })
        this.itemList = dataC;
        this.tableData = dataD;
      },
      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        return false;
        if (columnIndex === 0) {
          if (rowIndex % 2 === 0) {
            return {
              rowspan: 2,
              colspan: 1,
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0,
            };
          }
        }
      },
    },
    watch: {
      tableList: {
        handler(newValue, oldValue) {
          // console.log('init')
          this.init();
        },
        deep: true,
      },
    },
  };
</script>
<style scoped lang="scss">
  .mTable {
    margin: 0;
  }
  img{
    width: 100%;
  }
</style>
