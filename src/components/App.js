import React from "react";
import AboutComp from "./about/about";
import Contact from "./contact/contact";
import JumbotronComp from "./jumbotron/jumbotronComp";
import Navbarcomp from "./navbar/navbar";
import Projects from "./projects/projects";
import Timeline from "./timeline/timeline";
// import TimelineItem from "./timeline/timelineItem";

function App() {
  return (
    <React.Fragment>
      <Navbarcomp />
      <JumbotronComp/>
      <AboutComp/>
      <Timeline/>
      <Contact/>
    </React.Fragment>
  );
}

export default App;
