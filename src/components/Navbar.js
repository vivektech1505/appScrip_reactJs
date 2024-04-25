import React, { useState } from "react";
import headlinelogo from "../Assets/nav-top-logo.png";
import logo from "../Assets/Logo.png";
import search from "../Assets/search-normal.png";
import bag from "../Assets/shopping-bag.png";
import profile from "../Assets/profile.png";
import Language from "../Assets/Language.png";
import heart from "../Assets/heart.png";
import menu from "../Assets/solar_hamburger-menu-linear.png";
import "./Navbar.css";

const Navbar = () => {
  const [menuclass, setMenu] = useState("toggleSidebar");

  const handlemenu = () => {
    setMenu("zindex3");
  };
  const handlemenuclose = () => {
    setMenu("toggleSidebar");
  };
  return (
    <nav>
      <section className="top">
        <span className="headline left-m">
          <img className="headline-logo" src={headlinelogo} />{" "}
          <span>Lorem ipsum dolor</span>
        </span>
        <span className="headline">
          <img className="headline-logo" src={headlinelogo} />{" "}
          <span>Lorem Ipsum Dolor </span>
        </span>
        <span className="headline right-m">
          <img className="headline-logo" src={headlinelogo} />{" "}
          <span>Lorem Ipsum Dolor</span>
        </span>
      </section>
      <section className="bottom-nav">
        <div className="bottom-nav-utility">
          <span className="logo">
            <img className="menu" src={menu} alt="menu" onClick={handlemenu} />
            <img src={logo} alt="logo" />
          </span>
          <aside className={menuclass}>
            <div className="sibebarlogo">
              <span>LOGO</span>
              <span onClick={handlemenuclose}>X</span>
            </div>
            <div className="signup">Sign Up</div>
            <div className="signin">Sign in</div>
            <div className="abt">About</div>
            <div className="skills">Skills</div>
            <div className="stories">Stories</div>
            <div className="contactus">Contact Us</div>
          </aside>
          <span className="nav-utilities">
            <img className="img search" src={search} alt="search" />
            <img className="img like" src={heart} alt="like" />
            <img className="img bag" src={bag} alt="bag" />
            <img className="img profile" src={profile} alt="profile" />
            <img className="img lang" src={Language} alt="lang" />
          </span>
        </div>
        <span className="website-name">LOGO</span>

        <div className="nav-links">
          <ul>
            <li>
              <a href="#">SHOP</a>
            </li>
            <li>
              <a href="#">SKILLS</a>
            </li>
            <li>
              <a href="#">STORIES</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">CONTACT US</a>
            </li>
          </ul>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
