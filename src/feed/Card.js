var Radium = require('radium');
var React = require('react');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

var style = {
    card: {
        border: '1px solid #DDD',
        borderRadius: '10px'
    }
};

class Card extends React.Component {
    render() {
        return (
            <Row style={style.card}>
                <Col xs={4}>
                    <Row>
                        <Col xs={12}>
                            7:30 AM
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            8:30 AM
                        </Col>
                    </Row>
                </Col>
                <Col xs={8}>
                    { this.props.title }
                </Col>
            </Row>
        );
    }
}
module.exports = Radium(Card);

