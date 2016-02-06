'use strict'

var React = require('react');
var Bootstrap = require('react-bootstrap');
var Glyphicon = Bootstrap.Glyphicon;
var Row = Bootstrap.Row;
var Col = Bootstrap.Col;

module.exports = React.createClass({
    handleClick: function(event) {

    },
    render: function() {
        var time = this.props.time;
        var alarmName = this.props.name;
        return (
            <Row onClick={this.handleClick}>
                <Col xs={4}>
                    {this.props.time}
                </Col>
                <Col xs={1}>
                    <Glyphicon glyph="glyphicon glyphicon-time" />
                </Col>
                <Col xs={7}>
                    {this.props.name}
                </Col>
            </Row>
        );
    }
});



