var Radium = require('radium');
var React = require('react');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');
var Owl = require('./Owl');
var HealthBar = require('./HealthBar');
var Graph = require('./Graph');

var styles = {
    head: {
        textAlign: 'center'
    }
};

module.exports = React.createClass({
  render: function() {
    return (
            <Row>
                <Col xs={12}>
                    <Row>
                        <h1 style={styles.head}>sleepy owl</h1>
                        <hr />
                    </Row>
                    <Row>
                        <Owl name={this.props.username} message={this.props.message} state={this.props.state} />
                    </Row>
                    <Row>
                        <HealthBar now={this.props.health} />
                    </Row>
                    <Row>
                        <Graph />
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
