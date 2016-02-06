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
    	color: 'DarkGray'
    },

    line: {
        marginTop: '10px',
        marginBottom: '10px',
        borderColor: '#DDD'
    }
};

var TimeLine = React.createClass({
	render: function() {
		return (
            <Row style={styles.container}>
                <Col xs={2}>
                    <span style={styles.label}>{this.props.start}</span>
                </Col>
                <Col xs={10}>
                    <hr style={styles.line} />
                </Col>
   			</Row>
    	);
	}
});

module.exports = Radium(TimeLine);

