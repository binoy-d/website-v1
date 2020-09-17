import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './ProjectCard.css'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

import Col from 'react-bootstrap/Col'

import Row from 'react-bootstrap/Row'
function ProjectCard(props) {

  return (
    <>
      <Card className="project-card p-5 m-2" style={{ width: '100' }}>
        <Container>
          <Row>
            <Card.Title>{props.title}</Card.Title>
          </Row>
          <Row>
            <Col>
              <Card.Text>{props.summary}</Card.Text>
            </Col>
            <Col>
              <Card.Img src={props.image}></Card.Img>
            </Col>
          </Row>
        </Container>


      </Card>
    </>
  );
}

export default ProjectCard;
