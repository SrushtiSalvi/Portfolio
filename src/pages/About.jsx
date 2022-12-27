import React from "react";
import pic1 from "../assets/pic1.jpg";
import { HiDownload } from "react-icons/hi";
import resume from "../assets/resume.pdf";

const About = () => {
  return (
    <div
      name="about"
      className=" w-full py-10 md:p-24 bg-gradient-to-b from-gray-900 to-black text-white  justify-center "
    >
      <div className=" w-full h-fit text-center ">
        <h1 className="font-bold md:text-4xl text-2xl">
          About Me
          <hr className="my-4 h-px w-1/2 md:w-1/4 mx-auto  border-0 bg-gray-700" />
        </h1>
        <br />
      </div>
      <div className=" grid md:grid-cols-2 space-x-4 md:w-4/5 px-4 md:p-0 mx-auto">
        <div className="bg-white h-4/5 overflow-hidden border-8">
          <img src={pic1} alt="mypic" />
        </div>
        <div className="md:space-y-10 space-y-4 md:px-4">
          <h1 className="text-xl font-bold">
            I am <span className="text-blue-500">SRUSHTI</span>
          </h1>
          <p>WEB DEVELOPER </p>
          <p>
            I am a self-taught React JS developer eager to expand and explore my
            technical knowledge as well as accept challenges and grow and
            contribute to the company's success.. Strong teamwork skills, as
            well as a willingness to contribute fresh ideas and an eagerness to
            learn new things and work with a company that understands one's
            natural drive to take on new challenges, fosters progress, and
            always provides opportunities for knowledge enhancement.
          </p>

          <a
            href={resume}
            download
            className="bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer p-4 rounded-md text-sm flex w-fit"
          >
            DOWNLOAD MY CV
            <HiDownload size={20} className="ml-1 " />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
