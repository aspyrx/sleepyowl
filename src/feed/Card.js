var React = require('react');
var Bootstrap = require('react-bootstrap');
var Row = Bootstrap.Row;
var Col = Bootstrap.Col;

module.exports = React.createClass({
    render: function() {
        return (
            <Row>
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
});

