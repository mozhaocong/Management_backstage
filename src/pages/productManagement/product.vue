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
      formDatas: [
        {
          label: "年度",
          type: 1,
          name: "ayear",
        },
        {
          label: "地市",
          type: 2,
          name: "cityid",
          selects: [],
        },
        {
          label: "博物馆",
          type: 1,
          name: "mname",
        },
        {
          label: "是否导入考评数据",
          type: 2,
          name: "isimport",
          selects: [
            {
              label: "是",
              value: 1,
            },
            {
              label: "否",
              value: 0,
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>