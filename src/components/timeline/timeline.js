import React, { useState } from "react";
import "./timeline.css";
import { timelineData } from "./timelineData";
import TimelineItem from "./timelineItem";

const Timeline = () => {
  return (
      <div id="timeline">
        {timelineData.map((data, key) => {
          return (
            <>
            <TimelineItem
              key={key}
              id={data.id}
              time={data.timelineObj.time}
              title={data.timelineObj.title}
              organization={data.timelineObj.organization}
              description={data.timelineObj.description}
            />
            </>
            );
        })}
       
      </div>
  );
};

export default Timeline;
