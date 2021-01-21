import Vue from 'vue'
// import App from './App.vue'
import Vuex from "vuex"
import App from "./App"
import store from "./store"

Vue.use(Vuex)

Vue.config.productionTip = false
// 一、
// eslint-disable-next-line no-unused-vars
// const store = new Vuex.Store({
//     state: {
//         count: 0
//     },
//     mutations: {
//         incerment1(state) {
//             state.count++
//         },
//         incerment2(state, n) {
//             state.count += n
//         }
//     },
//     actions: {
//         increment3(action) {
//             setTimeout(() => {
//                 action.commit('incerment1')
//             }, 1000);
//         }
//     },
//     getters: {
//         doubleCount(state) {
//             return state.count * 2
//         }
//     }
// })

//二、
// eslint-disable-next-line no-unused-vars
// const store=new Vuex.Store({
//     state:{
//         num:100,
//         num1:0,
//         message:""
//     },
//     mutations:{
//         purchase1(state){
//             if (state.num>=0){
//                 state.num--;
//             }else {
//                 state.message='库存不够';
//             }
//         },
//         purchase2(state){
//             if (state.num>=0){
//                 state.num=state.num-2;
//             }else {
//                 state.message='库存不够';
//             }
//         },
//         purchase3(state,n){
//             if (state.num>=0&&n<=state.num){
//                 state.num-=n;
//             }else {
//                 state.message='库存不够';
//             }
//         }
//     }
// })
new Vue({
    store,
    render: h => h(App),
}).$mount('#app')
