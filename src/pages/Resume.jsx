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
import zIndex from "@mui/material/styles/zIndex";

function LinearProgressWithLabel({ value, title }) {
  return (
    <div className="">
      <h1 className="font-bold text-xl text-white">{title}</h1>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress variant="determinate" value={value} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="Highlight">{`${Math.round(
            value
          )}%`}</Typography>
        </Box>
      </Box>
    </div>
  );
}

const Resume = () => {
  return (
    <div
      name="resume"
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
                duration="2021-2023"
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
                title="React Developer Intern"
                duration="22/07/2022 - 31/10/2022"
                content="I was a React intern at Apptware, a rapidly expanding business. During my internship, I worked on a few minor personal projects as well as a template for an admin dashboard in React JS."
                certificate_link="https://drive.google.com/file/d/1EmVqgzf4UnJNqKKfvR-76M3u2Xktq-gO/view?usp=share_link"
              />
            </Timeline>
          </section>
        </div>
      </div>
      <div className=" py-10 md:py-20">
        <h1 className="text-center font-extrabold md:text-4xl text-2xl my-10">
          My Skills
          <hr className="my-4 h-px w-1/2 md:w-1/4 mx-auto  border-0 bg-gray-700" />
        </h1>
        <div className="grid md:grid-cols-2 auto-rows-auto gap-10   ">
          <LinearProgressWithLabel value={80} title="HTML" />
          <LinearProgressWithLabel value={80} title="CSS" />
          <LinearProgressWithLabel value={60} title="Javascript" />
          <LinearProgressWithLabel value={70} title="Javascript Fundamentals" />
          <LinearProgressWithLabel value={60} title="React JS" />
          <LinearProgressWithLabel value={30} title="React Native" />
          <LinearProgressWithLabel value={40} title="Node JS" />
          <LinearProgressWithLabel value={40} title="Redux" />
          <LinearProgressWithLabel value={80} title="Tailwind CSS" />
          <LinearProgressWithLabel value={60} title="MongoDB" />
        </div>
      </div>
    </div>
  );
};

export default Resume;
