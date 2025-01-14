import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import serverData from "./../../../app.json"

import "./../style.css";


const serverIp = serverData.ip;

const LoginPage = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);


  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const userInfo = localStorage.getItem("userInfo");
  if (userInfo) {
    navigate("/");
  }

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    try {
      const response = await fetch(`${serverIp}/login`, {
        method: 'GET', // or 'GET' depending on your server's route
        headers: {
            'Content-Type': 'application/json',
            'email': formData.email, 
            'password': formData.password 
        },
    });
            if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const dataFromServer = await response.json();

        console.log(dataFromServer);

            const userInfo = {
                name: dataFromServer.name,
                email: formData.email,
                pfp: dataFromServer.pfp,
            };

            localStorage.setItem("userInfo", JSON.stringify(userInfo));
            localStorage.setItem("hasAccount", true);
    } catch (error) {
        console.error("Error fetching data from server:", error);
    }
};

  const goToSignupPage = () => {
    navigate("/signup");
    
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <h2 className="login-container-title">Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email" className="login-label">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="login-input"
            required
          />
          </div>
          <div className="form-group">
        <label htmlFor="password" className="login-label">
          Password:
        </label>
        <input
          type={showPassword ? 'text' : 'password'} // Toggle visibility based on showPassword state
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          className="login-input"
          required
        />
        <button type="button" onClick={togglePasswordVisibility}>
          {showPassword ? 'Hide' : 'Show'} Password
        </button>
      </div>

        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <button onClick={goToSignupPage} className="login-signup-button">
        Sign Up?
      </button>
    </div>
  );
};

export default LoginPage;
