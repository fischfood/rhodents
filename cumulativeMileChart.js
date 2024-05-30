// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var cumulativeMileRoot = am5.Root.new("cumulativeMileChart");

// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
cumulativeMileRoot.setThemes([am5themes_Animated.new(cumulativeMileRoot)]);

// Create chart
// https://www.amcharts.com/docs/v5/charts/xy-chart/
var cumulativeMileChart = cumulativeMileRoot.container.children.push(am5xy.XYChart.new(cumulativeMileRoot, {
  panX: false,
  panY: false,
  wheelX: "panX",
  wheelY: "zoomX",
  pinchZoomX:false
}));

// Add cursor
// https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
var cursor = cumulativeMileChart.set("cursor", am5xy.XYCursor.new(cumulativeMileRoot, {}));


// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
var xAxis = cumulativeMileChart.xAxes.push(am5xy.DateAxis.new(cumulativeMileRoot, {
  maxDeviation: 1,
  baseInterval: {
    timeUnit: "day",  
    count: 1
  },
  renderer: am5xy.AxisRendererX.new(cumulativeMileRoot, { minorGridEnabled: true }),
  tooltip: am5.Tooltip.new(cumulativeMileRoot, {})
}));

var yAxis = cumulativeMileChart.yAxes.push(am5xy.ValueAxis.new(cumulativeMileRoot, {
  maxDeviation: 1,
  renderer: am5xy.AxisRendererY.new(cumulativeMileRoot, {})
}));


// Add series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/

// Series 1 - Jupiter
var tooltipJ = am5.Tooltip.new(cumulativeMileRoot, {
  getFillFromSprite: false,
  labelText: "Jupiter: {valueY} Total Miles"
});

tooltipJ.get("background").setAll({
  fill: am5.color(0xF2D4AC),
  fillOpacity: 0.95
});

var cumulativeMileJupiter = cumulativeMileChart.series.push(am5xy.LineSeries.new(cumulativeMileRoot, {
  name: "Jupiter Data",
  xAxis: xAxis,
  yAxis: yAxis,
  valueYField: "jms",
  valueXField: "date",
  stroke: "#E2C49C"
}));

cumulativeMileJupiter.strokes.template.setAll({
  strokeWidth: 2
});

cumulativeMileJupiter.set("tooltip", tooltipJ);

// Series 2 - Mushroom
var tooltipM = am5.Tooltip.new(cumulativeMileRoot, {
  getFillFromSprite: false,
  labelText: "Mushroom: {valueY} Total Miles"
});

tooltipM.get("background").setAll({
  fill: am5.color(0xbaae90),
  fillOpacity: 0.95
});

var cumulativeMileMushroom = cumulativeMileChart.series.push(am5xy.LineSeries.new(cumulativeMileRoot, {
  name: "Mushroom Data",
  xAxis: xAxis,
  yAxis: yAxis,
  valueYField: "mms",
  valueXField: "date",
  stroke: "#7a6e50"
}));

cumulativeMileMushroom.strokes.template.setAll({
  strokeWidth: 2
});

cumulativeMileMushroom.set("tooltip", tooltipM);

// Set date fields
// https://www.amcharts.com/docs/v5/concepts/data/#Parsing_dates
cumulativeMileRoot.dateFormatter.setAll({
  dateFormat: "yyyy-MM-dd",
  dateFields: ["valueX"]
});

cumulativeMileJupiter.data.setAll(wheel_data);
cumulativeMileMushroom.data.setAll(wheel_data);


// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
cumulativeMileJupiter.appear(1000);
cumulativeMileMushroom.appear(1000);
cumulativeMileChart.appear(1000, 100);