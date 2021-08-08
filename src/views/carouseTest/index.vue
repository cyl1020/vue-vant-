<template>
  <div class="carousel-test">
    <CarouselDiy />
    <CarouselDiyLevel />
  </div>
</template>

<script>
import CarouselDiy from "../../components/CarouselDiy";
import CarouselDiyLevel from "../../components/CarouselDiyLevel";
export default {
  name: "CarouselTest",
  components: {
    CarouselDiy,
    CarouselDiyLevel,
  },
};
</script>

<style lang='scss' scoped>
</style>