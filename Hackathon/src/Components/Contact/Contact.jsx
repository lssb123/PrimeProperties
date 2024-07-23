import axios from 'axios';
import { useState } from "react";
import contact from "../../assets/contact.jpeg";
const Contact = () => {

const [name,setName]=useState('')
const [mail,setMail]=useState('')
const [query,setQuery]=useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData={
          "name":name,
        "email":mail,
        "description":query
    }
    console.log(formData)
     axios({
      url:"http://172.16.102.40:3001/User/ContactUs",
      method:"post",
      data:formData
    }).then(res=>{console.log(res) 
      alert("Form submitted!");

    }).catch(err=>console.log(err))
      
  };

  return (
    <div className="bg-gray-300 py-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-800">We’d love to hear from you!</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center bg-white p-8 rounded-lg shadow-lg">
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 border border-gray-300 p-6 rounded-md shadow-sm"
            >
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  name="name"
                  required
                  className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:black-500"
                  onChange={(e)=>{
                    setName(e.target.value)
                    console.log(name)
                  }}
                 />
              </div>

              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:black-500"
                  onChange={e=>setMail(e.target.value)}
               />
              </div>

              <div className="mb-4">
                <textarea
                  id="feedback"
                  name="feedback"
                  rows="4"
                  placeholder="FeedBack"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:black500"
                  onChange={e=>setQuery(e.target.value)}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-gray-700 text-white font-semibold rounded-md shadow-md hover:bg-gray-500 hover:text-black focus:outline-none focus:ring-2 focus:black-500"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="md:w-1/2">
            <img
              src={contact}
              alt="Contact Us"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
