import React from "react";
import "./Gallery.css";
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar";
import slider5 from "../../assets/images/slider-5.jpg";
import slider6 from "../../assets/images/slider-6.jpg";
import slider7 from "../../assets/images/img_3.jpg";
import slider8 from "../../assets/images/img_5.jpg";
const images = [
  slider6,
  slider5,
  slider7,
  slider8,
  slider7,
  slider8,
  slider6,
  slider5,
  slider6,
  slider5,
  slider7,
  slider8,
  slider6,
  slider5,
];
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
      <Footer/>
    </>
  );
};

export default Gallery;
