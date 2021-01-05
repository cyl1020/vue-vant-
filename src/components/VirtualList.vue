<template>
  <div class="virtual_list" ref="container" @scroll="handleScroll">
    <div
      class="virtual_list-phantom"
      :style="{ height: contentHeight + 'px' }"
    ></div>
    <div class="virtual_list-content" ref="content">
      <div
        :style="{ height: finalItemHeight + 'px' }"
        v-for="(item, index) in finalList"
        :key="index"
      >
        <slot name="list" :data="item" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VirtualList",
  props: {
    list: {
      //全部的数据,
      type: Array,
      default: () => [],
    },
    itemHeight: {
      //list中每一项的高度，这里应该由使用该组件的组件来决定
      type: Number,
      default: 30,
    },
  },
  data() {
    return {
      finalList: [], //最终在页面里面渲染的数据
    };
  },
  computed: {
    finalItemHeight() {
      if (document.documentElement.clientWidth <= 750) {
        return this.itemHeight * (750 / 1920);
      } else {
        return this.itemHeight * (document.documentElement.clientWidth / 1920);
      }
    },

    contentHeight() {
      return this.list.length * this.finalItemHeight;
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.updateFinalList();
    });
  },
  methods: {
    updateFinalList(scrollTop = 0) {
      //先获取整个容器的高度
      const vesselHeight = this.$el.clientHeight;
      //根据itemHeight的高度去计算当前容器最多能显示多少个数据
      const count = Math.ceil(vesselHeight / this.finalItemHeight);
      //根据scrollTop的位置去决定显示那些数据
      const start = Math.floor(scrollTop / this.finalItemHeight);
      //根据开始的位置加上显示的个数来决定结束的位置
      const end = start + count;
      //根据开始的位置和结束的位置来决定显示的数据是那些
      this.finalList = this.list.slice(start, end);
      // 把可见区域的 top 设置为起始元素在整个列表中的位置（使用 transform 是为了更好的性能）
      this.$refs.content.style.webkitTransform = `translate3d(0, ${start *
        this.finalItemHeight}px, 0)`;
    },

    handleScroll() {
      const scrollTop = this.$refs.container.scrollTop;
      this.updateFinalList(scrollTop);
    },
  },
};
</script>

<style lang="scss" scoped>
.virtual_list {
  width: 100%;
  height: 500px;
  overflow: auto;
  position: relative;
  border: 1px solid #c1c1c1;
  box-shadow: 3px 3px 5px #ccc;

  &-phantom {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
  }

  &-content {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
  }
}
</style>
