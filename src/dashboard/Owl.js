
var React = require('react');

var Owl = React.createClass({
  render: function() {
    return 
    	(<div>
    		<OwlImage name={this.props.name} />
    		<OwlMessage name={this.props.name} message={this.props.message} />
		</div>);
  }
});

var OwlImage = React.createClass({
  render: function() {
    return
    	(
    		<img src='https://upload.wikimedia.org/wikipedia/commons/7/75/Druplicon.vector.svg'/>
    	 );
  }
});

var OwlMessage = React.createClass({
  render: function() {
    return 
    	(<div>
    		Hello {this.props.name}, {this.props.message}
		</div>);
  }
});

module.exports = Owl; 






//USAGE:
//ReactDOM.render(
//  <Owl name="User" message = "you should go to sleep."/>,
//  document.getElementById('owl-container')
//);

