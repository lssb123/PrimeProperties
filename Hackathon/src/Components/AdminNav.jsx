import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Element, Link as ScrollLink } from "react-scroll";
import logo from "../assets/logo.png";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Images from "./ImageGallery";
import Login from "./Signin/Signin";
import Signup from "./Signup/Signup";
import Cookies from 'js-cookies'
import axios from "axios";
import { toast } from "react-toastify";
const AdminNav = () => {
  const [house,setHouse]=useState(false)
  const [land,setLand]=useState(false)
  const [apart,setApart]=useState(false)
  const [pdata,setPdata]=useState([])
  const navigate=useNavigate()
  const handleHouses=()=>{
       setHouse(true)
       fectchData("house")
  }

  const handleLands=()=>{
    setLand(true)
    fectchData("land")
  }
  const handleAparts=()=>{
    setApart(true)
    fectchData("apartment")
  }
  const handleClose=()=>{
    setHouse(false) 
    setLand(false)
    setApart(false)
  }
  const fectchData=(type)=>{
    axios({
      url:`http://localhost:3001/protected/propertyType/${type}`,
      method:"get",
      headers:{
       authorization:Cookies.getItem('token')
      }
    }).then(res=>{
      setPdata(res.data)
    })
  }
   
  const handleLogout = () => {
    Cookies.removeItem("token");
    localStorage.removeItem('email')
    navigate("/");
  };
  const handleApprove=(id,type)=>{
         
    axios({
      url:`http://localhost:3001/User/Approval/${id}`,
      post:"get",
    }).then(res=>{
      if(res.data ==='Property Approved')
      {
      
        toast.success("Property approved Successfully")
        fectchData(type)
      }
      else{
        toast.success("Property not approved")
      }
    })
  }
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
            <button className="text-white" onClick={handleHouses}>Houses</button>
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <button className="text-white" onClick={handleLands}>Lands</button>
          </ScrollLink>
          <button className="text-white" onClick={handleAparts}>
            Apartments
          </button>
          <button className="text-white" onClick={handleLogout}>
            Logout
          </button>
        </nav>
      </header>
       
        
       {
        house && (<div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50 ">
          <div className="bg-white p-6 rounded-lg shadow-lg relative max-h-[80vh] overflow-y-auto">
            <button
              className="absolute top-2 right-2"
              onClick={handleClose}
            > 
              &times;
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {
            pdata.length!=0?(
             pdata.map(item=>( <div
              key={item.id}
              className="bg-gray-500 rounded-lg shadow-md overflow-hidden "
            >
              <img
                src={item.Siteimage || 'default-image.jpg'} // Fallback image if Siteimage is missing
                alt={`Image of ${item.PropertyType}`} // More descriptive alt text
                className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-105"
              />
              <div className="p-4">
                <p className="text-lg font-bold text-gray-800 text-white">
                  Property Type: {item.PropertyType || 'N/A'}
                </p>
                <p className="text-gray-600 text-white">
                  Property City: {item.city || 'N/A'}
                </p>
                <p className="text-gray-600 text-white">
                  Property Price: {item.ExpectedPrice || 'N/A'}
                </p>
  
                <button className='bg-red-200 rounded p-2 text-blue-900 ml-16 ' onClick={()=>handleApprove(item.PropertyId,item.PropertyType)}>Approve</button>
              </div>
            </div>))):(<p className="text-blue-900">No Houses for approval</p>)
            }
            </div>
          </div>
        </div>)
        
       }

       { 
        land && (<div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative max-h-[80vh] overflow-y-auto">
            <button
              className="absolute top-2 right-2"
              onClick={handleClose}
            > 
              &times;
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            { 
            pdata.length>0?(
             pdata.map(item=>( <div
              key={item.id}
              className="bg-gray-500 rounded-lg shadow-md overflow-hidden "
            >
              <img
                src={item.Siteimage || 'default-image.jpg'} // Fallback image if Siteimage is missing
                alt={`Image of ${item.PropertyType}`} // More descriptive alt text
                className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-105"
              />
              <div className="p-4">
                <p className="text-lg font-bold text-gray-800 text-white">
                  Property Type: {item.PropertyType || 'N/A'}
                </p>
                <p className="text-gray-600 text-white">
                  Property City: {item.city || 'N/A'}
                </p>
                <p className="text-gray-600 text-white">
                  Property Price: {item.ExpectedPrice || 'N/A'}
                </p>
  
                <button className='bg-red-200 rounded p-2 text-blue-900 ml-16 ' onClick={()=>handleApprove(item.PropertyId,item.PropertyType)}>Approve</button>
              </div>
            </div>))):(<p className="text-blue-900">No Lands for approval</p>)
            }
            </div>
          </div>
        </div>)
       }

       

     { 
        apart && (<div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative max-h-[80vh] overflow-y-auto">
            <button
              className="absolute top-2 right-2"
              onClick={handleClose}
            > 
              &times;
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {
              pdata.length>0?(
             pdata.map(item=>( <div
              key={item.id}
              className="bg-gray-500 rounded-lg shadow-md overflow-hidden "
            >
              <img
                src={item.Siteimage || 'default-image.jpg'} // Fallback image if Siteimage is missing
                alt={`Image of ${item.PropertyType}`} // More descriptive alt text
                className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-105"
              />
              <div className="p-4">
                <p className="text-lg font-bold text-gray-800 text-white">
                  Property Type: {item.PropertyType || 'N/A'}
                </p>
                <p className="text-gray-600 text-white">
                  Property City: {item.city || 'N/A'}
                </p>
                <p className="text-gray-600 text-white">
                  Property Price: {item.ExpectedPrice || 'N/A'}
                </p>
  
                <button className='bg-red-200 rounded p-2 text-blue-900 ml-16 ' onClick={()=>handleApprove(item.PropertyId,item.PropertyType)}>approve</button>
              </div>
            </div>))):(<p className="text-blue-900">No Apartments for approval</p>)
            }
            </div>
          </div>
        </div>)
       }

</div>
     
       

  )
}

export default AdminNav
 