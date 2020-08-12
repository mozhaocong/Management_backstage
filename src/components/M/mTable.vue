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
        :prop="item.value"
        :label="item.name"
        v-for="(item, index) in itemList"
      >
        <template slot-scope="scope">
          <div v-if="item.type">
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
      itemList: [],
      tableData: [],
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
      // let data = JSON.parse(JSON.stringify(this.tableList))
      let data = this.tableList;
      let dataA = JSON.parse(JSON.stringify(data));
      dataA.forEach((res) => {
        delete res.key;
      });
      let itemList = [];
      let keyData = [];
      if (data[0].key) {
        data[0].key.forEach((res) => {
          let data = {};
          for (let i in res) {
            if (i !== "type") {
              data.id = i;
            }
          }
          data.type = res.type;
          keyData.push(data);
        });
      }
      for (let i in data[0]) {
        let itemListData = {};
        if (i !== "key") {
          itemListData.value = i;
          itemListData.name = i;
          if (keyData.length > 0) {
            keyData.forEach((res) => {
              if (res.id + "" === i + "") {
                itemListData.type = res.type;
              }
            });
          }
          itemList.push(itemListData);
        }
      }
      this.itemList = itemList;
      this.tableData = dataA;
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
</style>
