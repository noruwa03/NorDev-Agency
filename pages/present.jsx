import React from "react";
import Link from "next/link";

import Head from "next/head";

const PresentWorks = () => {
  const presentData = [
    // {
    //   id: 1,
    //   name: "Asion Landing Page",
    //   image: "/assets/images/desert_1.jpeg",
    // },

    // {
    //   id: 2,
    //   name: "Dorminics Restuarant",
    //   image: "/assets/images/mountain_0.jpeg",
    // },

    // {
    //   id: 3,
    //   name: "Linda Place",
    //   image: "/assets/images/mountain_0.jpeg",
    // },
  ];

  return (
    <div>
      <Head>
        <title>Present Works</title>
        <meta name="Present Works" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="present-works">
        <h1>Present Works</h1>
        <div className="container">
          {presentData == 0 ? (
            <div className="proj">
              <h1>No Present Project Available now.</h1>
              <div className="anchor-link">
                <Link href="/work">Order now</Link>
              </div>
            </div>
          ) : (
            presentData.map((data) => {
              return (
                <div className="data" key={data.id}>
                  <img src={data.image} alt="" />

                  <div className="center-tx">
                    <p>{data.name}</p>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default PresentWorks;
