import React, { useEffect, useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import slider1 from "../assets/images/slider-1.jpg";
import slider2 from "../assets/images/slider-2.jpg";
import slider3 from "../assets/images/slider-3.jpg";
import slider4 from "../assets/images/slider-4.jpg";
import slider5 from "../assets/images/slider-5.jpg";
import slider6 from "../assets/images/slider-6.jpg";
import "./Carousel.css";
const images = [slider1, slider2, slider3, slider4, slider5, slider6];
export const Carousel = () => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === images.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? images.length - 1 : slide - 1);
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
      {images.map((item, idx) => {
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
        {images.map((_, idx) => {
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
