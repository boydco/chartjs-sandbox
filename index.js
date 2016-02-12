'use strict'
$(function () {
    $('#container').highcharts({
        xAxis: {
            type: 'datetime'
        },

        plotOptions: {
            series: {
                pointStart: Date.UTC(2010, 0, 1),
                pointInterval: 24 * 3600 * 500// one day
            }
        },

        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }, {
            data: [144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 29.9, 71.5, 106.4, 129.2]
        }]
    })
})


// var margin = {top: 30, right: 20, bottom: 30, left: 50},
//     width = 600 - margin.left - margin.right,
//     height = 300 - margin.top - margin.bottom
//
// var parseDate = d3.time.format("%d-%b").parse
//
// var x = d3.time.scale().range([0, width])
// var y = d3.scale.linear().range([height, 0])
//
// var xAxis = d3.svg.axis().scale(x)
//     .orient("bottom").ticks(28)
//
// var yAxis = d3.svg.axis().scale(y)
//     .orient("left").ticks(6)
//
// var valueline = d3.svg.line()
//   .x(function(d) {return x(d.date)})
//   .y(function(d) {return y(d.close)})
//
// //Add canvas
// var svg = d3.select("body")
//   .append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//   .append("g")
//     .attr("transform",
//           "translate(" + margin.left + "," + margin.top + ")")
//
// //Get Data
// d3.csv("data.csv", function(error, data) {
//   data.forEach(function(d) {
//     d.date = parseDate(d.date)
//     d.bloodTest = +d.bloodTest
//   })
//
//   //scale range
//   x.domain(d3.extent(data, function(d) { return d.date }))
//   y.domain( [0, 30])
//
//   //add the valueline path
//   svg.append("path")
//     .attr("class", "line")
//     .attr("d", valueLine(data))
//
//   //add x axis
//   svg.append("g")
//       .attr("class", "x axis")
//       .attr("transform", "translate(0," + height + ")")
//       .call(xAxis)
//
//   //add y axis
//   svg.append("g")
//     .attr("class", "y axis")
//     .call(yAxis)
//
// })

//
// 'use strict'
//
// $(function () {
//
//   var data = {
//     labels: ["Feb 9", "Feb 10", "Feb 11", "Feb 12", "Feb 13", "Feb 14"],
//     datasets: [
//       {
//         label: "Blood Test Results",
//         strokeColor: "rgba(220,220,220,1)",
//         pointColor: "rgba(220,220,220,1)",
//         fillColor:"rgba(220,220,220,0)",
//         pointStrokeColor: "#fff",
//         data: [8, 10, 9, 12, 4, 10, 9, 7i]
//       },
//       {
//         label: "test case",
//         strokeColor: "rgba(220,220,220,0)",
//         pointColor: "rgba(220,220,220,0)",
//         fillColor:"rgba(220,220,220,0)",
//         pointStrokeColor: "rgba(220,220,220,0)",
//         data: [0, 30, 0, 0, 0, 0, 0],
//         scaleShowLabels:false,
//         showToolTips: false
//       }
//
//    ]
//   }
//   var option = {
//
//
//
//   }
//
//   var ctx=document.getElementById("bloodChart").getContext('2d')
//   var myLineChart = new Chart(ctx).Line(data, option)
//
//
//
// })
