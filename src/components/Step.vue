<template>
  <div class="step">
    <div class="step-content">
      <keep-alive>
        <slot name="content"></slot>
      </keep-alive>
    </div>
    <div class="step-bottom_option">
      <el-button
        type="primary"
        round
        @click="checked"
        v-show="activeNumber == cpnListLength - 1"
        >保存</el-button
      >
      <el-button
        type="primary"
        round
        @click="checked"
        v-show="activeNumber != cpnListLength - 1"
        >下一步</el-button
      >
      <el-button type="primary" round @click="prev" v-show="activeNumber != 0"
        >上一步</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Step",
  props: {
    cpnListLength: {
      type: Number,
      default: 2,
    },
    value: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      activeNumber: this.value,
    };
  },

  methods: {
    prev() {
      this.activeNumber--;
      this.$emit("input", this.activeNumber);
    },

    checked() {
      this.$emit("checked");
    },

    next() {
      if (this.activeNumber !== this.cpnListLength - 1) {
        this.activeNumber++;
        this.$emit("input", this.activeNumber);
      } else {
        this.$emit("save");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.step {
  width: 100%;
  height: 630px;

  &-content {
    width: 100%;
    height: (600px - 49px);
    overflow-y: auto;
  }

  &-bottom_option {
    width: 100%;
    height: 49px;
    margin-top: 30px;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;

    /deep/ .el-button {
      height: 100%;
      padding: 0 50px;
      margin: 0 10px;
    }
  }
}
</style>