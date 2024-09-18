import React from "react";
import "./HotelGallery.css"
import { Carousel } from "./Carousel";
const HotelGallery = () => {
  return (
    <div className="hotel-gallery">
      <div className="hotel-gallery-text text-center">
        <h2 className="hotel-gallery-heading abril-fatface-regular">
          Hotel Gallery
        </h2>
        <p className="hotel-gallery-para mukta-mahee-regular">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia,
          <br />
          there live the blind texts. Separated they live in Bookmarksgrove
          right at the coast of the
          <br />
          Semantics, a large language ocean.
        </p>
      </div>
      <div className="home-tour-carousel">
        <Carousel />
      </div>
    </div>
  );
};

export default HotelGallery;
