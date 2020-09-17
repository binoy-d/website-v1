import React, {useState} from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Masthead.css'

function Masthead() {
  const [open, setOpen] = useState(false)
  window.onload = function(){
    setOpen(true);
  }
  return (
    <>
        <section  id="home">
          <div className="masthead text-center">
            <h1 className="font-weight-bold display-3 masthead-name">Daniel Binoy</h1>
            <p className="masthead-description">Computer Science student at University of California, Irvine looking for software engineering opportunies</p>
          </div>
        </section>


    </>
  );
}

export default Masthead;
