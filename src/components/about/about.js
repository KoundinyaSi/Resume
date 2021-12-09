import React from "react";
import "./about.css";
import camera from "../../media/propic-1.jpg";
import propic from "../../media/propic.jpg";
import { Button, Row, Col } from "react-bootstrap";

const AboutComp = () => {
  return (
    <Row id="about">
      <Col xs={12} md={6} id="about-eng">
        <img id="propic" src={propic}></img>
        <div id="about-eng-text">
          <h3 id="about-eng-heading">Designer by Day</h3>
          <ul className="hide">
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>ReactJs</li>
          </ul>
        </div>
      </Col>
      <Col id="about-photo">
        <img id="camera" src={camera}></img>
        <div id="about-photo-text">
          <h3 id="about-photo-heading">Photographer by Night</h3>
          <ul className="hide">
            <li>Product shoots</li>
            <li>Portrait photography</li>
            <li>Aesthetics</li>
            <li>Softwares : Lightroom, PicsArt etc.</li>
          </ul>
        </div>
      </Col>
    </Row>
  );
};

export default AboutComp;
