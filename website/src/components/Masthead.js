import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Header.css'

function Masthead() {
  return (
    <>
     <section>
            <Container>
                <Row><p>Hi, my name is</p></Row>
                <Row><h1>Daniel Binoy</h1></Row>
                <Row>
                    <Col lg="6">
                        <p>I'm a computer science student at University of California, Irvine looking for software engineering opportunies</p>
                    </Col>
                </Row>
            </Container>
     </section>
    </>
  );
}

export default Masthead;
