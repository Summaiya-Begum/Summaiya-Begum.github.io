import React from "react";
import mypic from "../assets/mypic.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { Link } from "react-scroll";
import "../app.css"
import resume from "../assets/Summaiya_Begum_Resume.pdf"


const Home = () => {
  return (
    <div

      id="bgdivimg"
      style={{ paddingTop: "5rem", height: 'auto', boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px", padding: ["3rem,8rem"], }}
      name="home"
      className="p-10 h-screen w-full bg-gradient-to-b from-black via-black to-black-800 home "
    >
      <div style={{ marginTop: "60px" }}
        className="max-w-screen-lg mx-auto flex flex-col  justify-center gap-y-5 h-full w-full px-5 md:flex-row">
        <div style={{ height: 'auto', margin: "auto" }} className="small-screen hidden mx-10 mt-20 " >
          <img
            src={mypic}

            alt="profile"
            className="rounded-2xl mx-auto w-3/4 md:w-half "
          />
        </div>
        <div className="big-screen" style={{
          height: "auto", borderRadius: "50%"
          // marginLeft: "100px", marginTop: "80px" 
        }} >
          <img
            src={mypic}
            alt="profile"
            className="rounded-full w-auto h-auto ring-7 ring-gray-300 dark:ring-gray-500"
          />
        </div>
        <div style={{ margin: "auto" }} className="flex flex-col justify-center h-full text-center ">
          <h2

            className="text-4xl sm:text-7xl text-center m-auto font-bold text-white" id="fullstack">
            I'm a Full Stack Web Developer
          </h2>
          <p
            style={{ 
              color:"aqua",
              fontFamily:"sans-serif",
              fontWeight:"bold"
              
            }}
            // className="text-white sm:text-1.10xl mx-20 py-8 max-w-md "
            className="text-white  max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full"
          >
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

            <div
              to="/"
              smooth
              duration={500}
              className="group text-white  w-fit px-6 py-3 my-2 flex items-center rounded-md m-auto  cursor-pointer"
              style={{color:"black",backgroundColor:"aqua",fontWeight:"bold",fontFamily:"sans-serif"}}
            >
              <a href={'https://drive.google.com/file/d/1LdcyGZdhSytErQtDM2ODtqAYb6Vc9oiY/view?usp=sharing'} download>
                Resume
              </a>
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </div>

          </div>

        </div>


      </div>
    </div >
  );
};

export default Home;
