// Create root element
	// https://www.amcharts.com/docs/v5/getting-started/#Root_element
	var avgMileRoot = am5.Root.new("avgMileChart");

	// Set themes
	// https://www.amcharts.com/docs/v5/concepts/themes/
	avgMileRoot.setThemes([am5themes_Animated.new(avgMileRoot)]);

// Create chart
// https://www.amcharts.com/docs/v5/charts/xy-chart/
var avgMileChart = avgMileRoot.container.children.push(am5xy.XYChart.new(avgMileRoot, {
  panX: false,
  panY: false,
  wheelX: "panX",
  wheelY: "zoomX",
  pinchZoomX:false
}));

// Add cursor
// https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
var cursor = avgMileChart.set("cursor", am5xy.XYCursor.new(avgMileRoot, {}));


// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
var xAxis = avgMileChart.xAxes.push(am5xy.DateAxis.new(avgMileRoot, {
  maxDeviation: 1,
  baseInterval: {
    timeUnit: "day",  
    count: 1
  },
  renderer: am5xy.AxisRendererX.new(avgMileRoot, { minorGridEnabled: true }),
  tooltip: am5.Tooltip.new(avgMileRoot, {})
}));

var yAxis = avgMileChart.yAxes.push(am5xy.ValueAxis.new(avgMileRoot, {
  maxDeviation: 1,
  renderer: am5xy.AxisRendererY.new(avgMileRoot, {})
}));


// Add series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/

// Series 1 - Jupiter
var tooltipJ = am5.Tooltip.new(avgMileRoot, {
  getFillFromSprite: false,
  labelText: "Jupiter: {valueY} Miles"
});

tooltipJ.get("background").setAll({
  fill: am5.color(0xF2D4AC),
  fillOpacity: 0.95
});

var avgMileJupiter = avgMileChart.series.push(am5xy.LineSeries.new(avgMileRoot, {
  name: "Jupiter Data",
  xAxis: xAxis,
  yAxis: yAxis,
  valueYField: "javgmi",
  valueXField: "date",
  stroke: "#E2C49C"
}));

avgMileJupiter.strokes.template.setAll({
  strokeWidth: 2
});

avgMileJupiter.set("tooltip", tooltipJ);

// Series 2 - Mushroom
var tooltipM = am5.Tooltip.new(avgMileRoot, {
  getFillFromSprite: false,
  labelText: "Mushroom: {valueY} Miles"
});

tooltipM.get("background").setAll({
  fill: am5.color(0xbaae90),
  fillOpacity: 0.95
});

var avgMileMushroom = avgMileChart.series.push(am5xy.LineSeries.new(avgMileRoot, {
  name: "Mushroom Data",
  xAxis: xAxis,
  yAxis: yAxis,
  valueYField: "mavgmi",
  valueXField: "date",
  stroke: "#7a6e50"
}));

avgMileMushroom.strokes.template.setAll({
  strokeWidth: 2
});

avgMileMushroom.set("tooltip", tooltipM);

// Set date fields
// https://www.amcharts.com/docs/v5/concepts/data/#Parsing_dates
avgMileRoot.dateFormatter.setAll({
  dateFormat: "yyyy-MM-dd",
  dateFields: ["valueX"]
});

avgMileJupiter.data.setAll(wheel_data);
avgMileMushroom.data.setAll(wheel_data);


// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
avgMileJupiter.appear(1000);
avgMileMushroom.appear(1000);
avgMileChart.appear(1000, 100);