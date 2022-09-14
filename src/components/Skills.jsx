import React from "react";
// import api from "../assets/portfolio/api.jpg";
// import apod from "../assets/portfolio/apod.jpg";
// import iptracker from "../assets/portfolio/iptracker.jpg";
// import nftportal from "../assets/portfolio/nftportal.jpg";
// import webpostman from "../assets/portfolio/webpostman.jpg";
// import waveportal from "../assets/portfolio/waveportal.jpg";
// import { data } from "autoprefixer";

const Skills = () => {
  //   const portfolios = [
  //     {
  //       id: 1,
  //       src: api,
  //       link: 'https://crypto-info-api.herokuapp.com/',
  //       repo: 'https://github.com/rahulkarda/crypto-info-api'
  //     }

  //   ];
  const frontEndSkills = [
    {
      id: 1,
      heading: "HTML 5",
    },
    {
      id: 2,
      heading: "CSS 3",
    },
    {
      id: 3,
      heading: "JS",
    },
    {
      id: 4,
      heading: "DOM Manipulation",
    },
    {
      id: 5,
      heading: "JSON",
    },
    {
      id: 6,
      heading: "Node.js",
    },
    {
      id: 7,
      heading: "MongoDB",
    },
    {
      id: 8,
      heading: "React",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio skills text-center lg:text-left ptop"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Skills
          </p>
          <p className="py-6">
            Check out some of my skills in different domain.
          </p>
        </div>

        {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(link, '_blank')}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div> */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 px-12 lg:grid-cols-2 gap-0 px-0  xl:grid-cols-4 gap-2 px-10 sm:px-0">
          <div>
            <h3 className="text-xl font-bold inline border-b-4 border-gray-500">
              {"Front End Development"}
            </h3>
            {frontEndSkills.map(({ id, heading }) => (
              <div key={id}>
                <li>{heading}</li>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-xl font-bold inline border-b-4 border-gray-500">
              {"Front End Development"}
            </h3>
            {frontEndSkills.map(({ id, heading }) => (
              <div key={id}>
                <li>{heading}</li>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-xl font-bold inline border-b-4 border-gray-500">
              {"Front End Development"}
            </h3>
            {frontEndSkills.map(({ id, heading }) => (
              <div key={id}>
                <li>{heading}</li>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-xl font-bold inline border-b-4 border-gray-500">
              {"Front End Development"}
            </h3>
            {frontEndSkills.map(({ id, heading }) => (
              <div key={id}>
                <li>{heading}</li>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
