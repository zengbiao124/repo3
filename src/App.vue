<!--<template>-->
<!--  <div id="app">-->
<!--&lt;!&ndash;    <img alt="Vue logo" src="./assets/logo.png">&ndash;&gt;-->
<!--&lt;!&ndash;    <HelloWorld msg="Welcome to Your Vue.js App"/>&ndash;&gt;-->
<!--    {{count}}-->
<!--    <button @click="$store.commit('incerment1')">count++1</button>-->
<!--    <button @click="$store.commit('incerment2',2)">count++2</button>-->
<!--    <button @click="$store.dispatch('increment3')">count++3</button>-->
<!--    <p>{{$store.getters.doubleCount}}</p>-->
<!--  </div>-->
<!--</template>-->

<!--<template>-->
<!--  <div id="app">-->
<!--    <span>小米9</span>-->
<!--    数量：{{$store.state.num}},{{$store.state.message}}-->
<!--    <br>-->
<!--    <button :disabled="!$store.state.num" @click="$store.commit('purchase1')">购买1个</button>-->
<!--    <button :disabled="!$store.state.num" @click="$store.commit('purchase2')">购买2个</button>-->
<!--    <input :disabled="!$store.state.num" v-model="$store.state.num1" value="$store.state.num1" type="number" placeholder="输入购买数量">-->
<!--    <button :disabled="!$store.state.num" id="btn3" @click="$store.commit('purchase3',$store.state.num1)">确定</button>-->
<!--  </div>-->
<!--</template>-->

<template>
  <div id="app">
    {{ $store.state.name}}
    {{ $store.state.a.name }}
    {{ $store.state.b.name }}
    <br>
    <button @click="$store.commit('changeName')">changeName</button>
    <br>
    <button @click="$store.commit('a/changeName')">changeNameA</button>
    <br>
    <button @click="$store.commit('b/changeName')">changeNameB</button>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // },
  // computed:{
  //   num(){
  //     return this.$store.state.count
  //   }
  // }
}
</script>

<style>
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
</style>
