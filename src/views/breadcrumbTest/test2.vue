<template>
  <div class="test2">
    this is test2
    <el-carousel trigger="click">
      <el-carousel-item v-for="(item, index) in arr.length" :key="index">
        <div>{{ arr[index] }}</div>
        <div class="content"></div>
        <div>{{ index == arr.length - 1 ? arr[0] : arr[index + 1] }}</div>
      </el-carousel-item>
    </el-carousel>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Test2",
  data() {
    return {
      arr: ["a", "b", "c", "d", "e"],
    };
  },
};
</script>

<style lang="scss" scoped>
.test2 {
  /deep/ .el-carousel__item {
    display: flex;
    justify-content: space-between;

    div {
      width: 25%;
      // background-color: #fff;
      text-align: center;
    }

    .content {
      width: 50%;
      background-color: transparent;
    }
  }
}
</style>
