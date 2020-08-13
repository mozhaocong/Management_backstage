<template>
  <div class="button"  @click="btn">
    <el-button type="primary" v-if="type === 'disable'" >禁用</el-button>
    <el-button type="primary" v-if="type === 'edit'" icon="el-icon-edit"></el-button>
    <el-button type="primary" v-if="type === 'delete'" icon="el-icon-delete"></el-button>
  </div>
</template>

<script>
  export default {
    components: {
    },
    props: {
      type: {
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
      btn() {
        this.$emit('buttonClick')
      }
    },
    watch:{
    }
  }
</script>

<style scoped lang="scss">
  .button {
  }
</style>
