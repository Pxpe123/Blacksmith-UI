import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiSettings, FiUser, FiLogOut } from "react-icons/fi";

import logo from "./logo.png";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const [userInfo, setUserInfo] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("userInfo");
    if (storedUserInfo) {
      const userInfoObject = JSON.parse(storedUserInfo);
      setUserInfo(userInfoObject);
    }
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    setUserInfo(null); // Clear user info
    setShowDropdown(false); // Close dropdown
  };

  const hasAccount = localStorage.getItem("hasAccount");

  return (
    <div className="header-container">
      <div className="header-logo-container">
        <img src={logo} alt="Logo" className="header-logo" />
      </div>
      <div className="header-buttons-container">
        <Link
          to="/"
          className={`header-button ${
            location.pathname === "/" ? "active" : ""
          }`}
        >
          Home
        </Link>
        <Link
          to="/servers"
          className={`header-button ${
            location.pathname === "/servers" ? "active" : ""
          }`}
        >
          Servers
        </Link>
        <Link
          to="/downloads"
          className={`header-button ${
            location.pathname === "/downloads" ? "active" : ""
          }`}
        >
          Downloads
        </Link>
      </div>
      <div className="header-tpm-container">
        <h1 className="header-tpm">TPM</h1>
      </div>
      <div className="header-buttons-container">
        <Link
          to="/contact"
          className={`header-button ${
            location.pathname === "/contact" ? "active" : ""
          }`}
        >
          Contact Us
        </Link>
        <Link
          to="/patreon"
          className={`header-button ${
            location.pathname === "/patreon" ? "active" : ""
          }`}
        >
          Support Us
        </Link>
      </div>
      <div className="header-links-container">
        {userInfo ? (
          <div
            className="header-link"
            title="My Account"
            onClick={toggleDropdown}
          >
            <img src={userInfo.pfp} alt="Profile" className="header-pfp" />
            <span className="header-link-text">{userInfo.name}</span>
          </div>
        ) : hasAccount ? (
          <Link to="/login" className="header-link" title="Login">
            <FiUser size={20} />
            <span className="header-link-text">Login</span>
          </Link>
        ) : (
          <Link to="/signup" className="header-link" title="Sign up">
            <FiUser size={20} />
            <span className="header-link-text">Sign up</span>
          </Link>
        )}
      </div>
      <div
        className={`dropdown-menu ${showDropdown ? "fadeIn" : "fadeOut"} `}
        id="dropdown"
      >
        {userInfo && (
          <Link to="/account" className="dropdown-item">
            <FiUser size={20} />
            Profile
          </Link>
        )}
        {userInfo && (
          <Link to="/settings" className="dropdown-item">
            <FiSettings size={20} />
            Settings
          </Link>
        )}
        {userInfo && (
          <div className="dropdown-item" onClick={handleLogout}>
            <FiLogOut size={20} />
            Log out
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
