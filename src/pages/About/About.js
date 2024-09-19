import React from "react";
import Navbar from "../../components/Navbar";
import image1 from "../../assets/images/slider-1.jpg";
import person1 from "../../assets/images/person_1.jpg";
import person2 from "../../assets/images/person_2.jpg";
import person3 from "../../assets/images/person_3.jpg";
import "./About.css";
import Footer from "../../components/Footer";
import HotelGallery from "../../components/HotelGallery";
import SlideFadeIn from "../../components/SlideFadeIn";
const teamPersons = [
  {
    img: person3,
    name: "Vince Richardson",
    role: "CEO, CO-FOUNDER",
  },
  {
    img: person1,
    name: "Jean Love",
    role: "CTO, Co-Founder",
  },
  {
    img: person2,
    name: "Jeff Stark",
    role: "Marketer, Co-Founder",
  },
  {
    img: person3,
    name: "Vince Richardson",
    role: "CEO, CO-FOUNDER",
  },
  {
    img: person1,
    name: "Jean Love",
    role: "CTO, Co-Founder",
  },
  {
    img: person2,
    name: "Jeff Stark",
    role: "Marketer, Co-Founder",
  },
];
const About = () => {
  return (
    <>
      <div className="about-hero">
        <Navbar />
        <div className="about-hero-text">
          <SlideFadeIn>
            <h1 className="abril-fatface-600 about-hero-heading">About Us</h1>
          </SlideFadeIn>
          <p className="about-hero-subtext mukta-mahee-regular ">
            A free template by <span className="colorlib">Colorlib</span>.
            Download and share!
          </p>
        </div>
      </div>
      <div className="about-welcome">
        <img src={image1} className="about-welcome-img" />
        <div className="about-welcome-text">
          <SlideFadeIn>
            <h3 className="about-welcome-heading abril-fatface-regular">
              Welcome Travel &<br />
              Tours
            </h3>
          </SlideFadeIn>
          <SlideFadeIn>
            <p className="about-welcome-para mukta-mahee-regular">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated they
              live in Bookmarksgrove right at the coast of the Semantics, a large
              language ocean.
            </p>
          </SlideFadeIn>
          <SlideFadeIn>
            <p className="about-welcome-para mukta-mahee-regular">
              A small river named Duden flows by their place and supplies it with
              the necessary regelialia.
            </p>
          </SlideFadeIn>
          <button className="about-button mukta-mahee-regular">
            LEARN MORE
          </button>
        </div>
      </div>
      <SlideFadeIn>
        <HotelGallery />
      </SlideFadeIn>
      <div className="team">
        <div className="team-text text-center">
          <SlideFadeIn>
            <h2 className="team-heading abril-fatface-regular">Team</h2>
          </SlideFadeIn>
          <SlideFadeIn>
            <p className="team-para mukta-mahee-regular">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia,
              <br />
              there live the blind texts. Separated they live in Bookmarksgrove
              right at the coast of the
              <br />
              Semantics, a large language ocean.
            </p>
          </SlideFadeIn>
        </div>
        <div className="team-grid">
          {teamPersons.map((item) => (
            <SlideFadeIn>
              <div className="team-person">
                <img src={item.img} />
                <div>
                  <p className="team-person-role">{item.role}</p>
                  <h3 className="team-person-name abril-fatface-regular">
                    {item.name}
                  </h3>
                </div>
              </div>
            </SlideFadeIn>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
