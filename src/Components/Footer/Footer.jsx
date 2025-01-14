import React from "react";
import { FaTiktok, FaYoutube, FaDiscord, FaPatreon } from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="w-screen h-[20%] footer-main">
      <div className="footer-buttons">
        <a href="#" className="footer-button">
          <FaTiktok size={24} />
          <span className="button-text">Tiktok</span>
        </a>
        <a href="#" className="footer-button">
          <FaYoutube size={24} />
          <span className="button-text">Youtube</span>
        </a>
        <a href="#" className="footer-button">
          <FaDiscord size={24} />
          <span className="button-text">Discord</span>
        </a>
        <a href="#" className="footer-button">
          <FaPatreon size={24} />
          <span className="button-text">Patreon</span>
        </a>
      </div>
      <div className="footer-info">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        <p>Terms of Service | Privacy Policy | Cookie Policy</p>
      </div>
    </div>
  );
};

export default Footer;
