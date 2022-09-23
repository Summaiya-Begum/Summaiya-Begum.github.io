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
  return (
    <div
      id="bgdivimg"
      style={{
        height: "auto", boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px", marginTop: "-4rem",

      }}
      name="contact"
      className="contact w-full h-screen bg-gradient-to-b from-black to-black-800 p-4 text-white mbottom ptop"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div style={{ paddingTop: "50px" }} className="pb-8">
          <p
            style={{ color: "white" }}
            className="text-4xl font-bold inline border-b-4 border-white-500">
            Contact
          </p>
          <p className="py-6 text-aqua">Submit the form below to get in touch with me</p>
        </div>



        <div
          
          className="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-10 sm:px-0"
        >
          <div  className="  lg:flex flex-col" >
            <ul className={
              "  grid lg:grid-cols-1 sm:grid-cols-1 "}>

              <liflex justify-start gap-4
                className={
                  "flex justify-start gap-4 items-center py-5 "}>
                <a
                  href="https://www.linkedin.com/in/summaiya23/"
                  className="flex justify-start gap-4 items-start w-auto text-white" target="_blank"> <FaLinkedin size={30} color={"aqua"} /> <b>LinkedIn</b>
                </a>
              </liflex>
              <li
                className={
                  "flex justify-start gap-4 items-center py-5"}>
                <a 
                  href="https://github.com/Summaiya-Begum"
                  className="flex justify-start gap-4  items-start w-auto text-white" target="_blank"> <FaGithub size={30} color={"aqua"} /><b>GitHub</b>

                </a>
              </li>
              <li className={
                  "flex justify-start gap-4 items-center py-5"}>

                <a
                  href={resume}
                  download
                  className="flex justify-start gap-4  items-start w-auto text-white">
                  <BsFillPersonLinesFill size={30} color={"aqua"} /><b>Resume</b>
                </a>
              </li>
              <li
                className={
                  "flex justify-start gap-4 items-center py-5"}>
                <a  className="flex justify-start gap-4  items-start w-auto text-white">
                  <IoIosCall size={30} color={"aqua"} /> <b>Contact : +91-9508435628</b>
                </a>
              </li>
              <li
                className={
                  "flex justify-start gap-4 items-center py-5"}>
                <a
                  className="flex justify-start gap-4  items-start w-30 text-white"> <HiOutlineMail size={30} color={"aqua"} />  <b>Email : gzlfathima786@gmail.com</b>
                </a>
              </li>


            </ul>
          </div>

          <div className=" flex justify-center items-center " >
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

              <button type="submit"
                style={{ fontWeight: "bold" }}
                className="
               px-6 py-3 my-8 mx-auto flex items-center rounded-md text-black bg-aqua hover:scale-105 hover:text-black hover:bg-white duration-300">
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
