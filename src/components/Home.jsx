import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import "../app.css"

const Home = () => {
  return (
    <div
      style={{ height: 'auto' }}
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 home "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="small-screen hidden">
          <img
            src={HeroImage}

            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
        <div style={{ marginTop: "80px" }} className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white" id="fullstack">
            I'm a Full Stack Web Developer
          </h2>
          <p className="text-white sm:text-1.8xl py-8 max-w-md "  >
            Self-motivated and a curious learner and
            creative mind having strong in problem-
            solving and proficiency in HTML, CSS,
            Javascript & ReactJS. Seeking a position in a
            growth-oriented company where I can utilize
            my understanding of coding and software
            development to efficiently fulfill the
            requirements of clients and customers.
          </p>

          <div className="portfolio-btn">
            <Link
              to="resume"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Resume
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="big-screen" style={{ marginLeft: "100px", marginTop: "80px" }} >
          <img
            src={HeroImage}
            alt="profile"
            className="p-20 w-100 h-90 rounded-full "
          />
        </div>

      </div>
    </div>
  );
};

export default Home;
