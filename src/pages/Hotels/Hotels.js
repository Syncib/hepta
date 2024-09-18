import React from "react";
import Navbar from "../../components/Navbar";
import Perks from "../../components/Perks";
import image1 from "../../assets/images/slider-1.jpg";
import image2 from "../../assets/images/slider-2.jpg";
import "./Hotels.css";
import HotelGallery from "../../components/HotelGallery";
import { blogimages } from "../Home/Home";
import Footer from "../../components/Footer";
const Hotels = () => {
  return (
    <>
      <div className="hotel-hero">
        <Navbar />
        <div className="hotel-hero-text">
          <h1 className="abril-fatface-600 hotel-hero-heading">Our Hotel</h1>
          <p className="hotel-hero-subtext mukta-mahee-regular ">
            A free template by <span className="colorlib">Colorlib</span>.
            Download and share!
          </p>
        </div>
      </div>
      <div className="hotel-perks text-center">
        <Perks />
      </div>
      <div className="hotel-info">
        <div className="hotel-rooms">
          <img src={image1} className="hotel-rooms-img" />
          <div className="hotel-rooms-text">
            <h3 className="hotel-rooms-heading abril-fatface-regular">
              Family Room
            </h3>
            <p className="hotel-rooms-para mukta-mahee-regular">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <p className="hotel-rooms-para mukta-mahee-regular">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
            <button className="hotel-button mukta-mahee-regular">
              LEARN MORE
            </button>
          </div>
        </div>
        <div className="hotel-rooms">
          <div className="hotel-rooms-text">
            <h3 className="hotel-rooms-heading abril-fatface-regular">
              Presidential Room
            </h3>
            <p className="hotel-rooms-para mukta-mahee-regular">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <p className="hotel-rooms-para mukta-mahee-regular">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
            <button className="hotel-button mukta-mahee-regular">
              LEARN MORE
            </button>
          </div>
          <img src={image2} className="hotel-rooms-img" />
        </div>
      </div>
      <div className="hotel-div">
        <HotelGallery />
      </div>
      <div className="more-hotels">
        <div className="more-hotels-text text-center">
          <h2 className="more-hotels-heading abril-fatface-regular">
            More Hotels Features
          </h2>
          <p className="more-hotels-para mukta-mahee-regular">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor,
            iusto doloremque quo
            <br />
            odio repudiandae sunt eveniet? Enim facilis laborum voluptate id
            porro, culpa maiores
            <br />
            quis, blanditiis laboriosam alias. Sed.
          </p>
        </div>
        <div className="more-hotels-cards">
          {blogimages.map((item) => (
            <div className="more-hotels-card">
              <img src={item} />
              <div className="more-hotels-card-text">
                <h3 className="more-hotels-card-heading abril-fatface-regular">
                  Five Reasons to Stay at
                  <br />
                  Villa Resort
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Hotels;
