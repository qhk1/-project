<template>
  <div>
    <mt-index-list ref="myList">
      <mt-index-section
        :index="data.index"
        v-for="data in dataList"
        :key="data.index"
      >
        <mt-cell
          :title="city.name"
          v-for="city in data.list"
          :key="city.cityId"
          @click.native="handleClick(city.cityId)"
        ></mt-cell>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      dataList: [],
    };
  },
  mounted() {
    // console.log(this.$refs.myList.$el);拿到div原始节点
    this.$refs.myList.$el.style.height =
      document.documentElement.clientHeight - 50 + "px";

    axios({
      url: `https://m.maizuo.com/gateway?k=1303672`,
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"16284992286715606569058305","bc":"310100"}',
        "X-Host": "mall.film-ticket.city.list",
      },
    }).then((res) => {
      // console.log(res.data);
      this.dataList = this.handleCity(res.data.data.cities);
    });
  },

  methods: {
    handleCity(datalist) {
      // console.log(datalist);
      var letterArr = [];
      for (var i = 65; i < 91; i++) {
        letterArr.push(String.fromCharCode(i)); //String.fromCharCode(number):将 Unicode 编码转为一个字符
      }
      // console.log(letterArr);
      var newList = [];
      for (var j = 0; j < letterArr.length; j++) {
        var arr = datalist.filter(
          (item) =>
            // console.log(datalist);
            item.pinyin.substring(0, 1) === letterArr[j].toLowerCase()
        );
        // console.log(arr);
        if (arr.length > 0) {
          newList.push({
            index: letterArr[j],
            list: arr,
          });
        }
      }
      return newList;
    },
    handleClick(id) {
      console.log(id);
      localStorage.setItem("cityId", id); //将数据存储到localStorage中
      this.$router.push(`/cinema`);
    },
  },
};
</script>

<style scoped>
</style>