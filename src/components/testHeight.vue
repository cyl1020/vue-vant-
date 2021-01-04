<template>
  <div class="box" :style="styleVar">
    <CustomRadio />
  </div>
</template>
<script>
import CustomRadio from "./CustomRadio";

export default {
  components: {
    CustomRadio,
  },
  props: {
    height: {
      type: Number,
      default: 54,
    },
  },
  computed: {
    //不直接写行内样式是为了减少行内样式的使用，有可能一个组件就要接收很多个（全局的）样式，这样的话就会导致行内样式过多，这样处理的话就相当于在写一个class类
    styleVar() {
      return {
        "--box-height": this.height + "px",
      };
    },
  },
  mounted() {
    // console.log(CustomRadio.props); //直接获取到CustomRadio的props属性
  },
  methods: {
    testHook() {
      console.log(111);
    },
  },
};
</script>
<style scoped>
.box {
  height: var(--box-height);
}
</style>
