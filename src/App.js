'use strict';

var React = require('react');
var Grid = require('react-bootstrap/lib/Grid');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

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

