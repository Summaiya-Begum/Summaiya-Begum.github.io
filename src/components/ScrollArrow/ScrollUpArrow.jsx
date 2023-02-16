import React from "react";
import "../ScrollArrow/scrollarrow.css";
import { FaAngleUp } from "react-icons/fa";

const ScrollUpArrow = () => {
  const [scrollTop, setScrollTop] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    });
  }, []);
  const bottomToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {scrollTop && (
        <button onClick={bottomToTop} className="backToTop" >
          <FaAngleUp size={20} cursor={"pointer"} _hover={{
            color: "black" 
          }} />
        </button>
      )}
    </>
  );
};
export default ScrollUpArrow;















// import "../ScrollArrow/scrollarrow.css";
// ScrollUpArrow