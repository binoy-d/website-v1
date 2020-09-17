import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './ProjectCard.css'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Img from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'

import Row from 'react-bootstrap/Row'
function ProjectCard({ proj, side }) {
  if (side === 0) {
    return (
      <>
        <div className="project-card-wrapper">
          <div className="project-content content-left">
            <h2 className="project-title title-left">{proj.title}</h2>
            <Card className="project-card-description description-left align-middle">
              {proj.description.map((line, index) => (
                <Card.Text>‣{line}</Card.Text>
              ))}
            </Card>
          </div>
          <div className="project-image image-right">
            <Img src={proj.img}></Img>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="project-card-wrapper">
          <div className="project-content content-right">
            <h2 className="project-title title-right">{proj.title}</h2>
            <Card className="project-card-description description-right align-middle">
              {proj.description.map((line, index) => (
                <Card.Text>‣{line}</Card.Text>
              ))}
            </Card>
          </div>
          <div className="project-image image-left">
            <Img src={proj.img}></Img>
          </div>
        </div>
      </>
    );
  }

}

export default ProjectCard;


/*

<div>

            </div>


*/