'use strict';

var React = require('react');
var Grid = require('react-bootstrap/lib/Grid');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

var Feed = require('./feed/Feed');

module.exports = React.createClass({
    render: function() {
        var feedArr = [
            {feedtype: 'timeline', name: '7:00', start: '7:00', end: ''},
            {feedtype: 'alarm', name: 'Ding Dong Wakeup!', start: '7:00', end: '' },
            {feedtype: 'timeline', name: '7:00', start: '8:00', end: ''},
            {feedtype: 'card', name: 'Fun Meeting', start: '8:00', end: '9:00'},
            {feedtype: 'timeline', name: '7:00', start: '9:00', end: ''},
            {feedtype: 'card', name: 'Fire underling', start: '9:05', end: '9:25'},
            {feedtype: 'card', name: 'Strengthen the economy', start: '9:30', end: '10:00'},
            {feedtype: 'timeline', name: '7:00', start: '10:00', end: ''},
            {feedtype: 'timeline', name: 'Fun Meeting', start: '10:00', end: '9:00'},
            {feedtype: 'alarm', name: 'Boring Meeting', start: '10:15', end: '9:00'},
            {feedtype: 'card', name: 'Boring Meeting', start: '10:05', end: '10:25'}
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

