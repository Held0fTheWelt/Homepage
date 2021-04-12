<template>
  <div>
  <apexchart width="500"  :options="options" :series="series"></apexchart>
  </div>
</template>

<script>
// <ApexCharts/>
export default {
  data: function() {
    return {
      options: {
        chart: {
          id: 'vuechart-example',
          type: 'pie'
        },
        labels: ['Team A', 'Team B', 'Team C'],
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
      },
  series: [33, 33, 33],
    }
  }
}
</script>
<style scoped>


</style>
