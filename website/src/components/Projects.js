import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Projects.css'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Project from "./ProjectCard.js"
import ProjectImg from "../img/project.jpg"


function Projects() {

  return (
    <>
      <section id="projects" >
        <Container className="h-100">
          <Row className = "p-5">
            <Col lg={12}>
              <Project title={"Project 1"} image={ProjectImg} summary={"A quick blurb about project 1 lorem ipsuim dolor omg idk what im writing im just tryna fill up space lmao lets see how this goes"}></Project>
            </Col>
            <Col lg={12}>
              <Project title={"Project 2"} image={ProjectImg} summary={"A quick blurb about project 1 lorem ipsuim dolor omg idk what im writing im just tryna fill up space lmao lets see how this goes"}></Project>
            </Col>
            <Col lg={12}>
              <Project title={"Project 3"} image={ProjectImg} summary={"A quick blurb about project 1 lorem ipsuim dolor omg idk what im writing im just tryna fill up space lmao lets see how this goes"}></Project>
            </Col>
            <Col lg={12}>
              <Project title={"Project 4"} image={ProjectImg} summary={"A quick blurb about project 1 lorem ipsuim dolor omg idk what im writing im just tryna fill up space lmao lets see how this goes"}></Project>
            </Col>
            <Col lg={12}>
              <Project title={"Project 5"} image={ProjectImg} summary={"A quick blurb about project 1 lorem ipsuim dolor omg idk what im writing im just tryna fill up space lmao lets see how this goes"}></Project>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Projects;
