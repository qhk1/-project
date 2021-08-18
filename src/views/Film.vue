<template>
  <div>
    <swiper :key="loopList.length" ref="myswiper">
      <div class="swiper-slide" v-for="data in loopList" :key="data.bannerId">
        <img :src="data.imgUrl" />
      </div>
    </swiper>

    <filmHeader :class="isFixed ? 'fixed' : ''"></filmHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import swiper from "./Film/Swiper.vue";
import axios from "axios";
import filmHeader from "./Film/filmHeader.vue";
import { Indicator } from "mint-ui";

export default {
  data() {
    return {
      loopList: [],
      isFixed: false,
    };
  },

  components: {
    swiper,
    filmHeader,
  },
  mounted() {
    Indicator.open({
      text: "加载中...",
      spinnerType: "fading-circle",
    });
    axios({
      url: "https://m.maizuo.com/gateway?type=2&cityId=440300&k=2042855",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"16284992286715606569058305"}',
        "X-Host": "mall.cfg.common-banner",
      },
    }).then((res) => {
      console.log(res.data);
      this.loopList = res.data.data;
      Indicator.close();
    });
    window.onscroll = this.handleScroll; //   onscroll:鼠标滚动事件
  },
  beforeDestroy() {
    window.onscroll = null;
  },

  methods: {
    handleScroll() {
      if (
        document.documentElement.scrollTop >=
        this.$refs.myswiper.$el.offsetHeight
      ) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    },
  },
};
</script>
<style scoped>
img {
  width: 100%;
}
</style>