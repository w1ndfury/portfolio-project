import React from "react";
import "./Experience.css";
import Work from "./Work";

function Experience() {
  const workItems = [
    {
      number: 1,
      title: "Front end Engineer",
      company: "Desquared S.A.",
      period: "July 2022 - Present",
      info: "test",
      link: "https://thinkdesquared.com/",
      tools: ["AngularJS", "Typescript", "CSS", "HTML", "Storybook"],
    },
    {
      number: 2,
      title: "Full stack developer",
      company: "TESAE group",
      period: "March 2021 - May 2022",
      info: "test 2",
      link: "https://www.tesae.gr/",
      tools: ["CSS", "HTML", "Javascript", "PHP", "MySQL", "RESTful API"],
    },
  ];

  return (
    <div className="pp-flex-column pp-gap-small">
      <p className="pp-margin-bottom-0 pp-text-align-start pp-text-xx-large">
        Where I’ve Worked
      </p>
      {workItems?.map((item) => (
        <Work
          key={item.number}
          number={item.number}
          company={item.company}
          period={item.period}
          title={item.title}
          info={item.info}
          link={item.link}
          tools={item.tools}
        />
      ))}
    </div>
  );
}

export default Experience;
