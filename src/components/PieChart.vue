<script setup lang="ts">
import Chart from 'chart.js/auto';
import {onMounted, ref, watch} from "vue";

const props = defineProps<{
  labels: string[]
  data: number[]
}>()

const chartCanvas = ref<HTMLCanvasElement>()

const data = {
  labels: props.labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: props.data,
    }
  ]
};


onMounted(() => {
  new Chart(chartCanvas.value, {
    type: 'pie',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
      }
    },
  });
})
</script>

<template>
  <div class="mx-auto" style="height: 500px; width: 500px">
    <canvas ref="chartCanvas" ></canvas>
  </div>

</template>

<style scoped>

</style>