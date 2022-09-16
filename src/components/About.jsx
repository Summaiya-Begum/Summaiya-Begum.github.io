import React from "react";

const About = () => {
  return (
    <div
      name="about"
      // bg-gradient-to-b from-gray-800 to-black w-full h-screen
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white about ptop "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p
            style={{ textShadow:  "0 0 5px #040404, 0 0 15px #4a53cf, 0 0 20px #040404, 0 0 40px #040404, 0 0 60px #3bb6c4, 0 0 10px #4a53cf, 0 0 98px #040404" }}
            className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
          I am a web developer, working in both, frontend and backend programming. Excited for improving my skills and learning new technologies. I'm open to learn and work with any web technology.
        </p>

        <br />

        <p className="text-xl">
          I like to write code from scratch and love the idea of bringing thoughts to life. Connect with me to get your project done. <br /> <br />
          I value minimalistic designs, thoughtful branding of the content, and customer relatable experience. Let’s discover together how we can make your project convert better!<br /> <br />
          I enjoy creating or redesigning a distinct identity for a product or service, get more traffic from search engine and social platforms.
        </p>
      </div>
    </div>
  );
};

export default About;
