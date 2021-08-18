<template>
  <div>
    <ul>
      <li
        v-for="data in this.$store.getters.comingListerGetter"
        :key="data.filmId"
        @click="handleClick(data.isPresale, data.filmId)"
      >
        <img :src="data.poster" />
        <h3>{{ data.name }}</h3>
        <p v-if="data.actors">主演：{{ data.actors | actorsFilter }}</p>
        <p v-else>暂无主演</p>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
import { MessageBox } from "mint-ui";

Vue.filter("actorsFilter", function (data) {
  var newList = data.map((item) => item.name);
  return newList.join(" ");
});
export default {
  mounted() {
    if (this.$store.state.comingList.length === 0) {
      //如果数组长度为0，请求数据，反之，调用缓存数据
      this.$store.dispatch("getComingListAction"); //dispatch:分发函数，用于触发括号内的函数
    } else {
      console.log("使用缓存数据");
    }
  },
  methods: {
    handleClick(data, id) {
      if (!data) {
        MessageBox({
          title: "提示",
          message: "该影片没有排期，到首页看其他电影吧",
          showCancelButton: true,
        }).then((res) => {
          console.log(res);
          if (res === "confirm") {
            console.log("回到首页");
            this.$router.push("/film/nowplaying");
          }
        });
      }
      this.$router.push({ name: "qhk", params: { id: id } });
    },
  },
};
</script>

<style scoped>
ul li {
  padding: 10px;
  overflow: hidden;
}
ul li img {
  float: left;
  width: 100px;
}
</style>