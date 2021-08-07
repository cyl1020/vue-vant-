<template>
  <div class="button-test">
    <ButtonDiy :styleDiy="style1" name="渐变色按钮测试1" :click="handleClick" />
    <ButtonDiy :styleDiy="style2" name="渐变色按钮测试2" />
  </div>
</template>

<script>
import ButtonDiy from "../../components/ButtonDiy";
export default {
  name: "ButtonTest",
  components: {
    ButtonDiy,
  },
  data() {
    return {
      style1: {
        background: "linear-gradient(to right, red 0%, pink 50%)",
      },
      style2: {
        background: "linear-gradient(to right, blue 0%, skyBlue 50%)",
      },
    };
  },
  methods: {
    handleClick() {
      window.alert('this is test1')
    }
  }
};
</script>

<style lang='scss' scoped>
</style>