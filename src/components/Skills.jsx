import React from "react";
const Skills = () => {

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
      heading: "JavaScript",
    },
    {
      id: 4,
      heading: "React",
    },
  ];

  const BackEndSkills = [

    {
      id: 1,
      heading: "Mongoosh",
    },
    {
      id: 2,
      heading: "JEST",
    },
    {
      id: 3,
      heading: "DOM Manipulation",
    },
    {
      id: 4,
      heading: "JSON",
    },
    {
      id: 5,
      heading: "Node.js",
    },
    {
      id: 6,
      heading: "MongoDB",
    },
    {
      id: 7,
      heading: "Express",
    },
  ];


  return (
    <div
      style={{ height: "auto", padding: "2rem" }}
      name="skills"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio skills text-center lg:text-left ptop"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p
            style={{ textShadow: "0 0 5px #040404, 0 0 15px #4a53cf, 0 0 20px #040404, 0 0 40px #040404, 0 0 60px #3bb6c4, 0 0 10px #4a53cf, 0 0 98px #040404" }}

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
          <div>
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
                <li>{heading}</li>
              </div>
            ))}
          </div>
          <div>
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
                <li>{heading}</li>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div >
  );
};

export default Skills;
