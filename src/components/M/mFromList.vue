<template>
  <div class="fromList">
    <div class="fromItemList" :class="[border ? 'YesBorder': 'NoBorder']" v-for="(item,indexA) in itemList" :key="indexA">
      <div class="fromItem"  :style="{width: (100/item.list.length) + '%'}" v-for="(data,indexB) in item.list" :key="indexB">
        <div class="fromIBlockA">
          <div>
            {{data.name}}：
          </div>
        </div>
        <div class="fromIBlockB">
          <span v-if="data.valueName" style="margin: 0 15px">
               {{data.valueName}}
          </span>
          <el-input
            v-else-if="data.type === 'disabled' || disabled"
            class="mel-input "
            :placeholder="data.placeholder"
            v-model="data.value"
            :disabled = 'true'
            clearable>
          </el-input>
          <el-input
            v-else-if="data.type === ''"
            class="mel-input flex"
            :placeholder="data.placeholder"
            v-model="data.value"
            clearable>
          </el-input>
          <el-select class="w100"
                     v-model="data.value"
                     filterable placeholder="请选择"
                     @change="data.typeData.selectChange(data)"
                     v-else-if="data.type === 'select' && data.typeData.selectData">
            <el-option
              v-for="(selec, index) in data.typeData.selectData"
              :key="index"
              :label="selec.label"
              :value="selec.value">
            </el-option>
          </el-select>
          <el-date-picker
            v-model="data.value"
            v-else-if="data.type === 'Date'"
            type="date"
            class="w100"
            placeholder="选择日期">
          </el-date-picker>
          <m-upload  v-else-if="data.type === 'Upload'" v-model="data.value"  @UploadSuccess="data.typeData.UploadSuccess($event)">
          </m-upload>
          <div   v-else-if="data.type === 'Div'" style="height: 40px;width: 0">
<!--            没有东西-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    components:{
    },
    props: {
      itemList: Array,
      border: {
        type: Boolean,
        default: true
      },
      disabled: {
        type: Boolean,
        default: false
      },
    },
    data () {
      return {
      }
    },
    created() {
    },
    methods: {
    },
  }
</script>
<style scoped lang="scss">
  .fromList{
    /*display: flex;*/
    margin:  15px 0;
    width: 100%;
    .fromItemList {
      display: flex;
      /*border: 1px #000 solid;*/
      /*margin-bottom: 15px;*/
      .fromItem{
        display: flex;
        align-items: center;
        .fromIBlockA{
          width: 50%;
          height: 100%;
          display: flex;
          align-items: center;
          /*border-right: 1px #000000 solid;*/
          box-sizing: border-box;
          padding-left: 5px;
        }
        .fromIBlockB{
          width: 50%;
          height: 100%;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          /*border-right: 1px #000000 solid;*/
        }
      }
    }
  }
  /deep/.fromList{
    .YesBorder{
      .mel-input {
        input {
          border:0px !important;
          outline:none !important;
        }
      }
      .flex{
        flex: 1;
      };
      border: 1px #000 solid;
      .fromIBlockA,.fromIBlockB{
        border-right: 1px #000000 solid;
      }
    }
    .NoBorder{margin-bottom: 15px}
  }

</style>