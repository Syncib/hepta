import React from "react";
import "./Gallery.css";
import Navbar from "../../components/Navbar";
import slider1 from "../../assets/images/slider-1.jpg";
import slider2 from "../../assets/images/slider-2.jpg";
import slider3 from "../../assets/images/slider-3.jpg";
import slider4 from "../../assets/images/slider-4.jpg";
import slider5 from "../../assets/images/slider-5.jpg";
import slider6 from "../../assets/images/slider-6.jpg";
const images = [slider1, slider2, slider3, slider4, slider5, slider6];
const Gallery = () => {
  return (
    <>
      <div className="gallery-hero">
        <Navbar />
        <div className="gallery-hero-text">
          <h1 className="abril-fatface-600 gallery-hero-heading">Gallery</h1>
          <p className="gallery-hero-subtext mukta-mahee-regular ">
            A free template by <span className="colorlib">Colorlib</span>.
            Download and share!
          </p>
        </div>
      </div>
      <div className="gallery-grid">
        {images.map((item, index) => (
          <img className={`gallery-img-${index}`} src={item} />
        ))}
      </div>
    </>
  );
};

export default Gallery;
