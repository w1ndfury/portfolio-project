import React from "react";

function PrimaryButton(props) {
  return (
    <button
      tabIndex={0}
      aria-label={props.label}
      className={`pp-primary-button ${props.classNames || ""}`}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
}

export default PrimaryButton;
