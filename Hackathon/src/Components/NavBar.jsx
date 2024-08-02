import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Element, Link as ScrollLink } from "react-scroll";
import logo from "../assets/logo.png";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Images from "./ImageGallery";
import Login from "./Signin/Signin";
import Signup from "./Signup/Signup";
 
 
const Home = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [isSignup, setIsSignup] = useState(true);
  
  const handleLoginClick = () => {
    setShowModal(true);
    setIsSignup(false);
  };

  const handleSignupClick = () => {
    setShowModal(true);
    setIsSignup(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  // useEffect(()=>{
  //    if(localStorage.getItem('email')!=null)
  //    { 
  //     navigate("/newnav");
  //    }
  // },[])
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
            <button className="text-white">About</button>
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <button className="text-white">Contact</button>
          </ScrollLink>
          <button className="text-white" onClick={handleLoginClick}>
            Login
          </button>
        </nav>
      </header>

      <div className={`transition-opacity duration-500 t`}>
        <div className="p-2">
          <Images />
        </div>

        <Element name="about">
          <About />
        </Element>

        <Element name="contact" className="my-8">
          <Contact />
        </Element>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative">
            <button
              className="absolute top-2 right-2"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            {isSignup ? (
              <Signup onSigninClick={handleLoginClick} />
            ) : (
              <Login onSignupClick={handleSignupClick} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
