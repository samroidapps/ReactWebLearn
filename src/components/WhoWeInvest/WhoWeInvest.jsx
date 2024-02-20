import React from "react";
import "./WhoWeInvest.css";
import { motion } from "framer-motion";
import { whoWeInvest } from "@/src/utils/data";
import { containerVariants, tagVariants, titleVariants } from "@/src/utils/animation";

const WhoWeInvest = () => {
  return (
    <div className="wwi-wrapper">
      <div className="container">
        <div className="wwi-container">
          {/** Left Side */}
          <div className="wwi-left">
            <div className="head">
              <motion.span
                variants={tagVariants}
                initial="offscreen"
                whileInView={"onscreen"}
                className="tag"
              >
                Who we invest in
              </motion.span>
              <motion.span
                variants={titleVariants}
                initial="offscreen"
                whileInView={"onscreen"}
                className="title"
              >
                Digital Businesses
                <br />
                With Early Traction
              </motion.span>
            </div>

            {/** Features */}
            <div className="wwi-features">
              {whoWeInvest.map((feature, i) => (
                <motion.div
                  variants={containerVariants(i * 0.05 + 1)}
                  initial="offscreen"
                  whileInView={"onscreen"}
                  className="wwi-feature"
                  key={i}
                >
                  <span className="des">{feature.title}</span>
                  <span className="text">{feature.des}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/** Right Side */}
          <div className="wwi-right">
            <div className="wwi-right-inner">
              <motion.img
                 variants={containerVariants(0.5)}
                 initial="offscreen"
                 whileInView={"onscreen"}
                src="persons.png"
                alt="person"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeInvest;
