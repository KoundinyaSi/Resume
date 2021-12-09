import React from "react";
import Project from "./project";
import './projects.css';
import { projectsData } from "./projectsData";

const Projects = () => {

    return(
        <div id="projects">
            {projectsData.map((data, key) => {
                return(
                    <Project 
                    key={key}
                    title={data.title}
                    description={data.description}
                    image={data.image}
                    url={data.url}/>
                )
            }
            )}
        </div>
    )
}

export default Projects;