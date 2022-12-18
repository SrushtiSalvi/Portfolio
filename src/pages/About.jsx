import React from "react";
import pic1 from "../assets/pic1.jpg";

const About = () => {
  return (
    <div
      name="about"
      className=" w-full py-10 md:p-24 bg-gradient-to-b from-gray-800 to-black text-white  justify-center "
    >
      <div className=" w-full h-fit text-center ">
        <h1 className="font-bold md:text-4xl text-2xl">About Me</h1>
        <br />
      </div>
      <div className=" grid md:grid-cols-2 space-x-4 w-4/5  mx-auto">
        <div className="bg-white p-4">
          <img src={pic1} alt="mypic" className="" />
        </div>
        <div className="space-y-10 p-2">
          <h1 className="text-xl font-bold">
            I am <span className="text-cyan-500">SRUSHTI</span>
          </h1>
          <p>WEB DEVELOPER & PHOTOGRAPHER</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation laboris nisi ut aliquip
            ex ea commodo consequat.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation laboris nisi ut aliquip
            ex ea commodo consequat.
          </p>

          <button className="bg-gray-800 p-4 rounded-md">DOWNLOAD MY CV</button>
        </div>
      </div>
    </div>
  );
};

export default About;
