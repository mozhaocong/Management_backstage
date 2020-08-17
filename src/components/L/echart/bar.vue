<template>
  <div class="bar" ref="chart" :id="elId">

  </div>
</template>

<script>
  import echarts from 'echarts/lib/echarts'

  export default {
    props: ["barData",'barTitle',"color", "unit", "title"],
    data() {
      return {
        elId: ''
      }
    },
    created() {
      this.elId =  Math.random();  //获取随机id
    },
    watch: {
      barData: {
        deep: true,
        handler: function (newVal, oldVal) {
          this.barData = newVal;
          this.initCharts();
        }
      },

      barTitle() {
        this.initCharts();
      }
    },
    methods: {
      initCharts() {
        let obj = [];
        let title = [];

        //设置属性
        for (var i = 0; i < this.barData.length; i++) {
          obj[i] = {
            normal: {
              color: this.color[i],
              barBorderRadius: [50, 50, 0, 0], //柱条圆角
            },
            
          } 
          this.barData[i].itemStyle = obj[i];
          this.barData[i].barWidth = 8;  //柱条宽度
          title.push(this.barData[i].name);   
        }
        
        const option = {
          tooltip: {
            trigger: 'axis'
          },
          title: {
            left: 'left',
            text: this.title,
          },
          legend: {
            data: title,
            right:30,
            top: 0
          },
          grid: {
            // top:'10%',
            // left: '4%',
            // right: this.unit == null ? '2%' : '6%',//如果有单位则预留空位
            // bottom: '10%',
            x:25,
            y:75,
            x2:this.unit==null?'3%':'90',
            y2:20,
            containLabel: true
          },
        
          xAxis: {
            type: 'category',
            offset: 0,
            name: this.unit,
            boundaryGap: true,
            axisTick: {
              show: false, //去刻度
              offset: 10,
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#717483'
              }
            },
            data: this.barTitle
          },
          yAxis: {
            offset: 0, //Y轴数值偏离值 
            type: 'value',
            axisTick: {
              show: false //去刻度
            },
            axisLabel: {
              margin: 2,
              show: true,
              textStyle: {
                color: '#717483'
              }
            },
            axisLine: {
              show: true
            }
          },
          series: this.barData
        }
        const chartObj = echarts.init(document.getElementById(this.elId));
        //多次调用时option选项默认是合并（merge）的，加上true表示不合并配置
        chartObj.setOption(option,true);
         window.onresize = function () {
          chartObj.resize();
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.initCharts();
      })
    }
  }

</script>
