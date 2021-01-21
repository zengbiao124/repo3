export default {
    namespaced:true,
    state: {name: "小b"},
    mutations: {
        changeName(state) {
            state.name = "小小B";
        }
    },
    actions: {},
    getter: {}
}