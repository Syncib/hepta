import React from "react";
import Navbar from "../../components/Navbar";
import "./Home.css";
const Home = () => {
  return (
    <div className="home-hero">
      <Navbar />
      <div className="home-hero-text">
        <h1 className="abril-fatface-regular home-hero-heading">
          Travel & Tours
        </h1>
        <p className="home-hero-subtext">
          A free template by Colorlib. Download and share!
        </p>
      <button className="home-hero-button">VISIT COLORLIB</button>
      </div>
    </div>
  );
};

export default Home;
