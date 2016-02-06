var React = require('react');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');
var Owl = require('./Owl');
var HealthBar = require('./HealthBar');


module.exports = React.createClass({
  render: function() {
    return (
            <Row>
                <Col xs={12}>
                    <Row>
                        <Owl name={this.props.username} message={this.props.message} />
                    </Row>
                    <Row>
                        <HealthBar now={this.props.health} />
                    </Row>
                </Col>
            </Row>
		);
  }
});

//<!--
//Usage:
//<Dashboard name="username" message="this is a message" health='42' />
//-->
