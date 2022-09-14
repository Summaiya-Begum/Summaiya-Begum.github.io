import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
//gusto
import gusto1 from "../assets/projects/gusto1.jpeg";
import gusto2 from "../assets/projects/gusto2.jpeg";
import gusto3 from "../assets/projects/gusto3.jpeg";
import gusto4 from "../assets/projects/gusto4.jpeg";
import gusto5 from "../assets/projects/gusto5.jpeg";
//boat
import boat1 from "../assets/projects/boat1.jpeg";
import boat2 from "../assets/projects/boat2.jpeg";
import boat3 from "../assets/projects/boat3.jpeg";
import boat4 from "../assets/projects/boat4.jpeg";
import boat5 from "../assets/projects/boat5.jpeg";
import boat6 from "../assets/projects/boat6.jpeg";
//kfc
import kfc1 from "../assets/projects/kfc1.jpeg";
import kfc2 from "../assets/projects/kfc2.jpeg";
import kfc3 from "../assets/projects/kfc3.jpeg";
import kfc4 from "../assets/projects/kfc4.jpeg";

//monster
import monster1 from "../assets/projects/monster(1).jpeg";
import monster2 from "../assets/projects/monster(2).jpeg";
import monster3 from "../assets/projects/monster(3).jpeg";
import monster4 from "../assets/projects/monster(4).jpeg";
import monster5 from "../assets/projects/monster(5).jpeg";
import monster6 from "../assets/projects/monster(6).jpeg";


// import { Carousel } from 'react-responsive-carousel';

const projects = () => {
  const projects = [
    {
      id: 1,
      src: [kfc1, kfc2, kfc3, kfc4],
      link: 'https://remarkable-fudge-c07118.netlify.app/',
      repo: 'https://github.com/Summaiya-Begum/KFC-Clone'
    },
    {
      id: 2,
      src: [gusto1, gusto2, gusto3, gusto4, gusto5],
      link: 'https://gusto-ecommerce.vercel.app/',
      repo: 'https://github.com/Summaiya-Begum/gusto-clone/tree/main/gusto-ecommerce'
    },
    {
      id: 3,
      src: [boat1, boat2, boat3, boat4, boat5],
      link: 'https://stellar-figolla-5fb4b8.netlify.app/',
      repo: 'https://github.com/Summaiya-Begum/boat-clone'
    },
    {
      id: 4,
      src: [monster1, monster2, monster3, monster4, monster5, monster6],
      link: 'https://monster-india-clone-seven.vercel.app/',
      repo: 'https://github.com/Summaiya-Begum/monster-india-clone'
    }

  ];

  return (
    <div

      name="projects"
      style={{ height: "auto", padding: '1rem' }}

      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div
        // style={{ border: "2px solid pink", height: "auto" }} 
        className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div
          // style={{ border: "2px solid green" }}
          className="pb-8">
          <p
            style={{ textShadow: "0 0 5px #040404, 0 0 15px #4a53cf, 0 0 20px #040404, 0 0 40px #040404, 0 0 60px #3bb6c4, 0 0 10px #4a53cf, 0 0 98px #040404" }}
            className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>



        <div
          //  style={{ border: "2px solid red" }} 
          className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, link, repo }) => (
            <div
              //  style={{ border: "2px solid blue", height: "400" }} 
              key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <AwesomeSlider style={{ height: "400" }}>
                {
                  src.map(el => (<div>
                    <img style={{ height: "600" }} src={el} className="rounded-md duration-200 hover:scale-105" />
                  </div>))
                }

              </AwesomeSlider>
              <div className="flex items-center justify-center" >
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={() => window.open(link, '_blank')}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={() => window.open(repo, '_blank')}>
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default projects;

{/* <img
                  src={src}
                  alt="projects"
                  className="rounded-md duration-200 hover:scale-105"
                /> */}