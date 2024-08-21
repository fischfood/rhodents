// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartdiv");

// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([am5themes_Animated.new(root)]);

// Create chart
// https://www.amcharts.com/docs/v5/charts/xy-chart/
var chart = root.container.children.push(am5xy.XYChart.new(root, {
  panX: true,
  panY: true,
  wheelX: "panX",
  wheelY: "zoomX",
  pinchZoomX:true
}));

// Add cursor
// https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));


// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
var xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
  maxDeviation: 1,
  baseInterval: {
    timeUnit: "day",  
    count: 1
  },
  renderer: am5xy.AxisRendererX.new(root, { minorGridEnabled: true }),
  tooltip: am5.Tooltip.new(root, {})
}));

var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
  maxDeviation: 1,
  renderer: am5xy.AxisRendererY.new(root, {})
}));


// Add series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/

// Series 1 - Jupiter
var series = chart.series.push(am5xy.LineSeries.new(root, {
  name: "Series 1",
  xAxis: xAxis,
  yAxis: yAxis,
  valueYField: "j",
  valueXField: "date",
  tooltip: am5.Tooltip.new(root, {
    labelText: "Jupiter: {valueY} Steps"
  }),
  stroke: "#D2B48C"
}));

series.strokes.template.setAll({
  strokeWidth: 2
});

// Series 2 - Mushroom
var series2 = chart.series.push(am5xy.LineSeries.new(root, {
  name: "Series 2",
  xAxis: xAxis,
  yAxis: yAxis,
  valueYField: "m",
  valueXField: "date",
  tooltip: am5.Tooltip.new(root, {
    labelText: "Mushroom: {valueY} Steps"
  }),
  stroke: "#7a6e50"
}));
series2.strokes.template.setAll({
  strokeWidth: 2
});



// Set date fields
// https://www.amcharts.com/docs/v5/concepts/data/#Parsing_dates
root.dateFormatter.setAll({
  dateFormat: "yyyy-MM-dd",
  dateFields: ["valueX"]
});

series.data.setAll(data);
series2.data.setAll(data);


// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
series.appear(1000);
series2.appear(1000);
chart.appear(1000, 100);
  
chart.events.on("ready", function(ev) {
  yAxis3.min = 80;
  yAxis3.max = 100;
});