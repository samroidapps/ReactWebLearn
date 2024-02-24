import React from "react";
import "./Footer.css";
import EmailBox from "../EmailBox/EmailBox";

const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="container">
        <div className="f-container">
          <span className="title">Get funded Today!</span>
          <EmailBox />

          <hr />
          <div className="f-menu">
            <span>Home</span>
            <span>What We Do</span>
            <span>How it Works</span>
            <span>Who We Invest In</span>
            <span>Testimonials</span>
          </div>
          <hr />
          <span className="text">Made with Love By Samroid</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
