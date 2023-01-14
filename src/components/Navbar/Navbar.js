import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <section>
      <div className="container">
        <nav>
          <div className="logo">
            Cod
            <FaBars color="var(--orange)" size="2rem" />r
          </div>
          <div className={`links ${toggle ? null : "hide"}`}>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Portfolio</a>
            <a href="#">Testimonials</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
            <a href="#" className="hire btn-primary ">
              Hire Me!
            </a>
          </div>
          {toggle ? (
            <button className="nav-close " onClick={() => setToggle(!toggle)}>
              <FaTimes size="2rem" color="white" />
            </button>
          ) : (
            <button className="nav-open" onClick={() => setToggle(!toggle)}>
              <FaBars size="2rem" color="white" />
            </button>
          )}
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
