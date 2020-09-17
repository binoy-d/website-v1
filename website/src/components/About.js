import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './About.css'

function About() {
  const [open, setOpen] = useState(false)
  window.onload = function(){
    setOpen(true);
  }
  return (
    <>
        <section id = "about">
          <h1>This is a test</h1>
        </section>

    </>
  );
}

export default About;
