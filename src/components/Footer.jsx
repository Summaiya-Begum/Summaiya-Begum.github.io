import React from "react";
import ScrollUpArrow from "./ScrollArrow/ScrollUpArrow";

function Footer() {
  return (
    <>
      <div
        style={{
          height: "auto",
          marginTop: "-4rem",
          padding: '3rem'
          // border: "1px solid green"
        }}
        class="text-center p-6 bg-black footer ptop">
        <span class="text-white">&copy; 2022 Copyright - </span>
        <a class="link-underline text-white font-bold" href="/">Summaiya Begum</a>
      </div>
      <ScrollUpArrow />
    </>
  )
}


export default Footer