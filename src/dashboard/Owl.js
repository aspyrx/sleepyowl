
var React = require('react');
var Radium = require ('radium');
var Panel = require('react-bootstrap/lib/Panel');
var Col = require('react-bootstrap/lib/Col');

//USAGE:
// name: username
// message: message
// state: "awake" or "asleep"

var Owl = React.createClass({
  render: function() {
    return (
    	<div>
    		<Panel bsStyle="info">
    			<center>
	    			<Col xs={4} md={2} align="left"><OwlImage state={this.props.state} /></Col>
	    			<Col xs={4} md={2} align="left" ><OwlMessage name={this.props.name} message={this.props.message}/> </Col>
	    			<Col xs={8} md={8}></Col>
	    		</center>
			</Panel>
		</div>
		);
  }
});

var OwlImage = React.createClass({
  render: function() {
  		return (
    		<img src={'img/owl-'+ this.props.state+'.png'} width="67" height="56" align="right" />
    	);
  }
});

var OwlMessage = React.createClass({
  render: function() {
    return (
    	<div align="left">
    		Hello {this.props.name}, {this.props.message}
		</div>
		);
  }
});

module.exports = Owl; 

