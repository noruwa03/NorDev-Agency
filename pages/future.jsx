import React from "react";
import Link from "next/link";
import Head from "next/head";

const FuturePage = () => {
  const presentData = [
    
  ];

  return (
    <div>
      <Head>
        <title>Future Works</title>
        <meta name="Future Works" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="present-works">
        <h1>Future Works</h1>
        <div className="container">
          {presentData == 0 ? (
            <div className="proj">
              <h1>No Future Project Available now.</h1>
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

export default FuturePage;
