import React from "react";

const About = () => {
  return (
    <div
      id="bgdivimg"
      name="about"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px",
        marginTop: "1rem",
      }}
      // bg-gradient-to-b from-gray-800 to-black w-full h-screen
      className="w-full h-screen bg-gradient-to-b from-black-800 to-black text-white about ptop "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p

            style={{ color: "white", }}
            className="text-4xl font-bold inline border-b-4 border-white-500">
            About
          </p>
        </div>

        <p style={{ fontFamily: "cursive" }} className="text-xl mt-5 text-aqua">
          As a fresher full stack web developer, I am eager to bring my skills and passion for web development to a dynamic and innovative team. I have a strong foundation in both front-end and back-end web development, as well as a keen eye for design and user experience.
        </p>

        <br />

        <p style={{ fontFamily: "cursive" }} className="text-xl text-#fff">
          I have recently graduated from Masai School, where I gained hands-on experience in various web development technologies such as HTML, CSS, JavaScript, ReactJs, Chakra-UI, and MERN including building responsive websites and web applications.
          <br />
          <br />
          <p style={{ fontFamily: "cursive" }} className="text-xl text-aqua">
            I am highly motivated and dedicated to learning new technologies and staying up-to-date with the latest web development trends. I am a quick learner and thrive in fast-paced environments. I am also a strong team player and am able to collaborate effectively with others to achieve common goals.
            <br />
            <br />
          </p>
          I am excited to bring my skills and passion to a company and contribute to the development of high-quality web applications. I am confident that I will be able to make a positive impact on any team and look forward to the opportunity to showcase my abilities.
        </p>
      </div>
    </div>
  );
};

export default About;

