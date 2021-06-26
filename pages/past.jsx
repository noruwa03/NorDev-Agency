import React from "react";
import Link from "next/link";
import Head from "next/head";

const PastWorks = () => {
  return (
    <div>
      <Head>
        <title>Past Works</title>
        <meta name="Past Works" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="past-works">
        <h1>Past Works</h1>
        <div className="container">
          <div className="con">
            <Link href="https://obaseki-osaro.netlify.app/" prefetch={false}>
              <a target="_blank">
                <img src="/assets/images/e-comm0.png" alt="" />
              </a>
            </Link>
          </div>

          <div className="con">
            <Link href="https://obaseki-osaro.netlify.app/" prefetch={false}>
              <a target="_blank">
                <img src="/assets/images/nor-travel.png" alt="" />
              </a>
            </Link>
          </div>

          <div className="con">
            <Link href="https://obaseki-osaro.netlify.app/" prefetch={false}>
              <a target="_blank">
                <img src="/assets/images/record.png" alt="" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastWorks;
