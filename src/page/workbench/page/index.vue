<template>
  <div class="content">
    <div class="contentA">
      <mProject :projectList="getPage" />
      <mDynamic :dynamicList="getList" />
    </div>
    <mStatistics />
  </div>
</template>

<script>
  export default {
    data () {
      return {
        getList: [],
        getPage: []
      }
    },
    created() {
      this.init()
    },
    methods: {
      init() {
        this.mAPI.Project.getList().then(({data}) => {
          // console.log(data)
          this.getList = data.data
          console.log(this.getList)
        })
        let params = {
          "keyword": '',
          "page": 1,
          "pageSize": 6,
          "status": ''
        }
        this.mAPI.Project.getPage(params).then(({data}) => {
          // console.log(data.data.records)
          this.getPage = data.data.records
        })
      }
    },
  }
</script>
<style scoped lang="scss">
.content{
  display: flex;
  width: 100%;
  height: 100%;
  .contentA {
    height: 100%;
    flex: 1;
    margin:0 15px;
    overflow-y: scroll;
    box-sizing: border-box;
    padding:  15px;
    background: #ffffff;
  }
}
</style>
