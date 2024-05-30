// Create root element
	// https://www.amcharts.com/docs/v5/getting-started/#Root_element
	var cumulativeSpinRoot = am5.Root.new("cumulativeSpinChart");

	// Set themes
	// https://www.amcharts.com/docs/v5/concepts/themes/
	cumulativeSpinRoot.setThemes([am5themes_Animated.new(cumulativeSpinRoot)]);

// Create chart
// https://www.amcharts.com/docs/v5/charts/xy-chart/
var cumulativeSpinChart = cumulativeSpinRoot.container.children.push(am5xy.XYChart.new(cumulativeSpinRoot, {
  panX: false,
  panY: false,
  wheelX: "panX",
  wheelY: "zoomX",
  pinchZoomX:false
}));

// Add cursor
// https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
var cursor = cumulativeSpinChart.set("cursor", am5xy.XYCursor.new(cumulativeSpinRoot, {}));


// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
var xAxis = cumulativeSpinChart.xAxes.push(am5xy.DateAxis.new(cumulativeSpinRoot, {
  maxDeviation: 1,
  baseInterval: {
    timeUnit: "day",  
    count: 1
  },
  renderer: am5xy.AxisRendererX.new(cumulativeSpinRoot, { minorGridEnabled: true }),
  tooltip: am5.Tooltip.new(cumulativeSpinRoot, {})
}));

var yAxis = cumulativeSpinChart.yAxes.push(am5xy.ValueAxis.new(cumulativeSpinRoot, {
  maxDeviation: 1,
  renderer: am5xy.AxisRendererY.new(cumulativeSpinRoot, {})
}));


// Add series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/

// Series 1 - Jupiter
var tooltipJ = am5.Tooltip.new(cumulativeSpinRoot, {
  getFillFromSprite: false,
  labelText: "Jupiter: {valueY} Total Rotations"
});

tooltipJ.get("background").setAll({
  fill: am5.color(0xF2D4AC),
  fillOpacity: 0.95
});

var cumulativeSpinJupiter = cumulativeSpinChart.series.push(am5xy.LineSeries.new(cumulativeSpinRoot, {
  name: "Jupiter Data",
  xAxis: xAxis,
  yAxis: yAxis,
  valueYField: "jcs",
  valueXField: "date",
  stroke: "#E2C49C"
}));

cumulativeSpinJupiter.strokes.template.setAll({
  strokeWidth: 2
});

cumulativeSpinJupiter.set("tooltip", tooltipJ);

// Series 2 - Mushroom
var tooltipM = am5.Tooltip.new(cumulativeSpinRoot, {
  getFillFromSprite: false,
  labelText: "Mushroom: {valueY} Total Rotations"
});

tooltipM.get("background").setAll({
  fill: am5.color(0xbaae90),
  fillOpacity: 0.95
});

var cumulativeSpinMushroom = cumulativeSpinChart.series.push(am5xy.LineSeries.new(cumulativeSpinRoot, {
  name: "Mushroom Data",
  xAxis: xAxis,
  yAxis: yAxis,
  valueYField: "mcs",
  valueXField: "date",
  stroke: "#7a6e50"
}));

cumulativeSpinMushroom.strokes.template.setAll({
  strokeWidth: 2
});

cumulativeSpinMushroom.set("tooltip", tooltipM);

// Set date fields
// https://www.amcharts.com/docs/v5/concepts/data/#Parsing_dates
cumulativeSpinRoot.dateFormatter.setAll({
  dateFormat: "yyyy-MM-dd",
  dateFields: ["valueX"]
});

cumulativeSpinJupiter.data.setAll(wheel_data);
cumulativeSpinMushroom.data.setAll(wheel_data);


// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
cumulativeSpinJupiter.appear(1000);
cumulativeSpinMushroom.appear(1000);
cumulativeSpinChart.appear(1000, 100);