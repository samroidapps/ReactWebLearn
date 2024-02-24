import React from "react";
import "./Testimonials.css";
import SlickSlider from "./SlickSlider";

const Testimonials = () => {
  return (
    <div className="t-wrapper">
      <div className="container">
        <div className="t-container">
          <div className="t-head">
            <span className="tag">Testimonials</span>
            <span className="title">
              Access Capital That Complements <br /> Traditional Funding Options
            </span>
            <span className="des">What people say about us</span>
          </div>

         
        </div>
         {/* Slid er */}
         <SlickSlider />
      </div>
    </div>
  );
};

export default Testimonials;
