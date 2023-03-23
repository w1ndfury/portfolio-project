import React from "react";
import "./Experience.css";
import Work from "./Work";
import Carousel from "react-elastic-carousel";

function Experience() {
  const breakPoints = [
    { width: 1, itemToShow: 1 },
    { width: 500, itemToShow: 2 },
    { width: 768, itemToShow: 2 },
    { width: 1200, itemToShow: 2 },
  ];

  const workItems = [
    {
      number: 1,
      title: "Cooking-Steam-App",
      info: "test",
      link: "https://github.com/w1ndfury/Cooking-Steam-App",
      tools: ["React.js", "React-Flow-Renderer", "Material-UI", "Html", "CSS"],
    },
    {
      number: 2,
      title: "Chilimon-App",
      info: "test 2",
      link: "https://github.com/w1ndfury/Chilimon-App",
      tools: ["MongoDB", "Express", "React.js", "Node.js"],
    },
  ];

  return (
    <div className="pp-section-wraper-body pp-box-shadow-gray">
      <div className="experience-text pp-text-xx-large">
        <div className="container-fluid px-0 col-12">
          <div className="row no-gutters">
            <Carousel breakPoints={breakPoints}>
              {workItems?.map((item) => (
                <Work
                  key={item.number}
                  number={item.number}
                  title={item.title}
                  info={item.info}
                  link={item.link}
                  tools={item.tools}
                />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
