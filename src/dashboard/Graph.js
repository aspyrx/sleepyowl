'use strict';

var Radium = require('radium');
var React = require('react');
var Chart = require('chart.js/');
var LineChart = require("react-chartjs").Line;
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

var styles = {
    chart: {
        display: 'block',
        margin: 'auto'
    },
    legend: {
        padding: '5px',
        borderStyle: 'solid',
        borderColor: 'Silver',
        width: '20%'

    },

    legendTitle: {
        textAlign: 'center',
        paddingBottom: '10px'
    }
};

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

        // Boolean - whether or not the chart should be responsive and resize when the browser does.
        responsive: false
    };
    return (
    <Row>
        <Col xs={12}>
            <Row>
                <Col xs={9}>
                    <h1 style={styles.legendTitle}>Hours of sleep per day</h1>
                </Col>
            </Row>
            <Row>
                <Col xs={9}>
                    <LineChart style={styles.chart} data={chartData} options={chartOptions} width="600" height="250" />
                </Col>
                <Col xs={3} style={styles.legend}>
                    <h3 style={styles.legendTitle}>Legend</h3>
                    <Row>
                        <Col xs={2}>
                            <SVGComponent height="20" width="35" >
                                <Circle cx="10" cy="10" r="10" fill="rgba(220,220,220,1)" />
                            </SVGComponent>
                        </Col>
                        <Col xs={10}>
                            <p>Target sleep</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={2}>
                            <SVGComponent height="20" width="35">
                                <Circle cx="10" cy="10" r="10" fill="rgba(151,187,205,1)" />
                            </SVGComponent>
                        </Col>
                        <Col xs={10}>
                            <p>Your sleep</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    </Row>
    );
  }
});

module.exports = MyComponent;

