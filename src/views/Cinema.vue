<template>
  <div class="cinema" :style="mystyle">
    <ul>
      <li v-for="data in dataList" :key="data.cinemaId">
        <h3>{{ data.name }}</h3>
        <p style="font-size: 14px">{{ data.address }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import BetterScroll from "better-scroll";
export default {
  data() {
    return {
      dataList: [],
      mystyle: {
        height: "0px",
      },
    };
  },
  mounted() {
    console.log(document.documentElement.clientHeight);

    this.mystyle.height = document.documentElement.clientHeight - 50 + "px";
    var cityId = localStorage.getItem("cityId");
    axios({
      url: `https://m.maizuo.com/gateway?cityId=${cityId}&ticketFlag=1&k=1772112`,
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"16284992286715606569058305","bc":"330100"}',
        "X-Host": "mall.film-ticket.cinema.list",
      },
    }).then((res) => {
      console.log(res.data);
      this.dataList = res.data.data.cinemas;

      this.$nextTick(() => {
        //better-scroll:主要完成的功能包含Better-Scro实现页面中拖动滑动、拉动属性等功能；
        new BetterScroll(".cinema", {
          scrollbar: {
            fade: true,
            interactive: false,
          },
        });
      });
    });
  },
};
</script>

<style scoped>
ul li {
  height: 50px;
}

.cinema {
  height: 500px;
  overflow: hidden;
  position: relative;
}
</style>