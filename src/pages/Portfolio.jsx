import React from "react";
import portfolioBg from "../assets/portfolioBg.jpg";
import PortfolioCard from "../components/PortfolioCard";
import glcbg from "../assets/glc.png";
import newsAppbg from "../assets/news-app.png";
import linkedinClone from "../assets/linkedin-clone.png";
import billSplitter from "../assets/bill-splitter.png";

const Portfolio = () => {
  return (
    <div
      name="portfolio"
      id="portfolio"
      className="text-white bg-cover bg-no-repeat justify-center bg-black w-full py-16 px-8 md:px-24 min-h-screen"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.9)) ,url(${portfolioBg})`,
        // backgroundImage: `url(${portfolioBg})`,
      }}
    >
      <h1 className="text-center font-extrabold md:text-4xl text-2xl mb-16">
        Recent Portfolio
        {/* <hr className="my-4 h-px w-1/2 md:w-1/4 mx-auto  border-0 bg-gray-700" /> */}
      </h1>
      <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-10 auto-rows-auto h-full w-full">
        <PortfolioCard
          bgpic={glcbg}
          title="Placement committee of Government Law College, Mumbai"
          short_des="A website for placement committee of Government Law College, Mumbai."
          description="A Website for placement committee of Government Law College, Mumbai.This is a freelancing project developed by a team of 4 people. The main purpose of this project is to keep students updated with job vacancies in Law firms registered with their college. We have also provided an admin dashboard through which the admin can alter the content visible on the user web page. We have basically built a Content management System along with a dynamic resume builder for the college. This website is deployed and is in production and is used by more then 10 thousand users daily.
          "
          tech_used={[
            "React",
            "Tailwind",
            "Flask",
            "MongoDB",
            "Figma",
            "Axios",
            "Postman",
          ]}
          website="https://glcplacements.com/"
          // git_repo="https://github.com/StandinKP/glc-frontend"
        />
        <PortfolioCard
          bgpic={billSplitter}
          title="Expense Tracker and Bill Splitter"
          short_des="A fullstack app to track expenses and split bills among friends."
          description="A billsplitter and expense tracker app would allow users to input expenses, categorize them, and split bills among multiple users. The app would keep track of all expenses and allow users to see how much they owe or are owed by others. Users could also set up recurring expenses and receive notifications when bills are due. The app would also include features such as budget tracking, the ability to export expense reports, and the ability to add notes or receipts to each expense entry."
          tech_used={[
            "React",
            "Tailwind",
            "Redux-toolkit",
            "react-redux",
            "MongoDB",
            "Flask",
          ]}
          git_repo="https://github.com/SrushtiSalvi/bill-splitter-flask-react-.git"
        />
        <PortfolioCard
          bgpic={newsAppbg}
          title="React News App"
          short_des="A News App which gives insights of everyday news."
          description="A news app is a convenient way for users to stay up-to-date on the latest news and developments from a variety of sources, all in one place. It is a web-based application that allows users to access news articles and other information from various news sources in a convenient and centralized location.Users can select the topics and sources that they are interested in, and the app will provide a customized feed of articles from those sources."
          tech_used={["React", "Tailwind", "React-router-dom", "API"]}
          git_repo="https://github.com/SrushtiSalvi/NewsApp-ReactJS-.git"
        />
        <PortfolioCard
          bgpic={linkedinClone}
          title="React LinkedIn Clone"
          short_des="A linkedIn Clone for the purpose of exploring and learning React and Redux"
          description="This project is a LinkedIn clone made using React, Redux and tailwind using firebase as the database. The sole purpose of this project was to learn and explore react and redux fundamentals and work with firebase database."
          tech_used={[
            "React",
            "Tailwind",
            "Redux-toolkit",
            "react-redux",
            "Firebase",
            "Material UI",
          ]}
          git_repo="https://github.com/SrushtiSalvi/LinkedIn-Clone---ReactJS.git"
        />

        <PortfolioCard
          title="SplitKaro"
          short_des="A mobile App which helps user to manage expenses within groups as well as individually."
          description="This app helps a person to manage expenses within a group of friends as well as individually. This app is basically an UI built with React Native with basic functionalities like adding expenses for a friends, creating a group of friends from the contacts and splitting the added expenses equally."
          tech_used={[
            "React Native",
            "expo",
            "react-navigation/native",
            "react-navigation/stack",
            "react-dom",
            "figma",
          ]}
          git_repo="https://github.com/SrushtiSalvi/splitKaro---React-Native.git"
        />

        <PortfolioCard
          title="Currency Converter"
          short_des="A mobile app that allows users to convert one currency to another currency "
          description="This currency converter application is a software program that allows users to convert one currency to another currency. It typically displays a list of various currencies, and allows the user to select the currencies they wish to convert between. The user can then enter the amount of the currency they wish to convert, and the application will display the equivalent amount in the other currency. It is a useful tool for anyone who needs to frequently convert between different currencies, or who needs to keep track of exchange rates for financial or business purposes."
          tech_used={["React Native", "react-navigation", "expo"]}
        />
      </div>
    </div>
  );
};

export default Portfolio;
