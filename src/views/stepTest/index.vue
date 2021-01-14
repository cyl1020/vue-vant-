<template>
  <div class="index">
    <Step
      v-model="activeIndex"
      :cpnListLength="cpnList.length"
      @checked="checked"
      @save="save"
      ref="step"
    >
      <component :is="cpnName" slot="content" :ref="cpnName"></component>
    </Step>
  </div>
</template>

<script>
import Step from "../../components/Step";
import Test1 from "./child/test1";
import Test2 from "./child/test2";
import Test3 from "./child/test3";

export default {
  name: "Index",
  components: {
    Step,
    Test1,
    Test2,
    Test3,
  },
  data() {
    return {
      cpnList: ["Test1", "Test2", "Test3"],
      activeIndex: 0,
      finalData: {},
    };
  },

  computed: {
    cpnName() {
      return this.cpnList[this.activeIndex];
    },
  },

  methods: {
    checked() {
      this.$refs[this.cpnName].submitForm().then((res) => {
        this.finalData = { ...this.finalData, ...res };
        this.$refs.step.next();
      });
    },

    save() {
      alert(JSON.stringify(this.finalData));
    },
  },
};
</script>

<style lang="scss" scoped></style>
