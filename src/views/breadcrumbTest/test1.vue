<template>
  <div class="test1">
    this is test1
    <InfiniteScroll :loadingData="loadingData">
      <template #count="{data}">
        <p v-for="item in data" :key="item">{{item}}</p>
      </template>
    </InfiniteScroll>
  </div>
</template>

<script>
import InfiniteScroll from "../../components/InfiniteScroll";

export default {
  name: "Test1",
  data() {
    return {
      count: 10,
    };
  },
  components: {
    InfiniteScroll,
  },
  methods: {
    loadingData() {
      this.count += 20;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            count: this.count,
            all: 100,
          });
          reject(30);
        }, 2000);
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
