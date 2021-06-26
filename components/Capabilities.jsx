import React from "react";

const Capabilities = () => {
  return (
    <div>
      <div className="capabilities">
        <div className="center">
          <div className="heading">
            <h1>capabilities</h1>
          </div>

          <div className="plan">
            <div className="container-one">
              <div className="sub-heading">
                <h2>Strategy</h2>
              </div>
              <p>Research</p>
              <p>UI/UX audit</p>
              <p>Product strategy</p>
              <p>Innovation consulting</p>
            </div>
            <div className="container-two">
              <div className="sub-heading">
                <h2>Design</h2>
              </div>
              <p>UI/UX design</p>
              <p>Brand identity</p>
              <p>Websites and mobile apps</p>

              <p>Prototyping and testing</p>
            </div>
            <div className="container-three">
              <div className="sub-heading">
                <h2>Development</h2>
              </div>
              <p>HTML/CSS/JS</p>
              <p>React/Next js</p>
              <p>Backend/API integration</p>
              <p>Prototyping</p>
            </div>
            {/* <div className="container-four">
              <div className="sub-heading">
                <h2>Content</h2>
              </div>
              <p>Video</p>
              <p>Copywriting</p>
              <p>Animation</p>
              <p>Prototyping</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capabilities;
