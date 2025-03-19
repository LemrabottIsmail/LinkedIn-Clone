import React from "react";
import "./Carousel.css";

export const Carousel = ({ data }) => {
  return (
    <div className="carousel">
      {data.map((item, idx) => {
        return (
          <img src={item.src} alt={item.alt} key={idx} className="slide" />
        );
      })}
    </div>
  );
};
