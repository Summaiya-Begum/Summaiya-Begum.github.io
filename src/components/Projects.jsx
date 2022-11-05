import React from "react";
import "../app.css"
import AwesomeSlider from 'react-awesome-slider';
// React-Icons
import { DiCss3, DiHtml5, DiMongodb, DiJavascript } from "react-icons/di";
import { FaReact, FaNodeJs, FaBimobject } from "react-icons/fa"
import { VscJson, VscSymbolArray, VscSymbolString } from "react-icons/vsc";
import { SiRedux, SiJavascript, SiChakraui, SiBootstrap, SiJest, SiMongodb, SiExpress } from "react-icons/si";
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

// t-metric
import tmetric1 from "../assets/projects/tmetric1.png";
import tmetric2 from "../assets/projects/tmetric2.png";
import tmetric3 from "../assets/projects/tmetric3.png";
import tmetric4 from "../assets/projects/tmetric4.png";
import tmetric5 from "../assets/projects/tmetric5.png";
import tmetric6 from "../assets/projects/tmetric6.png";


// import { Carousel } from 'react-responsive-carousel';

const projects = () => {
  const projects = [
    {
      id: 1,
      src: [tmetric1, tmetric2, tmetric3, tmetric4,tmetric5,tmetric6],
      title: "T-Metric-Clone",
      description: "TMetric is a smart choice for time tracking to see work in progress and keep team, cost and quality under control",
      link: 'https://tmetric-beta.vercel.app/',
      repo: 'https://github.com/IamSanjayGupta/dazzling-measure-5625',
      tech: [ <DiHtml5 size={25} color={"#DF4D26"} />,<DiCss3 size={25} color={"#254BDD"} />,<SiJavascript size={20} color={"yellow"} />,<FaReact sise={35} color={"aqua"}/>,<SiRedux size={20} color={"#764ABC"} />,<SiChakraui size={20} color={"#71CAD0"} />,<DiMongodb size={25} color={"#00ED64"} />,<SiExpress size={20} color={"white"} />,<FaNodeJs size={20} color={"026E00"} />,<VscJson size={20} color={"#1C59A5"} />]
    },
    {
      id: 2,
      src: [gusto1, gusto2, gusto3, gusto4, gusto5],
      title: "Gusto-Clone",
      description: "People are at the heart of every successful business. Gusto puts the tools you need to hire, pay, insure, and support your team in one platform.",
      link: 'https://gusto-ecommerce.vercel.app/',
      repo: 'https://github.com/Summaiya-Begum/gusto-clone/tree/main/gusto-ecommerce'
      , tech: [<DiHtml5 size={25} color={"#DF4D26"} />,<DiCss3 size={25} color={"#254BDD"} />,<SiJavascript size={20} color={"yellow"} />,<FaReact sise={50} color={"aqua"}/>,<SiChakraui size={20} color={"#71CAD0"} />]
    },
    {
      id: 3,
      src: [kfc1, kfc2, kfc3, kfc4],
      title: "KFC-Clone",
      description: "KFC (Kentucky Fried Chicken) is an American fast food restaurant chain headquartered in Louisville, Kentucky, that specializes in fried chicken. It is the world's second-largest restaurant chain (as measured by sales) after McDonald",
      link: 'https://remarkable-fudge-c07118.netlify.app/',
      repo: 'https://github.com/Summaiya-Begum/KFC-Clone',
      tech:[<DiHtml5 size={30} color={"#DF4D26"} />,<DiCss3 size={30} color={"#254BDD"} />,<SiBootstrap size={30} color={"#8713F2"} />,<SiJavascript size={25} color={"yellow"} />]
    },
    
    {
      id: 4,
      src: [boat1, boat2, boat3, boat4, boat5],
      title: "Boat-Clone",
      description: "Boats.com is an online advertising website based in Miami, Florida, United States. It also has operations in Fareham and Padova. The company has websites in nine markets and eight languages, listing over 350,000 boats in approximately 152 countries.",
      link: 'https://stellar-figolla-5fb4b8.netlify.app/',
      repo: 'https://github.com/Summaiya-Begum/boat-clone'
      , tech:  [<DiHtml5 size={30} color={"#DF4D26"} />,<DiCss3 size={30} color={"#254BDD"} />,<SiBootstrap size={30} color={"#8713F2"} />,<SiJavascript size={25} color={"yellow"} />]
    },
    {
      id: 5,
      src: [monster1, monster2, monster3, monster4, monster5, monster6],
      title: "Monster-India-Clone",
      description: "Monster is a global online employment solution for people seeking jobs and the employers who need great people. We've been doing this for more than 20 years, and have expanded from our roots as a job board to a global provider of a full array of job seeking, career management, recruitment and talent management products and services.",
      link: 'https://monster-india-clone-seven.vercel.app/',
      repo: 'https://github.com/Summaiya-Begum/monster-india-clone'
      , tech:  [<DiHtml5 size={30} color={"#DF4D26"} />,<DiCss3 size={30} color={"#254BDD"} />,<SiBootstrap size={30} color={"#8713F2"} />,<SiJavascript size={25} color={"yellow"} />]
    }

  ];

  return (
    <div
      id="bgdivimg"
      style={{ height: "auto", marginTop: "1rem", boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px", paddingBottom: "4rem" }}
      name="projects"
      className="ptop bg-gradient-to-b from-black to-black-800 w-full text-white md:h-screen portfolio"
    >
      <div
        // style={{ border: "2px solid pink", height: "auto" }}
        className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div
          style={{
            paddingTop: "30px"
          }}
          className="pb-8">
          <p
            style={{ color: "white" }}
            className="text-4xl font-bold inline border-b-4 border-white-500">
            Projects
          </p>
          <p className="py-6 text-aqua">Check out some of my work right here</p>
        </div>



        <div
          //  style={{border:'2px solid red'}} 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0"
          > 
          {projects.map(({ id, src, title, description, link, repo, tech }) => (
            <div
              style={{  border:'2px solid aqua',maxWidth:'100%'}}
              key={id} className=" shadow-lg shadow-aqua rounded-lg">



              <AwesomeSlider style={{ height: "auto",width:'100%', overflow: "hidden",marginTop:'10px'}}>
                {
                  src.map(el => (<div style={{ borderRadius: "10px",width:"100%"}}>
                    <img style={{ height: "280px",width:"100%"}} src={el} className="rounded-md duration-200 hover:scale-105" />

                  </div>))
                }

              </AwesomeSlider>

              <div style={{ marginTop: "20px", textAlign: "center", padding: "1rem" }}>
                <h1 style={{ fontSize: "20px", fontWeight: 800, color: "white" }}>{title}</h1>
                <p className="max-line text-aqua ">{description}</p>
                  
                <div style={{ color: "white",lineHeight:'30px' }}><b>TechStack: </b> <div style={{display:"flex",justifyContent:"center",gap:"20px"}}> {tech} </div></div>
              </div>

              <div className="flex items-center justify-center" >


                <button
                  style={{ borderRadius: "2rem", fontFamily: "monospace", fontSize: "20px", fontWeight: "bold" }}
                  className="w-1/2 px-6 py-3 m-4 duration-200 text-black bg-white hover:scale-105 hover:text-black hover:bg-aqua" onClick={() => window.open(link, '_blank')}>
                  Demo
                </button>
                <button

                  style={{ borderRadius: "2rem", fontFamily: "monospace", fontSize: "20px", fontWeight: "bold" }}
                  className=" w-1/2 px-6 py-3 m-4 duration-200 text-black bg-white hover:scale-105 hover:text-black hover:bg-aqua" onClick={() => window.open(repo, '_blank')}>
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
