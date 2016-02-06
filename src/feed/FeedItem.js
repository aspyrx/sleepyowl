
'use strict'

var React = require('react');

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
                <Alarm {...this.props} />
            );
        } else if (feedtype === "card") {
            return (
                <Card {...this.props} />
            );
        } else {
            return (
                <Timeline {...this.props} />
            );
        }
        return (
            <Timeline {...this.props} />
        );
    }
});



