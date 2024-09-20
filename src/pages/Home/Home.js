import React from "react";
import Navbar from "../../components/Navbar";
import { FaPlay } from "react-icons/fa";
import image1 from "../../assets/images/img_1_long.jpg";
import img1 from "../../assets/images/img_1.jpg";
import img2 from "../../assets/images/img_2.jpg";
import img3 from "../../assets/images/img_3.jpg";
import img5 from "../../assets/images/img_5.jpg";
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";
import { MdOutlineStarHalf } from "react-icons/md";
import "./Home.css";
import { Carousel } from "../../components/Carousel";
import Footer from "../../components/Footer";
import Perks from "../../components/Perks";
import HappyCustomers from "../../components/HappyCustomers";
import SlideFadeIn from "../../components/SlideFadeIn";

export const blogimages = [img1, img2, img3];
const destinations = [
  { img: img1, title: "Food & Wines", rating: 4.5, reviews: 3239 },
  { img: img2, title: "Resort & Spa", rating: 4.5, reviews: 3239 },
  { img: img3, title: "Hotel Rooms", rating: 4.5, reviews: 3239 },
  { img: img5, title: "Mountain Climbing", rating: 4.5, reviews: 3239 },
];
const Home = () => {

  const printStars = (rating) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(rating)) {
        stars.push(<MdOutlineStar key={i} size={18} color="#65c0ba" />);
      } else if (i === Math.floor(rating) && rating % 1 !== 0) {
        stars.push(<MdOutlineStarHalf key={i} size={18} color="#65c0ba" />);
      } else {
        stars.push(<MdOutlineStarBorder key={i} size={18} color="#65c0ba" />);
      }
    }
    return stars;
  };
  return (
    <>
      <div className="home-hero">
        <Navbar />
        <div className="home-hero-text">
          <SlideFadeIn>
            <h1 className="abril-fatface-600 home-hero-heading">
              Travel & Tours
            </h1>
          </SlideFadeIn>
          <SlideFadeIn>
            <p className="home-hero-subtext mukta-mahee-regular">
              A free template by <span className="colorlib">Colorlib</span>.
              Download and share!
            </p>
          </SlideFadeIn>
          <SlideFadeIn>
            <button className="home-hero-button mukta-mahee-regular">
              VISIT COLORLIB
            </button>
          </SlideFadeIn>
          <a href="#" className="scroll-down mukta-mahee-regular">
            <FaPlay className="rotate-90" />
            <p className="scroll-text">SCROLL DOWN</p>
          </a>
        </div>
      </div>
      <SlideFadeIn>
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
      </SlideFadeIn>
      <div className="home-experience text-center">
        <div className="home-experience-text">
          <SlideFadeIn>
            <h3 className="home-experience-heading abril-fatface-regular">
              Experience Once In Your Life Time
            </h3>
          </SlideFadeIn>
          <SlideFadeIn>
            <p className="home-experience-para mukta-mahee-regular">
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
      <Perks/>
      </div>
      <div className="home-tour">
        <div className="home-tour-text text-center">
          <SlideFadeIn>
            <h2 className="home-tour-heading abril-fatface-regular">
              International Tour Management.
            </h2>
          </SlideFadeIn>
          <SlideFadeIn>
            <p className="home-tour-para mukta-mahee-regular">
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
        <div className="carousel-div">
          <div className="home-tour-carousel">
            <SlideFadeIn>
              <Carousel />
            </SlideFadeIn>
          </div>
        </div>

        <div className="home-blog">
          <div className="home-blog-text text-center">
            <SlideFadeIn>
              <h2 className="home-blog-heading abril-fatface-regular">
                Recent Blog Post
              </h2>
            </SlideFadeIn>
            <SlideFadeIn>
              <p className="home-blog-para mukta-mahee-regular">
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
          <div className="home-blog-cards">
            {blogimages.map((item) => (<SlideFadeIn>
              
                <div className="home-blog-card">
                  <img src={item} alt="blog-item"/>
                  <div className="home-blog-card-text">
                    <p className="home-blog-card-date mukta-mahee-regular">
                      February 26, 2018
                    </p>
                    <h3 className="home-blog-card-heading abril-fatface-regular">
                      45 Best Places To
                      <br />
                      Unwind
                    </h3>
                    <p className="home-blog-card-para mukta-mahee-regular">
                      Far far away, behind the word
                      <br />
                      mountains, far from the countries
                      <br />
                      Vokalia and Consonantia, there live the blind texts.
                    </p>
                  </div>
                </div>
            </SlideFadeIn>
            ))}
          </div>
        </div>
      </div>
      <HappyCustomers/>
      <div className="home-destination">
        <div className="home-destination-text">
          <h3 className="home-destination-heading abril-fatface-regular">
            Top Destination
          </h3>
          <p className="home-destination-para mukta-mahee-regular">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor,
            iusto doloremque quo
            <br />
            odio repudiandae sunt eveniet? Enim facilis laborum voluptate id
            porro, culpa maiores
            <br />
            quis, blanditiis laboriosam alias. Sed.
          </p>
        </div>
        <div className="home-destination-grid">
          {destinations.map((item) => (
            <SlideFadeIn>
              <div className="home-destination-item">
                <img className="home-destination-img" src={item.img} alt="destination-item"/>
                <p className="home-destination-name abril-fatface-regular">
                  {item.title}
                </p>
                <div className="home-destination-ratings">
                  <div className="home-destination-stars">
                    {printStars(item.rating)}
                  </div>
                  <div className="home-destination-reviews mukta-mahee-regular">
                    {item.reviews} reviews
                  </div>
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

export default Home;
