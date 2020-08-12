<template>
  <div class="ovher" @click="ovher">
    <div @click.stop="stop" class="ovher_item">
      <slot></slot>
    </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    created() {},
    components: {
    },
    methods: {
      stop() {},
      ovher() {
        this.$emit('ovherBtn')
      }
    },
  }
</script>
<style scoped lang="scss">
  .ovher{
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    background: rgba(0, 0, 0, 0.5);
    .ovher_item{
      width: 500px;
      height: 500px;
      background: #ffffff;
    }
  }

</style>
