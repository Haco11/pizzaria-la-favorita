import React, { useEffect, useState } from "react";
import "./Nav.scss";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="logo">
          <span>Company Name</span>
        </div>
        <div className="contact-info">
          <span>Telephone Nr</span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
