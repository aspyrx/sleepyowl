'use strict'

var React = require('react');
var Bootstrap = require('react-bootstrap');
var Container = Bootstrap.Container;
var FeedItem = require('./FeedItem');

module.exports = React.createClass({
    handleClick: function(event) {

    },
    render: function() {
        var rows = [];
        this.props.results.forEach(function(product) {
            rows.push(<FeedItem name={product.name} key={product.key} feedtype={product.feedtype} />);
        });
        return (
            <Container>
                {rows}
            </Container>
        );
    }
});



