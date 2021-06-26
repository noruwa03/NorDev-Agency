import React from "react";
import Link from "next/link";

const Page404 = () => {
  return (
    <div className="page404">
      <div className="container">
        <div className="text">
          <h1>404</h1>
          <h2>PAGE NOT FOUND</h2>
          <Link href="/">Go Home</Link>
        </div>
        <div className="img">
          <img src="/assets/icons/error.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Page404;
