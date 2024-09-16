import React from "react";
import Navbar from "../../components/Navbar";
import { FaPlay } from "react-icons/fa";
import image1 from "../../assets/images/img_1_long.jpg";
import breakfast from "../../assets/svg/001-breakfast.svg";
import travel from "../../assets/svg/002-planet-earth.svg";
import airplane from "../../assets/svg/003-airplane.svg";
import beach from "../../assets/svg/004-beach.svg";
import mountain from "../../assets/svg/005-mountains.svg";
import ballon from "../../assets/svg/006-hot-air-balloon.svg";
import slider1 from "../../assets/images/slider-1.jpg";
import slider2 from "../../assets/images/slider-2.jpg";
import slider3 from "../../assets/images/slider-3.jpg";
import slider4 from "../../assets/images/slider-4.jpg";
import slider5 from "../../assets/images/slider-5.jpg";
import slider6 from "../../assets/images/slider-6.jpg";
import "./Home.css";
import { Carousel } from "../../components/Carousel";
const Home = () => {
  const images = [slider1,slider2,slider3,slider4,slider5,slider6]
  return (
    <>
      <div className="home-hero">
        <Navbar />
        <div className="home-hero-text">
          <h1 className="abril-fatface-600 home-hero-heading">
            Travel & Tours
          </h1>
          <p className="home-hero-subtext mukta-mahee-regular ">
            A free template by <span className="colorlib">Colorlib</span>.
            Download and share!
          </p>
          <button className="home-hero-button mukta-mahee-regular">
            VISIT COLORLIB
          </button>
          <a href="#" className="scroll-down mukta-mahee-regular">
            <FaPlay className="rotate-90" />
            <p className="scroll-text">SCROLL DOWN</p>
          </a>
        </div>
      </div>
      <div className="home-welcome">
        <img src={image1} className="welcome-img" />
        <div className="welcome-text">
          <h3 className="welcome-heading abril-fatface-regular">
            Welcome To Our Website
          </h3>
          <p className="welcome-para mukta-mahee-regular">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <p className="welcome-para mukta-mahee-regular">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <div className="welcome-watch mukta-mahee-regular">
            <div className="welcome-play">
              <FaPlay />
            </div>
            <span>WATCH THE VIDEO</span>
          </div>
        </div>
      </div>
      <div className="home-experience text-center">
        <div className="home-experience-text">
          <h3 className="home-experience-heading abril-fatface-regular">
            Experience Once In Your Life Time
          </h3>
          <p className="home-experience-para mukta-mahee-regular">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia,
            <br />
            there live the blind texts. Separated they live in Bookmarksgrove
            right at the coast of the
            <br />
            Semantics, a large language ocean.
          </p>
        </div>
        <div className="home-experience-grid">
          <div>
            <img src={breakfast} />
            <h4 className="home-experience-title abril-fatface-regular">
              Good Foods
            </h4>
            <p className="home-experience-desc mukta-mahee-regular">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div>
            <img src={travel} />
            <h4 className="home-experience-title abril-fatface-regular">
              Travel Anywhere
            </h4>
            <p className="home-experience-desc mukta-mahee-regular">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div>
            <img src={airplane} />
            <h4 className="home-experience-title abril-fatface-regular">
              Airplane
            </h4>
            <p className="home-experience-desc mukta-mahee-regular">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div>
            <img src={beach} />
            <h4 className="home-experience-title abril-fatface-regular">
              Beach Resort
            </h4>
            <p className="home-experience-desc mukta-mahee-regular">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div>
            <img src={mountain} />
            <h4 className="home-experience-title abril-fatface-regular">
              Mountain Climbing
            </h4>
            <p className="home-experience-desc mukta-mahee-regular">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div>
            <img src={ballon} />
            <h4 className="home-experience-title abril-fatface-regular">
              Hot Air Balloon
            </h4>
            <p className="home-experience-desc mukta-mahee-regular">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
      </div>
      <div className="home-tour">
        <div className="home-tour-text text-center">
          <h2 className="home-tour-heading abril-fatface-regular">
            International Tour Management.
          </h2>
          <p className="home-tour-para mukta-mahee-regular">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia,<br/>there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the<br/>Semantics, a large
            language ocean.
          </p>
        </div>
        <div className="home-tour-carousle">
          <Carousel data={images}/>
        </div>
      </div>
    </>
  );
};

export default Home;
