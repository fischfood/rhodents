// Create root element
	// https://www.amcharts.com/docs/v5/getting-started/#Root_element
	var spinRoot = am5.Root.new("spinChart");

	// Set themes
	// https://www.amcharts.com/docs/v5/concepts/themes/
	spinRoot.setThemes([am5themes_Animated.new(spinRoot)]);

// Create chart
// https://www.amcharts.com/docs/v5/charts/xy-chart/
var spinChart = spinRoot.container.children.push(am5xy.XYChart.new(spinRoot, {
  panX: false,
  panY: false,
  wheelX: "panX",
  wheelY: "zoomX",
  pinchZoomX:false
}));

// Add cursor
// https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
var cursor = spinChart.set("cursor", am5xy.XYCursor.new(spinRoot, {}));


// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
var xAxis = spinChart.xAxes.push(am5xy.DateAxis.new(spinRoot, {
  maxDeviation: 1,
  baseInterval: {
    timeUnit: "day",  
    count: 1
  },
  renderer: am5xy.AxisRendererX.new(spinRoot, { minorGridEnabled: true }),
  tooltip: am5.Tooltip.new(spinRoot, {})
}));

var yAxis = spinChart.yAxes.push(am5xy.ValueAxis.new(spinRoot, {
  maxDeviation: 1,
  renderer: am5xy.AxisRendererY.new(spinRoot, {})
}));


// Add series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/

// Series 1 - Jupiter
var tooltipJ = am5.Tooltip.new(spinRoot, {
  getFillFromSprite: false,
  labelText: "Jupiter: {valueY} Rotations"
});

tooltipJ.get("background").setAll({
  fill: am5.color(0xF2D4AC),
  fillOpacity: 0.95
});

var spinJupiter = spinChart.series.push(am5xy.LineSeries.new(spinRoot, {
  name: "Jupiter Data",
  xAxis: xAxis,
  yAxis: yAxis,
  valueYField: "j",
  valueXField: "date",
  stroke: "#E2C49C"
}));

spinJupiter.strokes.template.setAll({
  strokeWidth: 2
});

spinJupiter.set("tooltip", tooltipJ);

// Series 2 - Mushroom
var tooltipM = am5.Tooltip.new(spinRoot, {
  getFillFromSprite: false,
  labelText: "Mushroom: {valueY} Rotations"
});

tooltipM.get("background").setAll({
  fill: am5.color(0xbaae90),
  fillOpacity: 0.95
});

var spinMushroom = spinChart.series.push(am5xy.LineSeries.new(spinRoot, {
  name: "Mushroom Data",
  xAxis: xAxis,
  yAxis: yAxis,
  valueYField: "m",
  valueXField: "date",
  stroke: "#7a6e50"
}));

spinMushroom.strokes.template.setAll({
  strokeWidth: 2
});

spinMushroom.set("tooltip", tooltipM);

// Set date fields
// https://www.amcharts.com/docs/v5/concepts/data/#Parsing_dates
spinRoot.dateFormatter.setAll({
  dateFormat: "yyyy-MM-dd",
  dateFields: ["valueX"]
});

spinJupiter.data.setAll(wheel_data);
spinMushroom.data.setAll(wheel_data);


// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
spinJupiter.appear(1000);
spinMushroom.appear(1000);
spinChart.appear(1000, 100);

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