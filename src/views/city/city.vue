<template>
  <div class="city">
    <div class="city-content" ref="content" @scroll="updateActiveIndex">
      <div v-for="(value, key, index) in city" :key="index" ref="city">
        <p class="city-content-key">{{ key }}</p>
        <div v-for="(item, index) in value" :key="index">
          <p class="city-content-name">{{ item }}</p>
        </div>
      </div>
    </div>
    <el-backtop target=".city-content" :bottom="100" />
    <div class="city-navigation" ref="navigation">
      <p
        v-for="(item, index) in initials"
        :key="index"
        :class="{ activeClass: activeIndex == index }"
        @click="changeActiveIndex(index)"
      >
        {{ item }}
      </p>
    </div>
  </div>
</template>

<script>
import city from "../../utils/city";

export default {
  name: "City",
  data() {
    return {
      city: {},
      initials: [], //城市首字母大写的集合
      activeIndex: 0,
      scrollTops: [], //城市分类的scrollTop值集合
      tops: [], //城市分类的scrollTop+clientHeight值集合
    };
  },
  mounted() {
    this.classification();
    this.$nextTick(() => {
      this.getScrollTops();
    });
  },
  methods: {
    //对city数据进行分类处理
    classification() {
      let cityObj = {};
      let initialsArr = []; //定义一个空数组来接受首字母大写
      city.forEach((item) => {
        //原始数据格式 北京|beijing|bj 进过分割之后的数据格式 ["北京", "beijing", "bj"]
        let itemArr = item.split("|");
        //将城市拼音的首字母大写
        let initials = itemArr[1][0].toUpperCase();
        //将每一个字母添加进数组
        initialsArr.push(initials);
        //将首字母按照顺序进行排序
        initialsArr.sort();
        //将cityObj根据首字母作为键进行分类，如果当前首字母在cityObj有就将这个数据添加进去，如果没有，那么就将这个首字母作为一个新的键加入，并将其对应的值置为一个空数组，置为空的同时将这个值加入
        if (cityObj[initials]) {
          cityObj[initials].push(itemArr[0]);
        } else {
          cityObj[initials] = [];
          cityObj[initials].push(itemArr[0]);
        }
      });
      //对首字母进行去重
      this.initials = [...new Set(initialsArr)];
      this.city = this.objSort(cityObj);
    },

    //改变当前活跃的index值
    changeActiveIndex(index) {
      this.activeIndex = index;
      this.$refs.content.scrollTop = this.scrollTops[index];
    },

    //获取城市分类的scrollTop值
    getScrollTops() {
      let citys = this.$refs.city;
      citys.forEach((item) => {
        this.scrollTops = [...this.scrollTops, item.offsetTop];
        this.tops = [...this.tops, item.offsetTop + item.clientHeight];
      });
    },

    //滚动的时候去更新activeIndex
    updateActiveIndex() {
      const scrollTop = this.$refs.content.scrollTop;
      const filterScrollTop = this.tops.filter((item) => item > scrollTop);
      const index = this.tops.findIndex((item) => item == filterScrollTop[0]);
      if (this.activeIndex != index) this.activeIndex = index;
      let ratio =
        this.$refs.navigation.scrollHeight / this.$refs.content.scrollHeight;
      this.$refs.navigation.scrollTop = ratio * scrollTop * 0.5;
    },

    //将对象按key值进行排序
    objSort(obj) {
      let finalObj = {};
      var arr = Object.keys(obj).sort();
      arr.map((m) => {
        finalObj[m] = obj[m];
      });
      return finalObj;
    },
  },
};
</script>

<style lang="scss" scoped>
.city {
  height: 700px;
  display: flex;
  font-size: 20px;
  position: relative;

  &-content {
    width: 90%;
    height: 100%;
    overflow-y: auto;
    text-align: center;
    margin-right: 20px;

    &-key {
      height: 50px;
      line-height: 50px;
      background-color: #fff;
      border-radius: 10px;
    }

    &-name {
      height: 40px;
      line-height: 40px;
    }

    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }

  &-navigation {
    border-left: 1px solid #fff;
    flex: 1;
    height: 100%;
    overflow-y: auto;

    p {
      height: 40px;
      line-height: 40px;
      text-align: center;
    }

    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }

  .activeClass {
    color: red;
  }
}
</style>
