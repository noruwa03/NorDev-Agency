import React from "react";
import { GiCheckMark } from "react-icons/gi";
import { BsDash } from "react-icons/bs";
import Head from "next/head";

const Works = () => {
  const toggleHandler = () => {
    const items = document.querySelector(".items");
    const shipping = document.querySelector(".pay");

    items.classList.toggle("active");

    shipping.classList.toggle("active");
  };

  const backHandler = () => {
    const items = document.querySelector(".items");
    const shipping = document.querySelector(".pay");

    items.classList.toggle("active");

    shipping.classList.toggle("active");
  };

  return (
    <div className="works">
      <Head>
        <title>Web Design & Development Pack</title>
        <meta name="Web development plans" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="center">
        <div className="pay">
          <div className="row">
            <h2>Let's talk</h2>
            <h3 onClick={backHandler}>Back</h3>
          </div>
          <form name="contact" method="POST" data-netlify="true">
            <div className="input-form">
              <label>Name*</label>
              <input type="text" name="name" />
            </div>
            <div className="input-form">
              <label>Email*</label>
              <input type="email" name="email" />
            </div>

            <div className="input-form">
              <label>Message*</label>
              <textarea type="text" name="message" />
            </div>
          </form>

          <div className="proceed">
            <button type="submit">Submit</button>
          </div>
        </div>
      </div>
      <h1>Web Design & Development Pack</h1>

      <div className="banner">
        <h2>
          Get your own personal porfolio website now, from july 26 -August 02
          2021.
        </h2>
      </div>

      <div className="items">
        <div className="container-1">
          <p>FREE PLAN</p>
          <h3>Basic</h3>
          <div className="icon-text">
            <GiCheckMark className="icon" />
            <p>Source File</p>
          </div>

          <div className="icon-text">
            <GiCheckMark className="icon" />
            <p>Commercial Use</p>
          </div>

          <div className="icon-text">
            <GiCheckMark className="icon" />
            <p>Responsive</p>
          </div>

          <div className="icon-text">
            <GiCheckMark className="icon" />
            <p>1 Page/Screen</p>
          </div>

          <div className="plan" onClick={toggleHandler}>
            Trial
          </div>
        </div>

        <div className="container-2">
          <p>PAID PLAN</p>
          <h3>Standard</h3>
          <div className="icon-text">
            <GiCheckMark className="icon" />
            <p>Source File</p>
          </div>

          <div className="icon-text">
            <GiCheckMark className="icon" />
            <p>Commercial Use</p>
          </div>

          <div className="icon-text">
            <GiCheckMark className="icon" />
            <p>Responsive</p>
          </div>

          <div className="icon-text">
            <GiCheckMark className="icon" />
            <p>5 Page/Screen</p>
          </div>

          <div className="plan" onClick={toggleHandler}>
            Recommended
          </div>
        </div>

        <div className="container-3">
          <p>PAID PLAN</p>
          <h3>Premium</h3>
          <div className="icon-text">
            <GiCheckMark className="icon" />
            <p>Source File</p>
          </div>

          <div className="icon-text">
            <GiCheckMark className="icon" />
            <p>Commercial Use</p>
          </div>

          <div className="icon-text">
            <GiCheckMark className="icon" />
            <p>Responsive</p>
          </div>

          <div className="icon-text">
            <GiCheckMark className="icon" />
            <p>10 Page/Screen & Above</p>
          </div>
          <div className="plan" onClick={toggleHandler}>
            Choose this plan
          </div>
        </div>
      </div>

      <div className="needs">
        <h2>What i need to make your website: </h2>
        <div className="container">
          <p>
            <BsDash className="icon" />
            Introduction
          </p>
          <p>
            <BsDash className="icon" />
            Slogan
          </p>
          <p>
            <BsDash className="icon" />
            Logo
          </p>
          <p>
            <BsDash className="icon" />
            Relevant images of your business
          </p>
          <p>
            <BsDash className="icon" />
            Domain and hosting provider's credentials.
          </p>
          <p>
            <BsDash className="icon" />
            Any sample website you really like.
          </p>
          <p>
            <BsDash className="icon" />
            Colors scheme and fonts if any
          </p>
          <p>
            <BsDash className="icon" />
            Your co-operation during development time
          </p>
        </div>
      </div>

      <div className="contact">
        <h2>
          ORDER DIRECTLY OR CONTACT NORDEV FOR ANY QUESTIONS, +234 90 958 416
          74. noruwaobaseki03@gmail.com
        </h2>
        <h3>THANK YOU FOR VISITING.</h3>
      </div>
    </div>
  );
};

export default Works;
