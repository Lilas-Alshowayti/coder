import React from "react";
import "./services.css";
import SingleService from "../SingleService/SingleService";
import { DiWordpress } from "react-icons/di";
import { BsCodeSlash, BsArrowRight } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io";
import { FaPhp, FaPencilAlt } from "react-icons/fa";

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="heading">
          <h2 className="title">our services</h2>
          <p className="section-desc">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem totam
            rem aperiam, eaque ipsa quae ab illo inventore veritatis et is the
            quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
        <div className="icons-section">
          <SingleService icon={<DiWordpress size="2rem" />} field="Wordpress" />
          <SingleService icon={<BsCodeSlash size="2rem" />} field="HTML" />
          <SingleService
            icon={<RiComputerLine size="2rem" />}
            field="Web Development"
          />
          <SingleService icon={<IoLogoCss3 size="2rem" />} field="CSS" />
          <SingleService icon={<FaPhp size="2rem" />} field="PHP" />
          <SingleService
            icon={<FaPencilAlt size="2rem" />}
            field="Problem Solving"
          />
        </div>
        <a href="#" className="btn-primary">
          View All
        </a>
      </div>
    </section>
  );
};

export default Services;
