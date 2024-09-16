import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-links">
          <div className="link-box">
            <h2 className="link-head abril-fatface-regular">Quick Link</h2>
            <p>About Us</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Help</p>
            <p>Rooms</p>
          </div>
          <div className="link-box">
            <h2 className="link-head abril-fatface-regular">Support</h2>
            <p>Our Location</p>
            <p>The Hosts</p>
            <p>About</p>
            <p>Contact</p>
            <p>Restaurant</p>
          </div>
          <div className="link-box">
            <h2 className="link-head abril-fatface-regular">Contact Info</h2>
            <div className="link-address-head">Address:</div>
            <p className="fade-link">
              98 West 21th Street, Suite 721
              <br />
              New York NY 10016
            </p>
            <div className="link-address-head">Phone:</div>
            <p className="fade-link">(+1) 435 3533</p>
            <div className="link-address-head">Email:</div>
            <p className="fade-link">info@yourdomain.com</p>
          </div>
          <div className="link-box">
            <h2 className="link-head abril-fatface-regular">Subscribe</h2>
            <p className="fade-link">Sign up for our newsletter</p>
            <div className="input-group">
              <input type="text" placeholder="Your email..." />
              <button className="paperplane"><FaPaperPlane size={18} color="white"/></button>
            </div>
          </div>
        </div>
        <div className="footer-copyrights"></div>
      </div>
    </footer>
  );
};

export default Footer;
