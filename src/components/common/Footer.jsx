import { Link } from "react-router-dom";
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

import {
  SiVisa,
  SiMastercard,
  SiPaypal,
  SiApplepay,
  SiGooglepay,
} from "react-icons/si";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <div className="brand-header">
            <div className="brand-icon">C</div>
            <h2 className="footer-logo">ClassicShop</h2>
          </div>

          <p>
            Your one-stop destination for quality products. Browse, compare,
            and shop with confidence.
          </p>

          <div className="social-icons">
            <a href="#"><FiInstagram /></a>
            <a href="#"><FiTwitter /></a>
            <a href="#"><FiFacebook /></a>
            <a href="#"><FiYoutube /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>

          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/categories">Categories</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Customer */}
        <div className="footer-section">
          <h4>Customer</h4>

          <ul>
            <li><Link to="/cart">My Cart</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h4>Contact Us</h4>

          <ul className="footer-contact">
            <li>📧 support@classicshop.com</li>
            <li>📞 +91 98765 43210</li>
            <li>📍 Mumbai, India</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} ClassicShop. All rights reserved.
        </p>

        <div className="payment-icons">
          <SiVisa />
          <SiMastercard />
          <SiPaypal />
          <SiApplepay />
          <SiGooglepay />
        </div>
      </div>
    </footer>
  );
}

export default Footer;