export default {
    namespaced:true,
    state: {name: "小A"},
    mutations: {
        changeName(state) {
            state.name = "小小A";
        }
    },
    actions: {},
    getter: {}
}