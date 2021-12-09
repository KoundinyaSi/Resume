import React from "react";
import "./timeline.css";

const TimelineItem = ({ time, title, organization, description }) => {
  return (
    <div className="timeline-item">
      {/* <h1>{id}</h1> */}
      <h3>{time}</h3>
      <h4>{title}</h4>
      <h5>{organization}</h5>
      <span className="desc-span">{description}</span>
    </div>

  );
};

export default TimelineItem;
