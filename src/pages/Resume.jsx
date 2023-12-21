import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ResumeTimelineItem from "../components/ResumeTimelineItem";

import html from "../assets/icons/html.png";
import css from "../assets/icons/css.png";
import js from "../assets/icons/js.png";
import react from "../assets/icons/react.png";
import node from "../assets/icons/node-js.png";
import ts from "../assets/icons/typescript.png";
import flask from "../assets/icons/flask.png";
import python from "../assets/icons/python.png";
import tailwind from "../assets/icons/tailwind.png";
import mongo from "../assets/icons/mongo.png";
import redux from "../assets/icons/redux.png";
import github from "../assets/icons/github.png";
import firebase from "../assets/icons/firebase.png";
import awsec2 from "../assets/icons/aws-ec2.png";
import nginx from "../assets/icons/nginx.png";

// function LinearProgressWithLabel({ value, title }) {
//   return (
//     <div>
//       <h1 className="font-bold text-xl text-white">{title}</h1>
//       <Box sx={{ display: "flex", alignItems: "center" }}>
//         <Box sx={{ width: "100%", mr: 1 }}>
//           <LinearProgress variant="determinate" value={value} />
//         </Box>
//         <Box sx={{ minWidth: 35 }}>
//           <Typography variant="body2" color="Highlight">{`${Math.round(
//             value
//           )}%`}</Typography>
//         </Box>
//       </Box>
//     </div>
//   );
// }

let skills = [
  {
    title: "HTML",
    icon: html,
  },
  {
    title: "CSS",
    icon: css,
  },
  {
    title: "JavaScript",
    icon: js,
  },
  {
    title: "TypeScript",
    icon: ts,
  },
  {
    title: "React JS",
    icon: react,
  },
  {
    title: "Node JS",
    icon: node,
  },

  {
    title: "Flask",
    icon: flask,
  },
  {
    title: "Python",
    icon: python,
  },
  {
    title: "Tailwind CSS",
    icon: tailwind,
  },
  {
    title: "MongoDB",
    icon: mongo,
  },
  {
    title: "Redux",
    icon: redux,
  },
  {
    title: "Github",
    icon: github,
  },
  {
    title: "Firebase",
    icon: firebase,
  },
  {
    title: "AWS EC2",
    icon: awsec2,
  },
];

const Resume = () => {
  return (
    <div
      name="resume"
      id="resume"
      className="p-4 lg:px-24 bg-gradient-to-b from-gray-800 to-black justify-center py-10"
    >
      <div className=" inline-flex flex-col justify-center h-auto">
        <h1 className="text-center font-extrabold md:text-4xl text-2xl my-10">
          Work & Education
          <hr className="my-4 h-px w-1/2 md:w-1/4 mx-auto  border-0 bg-gray-700" />
        </h1>
        <div className="grid lg:grid-cols-2 auto-rows-auto gap-10">
          <section className="bg-[#0c0f16] ">
            <h1 className="p-6 md:text-xl  font-semibold">Education</h1>
            <Timeline
              sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
              }}
            >
              <ResumeTimelineItem
                title="P.E.S Modern College Of Engineering, Shivajinagar-Pune"
                duration="2019-2023"
                content="3rd year GPA (9.81)"
              />
              <ResumeTimelineItem
                title="Ashok  Vidyalaya, Pune "
                duration="2016-2018"
                content="Class 12th- HSC(76.54%)"
              />
              <ResumeTimelineItem
                title="St. Joseph’s Convent School, Panchgani "
                duration="2006-2016"
                content="Class 10th - ICSE(92%)"
              />
            </Timeline>
          </section>
          <section className="bg-[#0c0f16]">
            <h1 className="p-6 md:text-xl  font-semibold">Work</h1>
            <Timeline
              sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
              }}
            >
              <ResumeTimelineItem
                title="React Developer"
                CompanyName="MiniOrange"
                duration="03/06/2023 - Present"
                content="As a React Developer at MiniOrange, I actively contribute to the development and enhancement of our flagship products. My role involves feature development, UI/UX improvements, or performance optimization, and I am deeply involved in ensuring the high-quality delivery of these projects."
                certificate_link=""
              />
              <ResumeTimelineItem
                title="React Developer Intern"
                CompanyName="Apptware"
                duration="22/07/2022 - 31/10/2022"
                content="During my internship at Apptware, I worked on a few minor personal projects as well as a template for an admin dashboard in React JS."
                certificate_link="https://drive.google.com/file/d/1EmVqgzf4UnJNqKKfvR-76M3u2Xktq-gO/view?usp=share_link"
              />
            </Timeline>
          </section>
        </div>
      </div>
      <div className=" py-10 md:py-20">
        <h1 className="text-center font-extrabold md:text-4xl text-2xl my-10">
          My Skills
          <hr className="my-4 h-px w-1/2 md:w-1/4 mx-auto  border-0 bg-gray-700 " />
        </h1>
        <div className="flex justify-center w-full">
          <section className=" flex flex-wrap justify-center items-center gap-6 md:gap-8 md:w-4/5">
            {skills.map((skill) => (
              <div className=" flex justify-center flex-col items-center bg-gray-800 rounded-xl">
                <img
                  src={skill.icon}
                  alt="icon"
                  className="w-20 h-20 md:w-32 md:h-32 p-2 md:p-4"
                />
                <h1 className="text-white font-bold py-2 text-[0.6rem] md:text-lg ">
                  {skill.title}
                </h1>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
