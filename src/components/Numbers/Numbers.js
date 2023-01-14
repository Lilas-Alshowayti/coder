import React from "react";
import "./numbers.css";

const Numbers = () => {
  return (
    <section>
      <div className="container">
        <div className="squares">
          <div className="square">
            <h4 className="num">50+</h4>
            <div className="text">Clients</div>
          </div>
          <div className="square">
            <h4 className="num">60</h4>
            <div className="text">Projects</div>
          </div>
          <div className="square">
            <h4 className="num">30</h4>
            <div className="text">Awards</div>
          </div>
          <div className="square">
            <h4 className="num">06</h4>
            <div className="text">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Numbers;
