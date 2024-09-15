// Create root element
	// https://www.amcharts.com/docs/v5/getting-started/#Root_element
	var mileRoot30 = am5.Root.new("mileChart30");

	// Set themes
	// https://www.amcharts.com/docs/v5/concepts/themes/
	mileRoot30.setThemes([am5themes_Animated.new(mileRoot30)]);

// Create chart
// https://www.amcharts.com/docs/v5/charts/xy-chart/
var mileChart30 = mileRoot30.container.children.push(am5xy.XYChart.new(mileRoot30, {
  panX: false,
  panY: false,
  wheelX: "panX",
  wheelY: "zoomX",
  pinchZoomX:false
}));

// Add cursor
// https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
var cursor = mileChart30.set("cursor", am5xy.XYCursor.new(mileRoot30, {}));


// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
var xAxis = mileChart30.xAxes.push(am5xy.DateAxis.new(mileRoot30, {
  maxDeviation: 1,
  baseInterval: {
    timeUnit: "day",  
    count: 1
  },
  renderer: am5xy.AxisRendererX.new(mileRoot30, { minorGridEnabled: true }),
  tooltip: am5.Tooltip.new(mileRoot30, {})
}));

var yAxis = mileChart30.yAxes.push(am5xy.ValueAxis.new(mileRoot30, {
  maxDeviation: 1,
  renderer: am5xy.AxisRendererY.new(mileRoot30, {})
}));


// Add series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/

// Series 1 - Jupiter
var tooltipJ = am5.Tooltip.new(mileRoot30, {
  getFillFromSprite: false,
  labelText: "Jupiter: {valueY} Miles"
});

tooltipJ.get("background").setAll({
  fill: am5.color(0xF2D4AC),
  fillOpacity: 0.95
});

var mileJupiter30 = mileChart30.series.push(am5xy.LineSeries.new(mileRoot30, {
  name: "Jupiter Data",
  xAxis: xAxis,
  yAxis: yAxis,
  valueYField: "j30m",
  valueXField: "date",
  stroke: "#E2C49C"
}));

mileJupiter30.strokes.template.setAll({
  strokeWidth: 2
});

mileJupiter30.set("tooltip", tooltipJ);

// Series 2 - Mushroom
var tooltipM = am5.Tooltip.new(mileRoot30, {
  getFillFromSprite: false,
  labelText: "Mushroom: {valueY} Miles"
});

tooltipM.get("background").setAll({
  fill: am5.color(0xbaae90),
  fillOpacity: 0.95
});

var mileMushroom30 = mileChart30.series.push(am5xy.LineSeries.new(mileRoot30, {
  name: "Mushroom Data",
  xAxis: xAxis,
  yAxis: yAxis,
  valueYField: "m30m",
  valueXField: "date",
  stroke: "#7a6e50"
}));

mileMushroom30.strokes.template.setAll({
  strokeWidth: 2
});

mileMushroom30.set("tooltip", tooltipM);

// Set date fields
// https://www.amcharts.com/docs/v5/concepts/data/#Parsing_dates
mileRoot30.dateFormatter.setAll({
  dateFormat: "yyyy-MM-dd",
  dateFields: ["valueX"]
});

mileJupiter30.data.setAll(wheel_data_30);
mileMushroom30.data.setAll(wheel_data_30);


// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
mileJupiter30.appear(1000);
mileMushroom30.appear(1000);
mileChart30.appear(1000, 100);