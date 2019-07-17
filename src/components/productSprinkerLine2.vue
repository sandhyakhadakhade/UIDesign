<template>
  <div id="app2">
    <div id="container2" style="min-width: 150px; height: 230px; margin: 0 auto"></div>
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
    Highcharts.chart("container2", {
      chart: {
        type: "line"
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
          name: "Tokyo",
          data: [
            7.0,
            6.9,
            9.5,
            14.5,
            18.4,
            21.5,
            25.2,
            26.5,
            23.3,
            18.3,
            13.9,
            9.6
          ]
        },
        {
          name: "London",
          data: [
            3.9,
            4.2,
            5.7,
            8.5,
            11.9,
            15.2,
            17.0,
            16.6,
            14.2,
            10.3,
            6.6,
            4.8
          ]
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
/* g.highcharts-axis-labels.highcharts-yaxis-labels {
    display: none !important;
} */
</style>
