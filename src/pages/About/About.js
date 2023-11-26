import React from "react";
import "./About.css";

function About() {
  const title = "PANAGIOTIS PATSOGLOU";
  const subtitle = "Software engineer based in Athens, Greece.";
  const description = `I'm currently focused on front-end development as I like to craft
  solid and scalable front-end products with great user experience.`;

  return (
    <div className="about-text">
      <p className="my-name-text pp-text-large-30 pp-margin-bottom-0">
        {title}
      </p>
      <p className="pp-text-xx-large">{subtitle}</p>
      <p className="pp-text-normal">{description}</p>
    </div>
  );
}

export default About;
