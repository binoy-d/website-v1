import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Projects.css'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Project from "./ProjectCard.js"
import {BubblifyImg,
        PuzzleGameImg,
        BubblesTogetherImg,
        ColorGameImg,
        TodoListImg} from '../img'



import ProjectImg from "../img/project.jpg"


function Projects() {
  const projects = [
    {
      title: 'Bubbles, Together',
      description: ['this is a very cool project I made', 'I sure loved making this project', '10/10 would make again'],
      languages: ['HTML', 'CSS', 'React', 'JavaScript'],
      link: "https://binoy.co",
      img: BubblesTogetherImg
    },
    {
      title: 'Personal Website',
      description: ['this is a very cool project I made', 'I sure loved making this project', '10/10 would make again'],
      languages: ['HTML', 'CSS', 'React', 'JavaScript'],
      link: "https://binoy.co",
      img: ProjectImg
    },
    {
      title: 'To Do List',
      description: ['this is a very cool project I made', 'I sure loved making this project', '10/10 would make again'],
      languages: ['HTML', 'CSS', 'React', 'JavaScript'],
      link: "https://binoy.co",
      img: TodoListImg
    },
    {
      title: 'Puzzle Game',
      description: ['this is a very cool project I made', 'I sure loved making this project', '10/10 would make again'],
      languages: ['HTML', 'CSS', 'React', 'JavaScript'],
      link: "https://binoy.co",
      img: PuzzleGameImg
    },
    {
      title: 'Bubblify',
      description: ['this is a very cool project I made', 'I sure loved making this project', '10/10 would make again'],
      languages: ['HTML', 'CSS', 'React', 'JavaScript'],
      link: "https://binoy.co",
      img: BubblifyImg
    }
  ]

  return (
    <>
      <section id="projects" >
        <Container className="h-100 w-100">
          <Row >
            {
              projects.map((proj, index) => (
                <Col lg={12}>
                  <Project proj={proj} side = {index%2}></Project>
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Projects;
