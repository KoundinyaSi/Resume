import React from "react";
import "./timeline.css";
import { timelineData } from "./timelineData";

const TimelineItem = ({ time, title, organization, description }) => {
  return (
    <div className="timeline-item">
      {/* <h1>{id}</h1> */}
      <h3>{time}</h3>
      <h4>{title}</h4>
      <h5>{organization}</h5>
      <p>{description}</p>
    </div>

  );
};

export default TimelineItem;
