'use strict';

var Radium = require('radium');
var React = require('react');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

var styles = {
    container: {
        margin: '10px',
        padding: '5px'
    },

    label: {
    	color: 'DarkGray',
    },

    lineContainer: {
        width: '100%'
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
            <Row style={styles.container}>
                <Col xs={1}>
                    <span style={styles.label}>{this.props.start}</span>
                </Col>
                <Col xs={11}>
                    <SVGComponent height="15" style={styles.lineContainer}>
                        <Line x1="5" y1="5" x2="85" y2="5"
                            strokeWidth="2"
                            stroke="DarkGray" style={styles.line}/>
                    </SVGComponent>
                </Col>
   			</Row>
    	);
	}
});

module.exports = Radium(TimeLine);

