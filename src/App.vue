<template>
  <DoughnutChart />
  <LineChart />
</template>

<script>
import DoughnutChart from './components/DoughnutChart.vue'
import LineChart from './components/LineChart.vue'

export default {
  name: 'App',
  components: {
    DoughnutChart,
    LineChart
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
