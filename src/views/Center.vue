<template>
  <div>
    <v-touch v-on:swipedown="onSwipeLeft">
      <div style="background: red; height: 500px">我的</div>
    </v-touch>

    <mt-button type="default">default</mt-button>
    <mt-button type="primary">primary</mt-button>
    <mt-button type="danger">danger</mt-button>
    <mt-swipe :show-indicators="false" auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>

    <mt-index-list>
      <mt-index-section index="A">
        <mt-cell title="Aaron"></mt-cell>
        <mt-cell title="Alden"></mt-cell>
        <mt-cell title="Austin"></mt-cell>
      </mt-index-section>
      <mt-index-section index="B">
        <mt-cell title="Baldwin"></mt-cell>
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      ...
      <mt-index-section index="Z">
        <mt-cell title="Zack"></mt-cell>
        <mt-cell title="Zane"></mt-cell>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>
<script>
import VueTouch from "vue-touch";
Vue.use(VueTouch, { name: "v-touch" });
import Vue from "vue";
// import { Swipe, SwipeItem } from "mint-ui";
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// export default {
//   beforeRouteEnter(to, from, next) {
//     // 在渲染该组件的对应路由被 confirm 前调用
//     // 不！能！获取组件实例 `this`
//     // 因为当守卫执行前，组件实例还没被创建
//     console.log("局部盘查");
//     if (false) {
//       next();
//     } else {
//       next("/login");
//     }
//   },
// };
export default {
  methods: {
    onSwipeLeft() {
      console.log("left");
    },
  },
};
</script>

<style scoped>
.mint-swipe {
  height: 200px;
  background: red;
  text-align: center;
}
</style>