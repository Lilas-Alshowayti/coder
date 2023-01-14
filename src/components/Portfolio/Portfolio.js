import React from "react";
import "./portfolio.css";
import thumb1 from "../../assets/dribbble-thumbn.png";
import thumb2 from "../../assets/thumbnail.png";
import SingleProject from "../SingleProject/SingleProject";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="container">
        <div className="heading">
          <h2 className="title">Our Portfolio</h2>
          <p className="section-desc">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem totam
            rem aperiam, eaque ipsa quae ab illo inventore veritatis et is the
            quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <div className="tabs">
            <ul>
              <li>All</li>
              <li>Web Development</li>
              <li>HTML</li>
              <li>UI/UX</li>
              <li>Web Design</li>
            </ul>
          </div>
        </div>
        <div className="projects">
          <SingleProject img={thumb1} />
          <SingleProject img={thumb1} />
          <SingleProject img={thumb1} />
          <SingleProject img={thumb2} />
          <SingleProject img={thumb2} />
          <SingleProject img={thumb2} />
        </div>
        <a className="btn-primary">View All</a>
      </div>
    </section>
  );
};

export default Portfolio;
