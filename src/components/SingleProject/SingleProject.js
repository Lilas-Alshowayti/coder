import React from "react";
import "./singleproject.css";
import { BsArrowRight } from "react-icons/bs";

const SingleProject = ({ img }) => {
  return (
    <div className="project">
      <img src={img} alt="" />
      <div className="project-info">
        <h4 className="info-title">title</h4>
        <p className="info-short-desc">Lorem, ipsum dolor.</p>
        <p className="info-long-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, beatae.
        </p>
        <a href="#">
          <BsArrowRight size="2rem" color="white" />
        </a>
      </div>
    </div>
  );
};

export default SingleProject;
