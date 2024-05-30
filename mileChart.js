// Create root element
	// https://www.amcharts.com/docs/v5/getting-started/#Root_element
	var mileRoot = am5.Root.new("mileChart");

	// Set themes
	// https://www.amcharts.com/docs/v5/concepts/themes/
	mileRoot.setThemes([am5themes_Animated.new(mileRoot)]);

// Create chart
// https://www.amcharts.com/docs/v5/charts/xy-chart/
var mileChart = mileRoot.container.children.push(am5xy.XYChart.new(mileRoot, {
  panX: false,
  panY: false,
  wheelX: "panX",
  wheelY: "zoomX",
  pinchZoomX:false
}));

// Add cursor
// https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
var cursor = mileChart.set("cursor", am5xy.XYCursor.new(mileRoot, {}));


// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
var xAxis = mileChart.xAxes.push(am5xy.DateAxis.new(mileRoot, {
  maxDeviation: 1,
  baseInterval: {
    timeUnit: "day",  
    count: 1
  },
  renderer: am5xy.AxisRendererX.new(mileRoot, { minorGridEnabled: true }),
  tooltip: am5.Tooltip.new(mileRoot, {})
}));

var yAxis = mileChart.yAxes.push(am5xy.ValueAxis.new(mileRoot, {
  maxDeviation: 1,
  renderer: am5xy.AxisRendererY.new(mileRoot, {})
}));


// Add series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/

// Series 1 - Jupiter
var tooltipJ = am5.Tooltip.new(mileRoot, {
  getFillFromSprite: false,
  labelText: "Jupiter: {valueY} Miles"
});

tooltipJ.get("background").setAll({
  fill: am5.color(0xF2D4AC),
  fillOpacity: 0.95
});

var mileJupiter = mileChart.series.push(am5xy.LineSeries.new(mileRoot, {
  name: "Jupiter Data",
  xAxis: xAxis,
  yAxis: yAxis,
  valueYField: "jm",
  valueXField: "date",
  stroke: "#E2C49C"
}));

mileJupiter.strokes.template.setAll({
  strokeWidth: 2
});

mileJupiter.set("tooltip", tooltipJ);

// Series 2 - Mushroom
var tooltipM = am5.Tooltip.new(mileRoot, {
  getFillFromSprite: false,
  labelText: "Mushroom: {valueY} Miles"
});

tooltipM.get("background").setAll({
  fill: am5.color(0xbaae90),
  fillOpacity: 0.95
});

var mileMushroom = mileChart.series.push(am5xy.LineSeries.new(mileRoot, {
  name: "Mushroom Data",
  xAxis: xAxis,
  yAxis: yAxis,
  valueYField: "mm",
  valueXField: "date",
  stroke: "#7a6e50"
}));

mileMushroom.strokes.template.setAll({
  strokeWidth: 2
});

mileMushroom.set("tooltip", tooltipM);

// Set date fields
// https://www.amcharts.com/docs/v5/concepts/data/#Parsing_dates
mileRoot.dateFormatter.setAll({
  dateFormat: "yyyy-MM-dd",
  dateFields: ["valueX"]
});

mileJupiter.data.setAll(wheel_data);
mileMushroom.data.setAll(wheel_data);


// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
mileJupiter.appear(1000);
mileMushroom.appear(1000);
mileChart.appear(1000, 100);