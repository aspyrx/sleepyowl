'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var ProgressBar = require('react-bootstrap/lib/ProgressBar');

var Progress = React.createClass({
	render: function() {
		return (
			<ProgressBar active bsStyle='info' now={this.props.now} label="Inner Vitality: %(percent)s%" />
			);
	}
});

module.exports = Progress;
