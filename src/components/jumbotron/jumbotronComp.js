import React from 'react';
import { Jumbotron, Button, Container } from 'react-bootstrap';
import './jumbotronComp.css';
// import pic from '../../media/propic.jpg';
import Typewriter from 'typewriter-effect';

const JumbotronComp = () => {
  return (
      <div className="jumbotron-wrapper">
      <Jumbotron fluid>
            <div className="jumbotron-text">
                <h1 className="display-3" id="hello">
                   Hello!
                </h1>
                <p className="lead" id="lead-text">I'm Sitaram Koundinya. </p>
                        <span className="typewriter-text"><Typewriter
                        onInit={(typewriter)=> {
                            typewriter
                            .typeString("Photographer.")
                            .pauseFor(1000).deleteAll()
                            .typeString("Frontend Web Designer.")
                            .start();
                        }}
                    /> 
                    </span>
                {/* <hr className="my-2" />
                <p></p> */}
            </div>
            {/* <img className="jumbotron-img" src={pic}></img> */}
      </Jumbotron>
      </div>
  );
};

export default JumbotronComp;