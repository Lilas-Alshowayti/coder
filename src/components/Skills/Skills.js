import React from "react";
import "./skills.css";
import desk from "../../assets/desk.png";
const Skills = () => {
  return (
    <section className="skills">
      <div className="container">
        <div className="skills-img">
          <img src={desk} alt="computer" />
          <div className="shape-container">
            <div>
              <span className="shape"></span>
              <span className="shape"></span>
              <span className="shape"></span>
              <span className="shape"></span>
            </div>
            <p className="shape-desc">
              06 <br /> Years of <br />
              Exprience
            </p>
          </div>
        </div>
        <div className="skills-desc">
          <h3 className="section-head">Read About My Life Struggle Story!</h3>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem totam
            rem aperiam, eaque ipsa quae ab illo inventore veritatis et is the
            quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <div className="skill">
            <h4>wordpress 100%</h4>
            <div className="progress">
              <span style={{ width: "100%" }}></span>
            </div>
          </div>
          <div className="skill">
            <h4>html 75%</h4>
            <div className="progress">
              <span style={{ width: "75%" }}></span>
            </div>
          </div>
          <div className="skill">
            <h4>php 85%</h4>
            <div className="progress">
              <span style={{ width: "85%" }}></span>
            </div>
          </div>
          <div className="skill">
            <h4>css 95%</h4>
            <div className="progress">
              <span style={{ width: "95%" }}></span>
            </div>
          </div>
          <div className="btn-container">
            <a href="#" className="btn-primary">
              Hire Me!
            </a>
            <a href="#" className="btn-secondary">
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
