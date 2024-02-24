"use client";
import React, { useState } from "react";
import "./Navbar.css";

import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);

const [navStyle, setNavStyle] = useState("");
const {scrollYProgress}= useScroll();

useMotionValueEvent(scrollYProgress, "change",(latest) => {
  if(latest > 0.2) {
    setNavStyle("sticky");
  } else {
    setNavStyle("");
  }
});


  return (
    <div className={`n-wrapper ${navStyle}`}>
      {/* Desktop Version */}
      <div className="container">
        <div className="n-container">
          {/* Left Side */}
          <div className="n-logo">
            <span>Logo</span>
          </div>
          {/* Right Side */}
          <div className="n-right">
            <div className="n-menu">
              <Link to="wwd-wrapper" spy={true} smooth={true} ><span>What We Do</span></Link>
              <Link to="hiw-wrapper" spy smooth offset={100} ><span>How Its Work</span></Link>
              <Link to="wwi-wrapper" spy smooth  ><span>who we invest in</span></Link>
              <Link to="t-wrapper"  spy smooth offset={100} ><span>testimonials</span></Link>
            </div>
            <div className="fund-button">get funded</div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="container">
        <div className="nm-container">
          {/* Logo */}
          <div className="nm-logo">
            <span>Logo</span>
          </div>

          {/* Menu */}
          {!mobileMenuOpened ? (
            <BiMenuAltRight
              size={30}
              onClick={() => setMobileMenuOpened(true)}
            />
          ) : (
            <RxCross2 size={30} onClick={() => setMobileMenuOpened(false)} />
          )}

          {/* Mobile Menu */}
          <div
            className="nm-menu"
            style={{ transform: mobileMenuOpened && "translateX(0%)" }}
          >
           <Link onClick={()=> setMobileMenuOpened(false)} to="wwd-wrapper" spy={true} smooth={true}> <span>What We Do</span></Link>
           <Link onClick={()=> setMobileMenuOpened(false)} to="hiw-wrapper" spy smooth offset={100}> <span>How Its Work</span></Link>
           <Link onClick={()=> setMobileMenuOpened(false)} spy smooth > <span>who we invest in</span></Link>
           <Link onClick={()=> setMobileMenuOpened(false)} spy smooth offset={100}> <span>testimonials</span></Link>
            <div className="m-funded-button">Get Funded</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
