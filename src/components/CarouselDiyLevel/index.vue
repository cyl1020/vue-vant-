<template>
  <div class="carousel-diy-level">
    <div class="carousel-diy-level-content">
      <div class="before" :class="{ 'before-tran': tran }">
        {{ data[before] }}
      </div>
      <div class="after" :class="{ 'after-tran': tran }">{{ data[after] }}</div>
    </div>
    <button @click="add">add</button>
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
      index: 2,
      data: ["小明1同学荣获三好学生"],
    };
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
        }, 1000);
      }, 1000);
    },
    add() {
      this.data.push(`小明${this.index}同学荣获三号学生`);
      this.scrollShowInfo();
      this.index += 1;
    },
  },
};
</script>

<style lang="scss">
.carousel-diy-level {
  width: 500px;
  height: 100px;

  .carousel-diy-level-content {
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
      top: 0;
      left: 500px;
      right: 0;
    }

    .before-tran {
      animation: mymove3 1s;
      animation-fill-mode: forwards;
    }

    .after-tran {
      animation: mymove4 1s;
      animation-fill-mode: forwards;
    }

    @keyframes mymove3 {
      from {
        left: 0px;
      }
      to {
        left: -1000px;
      }
    }

    @keyframes mymove4 {
      from {
        left: 500px;
      }
      to {
        left: 0px;
      }
    }
  }
}
</style>