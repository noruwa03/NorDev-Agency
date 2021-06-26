import React from "react";
import Link from "next/link";

const NewProjects = () => {
  return (
    <div>
      <div className="new-projects">
        <div className="row">
          <div className="container-one">
            <div className="inner-container">
              <div className="img"></div>
            </div>
            <div className="line"></div>
          </div>
          <div className="container-two">
            <div className="description">
              <h1>Strategy</h1>
              <p>
                We believe in the power of capturing your market with clearly
                defined digital marketing strategies rooted in the foundation of
                an innovated brand. That’s why we first focus on brand strategy.
                Then Brand Design. Then Logo Design. Then Web Design.
              </p>

              <div className="anchor">
                <Link href="/strategy">More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProjects;
