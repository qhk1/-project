<template>
  <div class="swiper-container filmswiper">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from "swiper/swiper.cjs";
import "swiper/swiper.css";
export default {
  props: ["perview", "myClassname"],
  mounted() {
    new Swiper("." + this.myClassname, {
      slidesPerView: this.perview,
      spaceBetween: this.myClassname === "actors" ? 20 : 10,
      freeMode: true,
    });
  },
};
</script>
<style scoped>
.swiper-container {
  float: right;
  position: absolute;
}
</style>