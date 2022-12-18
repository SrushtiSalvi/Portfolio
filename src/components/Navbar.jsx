import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { useScrollPosition } from "../hooks/useScrollPosition";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const scrollPosition = useScrollPosition();

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "resume",
    },
    {
      id: 4,
      link: "portfolio",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <nav
      className={
        scrollPosition > 0
          ? `flex flex-row justify-center w-full h-16 px-4 text-black bg-gray-100 fixed transition-all ease-in-out duration-900`
          : `flex flex-row justify-center w-full h-16 px-4 text-white bg-transparent fixed `
      }
    >
      <div className="md:w-2/3 justify-between items-center flex w-full">
        <div>
          <h1 className="md:text-2xl text-xl ml-2">Srushti</h1>
        </div>

        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
          {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-2xl"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
