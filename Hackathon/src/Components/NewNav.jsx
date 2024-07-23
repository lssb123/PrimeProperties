import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Cookies from "js-cookies";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Element, Link as ScrollLink } from "react-scroll";
import logo from "../assets/logo.png";
import About1 from "./About1";
import Body from "./body";
import Contact1 from "./Contact1";
import Form from "./Form"; // Corrected import path

const NewNav = () => {
  const [showModal, setShowModal] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [profileData, setProfileData] = useState({});
  const [showProfile, setShowProfile] = useState(false); // State for profile display
  const [name,setName]=useState('')
  const t = Cookies.getItem("token");
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setShowModal(true);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleLogout = () => {
    Cookies.removeItem("token");
    navigate("/");
  };
  useEffect(()=>{    
    const email = localStorage.getItem("email");

    axios({
      url: `http://172.17.15.183:3001/protected/profile/${email}`,
      method: "get",
      headers: {
        Authorization: t,
      },
    }).then((res) => {
      const data2 = {
        Fname: res.data.post[0].Fname,
        email: res.data.post[0].email,
        phoneNo: res.data.post[0].Phno,
      };
       setName(res.data.post[0].Fname)
      setProfileData(data2);
       // Show profile info
    });
  },[])
  const handleProfile = () => {
    setShowProfile(true); 

    // const email = localStorage.getItem("email");
    // axios({
    //   url: `http://172.17.15.183:3001/protected/profile/${email}`,
    //   method: "get",
    //   headers: {
    //     Authorization: t,
    //   },
    // }).then((res) => {
    //   const data2 = {
    //     Fname: res.data.post[0].Fname,
    //     email: res.data.post[0].email,
    //     phoneNo: res.data.post[0].Phno,
    //   };
    //    setName(res.data.post[0].Fname)
    //   setProfileData(data2);
    //   setShowProfile(true); // Show profile info
    // });
  };

  const closeProfile = () => {
    setShowProfile(false); // Hide profile info
  };

  return (
    <div className="relative">
      <header className="bg-gray-900 text-white p-4 flex items-center justify-between">
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
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <button className="text-white"> Home </button>
          </ScrollLink>
          <ScrollLink
            to="about1"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <button className="text-white"> About </button>
          </ScrollLink>
          <ScrollLink
            to="contact1"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <button className="text-white"> Contact </button>
          </ScrollLink>

          <button className="text-white" onClick={handleLoginClick}>
            Add Property
          </button>
          <div>Welcome {name}</div>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-gray-300 focus:outline-none"
            >
              <FontAwesomeIcon icon={faUserCircle} className="text-2xl" />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
                <a
                  href="#"
                  onClick={handleProfile}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={handleLogout}
                >
                  Logout
                </a>
              </div>
            )}
          </div>
        </nav>
      </header>

      <div>
        <Element name="home" className="my-8">
          <Body />
        </Element>

        <Element name="about1" className="my-8">
          <About1 />
        </Element>

        <Element name="contact1" className="my-8">
          <Contact1 />
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
            <div className="text-center">
              <Form onFormClick={handleLoginClick} />
              {/* Add form or other content */}
            </div>
          </div>
        </div>
      )}

      {/* Profile Display */}
      {showProfile && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-2xl"
              onClick={closeProfile}
            >
              &times;
            </button>
            <div className="text-center">
              <h2 className="text-xl font-bold mb-4">Profile Information</h2>
              <p>Name: {profileData.Fname}</p>
              <p>Email: {profileData.email}</p>
              <p>Phone Number: {profileData.phoneNo}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewNav;
