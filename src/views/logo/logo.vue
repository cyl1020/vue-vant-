<template>
  <div class="logo">
    <div class="right-top"></div>
    <div class="left-bottom"></div>
  </div>
</template>

<script>
export default {
  name: "Logo",
};
</script>

<style lang="scss" scoped>
.logo {
  width: 100%;
  height: 700px;
  background-color: rgb(240, 240, 242);
  position: relative;

  .right-top {
    width: 200px;
    height: 200px;
    position: absolute;
    top: 0;
    right: 0;
    border-bottom-left-radius: 100%;
    background-color: #fff;
  }

  .left-bottom {
    width: 400px;
    height: 400px;
    position: absolute;
    bottom: 0;
    left: 0;
    border-top-right-radius: 100%;
    background-color: #fff;
  }
}
</style>
