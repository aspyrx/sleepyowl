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
        textAlign: 'center'
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
                <Col xs={4} style={styles.time}>
                    {this.props.time}
                </Col>
                <Col xs={7} style={styles.name}>
                    {this.props.name}
                </Col>
                <Col xs={1} style={styles.icon}>
                    <Glyphicon glyph="glyphicon glyphicon-time" />
                </Col>
            </Row>
        );
    }
}));



