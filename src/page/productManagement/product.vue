<template>
  <div>
    <form :formData="formData" />
  </div>
</template>

<script>
export default {
  components: {
    form: () => import("@/components/L/lForm"),
  },
  data() {
    return {
      formData: [],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>