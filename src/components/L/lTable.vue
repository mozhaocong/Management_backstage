<template>
  <div class="tableFrom">
    <el-table ref="table" :data="tableData" stripe tooltip-effect="dark" border style="width: 100%" height="460"
      :header-cell-style="{background:'#f1f4f8',color:'#606266'}" v-table-height-adaptive="{table:$refs.table}"
      @selection-change="handleSelectionChange" @sort-change="changeTableSort">
      <template v-for="(th, index) in tableHeader">
        <el-table-column :type="th.type" :prop="th.prop" :sortable="th.sortable" :show-overflow-tooltip="true"
          :width="th.width" :label="th.label" :key="index" v-if="th.prop!='image' && th.label!='ids'">
          <!-- <template slot="header">
            <div class="table-head">
              {{th.label}}
            </div>
          </template> -->
        </el-table-column>

        <el-table-column v-else-if="th.prop =='image' && th.label!='ids'" width="80" :label="th.label" :key="index"
          :resizable="false">
          <template slot-scope="scope">
            <el-popover placement="right-end" width="200" trigger="hover">
              <img :src="scope.row.image" alt="" width="200" height="200">
              <img slot="reference" :src="scope.row.image" height="50" width="50" />
            </el-popover>
          </template>
        </el-table-column>
      </template>
      <el-table-column label="操作" fixed="right" :width="tables.operateWidth" v-if="tables!=null&&tables.operate"
        align="center" :resizable="false">
        <template slot-scope="scope">
          <el-button size="mini" v-for="(item,index) in tables.events" :key="index"
            @click="btnEvent(item.action,scope.row)" :type="item.type" plain>
            {{item.label}}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    props: [
      "tableHeader", //tableHeder表头
      "tableData", //tableData表体 
      "tables",
    ],
    data() {
      return {

      }
    },
    mounted() {},

    methods: {
      //将选中的行发送到父组件
      handleSelectionChange(val) {
        let selectionArr = [];
        val.forEach(function (el) {
          selectionArr.push(el);
        });
        this.$emit('choice', selectionArr);
      },

      changeTableSort(val){
        this.$emit('changeTableSort', val);
      },

      btnEvent(action, row) {
        this.$emit(action, row);
      },
    }
  }

</script>
<style lang="scss" scope>

  .tableFrom {
    margin-top: 20px;

    .item {
      display: inline-block;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      text-align: center;
      line-height: 24px;
      color: #ffffff;
      margin: 0 5px;
    }

    .el-table {
      th {
        .cell {
          div {
            padding-left: 0;
            padding: 0;
            line-height: 16px;
          }
          .table-head {
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }

      td:nth-child(1) {
        text-align: center;
      }
      .caret-wrapper {
        position: absolute;
        top: -3px;
        right: 0;
      }
    }
  }

  .el-popover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);

    img:hover {
      transform: scale(1);
    }
  }
</style>
