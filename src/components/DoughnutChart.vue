<template>
  <DoughnutChart :chartData="testData" />
</template>

<script>
import { defineComponent } from 'vue';
import { DoughnutChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default defineComponent({
  name: 'donught-chart',
  components: { DoughnutChart },
  setup() {
    const testData = {
      labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre', 'kk'],
      datasets: [
        {
          data: [30, 40, 60, 70, 5, 60],
          backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED', '#75C8ED'],
        },
      ],
    };

    return { testData };
  },
});
</script>