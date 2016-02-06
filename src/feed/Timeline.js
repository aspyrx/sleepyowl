'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var SVGComponent = React.createClass({
    render: function() {
        return <svg {...this.props}>{this.props.children}</svg>;
    }
});

var Line = React.createClass({
    render: function() {
        return <line {...this.props}>{this.props.children}</line>;
    }
});

var TimeLine = React.createClass({
	render: function() {
		return (
			<div>
				<p>{this.props.t}</p>
				<SVGComponent height="15" width="80">
        			<Line x1="5" y1="5" x2="85" y2="5"
           		 		strokeWidth="5"
          	 			stroke="DarkGray" />
    			</SVGComponent>
   			</div>
    	);
	}
});

module.exports = TimeLine;

