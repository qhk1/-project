<template>
  <div>
    <tabbar v-show="isTabbarShow"></tabbar>
    <router-view></router-view>

    <!-- <input type="text" ref="mytext" />
    <button @click="handleAdd()">add</button>

    <ul>
      <li v-for="data in dataList" :key="data">
        {{ data }}
      </li>
    </ul>
    <navbar><button @click="isShow = !isShow">click</button></navbar>
    <sidebar v-show="isShow"></sidebar> -->
  </div>
</template>

<script>
// import navbar from "./components/navbar.vue";
// import sidebar from "./components/sidebar.vue";
// import axios from "axios";
import tabbar from "./components/Tabbar.vue";
import { mapGetters, mapState } from "vuex";
// import store from "./store";

// import bus from "./bus/index";
// import Vue from "vue";
// //全局注册组件
// Vue.component("navbar", navbar);
// Vue.component("sidebar", sidebar);

//导出
export default {
  data() {
    return {
      // isshow: true,
    };
  },
  // data() {
  //   return {
  //     dataList: [],
  //     isShow: false,
  //   };
  // },
  // methods: {
  //   handleAdd() {
  //     console.log("add", this.$refs.mytext.value);
  //     this.dataList.push(this.$refs.mytext.value);
  //   },
  // },

  // mounted() {
  //   axios.get("/ajax/movieOnInfoList?token=").then((res) => {
  //     console.log(res.data);
  //   });
  // },
  // beforeMount() {
  //   console.log("监听消息");
  //   bus.$on("maizuo", (data) => {
  //     console.log("被通知了maizuo", data);
  //     this.isshow = data;
  //   });
  // },

  // //局部注册组件
  components: {
    // navbar: navbar,
    // sidebar: sidebar,
    tabbar,
  },

  //通过计算属性访问isTabbarShow
  // computed: {
  //   isShow() {
  //     return this.$store.state.isTabbarShow;
  //   },
  // },

  //通过计算属性的...mapState访问isTabbarShow
  computed: {
    ...mapState(["isTabbarShow"]), // ES6展开合并运算符
    ...mapGetters(["comingListerGetter"]),
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
html {
  height: 100%;
}

li {
  list-style: none;
}
</style>
