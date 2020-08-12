<template>
  <div class="null_page">
    <div>
      {{title}}
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: '暂无数据'
      }
    },
    data () {
      return {
      }
    },
    created() {},
    methods: {
    },
  }
</script>
<style scoped>
  .null_page{
    background: #666666;
    display: flex;
    justify-content: center;
    font-size: 30px;
    align-items: center;
    min-height: 500px;
  }
</style>
