'use strict'

var Radium = require ('radium');
var React = require('react');
var Glyphicon = require('react-bootstrap/lib/Glyphicon');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');


var styles = {
    overall: {
        margin: '10px',
        padding: '5px'
    },
    time: {

    },
    name : {
        textAlign: 'left'
    },
    icon : {
        textAlign: 'center',
        color: 'red'
    }
}

module.exports = Radium(React.createClass({
    handleClick: function(event) {

    },
    render: function() {
        return (
            <Row onClick={this.handleClick} style={styles.overall}>
                <Col xs={3} style={styles.time}>
                    {this.props.start}
                </Col>
                <Col xs={1} style={styles.icon}>
                    <Glyphicon glyph="glyphicon glyphicon-time" />
                </Col>
                <Col xs={8} style={styles.name}>
                    {this.props.name}
                </Col>
            </Row>
        );
    }
}));



