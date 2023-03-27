import React from "react";
import "./Contact.css";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

function Contact() {
  return (
    <div className="">
      <div className="contact-form">
        <p className="pp-text-large-30">Get In Touch</p>
        <p className="pp-text-normal">
          My inbox is always open and I’ll try my best to get back to you as
          soon as possible.
        </p>
        <a
          href="mailto:panagiotis.patsoglou@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <button className="btn-contact-link">Say Hi</button>
        </a>
        <div className="pp-flex-row-center pp-gap-small pp-margin-top-56">
          <a
            href="https://github.com/w1ndfury"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub className="pp-icon-white pp-text-large-24" />
          </a>
          <a
            href="https://www.linkedin.com/in/panagiotispatsoglou/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin className="pp-icon-white pp-text-large-24" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
