import React from "react";
import contact from "../assets/contact.jpeg";
export default function Contact1() {
  return (
    <div className="flex justify-center items-center min-h-10 bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg flex max-w-4xl">
        <div className="w-[60%] relative">
          <img
            src={contact}
            alt="Image Not Found"
            className="rounded-l-lg w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="w-[60%] p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Contact Us
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter username"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                placeholder="Description"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
