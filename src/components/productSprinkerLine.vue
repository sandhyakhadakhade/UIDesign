<template>
  <div id="app2">
    <div id="container1" style="min-width: 150px; height: 230px; margin: 0 auto"></div>
  </div>
</template>

<script>
var Highcharts = require("highcharts");

// Load module after Highcharts is loaded
require("highcharts/modules/exporting")(Highcharts);
export default {
  data() {
    return {};
  },
  mounted() {
    Highcharts.chart("container1", {
      chart: {
        type: "areaspline"
      },
      title: {
        text: ""
      },
      subtitle: {
        text: ""
      },
      xAxis: {
        categories: []
      },

      plotOptions: {
        line: {
          dataLabels: {
            enabled: false
          },
          enableMouseTracking: false
        }
      },
      series: [
        {
          name: "",
          data: [3, 4, 5, 3, 5, 7, 5]
        },
        {
          name: "",
          data: [1, 3, 4, 2, 3, 5, 4]
        }
      ]
    });
  }
};
</script>

<style>
g.highcharts-legend {
  display: none;
}

path.highcharts-area {
  /* fill: #9c9cfe; */
  /* background: linear-gradient(135deg, #3f51b5 50%, #2196f3 100%) !important; */
}
/* g.highcharts-axis-labels.highcharts-yaxis-labels {
    display: none !important;
} */
</style>
