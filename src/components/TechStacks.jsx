import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import postman from "../assets/postman.webp";
import bootstrap from "../assets/bootstrap.png";
import github from "../assets/github.png";
import jest from "../assets/jest.png";
import node from "../assets/node.png";
import express from "../assets/express.png"
import mongodb from "../assets/mongodb.png"
import redux from "../assets/redux.png"
const TechStacks = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue",
    },
    {
      id: 5,
      src: node,
      title: "NodeJs",
      style: "shadow-green",
    },
    {
      id: 6,
      src: postman,
      title: "Postman",
      style: "shadow-white",
    },
    {
      id: 7,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-pink",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-grey",
    },
    {
      id: 9,
      src: jest,
      title: "Jest",
      style: "shadow-orange",
    },
    {
      id: 10,
      src: express,
      title: "Express",
      style: "shadow-white",
    },
    {
      id: 11,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green",
    },
    {
      id: 12,
      src: redux,
      title: "Redux",
      style: "shadow-purple",
    },
  ];

  return (
    <div
      id="bgdivimg"
      style={{
        marginTop: "1rem",
        boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px",
        height: "auto",
        backgroundColor: "black",

      }}
      name="techStacks"
      className=" ptop bg-gradient-to-b from-black-800 to-black w-full h-screen experience  "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-white-500 p-2 inline">
            TechStacks
          </p>
          <p
            style={{ color: "aqua" }}
            className="py-6">These are the technologies I've worked with and used them in my projects.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStacks;
