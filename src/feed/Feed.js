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
        var i = 0;
        for (var product of this.props.results) {
            rows.push(
                <FeedItem start={product.start}
                end={product.end}
                name={product.name}
                key={i}
                feedtype={product.feedtype} />);
            i++;
        }
        return (
            <Row>
                <Col xs={12}>
                    {rows}
                </Col>
            </Row>
        );
    }
});



