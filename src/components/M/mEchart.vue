<template>
  <div v-if="options">
    <Chart :options="options"
           ref="chart"
           class="chart" />
  </div>
</template>

<script>
  export default {
    components: {
      Chart: () => import('vue-echarts')
    },
    data() {
      return {
        options: null
      }
    },
    created() {
      this.setoptions()
    },
    methods: {
      setoptions() {
        this.options = {
          grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
            containLabel: true
          },
          legend: {
            data: ['所有订单', '待付款', '已付款', '待发货'],
            bottom: "0"
          },
          xAxis: {
            type: 'category',
            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [250, 250, 400, 250, 400, 965, 1100, 600, 1450, 250, 400, 400],
              type: 'bar',
              itemStyle: {
                color: "#2EC7C9",
                barBorderRadius: [10, 10, 0, 0],
              },
              name: '所有订单'

            },
            {
              data: [200, 200, 350, 200, 350, 910, 1000, 500, 1350, 200, 100, 100],
              type: 'bar',
              itemStyle: {
                color: "#B6A2DE",
                barBorderRadius: [10, 10, 0, 0],

              },
              name: '待付款'
            },
            {
              data: [150, 190, 340, 190, 330, 1000, 940, 550, 1400, 244, 150, 200],
              type: 'bar',
              itemStyle: {
                color: "#5AB1EF",
                barBorderRadius: [10, 10, 0, 0],
              },
              name: '已付款'
            },
            {
              data: [200, 200, 350, 200, 350, 910, 1000, 500, 1350, 200, 100, 100],
              type: 'bar',
              itemStyle: {
                color: "#FDB880",
                barBorderRadius: [10, 10, 0, 0],
              },
              name: '待发货'
            }

          ]
        };
      }
    },
    watch:{
    }
  }
</script>

<style scoped lang="scss">
  .chart {
    width: 100%;
    height: 400px;
    background-color: #fff;
  }
</style>
