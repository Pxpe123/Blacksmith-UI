<<<<<<< HEAD
import React, { useState } from "react";
import Items from "./Items.json"; // Ensure path is correct

import "./imports.css";
import "./Layout.css";

import LeftSideMenu from "./Modules/LeftSideMenu/LeftSideMenu";
import MiddleMenu from "./Modules/MiddleMenu/MiddleMenu";
import RightSideMenu from "./Modules/RightSideMenu/RightSideMenu";
import ControlShowcase from "./Modules/ControlShowcase/ControlShowcase";
import TopBarMenu from "./Modules/TopBarMenu/TopBarMenu";

const Layout = () => {
  const [selectedType, setSelectedType] = useState("Armour");
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="main">
      <TopBarMenu
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      <LeftSideMenu
        selectedType={selectedType}
        setSelectedItem={setSelectedItem}
      />
      <MiddleMenu selectedItem={selectedItem} />
      <RightSideMenu selectedItem={selectedItem} />
      <ControlShowcase />
    </div>
=======
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import useDocumentTitle from "./useDocumentTitle";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import NotFound from "./Modules/404/404";
import HomeModule from "./Modules/Home/Home";
import ContactUs from "./Modules/ContactUs/ContactUs";
import AboutUs from "./Modules/AboutUs/AboutUs";
import Signup from "./Modules/Login_Signup/Signup/Signup";
import Login from "./Modules/Login_Signup/Login/Login";
import "./vars.css";
import "./imports.css";
import "./styles.css";

const Layout = () => {
  setupBodyClasses();

  return (
    <Router>
      <div className="w-screen h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomeWithDocumentTitle />} />
          <Route path="/Home" element={<Navigate to="/" />} />
          <Route
            path="/AboutUs"
            element={
              <AnimatePresenceRoute
                component={<AboutUsWithDocumentTitle />}
                excludeHeader
              />
            }
          />
          <Route
            path="/contact"
            element={
              <AnimatePresenceRoute
                component={<ContactUsWithDocumentTitle />}
                excludeHeader
              />
            }
          />
          <Route
            path="/signup"
            element={
              <AnimatePresenceRoute
                component={<SignupWithDocumentTitle />}
                excludeHeader
              />
            }
          />
          <Route
            path="/login"
            element={
              <AnimatePresenceRoute
                component={<LoginWithDocumentTitle />}
                excludeHeader
              />
            }
          />
          <Route
            path="/404"
            element={
              <AnimatePresenceRoute
                component={<NotFoundWithDocumentTitle />}
                excludeHeader
              />
            }
          />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
>>>>>>> fdeb07d5818d5fe2b54202ca4861efdebe13c99c
  );
};

const AnimatePresenceRoute = ({ component }) => {
  const location = useLocation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      key={location.pathname}
    >
      <AnimatePresence>{component}</AnimatePresence>
    </motion.div>
  );
};

const HomeWithDocumentTitle = () => {
  useDocumentTitle("TPM - Home");
  return <HomeModule />;
};

const SignupWithDocumentTitle = () => {
  useDocumentTitle("TPM - Signup");
  return <Signup />;
};

const LoginWithDocumentTitle = () => {
  useDocumentTitle("TPM - Login");
  return <Login />;
};

const ContactUsWithDocumentTitle = () => {
  useDocumentTitle("TPM - Contact Us");
  return <ContactUs />;
};

const AboutUsWithDocumentTitle = () => {
  useDocumentTitle("TPM - About Us");
  return <AboutUs />;
};

const NotFoundWithDocumentTitle = () => {
  useDocumentTitle("TPM - Not Found");
  return <NotFound />;
};

let accents = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "orange",
  "cyan",
  "pink",
];

let themes = ["light", "dark"];

const setupBodyClasses = () => {
  let theme = localStorage.getItem("theme");
  let accent = localStorage.getItem("accent");

  if (!theme || !themes.includes(theme)) {
    localStorage.setItem("theme", "dark");
    theme = "dark";
  }

  if (!accent || !accents.includes(accent)) {
    localStorage.setItem("accent", "red");
    accent = "red";
  }

  document.body.classList.add(`${theme}-mode`, `accent-${accent}`);
};

export default Layout;
