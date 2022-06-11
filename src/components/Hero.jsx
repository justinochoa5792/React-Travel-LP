import React from "react";
import "../App.css";

const Hero = ({ ImageSrc }) => {
  return (
    <div className="hero">
      <img src={ImageSrc} alt="Travel" className="heroImage" />
      <h1 className="heroTitle">Travel made simple.</h1>
    </div>
  );
};

export default Hero;
