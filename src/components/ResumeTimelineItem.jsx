import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const ResumeTimelineItem = ({
  title,
  duration,
  content,
  certificate_link,
  CompanyName,
}) => {
  return (
    <div className="">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="info" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div className="space-y-2 w-fit">
            <h1 className="text-blue-400">{title}</h1>
            <div className="flex gap-2">
              <small className="text-gray-400">{CompanyName}</small>
              <small>{duration}</small>
            </div>
            <p className="text-sm">{content}</p>
            {certificate_link ? (
              <span className="font-bold text-sm">
                Certificate Link:-{" "}
                <a
                  href={certificate_link}
                  className="text-blue-500 font-medium"
                >
                  click here
                </a>
              </span>
            ) : null}
          </div>
        </TimelineContent>
      </TimelineItem>
    </div>
  );
};

export default ResumeTimelineItem;
