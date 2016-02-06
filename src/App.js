'use strict';

var React = require('react');
var Bootstrap = require('react-bootstrap');
var Grid = Bootstrap.Grid;
var Row = Bootstrap.Row;
var Col = Bootstrap.Col;

var Feed = require('./feed/Feed');

module.exports = React.createClass({
    render: function() {
        var feedArr = [
            { id: 1, feedtype: 'alarm', name: 'wakeup' },
            { id: 2, feedtype: 'card', name: 'a card' },
            { id: 3, feedtype: 'timeline', name: '7' }
        ];

        return (
            <Grid fluid={true}>
                <Row>
                    <Col md={8}>
                    </Col>
                    <Col md={4}>
                        <Feed results={feedArr} />
                    </Col>
                </Row>
            </Grid>
        );
    }
});

