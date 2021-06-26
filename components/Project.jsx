import React from "react";
import Link from "next/link";

const Project = () => {
  return (
    <div>
      <div className="projects">
        <div className="row">
          <div className="container-one">
            <div className="box-one">
              <div className="line"></div>
            </div>

            <Link href="/past">
              <div className="box-two">
                <h2>Past</h2>
                <div className="one">01</div>
              </div>
            </Link>

            <Link href="/present">
              <div className="box-three">
                <h2>Present</h2>
                <div className="two">02</div>
              </div>
            </Link>
            <Link href="/future">
              <div className="box-four">
                <h2>Future</h2>
                <div className="three">03</div>
              </div>
            </Link>
          </div>
          <div className="container-two">
            <div className="description">
              <h1>Works</h1>
              <p>
                Our mission is to realize the valuable, distinguishable brand
                that exists within every one of our clients, and to captivate
                the market with that brand. Our brand consultant works with you
                to evaluate your core message. Then we innovate your current
                brand to captivate your target market.
              </p>

              <div className="anchor">
                <Link href="/work">More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
