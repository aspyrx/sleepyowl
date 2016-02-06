var Radium = require('radium');
var React = require('react');
var Bootstrap = require('react-bootstrap');
var Row = Bootstrap.Row;
var Col = Bootstrap.Col;

var styles = {
    red: {
        backgroundColor: 'red'
    }
};

class Card extends React.Component {
    render() {
        return (
            <Row>
                <Col xs={4} style={styles.red}>
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

