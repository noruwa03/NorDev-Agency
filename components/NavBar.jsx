import React from "react";
import Link from "next/link";
import { FaSpa } from "react-icons/fa";

const NavBar = () => {
  // const router = useRouter();

  // const isActive = (e) => {
  //   if (e == router.pathname) {
  //     return " active";
  //   } else {
  //     return "";
  //   }
  // };

  const menuHandler = () => {
    const menu = document.querySelector(".menu");
    const nav = document.querySelector("nav");

    menu.classList.toggle("active");
    nav.classList.toggle("active");
  };

  return (
    <div>
      <header>
        <Link href="/">
          <div className="site-name">
            <FaSpa className="icon" /> nor<span>Dev</span>
          </div>
        </Link>
        <div className="menu" onClick={menuHandler}></div>
        <nav>
          <div className="nav-items">
            <ul>
              <li>
                <Link href="/work">Work</Link>
              </li>
              <li>
                <Link href="/strategy">Strategy</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
