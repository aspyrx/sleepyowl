'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Alert = require('react-bootstrap').Alert;

module.exports = React.createClass({
    render: function() {
        return (
            <Alert bsStyle="success">Hello {this.props.message}!</Alert>
        );
    }
});

