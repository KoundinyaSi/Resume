import React from "react";
import "./projects.css";
// import { projectsData } from "./projectsData";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import dadJokes from '../../media/dadjokes.jpg'

const Project = ({ title, description, image, url }) => {
  return (
    <>
      <Card className="project-card">
        <Card.Img variant="top" src={dadJokes} />
        <Card.Header>{title}</Card.Header>
        <Card.Body>
          <Card.Text>{description}Head over to <a href={url}>{title}</a> to check it out.</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Project;