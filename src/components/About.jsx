import React from "react";

const About = () => {
  return (
    <div
    id="bgdivimg"
      name="about"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px" ,
        marginTop: "1rem",
      }}
      // bg-gradient-to-b from-gray-800 to-black w-full h-screen
      className="w-full h-screen bg-gradient-to-b from-black-800 to-black text-white about ptop "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p
          
            style={{color:"white", }}
            className="text-4xl font-bold inline border-b-4 border-white-500">
            About
          </p>
        </div>

        <p  style={{fontFamily:"sans-serif"}} className="text-xl mt-5 text-aqua">
          I am a web developer, working in both, frontend and backend programming. Excited for improving my skills and learning new technologies. I'm open to learn and work with any web technology.
        </p>

        <br />

        <p style={{fontFamily:"sans-serif"}}  className="text-xl text-aqua">
          I like to write code from scratch and love the idea of bringing thoughts to life. Connect with me to get your project done. <br /> <br />
          I value minimalistic designs, thoughtful branding of the content, and customer relatable experience. Let’s discover together how we can make your project convert better!<br /> <br />
          I enjoy creating or redesigning a distinct identity for a product or service, get more traffic from search engine and social platforms.
        </p>
      </div>
    </div>
  );
};

export default About;
