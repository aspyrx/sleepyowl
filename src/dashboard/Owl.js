
var React = require('react');
var Radium = require ('radium');
var Panel = require('react-bootstrap/lib/Panel');
var Col = require('react-bootstrap/lib/Col');

//USAGE:
// name: username
// message: message
// state: "awake" or "asleep"

var style = {
    container: {
        color: '#333'
    },

    img_size: {
        width:'50%',
        height:'50%'
    }
};

var Owl = React.createClass({
  render: function() {
    return (
    	<div style={style.container}>
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
    		<img src={'img/owl-'+ this.props.state+'.png'} align="right" style={style.img_size} />
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
