import React, { useState, useEffect } from 'react';
import Header from './Header.js'
import Masthead from './Masthead.js'
import Projects from './Projects.js'
import About from './About.js'
import './App.css';
class App extends React.Component {

  render() {
    return (
      <>
        <Header />
        <Masthead />
        <About />
        <Projects />
      </>
    );
  }
}

export default App;



