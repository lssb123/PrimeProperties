import React from "react";
import about from "../../assets/about.jpg";

const About = () => {
  return (
    <div className="bg-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-lg text-gray-600">
            Discover our mission and the values that drive us.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center bg-white p-6 rounded-lg shadow-lg">
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to provide exceptional real estate services and
              create lasting value for our clients. We are committed to
              delivering personalized solutions and exceeding expectations with
              professionalism and integrity.
              <br />
              <br />
              We aim to revolutionize the real estate experience with innovative
              technologies and a deep understanding of the market. Whether you
              are buying, selling, or renting, our team is here to guide you
              every step of the way and make your journey as smooth as possible.
            </p>
          </div>

          <div className="md:w-1/2">
            <img
              src={about}
              alt="Our Mission"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
