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
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
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
  series: [44, 55, 13, 43, 22],
    }
  }
}
</script>
<style scoped>


</style>
