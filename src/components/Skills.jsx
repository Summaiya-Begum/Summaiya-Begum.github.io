import React from "react";
import { DiCss3, DiHtml5, DiMongodb, DiJavascript } from "react-icons/di";
import { FaReact, FaNodeJs, FaBimobject } from "react-icons/fa"
import { SiRedux, SiJavascript, SiChakraui, SiBootstrap, SiJest, SiMongodb, SiExpress } from "react-icons/si";
import { VscJson, VscSymbolArray, VscSymbolString } from "react-icons/vsc";
import { BiCoinStack, BiAddToQueue } from "react-icons/bi"
import { TbLayersLinked } from "react-icons/tb";
import { CgListTree } from "react-icons/cg"
const Skills = () => {

  const frontEndSkills = [
    {
      id: 1,
      heading: (<><DiCss3 size={25} color={"#254BDD"} /> CSS3 </>),
    },
    {
      id: 2,
      heading: (<> <DiHtml5 size={25} color={"#DF4D26"} /> HTML 5</>),
    },
    {
      id: 3,
      heading: (<><FaReact sise={35} color={"aqua"}/> React </>),
    },
    {
      id: 4,
      heading: (<><SiRedux size={20} color={"#764ABC"} /> Redux </>),
    },
    {
      id: 5,
      heading: (<><SiJavascript size={20} color={"yellow"} /> Javascript </>),
    },
    {
      id: 6,
      heading: (<><SiChakraui size={20} color={"#71CAD0"} /> Chakra-UI </>),
    },
    {
      id: 7,
      heading: (<><SiBootstrap size={25} color={"#8713F2"} /> BootStrap </>),
    },
  ];

  const BackEndSkills = [

    {
      id: 1,
      heading: (<><SiJest size={20} color={"#C03B13"} /> JEST </>),
    },
    {
      id: 2,
      heading: (<><VscJson size={20} color={"#1C59A5"} /> JSON </>),
    },
    {
      id: 3,
      heading: (<><FaNodeJs size={20} color={"026E00"} /> NodeJS </>),
    },
    {
      id: 4,
      heading: (<><DiMongodb size={25} color={"#00ED64"} />MongoDB </>),
    },
    {
      id: 5,

      heading: (<><SiExpress size={20} color={"white"} /> Express </>),
    },
    {
      id: 6,
      heading: (<><DiMongodb size={25} color={"green"} /> Mongosh </>),
    },
    {
      id: 7,
      heading: (<><DiJavascript size={25} color={"#F78C00"} /> DOM Manipulation</>),
    },
  ];
  const DsaSkills = [

    {
      id: 1,
      heading: (<><VscSymbolArray size={20} color={"white"} /> Arrays </>),
    },
    {
      id: 2,
      heading: (<><VscSymbolString size={20} color={"white"} /> Strings</>),
    },
    {
      id: 3,
      heading: (<><BiCoinStack size={20} color={"white"} /> Stacks</>),
    },
    {
      id: 4,
      heading: (<><BiAddToQueue size={20} color={"white"} /> Queues</>),
    },
    {
      id: 5,

      heading: (<><FaBimobject size={20} color={"white"} /> Objects</>),
    },
    {
      id: 6,
      heading: (<><CgListTree size={20} color={"white"} /> Recursion</>),
    },
    {
      id: 7,
      heading: (<> <TbLayersLinked size={20} color={"white"} />Linked-List</>),
    },
  ];


  return (
    <div
      id="bgdivimg"
      style={{ height: "auto", boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px", paddingBottom: "8rem", marginTop: "1rem", }}
      name="skills"
      className="bg-gradient-to-b from-black to-black-800 w-full h-auto p-20 text-white md:h-screen portfolio skills text-center lg:text-left ptop"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <p
            style={{ paddingTop: "40px", color: "white" }}

            className="text-4xl font-bold inline border-b-4 border-white ">
            Skills
          </p>
          <p className="py-6 text-aqua">
            Check out some of my skills in different domain.
          </p>
        </div>
        <div
          className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 px-12 lg:grid-cols-2 gap-0 px-0  xl:grid-cols-3 gap-2 px-10 sm:px-0"
          >

          {/* Frontend development */}
          <div style={{ textAlign: "start", border: "2px solid white", }}>
            <h3
              style={{ lineHeight: "3", color: "white" }}
              className="text-xl font-bold inline border-b-4 border-white-500">
              {"Front End Development"}
            </h3>
            {frontEndSkills.map(({ id, heading }) => (
              <div key={id} style={{
                fontWeight: "bold",
                lineHeight: "2",
                // textDecoration: "underline",
                textDecorationColor: "#3ed0d8",
                border: "2px solid aqua",
                margin: "auto"
              }}>
                <li style={{ display: 'flex', justifyContent: 'flex-start', alignItems: "flex-start", gap: "20px",marginTop:"10px" }} className="text-aqua">{heading}</li>
              </div>
            ))}
          </div>

          {/* BACKEND*/}
          <div style={{ textAlign: "start", border: "2px solid white", }}>
            <h3
              style={{ lineHeight: "3", color: "white" }}
              className="text-xl font-bold inline border-b-4 border-white-500">
              {"Back End Development"}
            </h3>
            {BackEndSkills.map(({ id, heading }) => (
              <div style={{
                lineHeight: "2",
                fontWeight: "bold",
                // textDecoration: "underline",
                textDecorationColor: "#3ed0d8",
                border: "2px solid aqua",
              }} key={id}>
                <li style={{ display: 'flex', justifyContent: 'flex-start', alignItems: "flex-start", gap: "20px" ,marginTop:"10px"}}
                  className="text-aqua">{heading}</li>
              </div>
            ))}
          </div>

          {/* DSA */}

          <div style={{ textAlign: "start", border: "2px solid white", }}>
            <h3
              style={{ lineHeight: "3", color: "white" }}
              className="text-xl font-bold inline border-b-4 border-white-500">
              {"Data Structure"}
            </h3>
            {DsaSkills.map(({ id, heading }) => (
              <div style={{
                lineHeight: "2",
                fontWeight: "bold",
                // textDecoration: "underline",
                border: "2px solid aqua",
                textDecorationColor: "#3ed0d8",

              }} key={id}>
                <li style={{ display: 'flex', justifyContent: 'flex-start', alignItems: "flex-start", gap: "20px",marginTop:"10px" }}
                  className="text-aqua">{heading}</li>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div >
  );
};

export default Skills;
