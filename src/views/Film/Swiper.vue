<template>
  <div class="swiper-container filmSwiper">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Swiper from "swiper"; //js
import "swiper/swiper.css";
export default {
  mounted() {
    new Swiper(".filmSwiper", {
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },
      autoplay: {
        delay: 2000,
      },
    });
  },
};
</script>


  <style scoped>
.swiper-pagination {
  float: right;
  position: absolute;
}
</style>