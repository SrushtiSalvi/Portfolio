import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const ResumeTimelineItem = ({ title, duration, content, certificate_link }) => {
  return (
    <div className="">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="info" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div className="space-y-4 w-fit">
            <h1 className="text-cyan-400">{title}</h1>
            <p className="py-1 px-2 bg-cyan-600 text-sm font-bold w-fit">
              {duration}
            </p>
            <p>{content}</p>
            <a href={certificate_link} className="font-bold">
              Certificate Link:-{" "}
              <span className="text-blue-500 font-medium">
                Internship letter
              </span>
            </a>
          </div>
        </TimelineContent>
      </TimelineItem>
    </div>
  );
};

export default ResumeTimelineItem;
