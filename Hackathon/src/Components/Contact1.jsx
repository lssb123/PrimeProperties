import axios from "axios";
import cookies from 'js-cookies';
import { useState } from "react";
import contactUs from "../assets/contactUs.avif";
export default function Contact1() {
  const [name,setName]=useState('')
  const [mail,setMail]=useState('')
  const [query,setQuery]=useState('')
  
   const handleSubmit=(event)=>{
            event.preventDefault();
            const formData={
              "name":name,
            "email":mail,
            "description":query
        } 
        console.log(formData)
        const t=cookies.getItem('token')
            axios({
              url:"http://localhost:3001/protected/Contact",
              method:"post",
              data:formData,
              headers:{
                "authorization":t
              }
            }).then(res=>{
              console.log(res)
              alert(res.data.message)
            }).catch(err=>{
              console.log(err)
            })
   }


  return (
    <div className="flex justify-center items-center min-h-10 bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg flex max-w-4xl">
        <div className="w-[60%] relative">
          <img
            src={contactUs}
            alt="Image Not Found"
            className="rounded-l-lg w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="w-[60%] p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Contact Us
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter name"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={e=>setName(e.target.value)}
             />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter the email"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={e=>setMail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                placeholder="Description"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                 onChange={e=>setQuery(e.target.value)}
              ></textarea>
            </div>
            <div>
              <input
                type="submit"
                value="Submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
