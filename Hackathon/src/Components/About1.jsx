import React from "react";
import about from "../assets/about.jpg";
import user from "../assets/user.webp";
const About1 = () => {
  return (
    <div className="bg-gray-100 py-12 mt-0">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
          <p className="text-lg text-gray-600 mt-2">
            Learn more about our mission and vision
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-around">
          <div className="mb-8 md:w-1/2 md:mb-0">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700">
              Our mission is to provide exceptional real estate services and
              create lasting value for our clients. We are committed to
              delivering personalized solutions and exceeding expectations with
              professionalism and integrity.
            </p>
          </div>

          <div className="mb-8 md:w-1/2">
            <img
              src={about}
              alt="Our Mission"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={user}
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">abc</h3>
              <p className="text-gray-600">backend</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={user}
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">pqr</h3>
              <p className="text-gray-600">frontEnd</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={user}
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">mnc</h3>
              <p className="text-gray-600">Backend</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About1;
