import Vue from 'vue'
import Vuex from "vuex"
import App1 from "./App1";

Vue.use(Vuex)

Vue.config.productionTip = false
const store=new Vuex.Store({
    state:{
        num:100
    },
    mutations:{
        purchase1(state){
            state.num--;
        },
        purchase2(state){
            state.num=state.num-2;
        }
    }

})

new Vue({
    store,
    render: h => h(App1),
}).$mount('#app')