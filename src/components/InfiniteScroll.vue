<template>
  <div class="infinite-list-wrapper" style="overflow:auto">
    <ul
      class="list"
      v-infinite-scroll="load"
      infinite-scroll-disabled="disabled"
    >
      <li v-for="i in count" class="list-item" :key="i">{{ i }}</li>
    </ul>
    <p v-if="loading">加载中...</p>
    <p v-if="noMore">没有更多了</p>
  </div>
</template>

<script>
export default {
  name: "InfiniteScroll",
  props: {
    loadingData: {
      type: Function,
      default: () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({
              count: 30,
              all: 30,
            });
            reject(10);
          }, 2000);
        });
      },
    },
  },
  data() {
    return {
      count: 10,
      all: 100,
      loading: false,
    };
  },
  computed: {
    noMore() {
      return this.count >= this.all;
    },
    disabled() {
      return this.loading || this.noMore;
    },
  },
  methods: {
    load() {
      // this.loading = true;
      // setTimeout(() => {
      //   this.count += 20;
      //   this.loading = false;
      // }, 2000);
      this.loading = true;
      this.loadingData()
        .then((res) => {
          this.count = res.count;
          this.all = res.all;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.infinite-list-wrapper {
  height: 500px;
}
</style>
