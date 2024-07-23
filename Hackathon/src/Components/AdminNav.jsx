import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Element, Link as ScrollLink } from "react-scroll";
import logo from "../assets/logo.png";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Images from "./ImageGallery";
import Login from "./Signin/Signin";
import Signup from "./Signup/Signup";

const AdminNav = () => {
  return (
    <div className="relative">
      <header className="bg-gray-900 text-white p-4 flex items-center justify-between ">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Prime Properties Logo"
            style={{ height: 40, marginRight: 16 }}
          />
          <h1 className="text-xl font-bold">Prime Properties</h1>
        </div>
        <nav className="flex items-center space-x-4">
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <button className="text-white">Houses</button>
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <button className="text-white">Lands</button>
          </ScrollLink>
          <button className="text-white">
            Apartments
          </button>
          <button className="text-white">
            Logout
          </button>
        </nav>
      </header>
      </div>
  )
}

export default AdminNav