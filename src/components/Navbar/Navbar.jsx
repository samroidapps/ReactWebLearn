"use client";
import React, { useState } from "react";
import "./Navbar.css";

import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  return (
    <div className="n-wrapper">
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
              <span>What We Do</span>
              <span>How Its Work</span>
              <span>who we invest in</span>
              <span>testimonials</span>
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
            <span>What We Do</span>
            <span>How Its Work</span>
            <span>who we invest in</span>
            <span>testimonials</span>
            <div className="m-funded-button">Get Funded</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
