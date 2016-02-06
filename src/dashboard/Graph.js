'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Chart = require('../../node_modules/chart.js'); 
var LineChart = require("react-chartjs").Line;

var SVGComponent = React.createClass({
    render: function() {
        return <svg {...this.props}>{this.props.children}</svg>;
    }
});

var Circle = React.createClass({
    render: function() {
        return <circle {...this.props}>{this.props.children}</circle>;
    }
});

var MyComponent = React.createClass({
  render: function() {
    var chartData = {
        labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        datasets: [
            {
                label: "TargetWeek",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [8, 8, 8, 8, 8, 8, 8]
            },
            {
                label: "MyWeek",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [3, 5, 9, 10, 2, 5, 8]
            }
        ]
    };

    var chartOptions = {

        ///Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines : true,

        //String - Colour of the grid lines
        scaleGridLineColor : "rgba(0,0,0,.05)",

        //Number - Width of the grid lines
        scaleGridLineWidth : 1,

        //Boolean - Whether to show horizontal lines (except X axis)
        scaleShowHorizontalLines: true,

        //Boolean - Whether to show vertical lines (except Y axis)
        scaleShowVerticalLines: true,

        //Boolean - Whether the line is curved between points
        bezierCurve : false,

        //Boolean - Whether to show a dot for each point
        pointDot : true,

        //Number - Radius of each point dot in pixels
        pointDotRadius : 4,

        //Number - Pixel width of point dot stroke
        pointDotStrokeWidth : 1,

        //Boolean - Whether to show a stroke for datasets
        datasetStroke : true,

        //Number - Pixel width of dataset stroke
        datasetStrokeWidth : 2,

        //Boolean - Whether to fill the dataset with a colour
        datasetFill : false,

        //String - A legend template
        legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",

        // Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
        scaleBeginAtZero: true,

        // Boolean - Determines whether to draw tooltips on the canvas or not
        showTooltips: false,
    };
    return (
    <div>
        <div>
            <h3>Legend</h3>
            <SVGComponent height="50" width="50">
                <Circle cx="10" cy="10" r="10" fill="rgba(220,220,220,1)" />
            </SVGComponent>
            <p> Target sleep </p>

            <SVGComponent height="50" width="50">
                <Circle cx="10" cy="30" r="10" fill="rgba(151,187,205,1)" />
            </SVGComponent>
            <p> Your sleep </p>
        </div>
        <LineChart data={chartData} options={chartOptions} width="600" height="250" />
    </div>
    );
  }
});

module.exports = MyComponent;

