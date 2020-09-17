import React from 'react';
import { render } from 'react-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Header.css'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


function Header() {
  return (
    <>
      <Navbar bg="dark" className="justify-content-end">
        <div className="container">
          <div className="navbar-nav mr-auto">
            <Navbar.Brand href="#home">Home</Navbar.Brand>
          </div>
          <div className="navbar-nav ml-auto">
            <ul class = "nav">
            <li><Link activeClass="active" className="nav-link header-section-link" to="about" spy={true} smooth={true} duration={600} >About</Link></li>
            <li><Link activeClass="active" className="nav-link header-section-link" to="projects" spy={true} smooth={true} duration={600}>Projects</Link></li>
            <li><Link activeClass="active" className="nav-link header-section-link" to="projects" spy={true} smooth={true} duration={600}>Resume</Link></li>
            </ul>
            
          </div>
        </div>
      </Navbar>
    </>
  );
}

export default Header;
