<template>
  <div v-if="filminfo">
    <img
      src="https://pic.maizuo.com/usr/2021/0912d03efe73b6a68d7d496fddce9ac0.jpg"
      class="poster"
    />
    <h2>{{ filminfo.name }}</h2>
    <h3>演职人员</h3>
    <swiper perview="4" class="actorswiper" myClassname="actorswiper">
      <div
        class="swiper-slide"
        v-for="data in filminfo.actors"
        :key="data.name"
      >
        <img :src="data.avatarAddress" alt="" />
        <p>{{ data.name }}</p>
      </div>
    </swiper>

    <h3>剧照</h3>
    <swiper perview="3" class="Photoswiper" myClassname="Photoswiper">
      <div
        class="swiper-slide"
        v-for="(data, index) in filminfo.photos"
        :key="index"
      >
        <img :src="data" alt="" />
      </div>
    </swiper>
  </div>
</template>

<script>
import axios from "axios";
import Swiper from "./Film/Swiper.vue";
import swiper from "./Detail/detailSwiper.vue";
import { HIDE_TABBAT_MUTATION } from "@/type/index.js";
// import bus from "@/bus/index.js";

export default {
  components: {
    Swiper,
    swiper,
  },
  data() {
    return {
      filminfo: null,
    };
  },

  //进入界面，隐藏底部导航栏
  beforeMount() {
    //挂载之前：进入详情界面隐藏底部导航栏
    // console.log("hiddentabbar", "发消息了");
    // bus.$emit("maizuo", false);
    // this.$store.state.isTabbarShow = false;
    this.$store.commit(HIDE_TABBAT_MUTATION, false); //传数据
  },

  mounted() {
    // console.log("要id获取详情信息", this.$route.params.id, this.id); // $route: 当前路由； $router:全局路由
    // },
    // console.log("zheshi" + this.id);
    axios({
      url: `https://m.maizuo.com/gateway?filmId=${this.$route.params.id}&k=8380279`,
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"16284992286715606569058305","bc":"330100"}',
        "X-Host": "mall.film-ticket.film.info",
      },
    }).then((res) => {
      // console.log(res.data);
      this.filminfo = res.data.data.film;
      console.log(this.filminfo);
    });
  },

  //离开详情界面，显示底部导航栏
  beforeDestroy() {
    // console.log("showtabbar");
    // bus.$emit("maizuo", true);
    // this.$store.state.isTabbarShow = false;
    this.$store.commit(HIDE_TABBAT_MUTATION, true); ////传数据
  },
};
</script>

<style scoped>
.poster {
  width: 100%;
}
img {
  width: 100%;
  height: 90%;
}
/* height: 639px;*/
</style>

