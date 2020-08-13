<template>
  <div class="button">
    <el-button type="primary"  v-if="tpye === 'Disable'" Disable>禁用</el-button>
    <el-button type="primary" icon="el-icon-edit"></el-button>
    <el-button type="primary" icon="el-icon-delete"></el-button>
  </div>
</template>

<script>
  export default {
    components: {
    },
    props: {
      tpye: {
        type: String,
        default: 'disable'
      }
    },
    data() {
      return {
      }
    },
    created() {
    },
    methods: {
    },
    watch:{
    }
  }
</script>

<style scoped lang="scss">
  .button {
  }
</style>