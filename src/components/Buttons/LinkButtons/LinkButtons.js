import React from "react";

function PrimaryLinkButton(props) {
  return (
    <a
      tabIndex={0}
      aria-label={props.label}
      className={`pp-primary-link-button ${props.classNames || ""}`}
      href={props.href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {props.label}
    </a>
  );
}

function SecondaryLinkButton(props) {
  return (
    <a
      tabIndex={0}
      aria-label={props.label}
      className={`pp-secondary-link-button ${props.classNames || ""}`}
      href={props.href}
      rel="noreferrer"
      target="_blank"
    >
      {props.label}
    </a>
  );
}

function LinkButtonWithIcon(props) {
  return (
    <a
      tabIndex={0}
      aria-label={props.ariaLabel}
      className={` ${props.classNames || ""}`}
      href={props.href}
      rel="noreferrer"
      target="_blank"
    >
      {props.icon}
    </a>
  );
}

export { PrimaryLinkButton, SecondaryLinkButton, LinkButtonWithIcon };
