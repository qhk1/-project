<template>
  <div>
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
      infinite-scroll-immediate-check="false"
    >
      <li
        v-for="data in dataList"
        :key="data.filmId"
        @click="handleClick(data.filmId)"
      >
        <img :src="data.poster" />
        <h3>{{ data.name }}</h3>
        <p>观众评分：{{ data.grade }}</p>
        <!--actorsFilter:过滤器-->
        <p v-if="data.actors">主演：{{ data.actors | actorsFilter }}</p>
        <p v-else>暂无主演</p>
        <p>
          {{ data.nation }} | <span>{{ data.runtime }}分钟</span>
        </p>
      </li>
    </ul>
    <div>加载中...</div>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
import { InfiniteScroll } from "mint-ui";
// import testVue from "../../../../Vue CLI/test.vue";
Vue.use(InfiniteScroll);

Vue.filter("actorsFilter", function (data) {
  var newList = data.map((item) => item.name);
  return newList.join(" ");
});
export default {
  data() {
    return {
      dataList: [],
      loading: false,
      count: 1,
      total: 0,
    };
  },

  //在mounted生命周期内使用axios请求获取数据
  mounted() {
    axios({
      url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=2774627",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"16284992286715606569058305","bc":"110100"}',
        "X-Host": "mall.film-ticket.film.list",
      },
    }).then((res) => {
      this.dataList = res.data.data.films;
      this.total = res.data.data.total;
    });
  },

  methods: {
    handleClick(id) {
      console.log("this" + id);
      //编程式导航 -- 路径跳转
      // this.$router.push(`/detail/${id}`); //this.$router:全局的路由对象
      //this.$router.push(`指定界面`) ：往指定界面跳转

      //编程式导航 -- 名字跳转
      this.$router.push({ name: "qhk", params: { id: id } });
    },
    loadMore() {
      console.log("到底了");
      this.loading = true; //禁用滚动
      this.count++;
      console.log(this.count);

      if (this.dataList.length === this.total) {
        return;
      }
      axios({
        url: `https://m.maizuo.com/gateway?cityId=110100&pageNum=${this.count}&pageSize=10&type=1&k=2774627`,
        headers: {
          "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.0.4","e":"16284992286715606569058305","bc":"110100"}',
          "X-Host": "mall.film-ticket.film.list",
        },
      }).then((res) => {
        this.dataList = [...this.dataList, ...res.data.data.films]; //将新旧数据进行拼接并非覆盖
        this.loading = false; //取消禁用滚动
      });
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