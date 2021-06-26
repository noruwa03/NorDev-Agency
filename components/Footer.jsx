import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div>
      <footer>
        <div className="contact-us">
          <div className="heading">
            <div className="row">
              <h1>Let's talk.</h1>
              {/* <div className="img">
                <Image src="/assets/icons/mylogo.jpg" width={80} height={80} />
              </div> */}
            </div>
            <div className="email-row">
              <div className="email-text">
                nor@gmail.com
                <div className="line"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="row-items">
          <div className="container-one">Web Development, Ui/Ux designing.</div>
          <div className="container-two">
            <div className="nav-items">
              <Link href="/strategy">Strategy</Link>
              <Link href="/work">Work</Link>
              <Link href="/about">About</Link>
            </div>
            <div className="socials">
              <Link href="https://www.instagram.com/nor.dev_/" prefetch={false}>
                <a target="_blank">Instagram</a>
              </Link>

              <Link href="/">Dribbble</Link>
            </div>
          </div>
        </div>
        <div className="ft">&copy; {date} NorDev Services.</div>
      </footer>
    </div>
  );
};

export default Footer;
