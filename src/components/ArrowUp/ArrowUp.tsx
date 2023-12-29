import { useState, useEffect } from "react";
import arrowUp from "../../assets/up-arrow.svg";
import "./ArrowUp.scss";

const ArrowUp = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Adjust the threshold as needed
      const scrollThreshold = 200;

      if (scrollY > scrollThreshold) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`sticky-arrow ${showArrow ? "show" : ""}`}>
      <a href="#top" className="sticky-arrow--link">
        <img src={arrowUp} alt="up arrow" />
      </a>
    </div>
  );
};

export default ArrowUp;
