// Create root element
	// https://www.amcharts.com/docs/v5/getting-started/#Root_element
	var avgRoot = am5.Root.new("avgChart");

	// Set themes
	// https://www.amcharts.com/docs/v5/concepts/themes/
	avgRoot.setThemes([am5themes_Animated.new(avgRoot)]);

// Create chart
// https://www.amcharts.com/docs/v5/charts/xy-chart/
var avgChart = avgRoot.container.children.push(am5xy.XYChart.new(avgRoot, {
  panX: false,
  panY: false,
  wheelX: "panX",
  wheelY: "zoomX",
  pinchZoomX:false
}));

// Add cursor
// https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
var cursor = avgChart.set("cursor", am5xy.XYCursor.new(avgRoot, {}));


// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
var xAxis = avgChart.xAxes.push(am5xy.DateAxis.new(avgRoot, {
  maxDeviation: 1,
  baseInterval: {
    timeUnit: "day",  
    count: 1
  },
  renderer: am5xy.AxisRendererX.new(avgRoot, { minorGridEnabled: true }),
  tooltip: am5.Tooltip.new(avgRoot, {})
}));

var yAxis = avgChart.yAxes.push(am5xy.ValueAxis.new(avgRoot, {
  maxDeviation: 1,
  renderer: am5xy.AxisRendererY.new(avgRoot, {})
}));


// Add series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/

// Series 1 - Jupiter
var tooltipJ = am5.Tooltip.new(avgRoot, {
  getFillFromSprite: false,
  labelText: "Jupiter: {valueY} Rotations"
});

tooltipJ.get("background").setAll({
  fill: am5.color(0xF2D4AC),
  fillOpacity: 0.95
});

var avgJupiter = avgChart.series.push(am5xy.LineSeries.new(avgRoot, {
  name: "Jupiter Data",
  xAxis: xAxis,
  yAxis: yAxis,
  valueYField: "javg",
  valueXField: "date",
  stroke: "#E2C49C"
}));

avgJupiter.strokes.template.setAll({
  strokeWidth: 2
});

avgJupiter.set("tooltip", tooltipJ);

// Series 2 - Mushroom
var tooltipM = am5.Tooltip.new(avgRoot, {
  getFillFromSprite: false,
  labelText: "Mushroom: {valueY} Rotations"
});

tooltipM.get("background").setAll({
  fill: am5.color(0xbaae90),
  fillOpacity: 0.95
});

var avgMushroom = avgChart.series.push(am5xy.LineSeries.new(avgRoot, {
  name: "Mushroom Data",
  xAxis: xAxis,
  yAxis: yAxis,
  valueYField: "mavg",
  valueXField: "date",
  stroke: "#7a6e50"
}));

avgMushroom.strokes.template.setAll({
  strokeWidth: 2
});

avgMushroom.set("tooltip", tooltipM);

// Set date fields
// https://www.amcharts.com/docs/v5/concepts/data/#Parsing_dates
avgRoot.dateFormatter.setAll({
  dateFormat: "yyyy-MM-dd",
  dateFields: ["valueX"]
});

avgJupiter.data.setAll(wheel_data);
avgMushroom.data.setAll(wheel_data);


// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
avgJupiter.appear(1000);
avgMushroom.appear(1000);
avgChart.appear(1000, 100);