import React from "react";
import "./Contact.css";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import {
  PrimaryLinkButton,
  LinkButtonWithIcon,
} from "../../components/Buttons/LinkButtons/LinkButtons";

function Contact() {
  return (
    <div className="contact-form">
      <p className="pp-text-large-30">Get In Touch</p>
      <p className="pp-text-normal">
        My inbox is always open and I’ll try my best to get back to you as soon
        as possible.
      </p>
      <PrimaryLinkButton
        label="Say Hi"
        href="mailto:panagiotis.patsoglou@gmail.com"
      ></PrimaryLinkButton>
      <div className="pp-flex-row-center pp-gap-small pp-margin-top-56">
        <LinkButtonWithIcon
          ariaLabel="GitHub"
          href="https://github.com/w1ndfury"
          icon={<BsGithub className="pp-icon-white pp-text-large-24" />}
        ></LinkButtonWithIcon>
        <LinkButtonWithIcon
          ariaLabel="LinkedIn"
          href="https://www.linkedin.com/in/panagiotispatsoglou/"
          icon={<BsLinkedin className="pp-icon-white pp-text-large-24" />}
        ></LinkButtonWithIcon>
      </div>
    </div>
  );
}

export default Contact;
