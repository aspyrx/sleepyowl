'use strict'

var React = require('react');
var ReactDOM = require('react-dom');
var Glyphicon = require('react-bootstrap').Glyphicon;
var Row = require('react-bootstrap').Row;

module.exports = React.createClass({
    handleClick: function(event) {

    },
    render: function() {
        var time = this.props.time;
        var alarmName = this.props.name;
        return (
            <Row onClick={this.handleClick}>
                <Glyphicon glyph="glyphicon glyphicon-time" />
                {time}, {alarmName}.
            </Row>
        );
    }
});



