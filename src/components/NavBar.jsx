import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

import resume from "../assets/Summaiya_Begum_Resume.pdf"
const NavBar = () => {
  const [nav, setNav] = useState(false);

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
      link: "techStacks",
    },
    {
      id: 4,
      link: "skills",
    },
    {
      id: 5,
      link: "projects",
    },
    {
      id: 6,
      link: "statistics",
    },
    {
      id: 7,
      link: "contact",
    }
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed nav">
      <div>
        <Link to="home"><h1 className='myLogo '>Summaiya</h1></Link>
      </div>

      <ul
        // style={{color:"aqua" }}
        className="hidden lg:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-aqua hover:scale-105 hover:text-white duration-200 link-underline"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
        <li className="nav-links px-2 cursor-pointer capitalize font-medium text-aqua hover:scale-105 hover:text-white duration-200 link-underline" >
          <a href={resume} target="_blank" download >
            Resume 
          </a>
        </li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-white lg:hidden "
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-aqua text-black">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-2xl font-bold"
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
  );
};

export default NavBar;
