<template>
  <div class="test3">
    this is test3
    <el-radio-group v-model="radio">
      <el-radio
        :label="item.label"
        v-for="(item, index) in radioData"
        :key="index"
        @click.native="resetRadio(item)"
      >
        {{ item.name }}
      </el-radio>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  name: "Test3",
  data() {
    return {
      radio: "北京",
      radioData: [
        {
          label: "北京",
          name: "北京",
        },
        {
          label: "上海",
          name: "上海",
        },
        {
          label: "成都",
          name: "成都",
        },
      ],
    };
  },
  methods: {
    resetRadio(item) {
      if (item.label == this.radio) {
        setTimeout(() => {
          this.radio = ""
        })
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
