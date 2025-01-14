import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import serverData from "./../../../app.json"

import "./../style.css";


const serverIp = serverData.ip;

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  // Check if user is logged in
  const userInfo = localStorage.getItem("userInfo");
  if (userInfo) {
    navigate("/"); // Redirect to home page if logged in
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    try {
      const response = await fetch(`${serverIp}/signup`, {
        method: 'GET', // or 'GET' depending on your server's route
        headers: {
            'Content-Type': 'application/json',
            'email': formData.email, 
            'password': formData.password,
            'username': formData.username,
            'updates':  true,
          },
        });
            if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
          const dataFromServer = await response.json();

          console.log(dataFromServer)

            // localStorage.setItem("userInfo", JSON.stringify(userInfo));
            // localStorage.setItem("hasAccount", true);
    } catch (error) {
        console.error("Error fetching data from server:", error);
    }
};
  const goToLoginPage = () => {
    navigate("/login");
  };

  return (
    <div className="signup-container">
      <h2 className="signup-container-title">Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label htmlFor="username" className="signup-label">
            Username:
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
            className="signup-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="signup-label">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="signup-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="signup-label">
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="signup-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword" className="signup-label">
            Confirm Password:
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="signup-input"
            required
          />
        </div>
        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>
      <button onClick={goToLoginPage} className="login-signup-button">
        Login?
      </button>
    </div>
  );
};

export default SignupPage;
