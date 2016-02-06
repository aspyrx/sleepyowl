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
                    <hr />
                    <div class="navbar navbar-fixed-bottom"> 
			            <Row>
			            	<center>
							  <p>Copyright (c) 2016 Amukta Nayak, Neil Xu, Claire Yuan, and Stan Zhang</p>
							  <p>Questions or comments? Give us a hoot on <a href="https://github.com/aspyrx/sleepyowl">GitHub</a>
							  </p>
							</center>
						</Row>
					</div>
                </Col>
            </Row>
		);
  }
});

//<!--
//Usage:
//<Dashboard name="username" message="this is a message" health='42' />
//-->
