import React from "react";
import portfolioBg from "../assets/portfolioBg.jpg";
import PortfolioCard from "../components/PortfolioCard";

const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className="text-white bg-cover bg-no-repeat justify-center bg-black w-full py-10 px-8 md:px-24 min-h-screen"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9)) ,url(${portfolioBg})`,
      }}
    >
      <h1 className="text-center font-extrabold md:text-4xl text-2xl my-10">
        Recent Portfolio
        {/* <hr className="my-4 h-px w-1/2 md:w-1/4 mx-auto  border-0 bg-gray-700" /> */}
      </h1>
      <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-10 auto-rows-auto h-full w-full">
        <PortfolioCard />
      </div>
    </div>
  );
};

export default Portfolio;
