import React from "react";
import "./blog.css";
import post1 from "../../assets/post1.png";
import post2 from "../../assets/post2.png";
import { BsArrowRight } from "react-icons/bs";
const Blog = () => {
  return (
    <section className="blog">
      <div className="container">
        <div className="heading">
          <h2 className="title">Latest Blog</h2>
          <p className="heading-desc">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem totam
            rem aperiam, eaque ipsa quae ab illo inventore veritatis et is the
            quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
        <div className="blogs">
          <div className="single-blog">
            <div className="image-container">
              <img src={post1} />
            </div>
            <div className="details">
              <p className="date">26th October,2019</p>
              <p className="budget">
                I Used The Web For A Day On A 50 MB Budget
              </p>
              <div className="link">
                <a href="#">Learn More</a>
                <BsArrowRight size="2rem" />
              </div>
            </div>
          </div>
          <div className="single-blog">
            <div className="image-container">
              <img src={post2} />
            </div>
            <div className="details">
              <p className="date">26th October,2019</p>
              <p className="budget">
                I Used The Web For A Day On A 50 MB Budget
              </p>
              <div className="link">
                <a href="#">Learn More</a>
                <BsArrowRight size="2rem" />
              </div>
            </div>
          </div>
          <div className="single-blog">
            <div className="image-container">
              <img src={post2} />
            </div>
            <div className="details">
              <p className="date">26th October,2019</p>
              <p className="budget">
                I Used The Web For A Day On A 50 MB Budget
              </p>
              <div className="link">
                <a href="#">Learn More</a>
                <BsArrowRight size="2rem" />
              </div>
            </div>
          </div>
        </div>

        <a className="btn-primary">View All</a>
      </div>
    </section>
  );
};

export default Blog;
