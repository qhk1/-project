import Vue from "vue"
import Vuex from "vuex"
import axios from 'axios'
import { HIDE_TABBAT_MUTATION } from './type/index'

/*Vuex:核心就是store,store中包含共享应用大部分的状态 (state), vuex的功能： 
1.状态管理（实现非父子通信）；2.数据快照（将数据缓存至state中）； 
3.方便管理和调试，实现时光旅行；
*/
Vue.use(Vuex);

export default
    new Vuex.Store({
        state: {
            //自定义的共享状态
            isTabbarShow: true,
            comingList: []
        },
        mutations: { //唯一修改状态的地方
            [HIDE_TABBAT_MUTATION](state, data) { //常量的一种写法，便代码后期的维护和管理
                console.log("HideMaizuoTabbar");
                state.isTabbarShow = data;
            },
            comingListMuations(state, data) {
                state.comingList = data;

            }

        },

        getters: {  //处理数据
            comingListerGetter(state) { //取出comingList中索引为0-2的数据
                return state.comingList.filter((item, index) => index >= 0)
            }
        },

        actions: {
            //异步处理
            getComingListAction(store) {
                axios({
                    url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=5680176",
                    headers: {
                        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16284992286715606569058305","bc":"110100"}',
                        'X-Host': 'mall.film-ticket.film.list'
                    }
                }).then(res => {
                    console.log(res.data);
                    store.commit("comingListMuations", res.data.data.films);//将数据传入mutations中的comingListMuations函数
                })
            }
        }
    })