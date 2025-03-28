import React, { useState } from "react";
import "./Carousel.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

interface CarouselItem {
  src: string;
  alt: string;
}

interface CarouselProps {
  data: CarouselItem[];
}

export const Carousel: React.FC<CarouselProps> = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="carousel">
      <div className="arrow arrow-left" onClick={prevSlide}>
        <BsArrowLeftCircleFill size={24} />
      </div>
      {data.map((item: CarouselItem, idx: number) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <div className="arrow arrow-right" onClick={nextSlide}>
        <BsArrowRightCircleFill size={24} />
      </div>
      <span className="indicators">
        {data.map((_: CarouselItem, idx: number) => {
          return (
            <button
              key={idx}
              onClick={() => setSlide(idx)}
              className={
                slide !== idx ? "indicator indicator-selected" : "indicator"
              }
            ></button>
          );
        })}
      </span>
    </div>
  );
};
