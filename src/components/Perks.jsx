import React from 'react'
import breakfast from "../assets/svg/001-breakfast.svg";
import travel from "../assets/svg/002-planet-earth.svg";
import airplane from "../assets/svg/003-airplane.svg";
import beach from "../assets/svg/004-beach.svg";
import mountain from "../assets/svg/005-mountains.svg";
import ballon from "../assets/svg/006-hot-air-balloon.svg";
import "./Perks.css";
const Perks = () => {
  return (
    <div className="basic-grid">
          <SlideFadeIn>
            <div>
              <img src={breakfast} />
              <h4 className="basic-title abril-fatface-regular">
                Good Foods
              </h4>
              <p className="basic-desc mukta-mahee-regular">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </SlideFadeIn>
          <SlideFadeIn>
            <div>
              <img src={travel} />
              <h4 className="basic-title abril-fatface-regular">
                Travel Anywhere
              </h4>
              <p className="basic-desc mukta-mahee-regular">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </SlideFadeIn>
          <div>
            <img src={airplane} />
            <h4 className="basic-title abril-fatface-regular">
              Airplane
            </h4>
            <p className="basic-desc mukta-mahee-regular">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div>
            <img src={beach} />
            <h4 className="basic-title abril-fatface-regular">
              Beach Resort
            </h4>
            <p className="basic-desc mukta-mahee-regular">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div>
            <img src={mountain} />
            <h4 className="basic-title abril-fatface-regular">
              Mountain Climbing
            </h4>
            <p className="basic-desc mukta-mahee-regular">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div>
            <img src={ballon} />
            <h4 className="basic-title abril-fatface-regular">
              Hot Air Balloon
            </h4>
            <p className="basic-desc mukta-mahee-regular">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
  )
}

export default Perks