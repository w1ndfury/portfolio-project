import React from "react";
import "./Experience.css";
import Work from "./Work";
import TimelineItem from "../../features/TimelineItem/TimelineItem";

function Experience() {
  const workItems = [
    {
      number: 1,
      title: "Front end Engineer",
      company: "Desquared S.A.",
      period: "July 2022 - Present",
      link: "https://thinkdesquared.com/",
      tools: ["Angular", "React", "Typescript", "CSS", "HTML", "Storybook"],
      active: true,
    },
    {
      number: 2,
      title: "Full stack developer",
      company: "TESAE group",
      period: "March 2021 - May 2022",
      link: "https://www.tesae.gr/",
      tools: ["CSS", "HTML", "Javascript", "PHP", "MySQL", "RESTful API"],
      active: false,
    },
  ];

  const sectionTitle = "Where I've worked";

  return (
    <div className="experience-text pp-width-100 pp-flex-column pp-gap-small">
      <p className="pp-margin-bottom-0 pp-text-align-start pp-text-xx-large">
        {sectionTitle}
      </p>

      <div className="timeline-container">
        {workItems?.map((item) => (
          <div className="timeline-container-row" key={item.number}>
            <TimelineItem active={item.active} />
            <Work
              key={item.number}
              number={item.number}
              company={item.company}
              period={item.period}
              title={item.title}
              link={item.link}
              tools={item.tools}
              active={item.active}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
