'use strict';

var Radium = require('radium');
var React = require('react');
var Grid = require('react-bootstrap/lib/Grid');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

var Dashboard = require('./dashboard/Dashboard');
var Feed = require('./feed/Feed');

var styles = {
    feedContainer: {
        height: '100vh',
        overflowY: 'scroll'
    }
};

class App extends React.Component {
    render() {
        var feedArr = [
            {feedtype: 'timeline', start: '6:00'},
            {feedtype: 'timeline', start: '7:00'},
            {feedtype: 'card', name: 'Dinner with family', start: '7:00', end: '8:00'},
            {feedtype: 'timeline', start: '8:00'},
            {feedtype: 'timeline', start: '9:00'},
            {feedtype: 'timeline', start: '10:00'},
            {feedtype: 'timeline', start: '11:00'},
            {feedtype: 'card', name: 'Sleep!', start: '11:00 PM', end: '7:00 AM'},
            {feedtype: 'timeline', start: '12:00 AM'},
            {feedtype: 'timeline', start: '1:00'},
            {feedtype: 'timeline', start: '2:00'},
            {feedtype: 'timeline', start: '3:00'},
            {feedtype: 'timeline', start: '4:00'},
            {feedtype: 'timeline', start: '5:00'},
            {feedtype: 'timeline', start: '6:00'},
            {feedtype: 'timeline', start: '7:00'},
            {feedtype: 'alarm', name: 'Ding Dong Wakeup!', start: '7:00'},
            {feedtype: 'timeline', start: '8:00'},
            {feedtype: 'card', name: 'Fun Meeting', start: '8:00', end: '9:00'},
            {feedtype: 'timeline', start: '9:00'},
            {feedtype: 'card', name: 'Fire underling', start: '9:05', end: '9:25'},
            {feedtype: 'card', name: 'Strengthen the economy', start: '9:30', end: '10:00'},
            {feedtype: 'timeline', start: '10:00'},
            {feedtype: 'alarm', name: 'Boring Meeting', start: '10:15'},
            {feedtype: 'card', name: 'Boring Meeting', start: '10:05', end: '10:25'},
            {feedtype: 'timeline', start: '11:00'},
            {feedtype: 'timeline', start: '12:00 PM'},
            {feedtype: 'timeline', start: '1:00'},
            {feedtype: 'card', name: 'Naptime!', start: '1:00', end: '1:30'},
            {feedtype: 'timeline', start: '2:00'},
            {feedtype: 'card', name: 'Play squash', start: '2:15', end: '3:15'},
            {feedtype: 'timeline', start: '3:00'},
            {feedtype: 'card', name: 'Develop synergy', start: '3:45', end: '4:40'},
            {feedtype: 'timeline', start: '4:00'},
            {feedtype: 'timeline', start: '5:00'},
            {feedtype: 'alarm', name: 'Time to take over the world!', start: '5:30'},
            {feedtype: 'card', name: 'Take over the world', start: '5:30', end: '7:00'},

        ];

        return (
            <Grid fluid={true}>
                <Row>
                    <Col md={8}>
                        <Dashboard username="Amukta" message="you're at TartanHacks! You can't sleep." state="awake" health={32}/>
                    </Col>
                    <Col md={4} style={styles.feedContainer}>
                        <Feed results={feedArr} />
                    </Col>
                </Row>
            </Grid>
        );
    }
};

module.exports = Radium(App);

