<template>
<div id="app">
  <span>小米9</span>
  数量：{{num}}
  <br>
  <button  @click="$store.commit('purchase1')">购买1个</button>
  <button  @click="$store.commit('purchase2')">购买2个</button>
</div>
</template>

<script>
export default {
name: "App1"
}
</script>

<style scoped>

</style>