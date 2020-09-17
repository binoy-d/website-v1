import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Header.css'
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


function Header() {
  return (
    <>
      <Navbar bg="dark" className="main-navbar justify-content-end">
        <div className="container">
          <div className="navbar-nav mr-auto">
            <Navbar.Brand href="#home">Home</Navbar.Brand>
          </div>
          <div className="navbar-nav ml-auto">
            <ul className = "nav">
            <li><Link activeClass="active" className="btn nav-link header-section-link" to="about" spy={true} smooth={true} duration={600} >About</Link></li>
            <li><Link activeClass="active" className="btn nav-link header-section-link" to="projects" spy={true} smooth={true} duration={600}>Projects</Link></li>
            <li><Link activeClass="active" className="btn nav-link header-section-link" to="projects" spy={true} smooth={true} duration={600}>Resume</Link></li>
            </ul>
            
          </div>
        </div>
      </Navbar>
    </>
  );
}

export default Header;
