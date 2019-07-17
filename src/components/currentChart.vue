<template>
  <div id="app">
    <div id="container" style="min-width: 270px; height: 230px; margin: 0 auto"></div>
  </div>
</template>

<script>
var Highcharts = require("highcharts");

// Load module after Highcharts is loaded
require("highcharts/modules/exporting")(Highcharts);
export default {
  methods: {
    getGraph() {
      Highcharts.chart("container", {
        chart: {
          type: "column"
        },

        title: {
          text: ""
        },

        xAxis: {
          categories: ["Mon", "Thu", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },

        yAxis: {
          allowDecimals: false,
          min: false,
          title: {
            text: ""
          }
        },
        plotOptions: {
          column: {
            stacking: ""
          }
        },

        series: [
          {
            name: "",
            data: [1, 2, 1, 2.5, 1.5, 4.5, 2.5],
            stack: ""
          }
        ]
      });
    }
  },
  mounted() {
    this.getGraph();
  }
};
</script>

<style>
.highcharts-button {
  display: none !important;
}


rect.highcharts-point.highcharts-color-0 {
    fill: #4747eb !important;
}

/* .highcharts-axis-labels highcharts-yaxis-labels{
   background-color: #4040ea;
       fill: rgb(124, 181, 236);

} */
</style>
