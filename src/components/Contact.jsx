import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosCall } from "react-icons/io"
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import resume from "./Summaiya_Begum_Resume.pdf"


//function for form reset
function handleSubmit(e) {
  setTimeout(() => {
    e.target.reset();
  }, 3000);
}

const Contact = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />LinkedIn
        </>
      ),
      href: "https://www.linkedin.com/in/summaiya23/",
      style: "rounded-tr-md",
      target: "_blank",

    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} /> GitHub
        </>
      ),
      href: "https://github.com/Summaiya-Begum",
      target: "_blank",

    },

    {
      id: 3,
      child: (
        <>
          <BsFillPersonLinesFill size={30} />Resume
        </>
      ),
      href: "/",
      target: ""

    },
    {
      id: 4,
      child: (
        <>
          <IoIosCall size={30} />Contact : +91-9508435628
        </>
      ),
      href: "/",
      style: "rounded-br-md",

      target: "_self",
    },
    {
      id: 5,
      child: (
        <>
          <HiOutlineMail size={30} />Email : gzlfathima786@gmail.com
        </>
      ),
      href: "/",
      target: "_self",
    },
  ];
  return (
    <div
      id="bgdivimg"
      style={{
        height: "auto", boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px", marginTop: "-2.2rem",

      }}
      name="contact"
      className="contact w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white mbottom ptop"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div style={{ paddingTop: "50px" }} className="pb-8">
          <p
            style={{ textShadow: "0 0 5px #040404, 0 0 15px #4a53cf, 0 0 20px #040404, 0 0 40px #040404, 0 0 60px #3bb6c4, 0 0 10px #4a53cf, 0 0 98px #040404" }}
            className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>



        <div

          className="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-4 px-12 py-5 sm:px-0"
        >
          <div className="  lg:flex flex-col" >
            <ul>

              <li
                className={
                  "flex justify-between items-center w-50 h-14 px-4"}>
                <a
                  href="https://www.linkedin.com/in/summaiya23/"
                  className="flex justify-arround gap-8 items-start w-full text-white" target="_blank"> <FaLinkedin size={30} /> <b>LinkedIn</b>
                </a>
              </li>
              <li
                className={
                  "flex justify-between items-center w-50 h-14 px-4"}>
                <a
                  href="https://github.com/Summaiya-Begum"
                  className="flex justify-arround gap-8 items-start w-full text-white" target="_blank"> <FaGithub size={30} /><b>GitHub</b>

                </a>
              </li>
              <li
                className={
                  "flex justify-between items-center w-50 h-14 px-4"}>

                <a
                  href={resume}
                  download

                  className="flex justify-arround gap-8 items-start w-full text-white">
                  <BsFillPersonLinesFill size={30} /><b>Resume</b>
                </a>
              </li>
              <li
                className={
                  "flex justify-between items-center w-50 h-14 px-4"}>
                <a

                  className="flex justify-arround gap-8 items-start w-full text-white">
                  <IoIosCall size={30} /> <b>Contact : +91-9508435628</b> 
                </a>
              </li>
              <li
                className={
                  "flex justify-between items-center w-50 h-14 px-4"}>
                <a

                  className="flex justify-arround gap-8 items-start w-full text-white"> <HiOutlineMail size={30} />  <b>Email : gzlfathima786@gmail.com</b> 
                </a>
              </li>


            </ul>
          </div>

          <div className=" flex justify-center items-center" >
            <form
              onSubmit={handleSubmit}
              name="contact"
              method="POST"
              action="https://getform.io/f/210baddc-ab52-4ca7-9830-c232e63051b0"
              className=" flex flex-col w-full md:w-2/2"
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="10"
                required
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              ></textarea>

              <button type="submit" className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Contact;
