import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Header.css'

function Header() {
  return (
    <>
      <Navbar bg="dark" className="justify-content-end">
        <div className="container">
            <div className="navbar-nav mr-auto">
              <Navbar.Brand href="#home">Home</Navbar.Brand>
            </div>
            <div className="navbar-nav ml-auto">
              <Nav.Link className = "header-section-link" href="#about">About</Nav.Link>
              <Nav.Link className = "header-section-link" href="#projects">Projects</Nav.Link>
              <Nav.Link className = "header-section-link" href="#contact">Contact</Nav.Link>
              <Nav.Link className="header-section-link" href="../files/Resume - Daniel Binoy.pdf">Resume</Nav.Link >
            </div>
        </div>
      </Navbar>
    </>
  );
}

export default Header;
