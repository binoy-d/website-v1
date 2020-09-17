import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Profile from "../img/daniel-profile.jpg"
import 'bootstrap/dist/css/bootstrap.min.css'
import './About.css'

function About() {
  const [open, setOpen] = useState(false)
  window.onload = function () {
    setOpen(true);
  }
  return (
    <>
      <section id="about">
        <Container className = "h-100">
          <Row className ="h-100" fluid>
            <Col xs={4} sm={4} lg={2} className = "align-self-center">
            <Image src={Profile} roundedCircle fluid/>
            </Col>
            <Col lg = {10} className = "align-self-center">
            <p className = "about-description">
            Hi! I'm Daniel Binoy. I'm a computer science student
            at the Donald Bren School of Information and Computer
            Sciences at University of California, Irvine . At my
            core, I am a creator. Whether its developing applications,
            filming and editing videos, or designing art, I'm always
            making something. Connect with me to make something
            great, together!
              </p>
            </Col>
          </Row>
        </Container>
      </section>

    </>
  );
}

export default About;
