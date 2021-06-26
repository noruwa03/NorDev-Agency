import React from "react";
import Link from "next/link";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-text">
        <h1>Hey, we're NorDev.</h1>
        <p>
          NorDev is a Frontend Web Development and UI/UX design agency. We
          create websites that will bring value to your business. 
        </p>
      </div>
      <div className="intro-container">
        <div className="first-half-circle">
          <h1>norDev</h1>
          <p>
            We innovate websites, evolve brands and captivate digital markets.
          </p>
          <Link href="/work">
            <a>
              <div className="arrow-icon"></div>
            </a>
          </Link>
        </div>

        <div className="second-half-circle"></div>
        <div className="first-triangle"></div>
        <div className="second-triangle"></div>

        <div className="start-now-link">
          <Link href="/work">
            <a>
              <div className="row">
                <div className="icon"></div>
                <div className="text">Start Now</div>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Intro;
