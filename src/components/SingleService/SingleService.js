import React from "react";
import { BsArrowRight } from "react-icons/bs";
import "./singleservice.css";

const SingleService = ({ icon, field }) => {
  return (
    <div className="service">
      <div className="service-content">
        <span className="service-icon">{icon}</span>
        <span className="service-field">{field}</span>
      </div>
      <span>
        <BsArrowRight size="2rem" />
      </span>
    </div>
  );
};

export default SingleService;
