<template>
  <div class="carousel-diy">
    <div class="before" :class="{ 'before-tran': tran }">
      {{ data[before] }}
    </div>
    <div class="after" :class="{ 'after-tran': tran }">{{ data[after] }}</div>
  </div>
</template>

<script>
export default {
  name: "CarouselDiy",
  data() {
    return {
      before: 0,
      after: 0,
      tran: false,
      data: [
        "小明1同学荣获三号学生",
        "小明2同学荣获三号学生",
        "小明3同学荣获三号学生",
        "小明4同学荣获三号学生",
        "小明5同学荣获三号学生",
        "小明6同学荣获三号学生",
        "小明7同学荣获三号学生",
        "小明8同学荣获三号学生",
        "小明9同学荣获三号学生",
        "小明10同学荣获三号学生",
      ],
    };
  },
  mounted() {
    this.scrollShowInfo();
  },
  methods: {
    scrollShowInfo() {
      this.after = this.before == this.data.length - 1 ? 0 : this.before + 1;
      setTimeout(() => {
        this.tran = true;
        setTimeout(() => {
          this.before =
            this.before < this.data.length - 1 ? this.before + 1 : 0;
          this.tran = false;
          this.scrollShowInfo();
        }, 1000);
      }, 1000);
    },
  },
};
</script>

<style lang="scss">
.carousel-diy {
  margin: 300px;
  height: 30px;
  width: 500px;
  border: 1px solid red;
  position: relative;
  overflow: hidden;
  text-align: center;

  .before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }

  .after {
    position: absolute;
    top: 30px;
    left: 0;
    right: 0;
  }

  .before-tran {
    animation: mymove1 1s;
    animation-fill-mode: forwards;
  }

  .after-tran {
    animation: mymove2 1s;
    animation-fill-mode: forwards;
  }

  @keyframes mymove1 {
    from {
      top: 0px;
    }
    to {
      top: -30px;
    }
  }

  @keyframes mymove2 {
    from {
      top: 30px;
    }
    to {
      top: 0px;
    }
  }
}
</style>