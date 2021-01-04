<template>
  <div id="app">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item, index) in breadList" :key="index">
        <router-link
          v-if="item.path !== $route.path"
          :to="{ path: item.path === '' ? '/' : item.path }"
        >
          {{ item.meta.title }}
        </router-link>
        <span v-else>{{ item.meta.title }}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadList: [], // 路由集合
    };
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    },
  },
  methods: {
    isHome(route) {
      return route && route.name == "Index";
    },
    getBreadcrumb() {
      let matched = this.$route.matched;
      //如果不是首页
      if (!this.isHome(matched[0])) {
        matched = [{ path: "/index", meta: { title: "首页" } }].concat(matched);
      }
      this.breadList = matched;
    },
  },
  created() {
    this.getBreadcrumb();
  },
};
</script>

<style lang="scss" scope>
#app {
  width: 1200px;
  margin: 0 auto;
  background-color: gainsboro;
  overflow: hidden;
  padding: 20px;

  .el-breadcrumb {
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 2px solid ghostwhite;
  }
}
</style>
