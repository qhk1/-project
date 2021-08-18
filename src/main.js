import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AllA from './module/moduleA' //导入所有的接口
import { B1 as myB1 } from './module/moduleB'  //只导入某几个接口

// 引入Element UI
// import ElementUI from 'element-ui';
// import '@/element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);

//引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

console.log(AllA, myB1);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')