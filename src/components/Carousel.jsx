import React, { useEffect, useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import "./Carousel.css";

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 4000); 

    return () => clearInterval(intervalId); // Clean up the interval on unmount
  }, [slide]);
  return (
    <div className="carousel">
      <MdOutlineKeyboardArrowLeft
        onClick={prevSlide}
        className="arrow arrow-left"
      />
      {data.map((item, idx) => {
        return (
          <img
            src={item}
            key={idx}
            className={
              slide === idx ? "slide slide-visible" : "slide slide-hidden"
            }
          />
        );
      })}
      <MdOutlineKeyboardArrowRight
        onClick={nextSlide}
        className="arrow arrow-right"
      />
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};
