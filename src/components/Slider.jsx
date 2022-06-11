import React from "react";
import "../App.css";
import { useInView } from "react-intersection-observer";

const Slider = ({ ImageSrc, title, subtitle, flipped }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
  });

  const renderContent = () => {
    return !flipped ? (
      <>
        <img className="sliderImg" src={ImageSrc} alt="slider-img" />
        <div className="sliderContent">
          <h1 className="slider-title">{title}</h1>
          <p>{subtitle}</p>
        </div>
      </>
    ) : (
      <>
        <div className="sliderContent">
          <h1 className="slider-title">{title}</h1>
          <p>{subtitle}</p>
        </div>
        <img className="sliderImg" src={ImageSrc} alt="slider-img" />
      </>
    );
  };
  return (
    <div className={inView ? "slider sliderZoom" : "slider"} ref={ref}>
      {renderContent()}
    </div>
  );
};

export default Slider;
