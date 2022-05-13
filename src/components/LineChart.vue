<template>
  <LineChart :chartData="testData" />
</template>

<script>
import { defineComponent } from 'vue';
import { LineChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default defineComponent({
  name: 'line-chart',
  components: { LineChart },
  setup() {
    const testData = {
      labels: ['Paris', 'Nîddmes','Nîdmes','Nîmds','Nîmesd'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [30, 40, 60, 70, 5],
          borderColor: '#0079AF',
          backgroundColor: '#0079AF',
        },
        {
          label: 'Dataset 2',
          data: [130, 430, 4, 70, 10],
          borderColor: '#77CEFF',
          backgroundColor: '#77CEFF',
        }
      ],
    };

    return { testData };
  },
});
</script>