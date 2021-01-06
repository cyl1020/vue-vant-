<template>
  <div class="index">
    this is index
    <el-Button v-has="'index'">123</el-Button>
    <el-Button v-has="'index1'">456</el-Button>
    <CustomRadio v-model="city" :radioData="cityData" :noSelect="true" />
    <CustomRadio
      v-model="className"
      :radioData="classNameData"
      @hook:mounted="test"
    />
    <TestHeight />
    <TestHeight :height="100" />
    <VirtualList :list="list" :itemHeight="50">
      <template #list="{data}">
        {{ data }}
      </template>
    </VirtualList>
    <router-view></router-view>
  </div>
</template>

<script>
import CustomRadio from "../../components/CustomRadio";
import TestHeight from "../../components/testHeight";
import VirtualList from "../../components/VirtualList";

export default {
  name: "Index",
  components: {
    CustomRadio,
    TestHeight,
    VirtualList,
  },
  data() {
    return {
      city: "北京",
      cityData: [
        {
          label: "北京",
          value: "北京",
        },
        {
          label: "成都",
          value: "成都",
        },
      ],
      className: "计科一班",
      classNameData: [
        {
          label: "计科一班",
          value: "计科一班",
        },
        {
          label: "计科二班",
          value: "计科二班",
        },
      ],
      list: [],
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    test() {
      console.log(111);
    },
    getList() {
      for (let i = 0; i < 10000; i++) {
        this.list.push(`这是第${i}条数据`);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.index {
  color: $globalColor;
}
</style>
