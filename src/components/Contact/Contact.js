import React from "react";
import "./contact.css";
import { CgPhone } from "react-icons/cg";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

import { FaBehance, FaDribbble, FaInstagram } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { RiPinterestLine } from "react-icons/ri";

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="contact-us">
          <h2 className="contact-title">Contact Us</h2>
          <p>
            Let's make something new, different and more meaningful or make
            thing more visual or conceptual?
          </p>
          <div className="info">
            <div className="dets">
              <span className="icon">
                <CgPhone />
              </span>
              <div className="">
                <p>
                  <span className="info-details">Call Me</span>
                  <br />
                  +123 456 7890
                </p>
              </div>
            </div>
            <div className="dets">
              <span className="icon">
                <AiOutlineMail />
              </span>
              <div className="">
                <p>
                  <span className="info-details">Email</span>
                  <br />
                  info@coder.com
                </p>
              </div>
            </div>
            <div className="dets">
              <span className="icon">
                <GoLocation />
              </span>
              <div className="">
                <p>
                  <span className="info-details">Adress</span>
                  <br />
                  Address 27 Division St, New York, NY 10002, USA
                </p>
              </div>
            </div>
          </div>
          <p className="find">Find Me On</p>
          <div className="socials">
            <a href="#">
              <FaBehance size="2rem" color="white" />
            </a>
            <a href="#">
              <FaDribbble size="2rem" color="white" />
            </a>
            <a href="#">
              <FaInstagram size="2rem" color="white" />
            </a>
            <a href="#">
              <GrLinkedinOption size="2rem" color="white" />
            </a>
            <a href="#">
              <RiPinterestLine size="2rem" color="white" />
            </a>
          </div>
        </div>
        <div className="form">
          <h2 className="contact-title">Drop a Line</h2>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Phone#" />
            <input type="number" placeholder="Budget" />
            <textarea placeholder="Message"></textarea>
          </form>
          <input type="submit" className="btn-primary" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
