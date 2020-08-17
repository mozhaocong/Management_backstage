<template>
  <div class="content">
    <div class="title">首页/ 交易信息</div>
    <div class="itemA" >
      <div class="dataList" v-for="(item, index) in dataList" :key="index">
        <div :style="{background:item.color}" class="blockA"></div>
        <div class="blockB">
          <div class="price">{{item.price}}</div>
          <div>{{item.name}}</div>
        </div>
      </div>
    </div>
    <div class="echart_title">月购买订单交易记录</div>
    <m-echart />
  </div>
</template>

<script>
  export default {
    data () {
      return {
        dataList: []
      }
    },
    created() {
      this.setDataList()
    },
    methods: {
      setDataList() {
        let data = [
          {name:'交易金额', price: '34522.36', color: '#FD4D4F'},
          {name:'交易金额', price: '5656', color: '#1890FF'},
          {name:'交易金额', price: '34565', color: '#36CFCA'},
          {name:'交易金额', price: '34', color: '#FFA940'},
          {name:'交易金额', price: '3441.68', color: '#87B87F'}
        ]
        this.dataList = data
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
    min-width: 118px;
    height: 100%;
    flex-direction: column;
  }
  .itemA{
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    font-size: 12px;
    .dataList{
      display: flex;
    }
    .blockA{
      width: 83px;
      height: 76px;
    }
    .blockB{
      width: 122px;
      height: 74px;
      border: 1px solid rgba(187, 187, 187, 1);
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      .price{
        font-size: 20px;
      }
    }
  }
  .echart_title{
    font-size: 20px;
    margin: 20px 0 0px;
    width:100%;
    text-align: center;
  }
  .title {
    /*margin-bottom: 10px;*/
    margin: 10px 10px 10px;
    font-size: 14px;
  }
</style>
