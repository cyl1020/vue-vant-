<template>
  <div class="custom_radio">
    <label
      :for="item.label"
      class="custom_radio-label"
      :class="{ avtiveClass: item.value == radioValue }"
      v-for="(item, index) in radioData"
      :key="index"
    >
      <input
        class="custom_radio-input"
        type="radio"
        v-model="radioValue"
        :id="item.label"
        :value="item.value"
        @click="selectRadio(index, $event)"
      />
      <p class="custom_radio-text">{{ item.value }}</p>
    </label>
  </div>
</template>

<script>
export default {
  name: "CustomRadio",
  props: {
    value: {
      type: String,
      default: "",
    },
    radioData: {
      type: Array,
      default: () => [],
    },
    noSelect: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      radioValue: this.value,
      activeIndex: 0,
    };
  },
  methods: {
    selectRadio(index, e) {
      this.$emit("input", e.target.value);
      if (this.noSelect && index == this.activeIndex) {
        this.radioValue = "";
        this.$emit("input", this.radioValue);
      }
      this.activeIndex = index;

      //checkbox 和 radio 使用 checked property 和 change 事件
      //将v-model用在radio上v-model会将input事件改为change事件
      //click事件的执行是在change事件之前，所以这里拿到的this.radioValue才会是上一次的值，而不是最新值
      // this.$emit("input", e.target.value);
      // if (this.noSelect && e.target.value == this.radioValue) {
      //   this.radioValue = "";
      //   this.$emit("input", this.radioValue);
      // }
    },
  },
};
</script>

<style lang="scss" scoped>
.custom_radio {
  display: flex;

  &-label {
    display: flex;
    align-items: center;
    margin: 5px 10px;
    border: 1px solid skyblue;
    border-radius: 5px;
    padding: 10px;
  }

  &-input {
    height: 30px;
    margin-right: 8px;
  }

  &-text {
    height: 30px;
    line-height: 30px;
    user-select: none;
  }

  .avtiveClass {
    color: #0075ff;
    border: 1px solid #0075ff;
  }
}
</style>
