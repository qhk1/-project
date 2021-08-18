<template>
  <nav>
    <ul>
      <router-link to="/film" tag="li" active-class="myClass">
        <i class="iconfont icon-all"></i>
        电影
      </router-link>

      <router-link to="/cinema" tag="li" active-class="myClass">
        <i class="iconfont icon-email"></i>
        影院
      </router-link>

      <router-link to="/message" tag="li" active-class="myClass">
        <i class="iconfont icon-comments"></i>
        资讯
      </router-link>

      <router-link to="/center" tag="li" active-class="myClass">
        <i class="iconfont icon-cry"></i>
        我的
      </router-link>
    </ul>
  </nav>
</template>

<style scoped>
.myClass {
  color: red;
}

nav {
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 50px;
  background: white;
}

nav ul {
  display: flex;
}

nav ul li {
  flex: 1;
  line-height: 50px;
  text-align: center;
}
</style>