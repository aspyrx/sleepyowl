'use strict';

var Radium = require('radium');
var React = require('react');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

var styles = {
    label: {
    	color: 'DarkGray',
    	float: 'left'
    },

    line: {
    	position: 'relative',
    	top: '50%'
    }
};

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
			<Row>
				<p style={styles.label}>{this.props.t}</p>
				<SVGComponent height="15" width="80">
        			<Line x1="5" y1="5" x2="85" y2="5"
           		 		strokeWidth="2"
          	 			stroke="DarkGray" style={styles.line}/>
    			</SVGComponent>
   			</Row>
    	);
	}
});

module.exports = Radium(TimeLine);

