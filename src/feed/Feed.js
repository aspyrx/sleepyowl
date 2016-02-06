'use strict'

var React = require('react');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');
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
            <Row>
                <Col xs={12}>
                    {rows}
                </Col>
            </Row>
        );
    }
});



