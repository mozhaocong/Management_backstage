<template>
  <div class="content">
    <div class="title">首页</div>
    <div class="itemA" >
      <div class="dataList" v-for="(item, index) in dataList" :key="index">
        <div :style="{background:item.color}" class="blockA"></div>
        <div class="blockB">
          <div class="price">{{item.price}}</div>
          <div>{{item.name}}</div>
        </div>
      </div>
    </div>
    <div class="itemB">
      <div class="StatisticsList" v-for="(Statistics, indexB) in StatisticsList" :key="indexB">
        <div class="Statisticstitle">{{Statistics.title}}</div>
        <div class="blockA" v-for="(item, indexC) in Statistics.list" :key="indexC">
          <div class="name">{{item.name}}</div>
          <div class="value">
            <span class="valueA">{{item.value}}</span>
            <span>{{item.unit}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="itemC">
      <div :style="{background:item.color}" class="blockList" v-for="(item, index) in blockList" :key="index">
        <div class="ico"></div>
        <div class="name">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        dataList: [],
        StatisticsList: [],
        blockList: []
      }
    },
    created() {
      this.setStatisticsList()
      this.setDataList()
      this.setblockList()
    },
    methods: {
      setStatisticsList() {
        let data = [
          {title: '订单统计信息', list: [
              {name: '未处理订单:', value: 0, unit: '个'},
              {name: '待发货订单:', value: 10, unit: '个'},
              {name: '待结算订单:', value: 13, unit: '个'},
              {name: '已成交订单数:', value: 26, unit: '个'},
              {name: '交易失败:', value: 30, unit: '个'},
            ]},
          {title: '商品统计信息', list: [
              {name: '商品总数:', value: 340, unit: '个'},
              {name: '回收站商品:', value: 10, unit: '个'},
              {name: '上架商品:', value: 13, unit: '个'},
              {name: '下架商品:', value: 26, unit: '个'},
              {name: '商品评论:', value: 30, unit: '条'},
            ]},
          {title: '会员登录统计信息', list: [
              {name: '注册会员登录:', value: 340, unit: '次'},
              {name: '支付宝登录:', value: 10, unit: '次'},
              {name: '微信会员登录:', value: 13, unit: '次'},
              {name: ' ', value: ' ', unit: ' '},
              {name: ' ', value: '', unit: ' '},
            ]}
        ]
        this.StatisticsList = data
      },
      setDataList() {
        let data = [
          {name:'商城用户', price: '34522', color: '#36CFCA'},
          {name:'分销记录', price: '140', color: '#FD4D4F'},
          {name:'商城订单', price: '345', color: '#FD4D4F'},
          {name:'交易记录', price: '¥ 34,500', color: '#42A7FF'},
        ]
        this.dataList = data
      },
      setblockList() {
        let data = [
          {name:'添加商品', price: '34522', color: '#36CFCA'},
          {name:'产品分类', price: '140', color: '#597CF4'},
          {name:'个人信息', price: '345', color: '#FF7A45'},
          {name:'系统设置', price: '¥ 34,500', color: '#42A7FF'},
          {name:'商品订单', price: '¥ 34,500', color: '#9253DF'},
        ]
        this.blockList = data
      }
    },
  }
</script>
<style scoped lang="scss">
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
    /*justify-content: space-around;*/
    flex-wrap: wrap;
    font-size: 12px;
    .dataList{
      display: flex;
      margin: 10px;
    }
    .blockA{
      width: 111px;
      height: 76px;
    }
    .blockB{
      width: 165px;
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
  .title {
    /*margin-bottom: 10px;*/
    margin: 10px 10px 10px;
    font-size: 14px;
  }
  .itemB{
    display: flex;
    flex-wrap: wrap;
    font-size: 14px;
    margin-bottom: 24px;
    .StatisticsList{
      margin: 10px;
      width: 276px;
      border-radius: 5px ;
      border-right: 1px solid rgba(217, 217, 217, 1);
      border-left: 1px solid rgba(217, 217, 217, 1);
      border-top: 1px solid rgba(217, 217, 217, 1);
      .Statisticstitle{
        background: #F6F6F7 100%;
        height: 37px;
        line-height: 37px;
        text-align: center;
      }
      .blockA{
        display: flex;
        height: 37px;
        line-height: 37px;
        border-bottom: 1px solid rgba(217, 217, 217, 1);
        .name{text-align: right; width: 40%;}
        .value{
          text-align: center; flex: 1;
          .valueA{color:#FF9800}
        }
      }
    }
  }
  .itemC{
    display: flex;
    flex-wrap: wrap;
    font-size: 14px;
    .blockList{
      margin: 0 10px 0 15px;
      width: 111px;
      height: 76px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      .ico{
        width: 29px;
        height: 29px;
        margin-bottom: 3px;
        background: #eeeeee;
      }
    }

  }
</style>
