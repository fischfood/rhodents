// Create root element
	// https://www.amcharts.com/docs/v5/getting-started/#Root_element
	var spinRoot30 = am5.Root.new("spinChart30");

	// Set themes
	// https://www.amcharts.com/docs/v5/concepts/themes/
	spinRoot30.setThemes([am5themes_Animated.new(spinRoot30)]);

// Create chart
// https://www.amcharts.com/docs/v5/charts/xy-chart/
var spinChart30 = spinRoot30.container.children.push(am5xy.XYChart.new(spinRoot30, {
  panX: false,
  panY: false,
  wheelX: "panX",
  wheelY: "zoomX",
  pinchZoomX:false
}));

// Add cursor
// https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
var cursor = spinChart30.set("cursor", am5xy.XYCursor.new(spinRoot30, {}));


// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
var xAxis = spinChart30.xAxes.push(am5xy.DateAxis.new(spinRoot30, {
  maxDeviation: 1,
  baseInterval: {
    timeUnit: "day",  
    count: 1
  },
  renderer: am5xy.AxisRendererX.new(spinRoot30, { minorGridEnabled: true }),
  tooltip: am5.Tooltip.new(spinRoot30, {})
}));

var yAxis = spinChart30.yAxes.push(am5xy.ValueAxis.new(spinRoot30, {
  maxDeviation: 1,
  renderer: am5xy.AxisRendererY.new(spinRoot30, {})
}));


// Add series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/

// Series 1 - Jupiter
var tooltipJ = am5.Tooltip.new(spinRoot30, {
  getFillFromSprite: false,
  labelText: "Jupiter: {valueY} Rotations"
});

tooltipJ.get("background").setAll({
  fill: am5.color(0xF2D4AC),
  fillOpacity: 0.95
});

var spinJupiter30 = spinChart30.series.push(am5xy.LineSeries.new(spinRoot30, {
  name: "Jupiter Data",
  xAxis: xAxis,
  yAxis: yAxis,
  valueYField: "j30",
  valueXField: "date",
  stroke: "#E2C49C"
}));

spinJupiter30.strokes.template.setAll({
  strokeWidth: 2
});

spinJupiter30.set("tooltip", tooltipJ);

// Series 2 - Mushroom
var tooltipM = am5.Tooltip.new(spinRoot30, {
  getFillFromSprite: false,
  labelText: "Mushroom: {valueY} Rotations"
});

tooltipM.get("background").setAll({
  fill: am5.color(0xbaae90),
  fillOpacity: 0.95
});

var spinMushroom30 = spinChart30.series.push(am5xy.LineSeries.new(spinRoot30, {
  name: "Mushroom Data",
  xAxis: xAxis,
  yAxis: yAxis,
  valueYField: "m30",
  valueXField: "date",
  stroke: "#7a6e50"
}));

spinMushroom30.strokes.template.setAll({
  strokeWidth: 2
});

spinMushroom30.set("tooltip", tooltipM);

// Set date fields
// https://www.amcharts.com/docs/v5/concepts/data/#Parsing_dates
spinRoot30.dateFormatter.setAll({
  dateFormat: "yyyy-MM-dd",
  dateFields: ["valueX"]
});

spinJupiter30.data.setAll(wheel_data_30);
spinMushroom30.data.setAll(wheel_data_30);


// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
spinJupiter30.appear(1000);
spinMushroom30.appear(1000);
spinChart30.appear(1000, 100);

jQuery('body').on('click', '.chart-toggle button', function() {
  if ( ! jQuery(this).hasClass('active') ) {
    jQuery( '.chart-toggle button.active').removeClass('active');
    jQuery( '.chart.active').removeClass('active').addClass('hidden');

    jQuery(this).addClass('active');
    let toggle = jQuery(this).data('toggle');
    setTimeout(function() { 
      jQuery('#' + toggle).removeClass('hidden').addClass('active')
    }, 100);
  }
});