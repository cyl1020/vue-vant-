<template>
  <div class="button-diy">
    <button class="button" :style="styleDiy" @click="click">
      <slot></slot>
      {{ name }}
    </button>
  </div>
</template>

<script>
export default {
  name: "ButtonDiy",
  props: {
    styleDiy: {
      type: Object,
      require: false,
      default: () => {
        return {
          background: "skyblue",
        };
      },
    },
    name: {
      type: String,
      require: false,
      default: "按钮",
    },
    click: {
      type: Function,
      require: false,
      default: () => {
        console.log('this is buttonDiy');
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.button-diy {
  .button {
    padding: 12px 14px;
    // background-color: skyblue;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    color: #fff;
  }
}
</style>