<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <DoughnutChart />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import DoughnutChart from './components/DoughnutChart.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
    DoughnutChart,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
