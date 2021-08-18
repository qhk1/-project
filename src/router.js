import Vue from 'vue'
import Router from 'vue-router'
import Film from './views/Film.vue'
import Cinema from './views/Cinema.vue'
import Center from './views/Center.vue'
import Message from './views/Message.vue'
import Comingsoon from './views/Film/Comingsoon.vue'
import Nowplaying from './views/Film/Nowplaying.vue'
import Detail from './views/Detail.vue'
import Login from './views/Login.vue'
import City from './views/City.vue'
// import { component } from 'vue/types/umd'

Vue.use(Router)
const router = new Router({
    mode: 'hash',
    // base: process.env.BASE_URL,
    routes: [
        {
            path: '/cinema',
            component: Cinema
        },
        {
            path: "/city",
            component: City
        },
        {
            path: '/film',
            component: Film,
            // redirect: 'nowplaying',
            children: [
                {
                    path: '/film/nowplaying',  //子路由的写法之一
                    component: Nowplaying
                },
                {
                    path: 'comingsoon',  //子路由的写法之二
                    component: Comingsoon
                },
                {
                    path: "",
                    redirect: "/film/nowplaying"
                }
            ]
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/detail/:id', // 动态路由
            name: "qhk",
            component: Detail
        },
        {
            path: '/center',
            component: Center
        },
        {
            path: './message',
            component: Message
        }
        // {
        //     path: '*',
        //     redirect: 'film'
        // }
    ]
})

//全局守卫
// router.beforeEach((to, from, next) => {
//     if (to.path === '/center') {
//         console.log("盘查")
//         if (auth.isLogin()) {
//             next();
//         } else {
//             next('/login')
//         }
//     } else {
//         next();
//     }
// },

//全局守卫
// router.beforeEach((to, from, next) => {
//     if (to.path === '/center') {
//         console.log("盘查")
//         if (auth.isLogin()) { //判断是否符合要求
//             next();  //符合放行
//         } else {
//             next('/login')  //不符合跳转到指定页面
//         }
//     } else {
//         next();
//     }
// })

export default router