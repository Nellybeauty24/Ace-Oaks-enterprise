// src/components/Footer.jsx
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./ComponentStyles/Footer.css"; // ✅ custom CSS

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-col">
          <h2 className="footer-logo">Ace Oaks Ltd</h2>
          <p>
            <strong>Head office at</strong> 83 Palm Avenue, Mushin Lagos.
          </p>
          <p>
            <strong>Contact Us:</strong> + (088) 123 456 789
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:aceoaks@gmail.com">aceoaks@gmail.com</a>
          </p>
        </div>

        {/* Middle Section */}
        <div className="footer-col">
          <h3>Popular Search</h3>
          <ul>
            <li>Marine Plywoods</li>
            <li>Edge Tapes</li>
            <li>Wall Panels</li>
            <li>Furniture Accessories</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-col">
          <h3>Pages</h3>
          <ul>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
            <li><Link to="/about-us">About</Link></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="footer-divider"></div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>©Ace Oaks LTD – All rights reserved</p>
        <div className="social-icons">
          <span>Follow Us</span>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
