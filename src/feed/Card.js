var Radium = require('radium');
var React = require('react');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

var style = {
    card: {
        border: '1px solid #DDD',
        borderRadius: '10px',
        margin: '10px',
        padding: '5px'
    }
};

class Card extends React.Component {
    render() {
        return (
            <Row style={style.card}>
                <Col xs={4}>
                    <Row>
                        <Col xs={12}>
                            { this.props.start }
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            { this.props.end }
                        </Col>
                    </Row>
                </Col>
                <Col xs={8}>
                    { this.props.name }
                </Col>
            </Row>
        );
    }
}
module.exports = Radium(Card);

