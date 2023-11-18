import React from "react";
import "./Experience.css";
import { SecondaryLinkButton } from "../../components/Buttons/LinkButtons/LinkButtons";

function Work(props) {
  function ToolsList(tools) {
    const ToolsItems = tools.map((i) => (
      <div className="work-skill pp-color-animation pp-text-small" key={i}>
        {i}
      </div>
    ));
    return (
      <div
        className="pp-flex-row pp-wrap pp-gap-x-small pp-text-red pp-text-normal"
        id="menu"
      >
        {ToolsItems}
      </div>
    );
  }

  return (
    <div className="work pp-background-gradient-purple-glass pp-box-shadow-gray">
      <div className="pp-flex-column">
        <div className="pp-text-align-start pp-margin-bottom-0">
          <span className="pp-text-bold pp-text-large">{props.title} </span>

          <span className="pp-text-small">at </span>
          <SecondaryLinkButton
            label={props.company}
            classNames="pp-text-small"
            href={props.link}
          ></SecondaryLinkButton>
        </div>
        <p className="pp-text-x-small pp-text-align-start pp-text-gray">
          {props.period}
        </p>
        <div className="pp-width-100">{ToolsList(props.tools)}</div>
      </div>
    </div>
  );
}

export default Work;
