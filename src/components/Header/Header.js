import React from "react";
import "./header.css";
import man from "../../assets/man-wearing-bla.png";

const Header = () => {
  return (
    <section className="header">
      <div className="container">
        <div className="header-content">
          <div className="text">
            <div className="tooltip">Hello I am</div>
            <h1 className="name">mr. john weary</h1>
            <p className="description">
              A Professional Web Developer and UI/UX Designer.
            </p>
            <div className="btns-container">
              <a href="#" className="btn-primary">
                Download CV
              </a>
              <a href="#" className="btn-secondary">
                My Work
              </a>
            </div>
          </div>
          <div className="image">
            <div className="img-container">
              <img src={man} alt="man wears black" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
