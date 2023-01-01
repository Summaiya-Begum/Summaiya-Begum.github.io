import React from "react";
import "../ScrollArrow/scrollarrow.css";
import { useState } from "react";
import { FaAngleUp } from "react-icons/fa";

export default function ScrollUpArrow() {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setVisible(true);
    } else if (scrolled <= 100) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  const Arrowup = () => (
    <div style={{ display: visible ? "inline" : "none",  }} className="arrow-ist-div">
      <div className="arrow-up">
        <FaAngleUp onClick={scrollToTop} size={20} color={"black"} cursor={"pointer"} />
      </div>
    </div>
  );

  return <Arrowup />;
}
