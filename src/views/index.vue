<template>
  <div class="index">
    this is index
    <el-Button v-has="'index'">123</el-Button>
    <el-Button v-has="'index1'">456</el-Button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Index",
};
</script>
<style lang="scss" scoped>
.index {
  color: $globalColor;
}
</style>
