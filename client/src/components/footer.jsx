import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/footer.css';

export default class Footer extends Component {
    render() {
        return <div>
            <Container>
                <Row>
                    <Col>
                        <ul>
                            <li>put</li>
                            <li>put</li>
                            <li>put</li>
                            <li>put</li>
                            <li>put</li>
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <li>something</li>
                            <li>something</li>
                            <li>something</li>
                            <li>something</li>
                            <li>something</li>
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <li>So that</li>
                            <li>So that</li>
                            <li>So that</li>
                            <li>So that</li>
                            <li>So that</li>
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <li>let's see</li>
                            <li>let's see</li>
                            <li>let's see</li>
                            <li>let's see</li>
                            <li>let's see</li>
                        </ul>
                    </Col>
                </Row>
            </Container>

        </div>
    }
}