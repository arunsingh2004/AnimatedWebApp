import React from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faSchool,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const workIcon = {
  icon: <FontAwesomeIcon icon={faBriefcase} />,
  iconStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
};
const schoolIcon = {
  icon: <FontAwesomeIcon icon={faSchool} />,
  iconStyle: { background: "rgb(233, 30, 99)", color: "#fff" },
};
const starIcon = {
  icon: <FontAwesomeIcon icon={faStar} />,
  iconStyle: { background: "rgb(16, 204, 82)", color: "#fff" },
};

function App() {
  const timeline = [
    {
      icon: workIcon,
      date: "2011 - present",
      title: "lorem",
      subtitle: "Miami, FL",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, consequatur.",
    },
    {
      icon: workIcon,
      date: "2010 - 2011",
      title: "Art lorem hghojnnj bhhii Director",
      subtitle: "San Francisco, CA",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, consequatur.",
    },
    {
      icon: workIcon,
      date: "2008 - 2010",
      title: "Web lorem hghojnnj bhhii Designer",
      subtitle: "Los Angeles, CA",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, consequatur.",
    },
    {
      icon: workIcon,
      date: "2006 - 2008",
      title: "Web lorem hghojnnj bhhii Designer",
      subtitle: "San Francisco, CA",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, consequatur.",
    },
    {
      icon: schoolIcon,
      date: "April 2013",
      title: "lorem hghojnnj bhhii Media",
      subtitle: "Online Course",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, consequatur.",
    },
    {
      icon: schoolIcon,
      date: "November 2012",
      title: "Agile Developmentlorem hghojnnj bhhiir",
      subtitle: "Certification",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, consequatur.",
    },
    {
      icon: schoolIcon,
      date: "2002 - 2006",
      title: "lorem hghojnnj bhhii ",
      subtitle: "Bachelor Degree",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, consequatur.",
    },
    { icon: starIcon },
  ];

  return (
    <div className="App bg-slate-200 m-4 rounded-xl">
      <h3 className="text-3xl pl-11 mt-4 font-bold">
        Self Improvement .Ugh.. -{" "}
      </h3>
      <VerticalTimeline>
        {timeline.map((t, i) => {
          const contentStyle =
            i === 0
              ? { background: "rgb(33, 150, 243)", color: "#fff" }
              : undefined;
          const arrowStyle =
            i === 0
              ? { borderRight: "7px solid  rgb(33, 150, 243)" }
              : undefined;

          return (
            <VerticalTimelineElement
              key={i}
              className="vertical-timeline-element--work"
              contentStyle={contentStyle}
              contentArrowStyle={arrowStyle}
              date={t.date}
              {...t.icon}
            >
              {t.title ? (
                <React.Fragment>
                  <h3 className="vertical-timeline-element-title">{t.title}</h3>
                  {t.subtitle && (
                    <h4 className="vertical-timeline-element-subtitle">
                      {t.subtitle}
                    </h4>
                  )}
                  {t.desc && <p>{t.desc}</p>}
                </React.Fragment>
              ) : undefined}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default App;
