import React from "react";
import "./TimelineItem.css";

function TimelineItem(props) {
  return (
    <div className="timeline-item-container">
      <div
        className={
          props.active ? "timeline-item-active" : "timeline-item-inactive"
        }
      >
        <div
          className={
            props.active ? "timeline-status-active" : "timeline-status-inactive"
          }
        ></div>
      </div>
    </div>
  );
}

export default TimelineItem;
