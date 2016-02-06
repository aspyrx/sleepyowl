
'use strict'

var React = require('react');
var Bootstrap = require('react-bootstrap');
var Container = Bootstrap.Container;

var Alarm = require('./Alarm');
var Card = require('./Card');
var Timeline = require('./Timeline');

module.exports = React.createClass({
    handleClick: function(event) {

    },
    render: function() {
        var feedtype = this.props.feedtype;
        if (feedtype === "alarm") {
            return (
                <Alarm name={this.props.name} />
            );
        } else if (feedtype === "card") {
            return (
                <Card title={this.props.name} />
            );
        } else {
            return (
                <Timeline t={this.props.name} />
            );
        }
        return (
            <Timeline t={this.props.name} />
        );
    }
});



