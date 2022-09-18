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
      heading: (<><DiCss3 size={20} /> CSS3 </>),
    },
    {
      id: 2,
      heading: (<> <DiHtml5 size={20} /> HTML 5</>),
    },
    {
      id: 3,
      heading: (<><FaReact sise={20} /> React </>),
    },
    {
      id: 4,
      heading: (<><SiRedux size={20} /> Redux </>),
    },
    {
      id: 5,
      heading: (<><SiJavascript size={20} /> Javascript </>),
    },
    {
      id: 6,
      heading: (<><SiChakraui size={20} /> Chakra-UI </>),
    },
    {
      id: 7,
      heading: (<><SiBootstrap size={20} /> BootStrap </>),
    },
  ];

  const BackEndSkills = [

    {
      id: 1,
      heading: (<><SiJest size={20} /> JEST </>),
    },
    {
      id: 2,
      heading: (<><VscJson size={20} /> JSON </>),
    },
    {
      id: 3,
      heading: (<><FaNodeJs size={20} /> NodeJS </>),
    },
    {
      id: 4,
      heading: (<><SiMongodb size={30} /> MongoDB </>),
    },
    {
      id: 5,

      heading: (<><SiExpress size={20} /> Express </>),
    },
    {
      id: 6,
      heading: (<><DiMongodb size={20} /> Mongosh </>),
    },
    {
      id: 7,
      heading: (<><DiJavascript size={20} /> DOM Manipulation</>),
    },
  ];
  const DsaSkills = [

    {
      id: 1,
      heading: (<><VscSymbolArray size={20} /> Arrays </>),
    },
    {
      id: 2,
      heading: (<><VscSymbolString size={20} /> Strings</>),
    },
    {
      id: 3,
      heading: (<><BiCoinStack size={20} /> Stacks</>),
    },
    {
      id: 4,
      heading: (<><BiAddToQueue size={20} /> Queues</>),
    },
    {
      id: 5,

      heading: (<><FaBimobject size={20} /> Objects</>),
    },
    {
      id: 6,
      heading: (<><CgListTree size={20} /> Recursion</>),
    },
    {
      id: 7,
      heading: (<>Linked-List <TbLayersLinked size={20} /></>),
    },
  ];


  return (
    <div
    id="bgdivimg"
      style={{  height: "auto", boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px" , paddingBottom: "8rem",marginTop:"2rem", }}
      name="skills"
      className="bg-gradient-to-b from-black to-gray-800 w-full h-auto p-20 text-white md:h-screen portfolio skills text-center lg:text-left ptop"
    >
      <div  className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p
            style={{ paddingTop: "40px", textShadow: "0 0 5px #040404, 0 0 15px #4a53cf, 0 0 20px #040404, 0 0 40px #040404, 0 0 60px #3bb6c4, 0 0 10px #4a53cf, 0 0 98px #040404" }}

            className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Skills
          </p>
          <p className="py-6">
            Check out some of my skills in different domain.
          </p>
        </div>
        <div
          // style={{ display: "flex", justifyContent: "flex-start", gap: "300px", }}

          className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 px-12 lg:grid-cols-2 gap-0 px-0  xl:grid-cols-4 gap-2 px-10 sm:px-0">
          <div style={{ textAlign: "center" }}>
            <h3
              style={{ lineHeight: "3", }}
              className="text-xl font-bold inline border-b-4 border-gray-500">
              {"Front End Development"}
            </h3>
            {frontEndSkills.map(({ id, heading }) => (
              <div key={id} style={{
                fontWeight: "bold",
                lineHeight: "2",
                // textDecoration: "underline",
                textDecorationColor: "#3ed0d8",
                textShadow: "0 0 5px #040404, 0 0 15px #4a53cf, 0 0 20px #040404, 0 0 40px #040404, 0 0 60px #3bb6c4, 0 0 10px #4a53cf, 0 0 98px #040404"
              }}>
                <li style={{ display: 'flex', justifyContent: 'center', alignItems: "center", gap: "10px" }}>{heading}</li>
              </div>
            ))}
          </div>

          {/* BACKEND*/}
          <div style={{ textAlign: "center" }}>
            <h3
              style={{ lineHeight: "3", }}
              className="text-xl font-bold inline border-b-4 border-gray-500">
              {"Back End Development"}
            </h3>
            {BackEndSkills.map(({ id, heading }) => (
              <div style={{
                lineHeight: "2",
                fontWeight: "bold",
                // textDecoration: "underline",
                textDecorationColor: "#3ed0d8",
                textShadow: "0 0 5px #040404, 0 0 15px #4a53cf, 0 0 20px #040404, 0 0 40px #040404, 0 0 60px #3bb6c4, 0 0 10px #4a53cf, 0 0 98px #040404"
              }} key={id}>
                <li style={{ display: 'flex', justifyContent: 'center', alignItems: "center", gap: "10px" }}>{heading}</li>
              </div>
            ))}
          </div>

          {/* DSA */}

          <div style={{ textAlign: "center" }}>
            <h3
              style={{ lineHeight: "3", }}
              className="text-xl font-bold inline border-b-4 border-gray-500">
              {"Data Structure"}
            </h3>
            {DsaSkills.map(({ id, heading }) => (
              <div style={{
                lineHeight: "2",
                fontWeight: "bold",
                // textDecoration: "underline",
                textDecorationColor: "#3ed0d8",
                textShadow: "0 0 5px #040404, 0 0 15px #4a53cf, 0 0 20px #040404, 0 0 40px #040404, 0 0 60px #3bb6c4, 0 0 10px #4a53cf, 0 0 98px #040404"
              }} key={id}>
                <li style={{ display: 'flex', justifyContent: 'center', alignItems: "center", gap: "10px" }}>{heading}</li>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div >
  );
};

export default Skills;
