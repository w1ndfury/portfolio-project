import React from "react";
import "./Experience.css";

function Work(props) {
  function ToolsList(tools) {
    const ToolsItems = tools.map((i) => <li>{i}</li>);
    return (
      <ul className="text-red pp-text-normal" id="menu">
        {ToolsItems}
      </ul>
    );
  }

  return (
    <div class="work pp-text-xx-large">
      <div className="inside-0">
        <p>
          <strong>{props.title}</strong>
        </p>
        <p className="pp-text-large">{props.info}</p>
        <div className="my-link">
          <a href={props.link} target="_blank">
            Code
          </a>
        </div>
      </div>
      <div className="inside-1">
        <p>
          <strong>Tools & Frameworks</strong>{" "}
        </p>
        {ToolsList(props.tools)}
      </div>
    </div>
  );
}

export default Work;
