<template>
  <div>
    <ul>
      <router-link to="/film/nowplaying" tag="li" active-class="active"
        >正在热播</router-link
      >
      <router-link to="/film/comingsoon" tag="li" active-class="active"
        >即将上映</router-link
      >
    </ul>
  </div>
</template>

<style scoped>
ul {
  display: flex;
}

ul li {
  flex: 1;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: white;
}

.active {
  color: red;
  border-bottom: 2px solid red;
}
.fixed {
  position: fixed;
  width: 100%;
  height: 40px;
  left: 0px;
  top: 0px;
  background: white;
}
</style>