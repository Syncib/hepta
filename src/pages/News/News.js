import React from "react";
import Navbar from "../../components/Navbar";
import img1 from "../../assets/images/img_1.jpg";
import img2 from "../../assets/images/img_2.jpg";
import Footer from "../../components/Footer";
import { FaSearch } from "react-icons/fa";
import "./News.css";
import SlideFadeIn from "../../components/SlideFadeIn";
const images = [img1, img2, img1, img2, img1, img2];
const categories = ["Events", "Resto bar", "Celebration", "Promos"];
const News = () => {
  return (
    <>
      <div className="news-hero">
        <Navbar />
        <div className="news-hero-text">
          <SlideFadeIn>
            <h1 className="abril-fatface-600 news-hero-heading">Blog</h1>
          </SlideFadeIn>
          <SlideFadeIn>
            <p className="news-hero-subtext mukta-mahee-regular ">
              A free template by <span className="colorlib">Colorlib</span>.
              Download and share!
            </p>
          </SlideFadeIn>
        </div>
      </div>
      <div className="news-back">
        <div className="news-area">
          <div className="news-grid">
            {images.map((item) => (
              <SlideFadeIn>
                <div className="news-card">
                  <img src={item} />
                  <div className="news-card-text">
                    <p className="news-date mukta-mahee-regular">
                      February 26, 2018
                    </p>
                    <h3 className="news-card-heading abril-fatface-regular">
                      Free Template by Colorlib
                    </h3>
                  </div>
                </div>
              </SlideFadeIn>
            ))}
            <div className="page-numbers">
                <div>
                  <p>1</p>
                </div>
                <div>
                  <p>2</p>
                </div>
                <div>
                  <p>3</p>
                </div>
              </div>
          </div>
          <div className="news-utils">
            <SlideFadeIn>
              <div className="news-search">
                <div className="news-search-box">
                  <FaSearch className="news-search-icon" />
                  <input
                    type="search"
                    placeholder="Search..."
                    className="search-input"
                  />
                </div>
              </div>
            </SlideFadeIn>
            <div className="news-posts">
              <SlideFadeIn>
                <h4 className="news-posts-heading mukta-mahee-regular">
                  Popular Post
                </h4>
              </SlideFadeIn>
              {images.map(
                (item, index) =>
                  index < 5 && (
                    <SlideFadeIn>
                      <div className="popular-post">
                        <img src={item} />
                        <div className="popular-post-text">
                          <p className="popular-post-date mukta-mahee-regular">
                            February 27, 2018
                          </p>
                          <p className="popular-post-heading abril-fatface-regular">
                            Free Template by Colorlib
                          </p>
                        </div>
                      </div>
                    </SlideFadeIn>
                  )
              )}
            </div>
            <div className="news-categories">
              <SlideFadeIn>
                <h4 className="news-categories-heading mukta-mahee-regular">
                  Categories
                </h4>
              </SlideFadeIn>
              {categories.map((item) => (
                <SlideFadeIn>
                  <div className="news-category mukta-mahee-regular">
                    <p className="">{item}</p>
                    <p className="">(12)</p>
                  </div>
                </SlideFadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default News;
