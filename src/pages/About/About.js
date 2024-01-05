import React from "react";
import "./About.css";

function About() {
  const title = "PANAGIOTIS PATSOGLOU";
  const subtitle = "Software engineer based in Athens, Greece.";
  const description = `I'm currently focused on front-end development as I like to craft
  solid and scalable front-end products with great user experience.`;

  return (
    <div className="about-text">
      <h1 className="pp-text-secondary pp-text-large-80">{title}</h1>
      <h2 className="pp-text-xx-large subtitle-text pp-text-large-24">
        {subtitle}
      </h2>
      <h3 className="pp-text-large description-text">{description}</h3>
    </div>
  );
}

export default About;
