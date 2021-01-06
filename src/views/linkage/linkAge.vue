<template>
  <div class="link_age">
    <div class="link_age-container" ref="container" @scroll="updateActiveIndex">
      <div class="link_age-content" ref="content" v-for="item in 5" :key="item">
        {{ "内容" + item }}
      </div>
    </div>
    <div class="link_age-slide">
      <p
        v-for="(item, index) in slideData"
        :key="index"
        :class="{ activeClass: index == activeIndex }"
        @click="changeActiveIndex(index)"
      >
        {{ item }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LinkAge",
  data() {
    return {
      slideData: ["内容一", "内容二", "内容三", "内容四", "内容五"],
      activeIndex: 0,
      offsetTops: [], //每个内容容器的offsetTop值
      tops: [], //每个内容容器的offsetTop + clientHeight值
    };
  },
  mounted() {
    this.getOffsetTops();
  },
  methods: {
    getOffsetTops() {
      this.$nextTick(() => {
        const contents = this.$refs.content;
        contents.forEach((item) => {
          this.offsetTops = [...this.offsetTops, item.offsetTop];
          this.tops = [...this.tops, item.offsetTop + item.clientHeight];
        });
      });
    },

    changeActiveIndex(index) {
      this.activeIndex = index;
      //利用setInterval来做动画，实现缓动效果
      // const timer = setInterval(() => {
      //   if (this.$refs.container.scrollTop > this.offsetTops[index]) {
      //     this.$refs.container.scrollTop -= 50;
      //     if (this.$refs.container.scrollTop <= this.offsetTops[index]) {
      //       clearInterval(timer);
      //       this.$refs.container.scrollTop = this.offsetTops[index];
      //     }
      //   } else if (this.$refs.container.scrollTop < this.offsetTops[index]) {
      //     this.$refs.container.scrollTop += 50;
      //     if (this.$refs.container.scrollTop >= this.offsetTops[index]) {
      //       clearInterval(timer);
      //       this.$refs.container.scrollTop = this.offsetTops[index];
      //     }
      //   }
      // }, 10);

      //利用requestAnimationFrame来实现缓动效果
      const step = () => {
        if (this.$refs.container.scrollTop > this.offsetTops[index]) {
          this.$refs.container.scrollTop -= 50;
          if (this.$refs.container.scrollTop <= this.offsetTops[index]) {
            cancelAnimationFrame(step);
            this.$refs.container.scrollTop = this.offsetTops[index];
          } else {
            requestAnimationFrame(step);
          }
        } else if (this.$refs.container.scrollTop < this.offsetTops[index]) {
          this.$refs.container.scrollTop += 50;
          if (this.$refs.container.scrollTop >= this.offsetTops[index]) {
            cancelAnimationFrame(step);
            this.$refs.container.scrollTop = this.offsetTops[index];
          } else {
            requestAnimationFrame(step);
          }
        }
      };

      step();

      //直接处理，没有缓动效果
      // this.$refs.container.scrollTop = this.offsetTops[index];
    },

    updateActiveIndex() {
      const scrollTop = this.$refs.container.scrollTop;
      const filterScrollTop = this.tops.filter((item) => item >= scrollTop);
      const index = this.tops.findIndex((item) => item == filterScrollTop[0]);
      if (this.activeIndex != index) this.activeIndex = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.link_age {
  width: 100%;
  display: flex;

  &-container {
    width: 80%;
    height: 800px;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }

    > div {
      width: 100%;
      height: 1000px;
      margin: 30px 0;
      background-color: pink;
      text-align: center;
      line-height: 1000px;
    }
  }

  &-slide {
    flex: 1;
    margin-top: 30px;

    p {
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-size: 16px;
    }
  }

  .activeClass {
    color: red;
    font-size: 20px;
  }
}
</style>
